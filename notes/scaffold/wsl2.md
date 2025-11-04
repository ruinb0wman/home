# wsl2

## 服务转发

查看全部配置
```sh
netsh interface portproxy show all
```

删除配置
```sh
netsh interface portproxy delete v4tov4 listenport=主机端口 listenaddress=0.0.0.0
```

添加配置
```sh
netsh interface portproxy add v4tov4 listenport=主机端口 listenaddress=0.0.0.0 connectport=WSL端口 connectaddress=WSL地址
```
