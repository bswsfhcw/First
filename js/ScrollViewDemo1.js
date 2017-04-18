import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

/** 
 1 图片轮播
 2 图片下方有指示器，随轮播切换
 3 拖拽图片时轮播暂停
 4 停止拖拽恢复轮播
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
//引入计时器
var TimerMixin = require('react-timer-mixin');
//引入jscon
var ImageData = require('../ImageData.json');

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

var ScrollViewDemo1 = React.createClass({
  //注册计时器
  mixins: [TimerMixin],

  getDefaultProps() {//不可改变的值
    return {
      //定时器刷新时间
      duration: 1000 //毫秒
    }
  },
  getInitialState() {//可改变的值
    return {
      //当前页码，默认：0
      currentPage: 0
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scollView"
          horizontal={true}//水平排列
          showsHorizontalScrollIndicator={false}//隐藏水平滚动条
          pagingEnabled={true}//自动分页
          //每一帧滚动结束
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          // 开始拖拽scrollView
          onScrollBeginDrag={this.onScrollBeginDrag}
          // 停止拖拽
          onScrollEndDrag={this.onScrollEndDrag}
        >
          {this.renderAllImage()}
        </ScrollView>
        {/*返回指示器*/}
        <View style={styles.pageViewStyle}>
          {/*5个圆点*/}
          {this.renderPageCiecle()}
        </View>
      </View>
    );
  },
    // 开始拖拽的时候调用
  onScrollBeginDrag(){
    // 停止定时器
    this.clearInterval(this.timer);
  },

  // 停止拖拽的时候调用
  onScrollEndDrag(){
    // 开启定时器
    this.startTimer();
  },
  //实现复杂操作：
  componentDidMount() {
    //开启定时器
    // alert("开启定时器");  
    this.startTimer();
  },
  startTimer() {
    //1拿到sacollView
    var scollView = this.refs.scollView;
    var imgCount = ImageData.data.length;
    //2添加定时器
    this.timer = this.setInterval(function () {
      // alert("定时时间:"+this.props.duration);
      //2.1设置圆点
      var activePage = 0;
      //2.2判断
      if ((this.state.currentPage + 1) >= imgCount) {//越界
        activePage = 0;
      } else {
        activePage = this.state.currentPage + 1;
      }
      //2.3跟新状态机
      this.setState({
        currentPage: activePage
      });
      //2.4 scollView滚动起来
      var offSetX = activePage * width;
      scollView.scrollResponderScrollTo({ x: offSetX, y: 0, animated: true });
    }, this.props.duration);
  },
  //返回所有图片
  renderAllImage() {
    //数组
    var allImage = [];
    //拿到图像数组
    var imgsArr = ImageData.data;
    var icon = require('../img/scorll/img_01.png');
    for (var i = 0; i < imgsArr.length; i++) {
      //取出单独每一个对象
      var imgItem = imgsArr[i];
      if (imgItem.img == "img_01") {
        icon = require('../img/scorll/img_01.png');
      } else if (imgItem.img == "img_02") {
        icon = require('../img/scorll/img_02.png');
      } else if (imgItem.img == "img_03") {
        icon = require('../img/scorll/img_03.png');
      } else if (imgItem.img == "img_04") {
        icon = require('../img/scorll/img_04.png');
      } else if (imgItem.img == "img_05") {
        icon = require('../img/scorll/img_05.png');
      }
      //创建组件装入数组
      allImage.push(
        <Image key={i} source={icon} style={{ width: width, height: 120 }} />
      );
    }
    //返回数组
    return allImage;
  },
  //返回所有的圆点
  renderPageCiecle() {
    //定义一个数组放置所有圆点
    var indicatorArr = [];
    var style;
    var imgsArr = ImageData.data;
    for (var i = 0; i < imgsArr.length; i++) {
      //判断
      style = (i == this.state.currentPage) ? { color: 'orange' } : { color: 'white' };//多个样式
      //圆点装入数组
      indicatorArr.push(
        <Text key={i} style={[{ fontSize: 25 }, style]}>&bull;</Text>//特殊字符
      );
    }
    return indicatorArr;
  },
  //每一帧滚动结束
  onAnimationEnd(e) {
    //求水平方向偏移量
    var offSetX = e.nativeEvent.contentOffset.x;
    //求出当前页数
    var currentPage = Math.floor(offSetX / width);
    // alert(currentPage);
    //跟新状态机，重新绘制UI
    this.setState(
      {
        currentPage: currentPage
      }
    );
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 25,

  },
  pageViewStyle: {
    width: width,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    //定位
    position: 'absolute',
    bottom: 0,
    //主轴方向--横
    flexDirection: 'row',
    //侧轴（垂直）居中--
    alignItems: 'center'

  }
});

module.exports = ScrollViewDemo1;