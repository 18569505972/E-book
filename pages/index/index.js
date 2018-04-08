//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        latestArr: [],
        recommendArr:[],
    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: app.globalData.url + '/latest',
            data: {
            },
            success: function (res) {
                var latest = [];
                for (let i = 0; i < res.data.length; i = i + 3) {
                    latest.push(res.data.slice(i, i + 3))
                }
                that.setData({
                    latestArr: latest
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
        wx.request({
            url: app.globalData.url + '/recommend',
            data: {
            },
            success: function (res) {
                var recommend = [];
                for (let i = 0; i < res.data.length; i = i + 3) {
                    recommend.push(res.data.slice(i, i + 3))
                }
                that.setData({
                    recommendArr: recommend
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
    jumpBookdtl:function(e){
        var title = e.currentTarget.dataset.title.substr(1);
        wx.navigateTo({
            url: '../detail/detail?name=' + e.currentTarget.dataset.name + '&title=' + title
        })
    }
})
