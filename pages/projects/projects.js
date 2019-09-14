// pages/projects/projects.js
const app = getApp();
import Notify from '../../ui/vantui/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: 'https://oss.gxuann.cn/wxapp-gxuann/project-cover.png'
  },
  getProjects(){
    let reqUrl = app.globalData.reqUrl;
    let ghostKey = app.globalData.ghostKey;
    wx.request({
      url: reqUrl + 'pages/5d6889f8f402af74f5bcc599/' + ghostKey,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res)=> {
        let rs = res.data.pages[0];
        let data = app.towxml.toJson(rs.html, 'html');
        this.setData({
          article: data
        })
        console.log(rs)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProjects();
    Notify({
      text: '完整内容，请访问 blog.gxuann.cn/projects',
      duration: 10000,
      selector: '#custom-selector',
      backgroundColor: '#de3f33'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})