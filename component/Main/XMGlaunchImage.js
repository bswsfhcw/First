import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
    Image

} from 'react-native';

/**
 * 启动图片
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/**导入外部组件 */

var  Main  =require('./XMGMain');
var Launch = React.createClass({

  render() {
    return (
     <Image
        source={{uri:'shoutibao'}}
        style = {styles.launchImageStyle}
     />
    );
  },
  //复杂的操作；定时器、网络请求
  componentDidMount(){
    //定时，隔2秒掐换到Main
    setTimeout(() =>{
        //页面切换
        this.props.navigator.replace({
          component:Main,//具体的路由板块
        });
      },
      100);
  }
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'

  },
  launchImageStyle:{
    flex:1
  },
  welcome:{
    fontSize:25,
    textAlign:'center',
    margin:20
  }
});
//输出组件类
module.exports = Launch;