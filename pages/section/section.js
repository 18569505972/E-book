//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        content: "",
    },
    onLoad: function (options) {
        var that = this;
        wx.setNavigationBarTitle({
            title: options.name
        });
        var title = options.title.substring(0, options.title.lastIndexOf('/'));
        title = title.substring(title.lastIndexOf('/') + 1);
        var section = app.ToCDB(options.section).match(/[a-zA-Z0-9\u4e00-\u9fa5]+/g).join('');
        wx.request({
            url: app.globalData.url + '/section',
            data: {
                title: title,
                section: section
            },
            success: function (res) {
                var content = unescape(res.data.replace(/&#x/g, '%u').replace(/;/g, '')).replace(/\%uA0/g,"\n");
                that.setData({
                    content: content
                })
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
})
