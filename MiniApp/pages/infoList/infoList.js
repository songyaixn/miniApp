//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
    
    })
  },
  toMenuOneInfo:function(){
    console.info("点击了这个按钮");
    wx.navigateTo({
      url: "../menuOneInfo/menuOneInfo"
      // success: function(res) {},
      // fail: function(res) {},
      // complete: function(res) {},
    })
  }
})
