# what is

*react native* 是一个用于构建移动端应用的框架

react native 提供了一系列组件, 例如`View` `Input` 而不是像web开发中的标签
react native 提供了一个styleSheet封装函数, 样式需要在封装函数中进行声明, 然后赋值给组件

## wsl2

在wsl2中使用expo开发react native有三种方式

1. 要使用 `npm start -- --tunnel` 来启动, expo会安装ngrok
2. 使用 [WSLHostPathcer](https://github.com/CzBiX/WSLHostPatcher)
3. 修改防火墙入站出站规则, 然后使用进行配置
> 这种方式存在问题, expo手动输入地址不允许带端口, 不带端口又访问不了, 需要手动生成一个二维码扫码连接
