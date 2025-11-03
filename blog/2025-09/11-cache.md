# 浏览器缓存

|缓存类型|控制方式|适用场景|
|-|-|-|
|强制缓存|HTTP 头|静态资源长期缓存|
|协商缓存|HTTP 头|资源频繁检查更新|
|Memory/Disk Cache|浏览器自动管理|页面资源快速复用|
|Service Worker|JavaScript|离线应用、自定义策略|
|localStorage|JavaScript|小数据、用户状态|
|IndexedDB|JavaScript|大数据、复杂离线应用|

## 协商缓存

服务器返回 ETag（资源唯一标识）或 Last-Modified（最后修改时间）。
再次请求时，浏览器带上 If-None-Match 或 If-Modified-Since。
服务器对比后决定返回 304 或 200 + 新内容。

## Service-Worker
