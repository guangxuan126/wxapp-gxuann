//index.js
//获取应用实例
const app = getApp()
import Toast from '../../ui/vantui/toast/toast';
Page({
  data: {
    posts: [],
    height: '',
  },
  onLoad: function(options) {
    this.getScrollHeight();
    this.getPostsList();
  },
  getPostsList() {
    let posts = this.data.posts;
    let newPosts = this.data.newPosts;
    Toast.loading({
      forbidClick: true,
      message: '加载中...'
    });
    app.resPostsReadyCallback = res => {
      let resPosts = app.globalData;
      let posts = this.data.posts;
      this.setPosts(resPosts);
      Toast.clear	
      let nPosts =[]
      for (let i = 0; i < resPosts.posts.length; i++) {
        nPosts.push(resPosts.posts[i])
      }
      setTimeout(()=>{
        this.setData({ posts: nPosts })
      },3000)
      console.log(posts)
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
  setPosts(resPosts) {
    for (let i = 0; i < resPosts.posts.length; i++) {
      resPosts.posts[i].published_at = resPosts.posts[i].published_at.slice(0, 10)
    }
  }
})