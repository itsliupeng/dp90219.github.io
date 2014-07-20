---
layout: post
title: Use Shadowsocks to Cross GFW
---

前几周时间，看到微信公共号pennyjob分享vpn给听众，自己当时也恰好买了一个vps，想自己也搭建一个用于翻墙的vpn，最简单的当属pptp协议了，在宿舍折腾了整整2天,没有成功，期间连接过一次，后来再也重复不了了。网上查了好久，都没有相应的答案，最后问penny，说是GFW近来也开始封杀pptp协议，当时暂且相信给自己找个台阶，就不折腾了，继续用goagent吧。

我觉得[这篇文章](https://help.ubuntu.com/community/PPTPServer)比较靠谱，等以后再有一台本地机子，也有时间的话，了解一下。期间，也想改用l2tp协议，以前曾看到Rei分享的[]()，感觉挺麻烦的，不敢再花时间浪费在这里，不要折腾了。

时间到了上周参加[Nodejs训练营](),Howard Yeh说大家可以通过他的推荐购买云梯vpn会有一个月的试用期,自己就好奇地买了一年的。试了下，可能由于我在的学校本身是通过l2tp协议vpn上网的，所以再在之上建一个vpn通道，会有冲突，具体我是Windows7下经常会断掉，Ubuntu下没有成功连接过，而在ipad上的体验是非常好的，一部分原因是云梯自建的vpn配置文件很方便, OSX想必也会有很好的体验，支持一下[云梯](https://www.ytvpn.com/)。我说明原因申请了退款。就着赞云梯MM的服务，记得有一封服务邮件是凌晨1点发给我的。
这次经历，也验证了pptp协议确实会被墙， 云梯的pptp vpn都连不上，l2tp vpn体验很好， ipad看youtube很流畅。

昨晚，Howard Yeh 在帖子中回答说他用[shadowsocks](https://github.com/clowwindy/shadowsocks), 我搜了一下，发现了这个翻墙新大陆，果断实验之。正好最近学习Node.js, 就选用[Nodejs版本](https://github.com/clowwindy/shadowsocks-nodejs), chrome浏览器用SwitchySharp， firefox用FoxProxy, 都成功实现，我用的是DigitalOcean 在新加坡的机房的vps，ping echo time 在200ms左右，白天差一点，很少有丢包，虽然有些延迟，看youtube视频有时720p的片源还是很流畅的， 刷twiiter, facebook也都有很好的体验。

shadowsocks在客户端的生态系统覆盖面还是挺广的, Ubuntu命令行下很容易配置，相应的github主页都有介绍，就不写了。
很多人用Windows， 自己试了下，也有很好的体验， 按照我的配置，简单写一下：

- 下载[shadowsocks-gui](http://sourceforge.net/projects/shadowsocksgui/files/dist/shadowsocks-gui-0.4.1-win-ia32.7z/download),
   很多人觉得前面的链接速度太慢，这是在[百度网盘的链接](http://pan.baidu.com/s/1c0ckpt2),里面的配置可直接使用

- 打开后，填写相应配置(下图只是示例，请根据具体ip，port和password修改)
    ![配置图](http://dp-github.qiniudn.com/ss_usa.PNG)

- chrome浏览器添加插件SwitchySharp
    ![switchySharp](http://dp-github.qiniudn.com/sw1.png)    
     打开SwichySharp 选项， 在`Import/Export`选项卡`Restore from File`中导入我的[SwichProxy配置文件](http://pan.baidu.com/s/1mgDhE8g)
    ![导入配置文件](http://dp-github.qiniudn.com/switchy.PNG)
     可选择在以下两种模式下切换，绿框标中的模式会将所有流量导向server端，一般情况下请选择Auto Switch Mode
    ![mode select](http://dp-github.qiniudn.com/swichy1.png) 

现在可以翻墙了, 注意翻墙时都需要一直开着shadowsocks-gui, 自己也可以在SwitchProxy中设置路由规则，
让某些站点不走server端，直接访问就可以了。

这种翻墙大概思路是， HTTP request中的site url等数据 发给本地`localhost:local_port`, 再由它通过SOCKS协议发给`server_ip:server_port`,
 由server将过来的请求数据转发到相应的site,
server再将从site返回的response回传到本地。
中间没有在国内进行DNS解析，也就没有DNS污染了。
数据都是走SOCKS协议， 只要`server_ip`和`server_port`没有被GFW墙掉,`local_port`没有被污染，
就一直可以翻墙。

关于SOCKS:
> Socket Secure (SOCKS) is an Internet protocol that routes network packets between a client and server through a proxy server. SOCKS5 additionally provides authentication so only authorized users may access a server. Practically, a SOCKS server proxies TCP connections to an arbitrary IP address, and provides a means for UDP packets to be forwarded.

> SOCKS performs at Layer 5 of the OSI model (the session layer, an intermediate layer between the presentation layer and the transport layer).



如果是firefox浏览器，我用的是FoxProxy, AutoProxy也可以，配置跟SwichySharp都大同小异。

关于GFW的介绍，可以收听这个节目[GFW 技术研究和云梯产品故事](http://teahour.fm/2013/07/09/gfw-and-vpncloud.html)。

---
如果想体验的话，可以向我索要密码 :）

*has changed the place of vps from SG to USA*

