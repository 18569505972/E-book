//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                console.log(res)
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        this.authorize();

    },
    globalData: {
        userInfo: null,
        url: 'http://127.0.0.1:3001'
    },
    // 授权获取用户信息
    authorize: function () {
        wx.getSetting({
            success: res => {
                if (!res.authSetting['scope.userInfo']) {
                    // 未授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: dt => {
                            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                            this.getUserinfo()
                        },
                        fail: err => {
                            console.log("err" + JSON.stringify(err))
                        }
                    })
                } else {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    this.getUserinfo()
                }
            }
        })
    },
    //全角转半角
    ToCDB: function (str) {
        var tmp = "";
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
                tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
            } else {
                tmp += String.fromCharCode(str.charCodeAt(i));
            }
        }
        return tmp
    },
    getUserinfo: function () {
        wx.getUserInfo({
            success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo
                console.log(res.userInfo)
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                }
            }
        })
    }
})