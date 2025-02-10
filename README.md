# 重庆医科大学开源镜像站

![cqmu-mirror-frontpage.png](resource/icons/cqmu-mirror-frontpage.png)

重庆医科大学开源镜像站是一个致力于助力开发者生长，方便重医校内外师生高效访问开源资源的非盈利计划。
我们旨在推动开源事业发展与提高西南地区开发资源可访问速度。

## 快速开始

下载nvm：https://github.com/coreybutler/nvm-windows

安装node.js 18.16.0及以上版本（开发版本18.20.6)

`nvm install 18.20.6`

设置淘宝镜像源

`npm config set registry https://registry.npmmirror.com`

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

## 开发标准

### git提交及分支管理

使用Angular风格的commit
message及其规范，参考[Angular Commit Message Conventions](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)

Package.json中指派了Commitizen, 可以使用`git cz`来代替`git commit`，提交规范为Conventional Commit

### CI/CD

什么是CI/CD? 请参考[CI/CD](https://www.redhat.com/zh/topics/devops/what-is-ci-cd)

也可以查看gitlab文档：[Gitlab CI/CD](https://docs.gitlab.com/ee/ci/)

[//]: # (TODO)

## 上游镜像地址测速结果

我们在同步镜像时，往往同一省份、同一运营商的镜像速度更快，但也不一定是这样。因此mirrorz提供了一个测速脚本，可以帮助我们选择最快的镜像站。而且这种星型网络结构也有利于镜像站之间的互相备份。

linux测速脚本：

`curl https://mirrors.cernet.edu.cn/oh-my-mirrorz.py | python3`

windows下载后使用python3运行即可

| 排名 | ABBR               | 中文名称                          | 下载速度       |
|------|--------------------|-----------------------------------|----------------|
| 00   | NWAFU              | 西北农林科技大学                  | 96.84 MiB/s    |
| 01   | NYIST              | 南阳理工学院                      | 82.15 MiB/s    |
| 02   | BFSU               | 北京外国语大学                    | 73.64 MiB/s    |
| 03   | CQU                | 重庆大学                          | 69.92 MiB/s    |
| 04   | LZUOSS             | 兰州大学开源社区                  | 67.54 MiB/s    |
| 05   | USTC               | 中国科学技术大学                  | 64.00 MiB/s    |
| 06   | SUSTech CRA        | 南方科技大学计算机研究协会        | 58.51 MiB/s    |
| 07   | JCUT               | 江苏科技大学                      | 48.08 MiB/s    |
| 08   | TUNA               | 清华大学开源镜像站（TUNA协会）    | 47.38 MiB/s    |
| 09   | JLU                | 吉林大学                          | 40.77 MiB/s    |
| 10   | SJTUG - Siyuan     | 上海交通大学思源镜像站            | 34.25 MiB/s    |
| 11   | QLUT               | 齐鲁工业大学                      | 32.47 MiB/s    |
| 12   | DNUI               | 大连东软信息学院                  | 18.23 MiB/s    |
| 13   | ISRC-ISCAS         | 中科院信息工程研究所              | 13.96 MiB/s    |
| 14   | SCAU               | 华南农业大学                      | 11.48 MiB/s    |
| 15   | NJTech             | 南京工业大学                      | 9.59 MiB/s     |
| 16   | PKU                | 北京大学                          | 9.37 MiB/s     |
| 17   | NJU                | 南京大学                          | 9.15 MiB/s     |
| 18   | SDU                | 山东大学                          | 7.66 MiB/s     |
| 19   | XJTU               | 西安交通大学                      | 6.34 MiB/s     |
| 20   | WSYU               | 文山学院（暂定）                  | 5.64 MiB/s     |
| 21   | ShanghaiTech GeekPie | 上海科技大学极客派              | 3.22 MiB/s     |
| 22   | CQUPT              | 重庆邮电大学                      | 334.71 KiB/s   |
| 23   | ZJU                | 浙江大学                          | 169.57 KiB/s   |
| 24   | BJTU               | 北京交通大学                      | 358.00 B/s     |
| 25   | CERNET             | 中国教育和科研计算机网            | 0.00 B/s       |
| 26   | UESTC LUG          | 电子科技大学Linux用户组           | 0.00 B/s       |

## 特别感谢

本站基于浙江大学ZJUSCT开源的mirror-front与清华大学TUNA开源的tunasync项目，感谢ZJUSCT与TUNA为国内开源生态作出的伟大贡献

UI 设计师: [Rynco Maekawa](https://github.com/lynzrand)
