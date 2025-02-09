# 重庆医科大学开源镜像站
![cqmu-mirror-frontpage.png](resource/icons/cqmu-mirror-frontpage.png)

重庆医科大学开源镜像站是一个致力于助力开发者生长，方便荆楚校内外师生高效访问开源资源的非盈利计划。
我们旨在推动开源事业发展与提高西南地区开发资源可访问速度。

## 快速开始
下载nvm：https://github.com/coreybutler/nvm-windows

安装node.js 18.16.0及以上版本（开发版本18.20.6)


`nvm install 18.20.6`

设置淘宝镜像源

`npm config set registry https://registry.npm.taobao.org`

查看是否设置成功

`npm config get registry`

测试连通性及速度

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

安装yarn

`npm install -g yarn`

安装依赖

`yarn install`

## 部署
使用基于REACT的GatsByJS构建页面。 部署时所有文件放在 `/static/*`.

前往后端仓库：[cqmu-mirror-backend](#)

[//]: # (TODO)

## 开发

开发模式

`yarn run develop`

只构建静态文件

`yarn run serve`

### 注意事项

- 请不要直接修改`/static/*`下的文件，这些文件是由GatsbyJS自动生成的，任何修改都会被覆盖
- 提交代码合并请求时请注意代码规范，不要提交无意义的代码，例如.idea文件夹
- 向管理员发送消息后再合并代码，说明你的代码主要修改了什么，以及为什么修改
- 如果你发现静态文件（如图片）没有更新，请尝试清除浏览器缓存，可以试试将其注释掉后再取消注释

## 标准

### git提交及分支管理

使用Angular风格的commit message及其规范，参考[Angular Commit Message Conventions](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)

Package.json中指派了Commitizen, 可以使用`git cz`来代替`git commit`，提交规范为Conventional Commit
 
### CI/CD

什么是CI/CD? 请参考[CI/CD](https://www.redhat.com/zh/topics/devops/what-is-ci-cd)

也可以查看gitlab文档：[Gitlab CI/CD](https://docs.gitlab.com/ee/ci/)

[//]: # (TODO)


## 特别感谢
本站基于浙江大学ZJUSCT开源的mirror-front与清华大学TUNA开源的tunasync项目，感谢ZJUSCT与TUNA为国内开源生态作出的伟大贡献

UI 设计师: [Rynco Maekawa](https://github.com/lynzrand)
