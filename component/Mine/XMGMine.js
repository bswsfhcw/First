import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入外部组件
var MyCell = require('./XMGCommonMyCell');
var MineMiddleView = require('./XMGMineMiddleView');
var MineHeaderView = require('./XMGMineHeaderView');
var Mine = React.createClass({

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <MineHeaderView />
        <View style={{ marginTop: 0 }}>
          <MyCell
            leftIconName='danjianbao'
            leftTitle='我的订单'
            rightIconName=''
            rigthTitle='查看全部订单'
          />
          <MineMiddleView />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='danjianbao'
            leftTitle='小伟哥钱包'
            rightIconName=''
            rigthTitle='账户余额:￥100'
          />
          <MyCell
            leftIconName='danjianbao'
            leftTitle="抵用券"
            rightIconName=''
            rigthTitle='10张'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='danjianbao'
            leftTitle='积分商城'
            rightIconName=''
            rigthTitle=''
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='xiekuabao'
            leftTitle='今日推荐'
            rightIconName='xiekuabao'
            rigthTitle=''
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='xiekuabao'
            leftTitle='我要合作'
            rightIconName=''
            rigthTitle='轻松开店，招财进宝'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='danjianbao'
            leftTitle='积分商城'
            rightIconName=''
            rigthTitle=''
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='xiekuabao'
            leftTitle='今日推荐'
            rightIconName='xiekuabao'
            rigthTitle=''
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MyCell
            leftIconName='xiekuabao'
            leftTitle='我要合作'
            rightIconName=''
            rigthTitle='轻松开店，招财进宝'
          />
        </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  scrollViewStyle: {
    backgroundColor: '#e8e8e8'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20
  }
});
//输出组件类
module.exports = Mine;