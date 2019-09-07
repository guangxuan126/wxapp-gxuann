//index.js
//获取应用实例
const app = getApp()
import Toast from '../../ui/vantui/toast/toast';
Page({
  data: {
    posts: null,
    height: ''
  },
  onLoad: function(options) {
    this.getScrollHeight();
    this.getPostsList();
  },
  getPostsList() {
    let posts = this.data.posts;
    Toast.loading({
      forbidClick: true,
      message: '加载中...'
    });
    if (app.globalData.posts) {
      this.setData({
        posts: app.globalData.posts
      })
    } else {
      app.resPostsReadyCallback = res => {
        this.setData({
          posts: app.globalData.posts
        })
      }
    }
  },
  getScrollHeight() {
    var that = this;
    wx.getSystemInfo({
      success: res => {
        let cHeight = res.windowHeight;
        let cWidth = res.windowWidth;
        let ratio = 750 / cWidth;
        let height = cHeight * ratio - 330;
        that.setData({
          height: height
        })
      },
    })
  },
  setPostsList() {
    let posts = this.data.posts;
    if (!posts) {

    }
  }
})