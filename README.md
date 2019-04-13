# E-book
微信小程序电子书阅读网站</br>
## 文件结构
### 首页精选（pages/index） 
### 书库（pages/stack）
### 书架（pages/bookcase）
### 书籍分类列表（pages/class）
### 书籍详情（pages/detail）
### 书籍章节内容（pages/section）
## 页面路由
### 首页路由
推荐书籍列表>书籍详情页>书籍内容页（按章阅读）</br>
最近更新书籍列表>书籍详情页>书籍内容页（按章阅读）</br>
### 书库路由
书库主页>点击进入分类书籍列表页>书籍详情页>书籍内容页（按章阅读）</br>
### 书架路由
用户信息</br>
收藏书籍管理>书籍详情页>书籍内容页（按章阅读）</br>
## 接口
### 微信接口
<b>'wx.login':</b> 登陆</br>
<b>'wx.authorize':</b> 授权</br>
<b>'wx.getUserInfo':</b> 获取用户信息</br>
<b>'wx.getSetting':</b> 查询用户是否已授权</br>
### 私有接口
<b>'/latest':</b> 最近更新书籍</br>
<b>'/recommend':</b> 推荐书籍</br>
<b>'/bookList':</b> 某类书籍列表</br>
<b>'/detail':</b> 书籍详情信息</br>
<b>'/saveCollection':</b> 收藏书籍</br>
<b>'/section':</b> 书籍章节内容</br>
<b>'/class':</b> 书籍类别</br>
## 其他
书籍内容Unicode转码，去乱码符号</br>
全角符号转半角：ToCDB
