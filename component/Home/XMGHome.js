import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  ScrollView,
  BackAndroid,
  ToastAndroid
} from 'react-native';
var firstClick = 0;

/**
 **/
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

//引入jscon
//导入外部组件类
var HomeDetail = require('./XMGHomeDetail');
var TopView = require('./XMGTopView');
var MiddleView = require('./XMGHomeMiddleView');
var MiddleBottomView = require('./XMGMiddleBottomView');
var ShopCenter = require('./XMGShopCenter');
var ShopCenterDetail = require('./XMGShopCenterDetail');

var Home = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        {/*首页导航*/}
        {this.renderNavBar()}
        {/*首页主要内容*/}
        <ScrollView>
          {/*头部View*/}
          <TopView />
          {/*中间V内容*/}
          <MiddleView />
          {/*下半部分内容*/}
          <MiddleBottomView popTopHome={(data) => this.pushToDetail(data)} />
          {/*购物中心*/}
          <ShopCenter
            popToHomeView={(url) => this.pushToShopCenterDetail(url)}
          />

        </ScrollView>
      </View>
    );
  },
  pushToShopCenterDetail(url) {
    // alert(url);
    this.props.navigator.push({
      component: ShopCenterDetail, //要跳转的板块
      passProps: {//傳參數,下级页面可直接取 this.props.url
        'url': this.dealWith(url)
      }
    });
  },
  //处理
  dealWith(url) {
    return url.replace('imeituan://www.meituan.com/web?url=', '');
  },
  //首页导航
  renderNavBar() {
    return (
      <View style={styles.navBarStyle}>
        {/*左边*/}
        <TouchableOpacity onPress={() => { this.pushToDetail("hello") }}>
          <Text style={{ color: 'white' }}>广州</Text>
        </TouchableOpacity>
        {/*中间*/}
        <TextInput
          placeholder="输入商家,品类,商圈等"
          style={styles.topInputStyle}
        />
        {/*右边*/}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity onPress={() => { alert('点击了') }}>
            <Image source={{ uri: 'qiabao' }} style={styles.navRightImgStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { alert('点击了') }}>
            <Image source={{ uri: 'qiabao' }} style={styles.navRightImgStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  pushToDetail(data) {//跳转到二级界面
    // alert(data);
    this.props.navigator.push({
      component: HomeDetail, //要跳转的板块
      title: '详情页', //
      passProps: {//傳參數
        'data': data
      }
    });
  },
  //组件挂载的时候调用
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.back);
  },
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.back)
  },
  back() {
    var navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    } else {
      var timestamp = (new Date()).valueOf();
      if (timestamp - firstClick > 500) {
        firstClick = timestamp;
        ToastAndroid.show('双击退出', ToastAndroid.SHORT);
        return true;
      } else {
        return false;
      }
    }
  }
});

const styles = StyleSheet.create({

  navBarStyle: {//导航条样式
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    //设置主轴方向
    flexDirection: 'row',
    //垂直居中---》侧轴对齐方式
    alignItems: 'center',
    //主轴对齐方式
    justifyContent: 'space-around'
  },
  topInputStyle: {//设置输入框
    width: width * 0.7,
    height: Platform.OS === 'ios' ? 35 : 36,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 16 : 0,
    //设置圆角
    borderRadius: 15,
    //内左边距
    paddingLeft: 10
  },

  rightNavViewStyle: {
    flexDirection: 'row',
    // backgroundColor:'blue',
    height: 64,
    //  设置侧轴对齐
    alignItems: 'center',
  },
  navRightImgStyle: {//设置图片大小
    width: Platform.OS === 'ios' ? 30 : 24,
    height: Platform.OS === 'ios' ? 30 : 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },

  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20
  }
});
//输出组件类
module.exports = Home;