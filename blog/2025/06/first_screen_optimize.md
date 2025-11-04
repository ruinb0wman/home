# 首屏加载优化

加载慢的原因
* 网络延迟
* 资源太大

网络延迟处理
* cdn
* preload
* prerender

资源太大处理
* 分包chunk
* 懒加载
* 公共资源 vender
* 缓存
  * 强缓存(Expire, Cache-Control)
  * 协商缓存(Last-Modified, If-Modified-Since, Etag, If-None-Match)
  * 策略缓存(service-worker)
* 服务端渲染
* 局部服务端渲染(落地页, 广告页)
* pwa (冷门)

### 衡量指标

FP (First Paint)
FCP (First Contentful Paint)
FMP (First Meaningful Paint)
LCP (Largest Contentful Paint)

具体优化细节
* 图片优化
* 按需加载
  * react suspense + react.lazy
* 延迟加载: 滚动加载, 可视区内容渲染
* tree shaking: 通过代码编写的方式去约定, 需要esm
* 精简第三方库
* 缓存
* 字体压缩
* SSR(server side rendering), SSG(server side generate)


延迟加载
`<script defer>`
`<script async>`


预渲染

vite-bundle-analyzer
