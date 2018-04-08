// pages/class/class.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.setNavigationBarTitle({
          title: options.name
      });
      wx.request({
          url: app.globalData.url + '/bookList',
          data: {
              type: options.type
          },
          success: function (res) {
              that.setData({
                  bookList: res.data.bookList
              })
          },
          error: function (err) {
              console.log(err)
          }
      })
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
  
  },
  jumpBookdtl: function (e) {
      wx.navigateTo({
          url: '../detail/detail?name=' + e.currentTarget.dataset.name + '&title=' + e.currentTarget.dataset.title
      })
  }
})