# NodeTab
一个基于Node Garden的Chrome新标签页扩展

[![webstore][webstore-badge]][webstore-link]
[![david-dm][david-dm-badge]][david-dm-link]
[![travis-ci][travis-ci-badge]][travis-ci-link]

## 开发
```sh
    git clone https://github.com/changelime/NodeTab.git
    cd NodeTab
    npm run dev
    //打开chrome扩展管理烈面，加载NodeTab目录
```

## 构建
```sh
    npm run built
    //打开chrome扩展管理烈面，加载NodeTab/dest目录
```

## 使用
扩展有3种状态

1. 时钟
1. 时钟和常用网站
1. 常用网站

更改状态
* 方向键上下，或者鼠标滚轮控制状态。
* 状态会保存（即使再新建一个标签）直到再次被更改

## 演示
![Demo](http://i.imgur.com/BXIfaSY.gif)

## 许可
MIT


<!-- Link -->
[webstore-badge]:     https://img.shields.io/chrome-web-store/v/blnaigipibhidkmocpndbblfkpmghaom.svg
[webstore-link]:      https://chrome.google.com/webstore/detail/nodetab/blnaigipibhidkmocpndbblfkpmghaom
[david-dm-badge]:     https://david-dm.org/changelime/NodeTab/dev-status.svg
[david-dm-link]:      https://david-dm.org/changelime/NodeTab?type=dev
[travis-ci-badge]:    https://api.travis-ci.org/changelime/NodeTab.svg
[travis-ci-link]:     https://travis-ci.org/changelime/NodeTab
