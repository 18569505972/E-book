var app = getApp();
Page({
    data: {
        nickname: "",
        usericon: "",
        all:false,
        delectall:[]
    },
    onLoad: function () {
        var that = this;
        if (!app.globalData.userInfo) {
            wx.showModal({
                title: '提示',
                content: '您点击了拒绝授权，将无法正常使用小程序的部分功能体验。请10分钟后再次点击授权，或者删除小程序重新进入',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
            return;
        }
        that.setData({
            nickname: app.globalData.userInfo.nickName,
            usericon: app.globalData.userInfo.avatarUrl
        })
    },
    jumpindex:function(){
        wx.switchTab({
            url: '../index/index'
        })
    },
    allChecked:function(e){
        console.log(e.detail)
        if(e.detail.value[0]=='all'){
            this.setData({
                all:true,
            })
        }
    },
    delectbook:function(e){
       console.log(e.detail.value);
            
    }
})