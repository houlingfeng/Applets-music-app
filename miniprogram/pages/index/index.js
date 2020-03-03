//index.js
//const app = getApp()

Page({
  handle_list(){
    //点击跳转list
    wx.navigateTo({
      url: '/pages/list/list',
      success:(data) => {
        console.log(data)
      },
      fail: (data) => {
        console.log(data)
      }
    })
  },
    
})
