import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Image,TextInput} from 'react-native';

/** ----------第一个示例---------**/
class SimpleNavigationApp extends Component {
  render() {
       return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'red',height:30}}>
          第一个
        </Text>
        <Text style={{backgroundColor:'green',height:40}}>
          第二个
        </Text>
        <Text style={{backgroundColor:'blue',height:50}}>
          第三个
        </Text>
       <Text style={{backgroundColor:'yellow',height:60}}>
          第四个
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    //上边距
    marginTop:25,
    //改变主轴方向
    flexDirection:'row',
    //设置主轴对齐方式
    justifyContent:'space-around',
    //设置侧轴对齐方式
    alignItems:'center'
  }
});

/** ----------第二个示例---------**/
class SimpleNavigationApp1 extends Component {
  render() {
       return (
      <View style={styles1.container}>
        <Text style={{backgroundColor:'red',width:80}}>
          第一个
        </Text>
        <Text style={{backgroundColor:'green',width:90}}>
          第二个
        </Text>
        <Text style={{backgroundColor:'blue',width:100}}>
          第三个
        </Text>
       <Text style={{backgroundColor:'yellow',width:110}}>
          第四个
        </Text>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    //上边距
    marginTop:25,
    //改变主轴方向
    flexDirection:'row',
    //设置主轴对齐方式
    justifyContent:'flex-start',
    //设置侧轴对齐方式
    alignItems:'center',
    //显示不下，换行
    flexWrap:'wrap'
  }
});
/** ----------第四个示例---------**/
 /*{alignSelf:特殊处理对齐方式}*/
 //引入
var Dimensinos = require('Dimensions');

class SimpleNavigationApp3 extends Component {
  render() {
       return (
      <View style = {styles3.container}>
        <Text>
            当前屏幕的宽度：{Dimensinos.get('window').width}
        </Text>
        <Text>
            当前屏幕的高度：{Dimensinos.get('window').height}
        </Text>
        <Text>
            分辨率：{Dimensinos.get('window').scale}
        </Text>
      </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    //沾满屏幕
    flex:1,
    //设置主轴对齐方式
    justifyContent:'center',
    //设置侧轴对齐方式
    alignItems:'center',
    //背景
    backgroundColor:'red'
  }
});

//引入外部js
import QQLoginView from './QQLoginView';
import ImageView from './ImageView';
import TextInputView from './TextInputView';
import TextView from './TextView';

class SimpleNavigationAppQQLogin extends Component {
  render() {
    return(
      //<QQLoginView/>//QQ登陆
      // <ImageView/> //图片
      // <TextInputView/>//输入框
      <TextView/>//textView布局
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationAppQQLogin);
