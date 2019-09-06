//index.js
//获取应用实例
const app = getApp()
import Toast from '../../ui/vantui/toast/toast';
Page({
  data: {
    posts: null
  },
  onLoad: function (options) {
    this.getPostList();
  },
getPostList(){
  let posts = this.data.posts;
  Toast.loading({
    forbidClick: true,
    message: '加载中...'
  });
  app.postListRequest().then(res=>{
    this.setData({posts: res.data});
    Toast.clear;
  })
}
})
