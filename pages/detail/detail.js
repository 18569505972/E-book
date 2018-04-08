//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        decription: "",
        auth: "",
        backImg: "",
        bookNm: "",
        sectionList: [],
        title: ""
    },
    onLoad: function (options) {
        var that = this;
        wx.setNavigationBarTitle({
            title: options.name
        });
        that.setData({
            title: options.title
        })
        wx.request({
            url: app.globalData.url + '/detail',
            data: {
                title: options.title
            },
            success: function (res) {
                console.log(res.data)
                that.setData({
                    backImg: res.data.imgUrl,
                    auth: res.data.auth,
                    bookNm: res.data.bookNm,
                    decription: res.data.decription,
                    sectionList: res.data.sectionList
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
    saveCollection: function () {
        var that = this;
        console.log(that.data.title)
        wx.request({
            url: app.globalData.url + '/saveCollection',
            data: {
                name: app.globalData.userInfo.nickName,
                title: that.data.title
            },
            success: function (res) {
                if (res.data.status == 1) {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'success',
                        duration: 2000
                    })
                } else {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            error: function (err) {
                wx.showToast({
                    title: "收藏失败",
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    }
})
