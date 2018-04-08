var app=getApp();
Page({
    data:{
        classList:[]
    },
    onLoad:function(options){
        var that=this;
        wx.request({
            url: app.globalData.url + '/class',
            data: {
            },
            success: function (res) {
                that.setData({
                    classList: res.data
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
    jumpClass:function(e){
        var type=e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../class/class?type=' + type + '&name=' + e.currentTarget.dataset.name
        })
    }
})