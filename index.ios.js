import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

/** 提供入口即可**/
//引入外部js
import QQLoginView from './QQLoginView';
import ImageView from './ImageView';
import TextInputView from './TextInputView';
import TextView from './TextView';
import TouchableDemo1 from './TouchableDemo1';
import ScrollViewDemo1 from './js/ScrollViewDemo1';
import ListViewBeer from './js/listView/ListViewBeer';
import ListViewJiugongge from './js/listView/ListViewJiugongge';
import ListViewCar from './js/listView/ListViewCar';
import MyCamera from './component/others/MyCamera'
import MyBarcodeScannerUniversal from './component/others/MyBarcodeScannerUniversal'
//引入外部组件类
var Main = require('./component/Main/XMGMain');
var LaunchImage = require('./component/Main/XMGlaunchImage');
class SimpleNavigationAppQQLogin extends Component {
  render() {
    return (
      // <MyBarcodeScannerUniversal />//二维码Andriod && IOS
      // <MyCamera/>//摄像头
      // <QQLoginView/>//QQ登陆
      // <ImageView/> //图片
      // <TextInputView/>//输入框
      // <TextView/>//textView布局
      // <TouchableDemo1/>//触摸事件
      // <ScrollViewDemo1/>// 图片轮播
      // <ListViewBeer/>//listView 展示啤酒列表
      // <ListViewJiugongge/>//listView 展示九宫格
      // <ListViewCar/>//listView 展示汽车吸顶效果
      <Main/>//电商项目入口
    )
  }
}

AppRegistry.registerComponent('FirstReDemo', () => SimpleNavigationAppQQLogin);
