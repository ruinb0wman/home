# wsl2

## 服务转发

```sh
netsh interface portproxy show all
```

```sh
netsh interface portproxy delete v4tov4 listenport=主机端口 listenaddress=0.0.0.0
```

```sh
netsh interface portproxy add v4tov4 listenport=主机端口 listenaddress=0.0.0.0 connectport=WSL端口 connectaddress=WSL地址
```
