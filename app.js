//app.js
App({
  onLaunch: function() {
    this.postListRequest();
  },
  postListRequest() {
    var that = this;
    return new Promise((resolve, reject) => {
      let reqUrl = this.globalData.reqUrl;
      let ghostKey = this.globalData.ghostKey;

      wx.request({
        url: reqUrl + 'posts' + ghostKey,
        header: {
          'Content-Type': 'application/json'
        },
        success: res => {
          let resPosts = res.data;
          that.globalData.posts = resPosts;
          resolve(res);
        },
        fail: () => {
          reject('error')
        }
      })
    })
  },
  globalData: {
    reqUrl: "https://blog.gxuann.cn/ghost/api/v2/content/",
    ghostKey: "?key=f2caa52e237358a9f3faf46c5c",
    posts: null
  }
})