// pages/about/about.js
const app = getApp();
import Toast from '../../ui/vantui/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorInfo: {},
    elements: [{
        id: 1,
        name: 'Github',
        img: '../../images/github.png',
        link: 'https://github.com/guangxuan126',
      },
      {
        id: 1,
        name: 'Weibo',
        img: '../../images/weibo.png',
        link: 'https://weibo.com/guangxuan126',
      },
      {
        id: 1,
        name: 'Twitter',
        img: '../../images/twitter.png',
        link: 'https://twitter.com/guangxuan126',
      },
      {
        id: 2,
        name: 'Projects',
        img: '../../images/project.png',
        link: '../projects/projects',
      },
      {
        id: 5,
        img: '../../images/logo.png',
        style: 'height:100rpx;width: 100rpx;'
      },
      {
        id: 1,
        name: 'RSS',
        img: '../../images/rss.png',
        link: 'https://feedly.com/i/subscription/feed/http://blog.gxuann.cn/rss/',
        sta: 1
      },
      {
        id: 2,
        name: 'Landing Page',
        img: '../../images/web.png',
        link: '../landing/landing',
      },
      {
        id: 3,
        name: 'Share',
        img: '../../images/share.png',
      },
      {
        id: 9,
        name: 'More',
        img: '../../images/ellipsis.png',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAuthorInfo();
    this.getListCount();
  },
  getListCount() {
    app.postListRequest().then(res => {
      this.setData({
        'authorInfo.posts': res.data.posts.length
      });
    })
  },
  getAuthorInfo() {
    var that = this;
    let key = app.globalData.ghostKey;
    let reqUrl = app.globalData.reqUrl;
    let authorInfo = this.data.authorInfo;
    wx.request({
      url: reqUrl + '/authors/slug/gxuann/' + key,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        let author = res.data.authors[0]
        that.setData({
          'authorInfo.name': author.name,
          'authorInfo.avatar': author.profile_image
        })
      }
    })
  },
  clickFunc(event) {
    let id = event.currentTarget.id
    if (id == 1) {
      wx.setClipboardData({
        data: event.currentTarget.dataset.link,
      });
      wx.vibrateShort();
    }
    if (id == 9) {
      Toast('under development…');
    }
    if (id==2) {
      wx.navigateTo({
        url: event.currentTarget.dataset.link,
      })
    }
  }
})