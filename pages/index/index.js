//index.js
//获取应用实例
const app = getApp()
import Toast from '../../ui/vantui/toast/toast';
Page({
  data: {
    hidden: 'visibility: hidden',
    posts: null,
  },
  onLoad: function(options) {
    this.getPostList();
  },
  getPostList() {
    let posts = this.data.posts;
    let hidden = this.data.hidden;
    Toast.loading({
      forbidClick: true,
      message: '加载中...'
    });
    app.postListRequest().then(res => {
      Toast.clear;
      this.setData({
        posts: res.data,
        hidden: ''
      })
    })
  }
})