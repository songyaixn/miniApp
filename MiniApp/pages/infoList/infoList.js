//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    lists:[]
  },
  onLoad: function () {
    //创建一个测试用数组
    var mycars = new Array()
    mycars[0] = "今天心情不错。"
    mycars[1] = "我找不到我的路。"
    mycars[2] = "迷茫期应该怎么度过，失去了梦想和咸鱼有什么区别？谁能给我一点建议。"
    mycars[3] = "我在等你，就好像在飞机场等待一艘船。"
    var that = this;
    that.setData({
      lists: mycars
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
