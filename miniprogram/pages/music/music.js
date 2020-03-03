// miniprogram/pages/music/music.js
let appDatas = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    music_index:null,
    musicObj:{},
    isMusicPlay:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index);
    console.log(appDatas.data);
    this.setData({
      musicObj: appDatas.data.musicArr[options.index]
    });
    console.log(this.data);
    wx.setNavigationBarTitle({
      title: this.data.musicObj.title
    })
  },
  handlemusic(event){
    console.log(event)
    const music_index = event.currentTarget.dataset.index;
    if (this.data.isMusicPlay) {
      const dataUrl = this.data.musicObj.list[music_index].music_url;
      const title = this.data.musicObj.list[music_index].music_name;
      console.log(dataUrl)
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }
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