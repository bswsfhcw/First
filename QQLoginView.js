import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class QQLoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*头像*/}
        <Image source={require('./img/QQ/touxiang.png')} style = {styles.iconStyle}/>
        {/*账号 密码*/}
        <TextInput  placeholder={'请输入用户名'} style = {styles.textInputStyle}/>
        <TextInput placeholder={'请输入密码'} secureTextEntry = {true} style = {styles.textInputStyle}/>
        {/*登陆*/}
        <View style = {styles.loginBtnStyle}>
          <Text style={{color:'white'}}>登陆</Text>
        </View>
        {/*设置*/}
        <View style={styles.settingStyle}>
          <Text>无法登陆</Text>
          <Text>新用户</Text>
        </View>
        {/*其他登陆方式*/}
        <View style = {styles.otherLoginStyle}>
          <Text>其他方式登陆</Text>
          <Image source={require('./img/QQ/oway_qq.png')} style ={styles.otherImageStyle}/>
          <Image source={require('./img/QQ/oway_weixin.png')} style ={styles.otherImageStyle}/>
          <Image source={require('./img/QQ/oway_weibo.png')} style ={styles.otherImageStyle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    //所有内容侧轴(横)居中
    alignItems:'center' 
  },
  iconStyle:{
    marginTop:50,
    marginBottom:30,
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white'
  },
  textInputStyle:{
    height:38,
    width:width,
    backgroundColor:'white',
    // marginBottom:1,
    //内容居中
    textAlign:'center'
  },
  loginBtnStyle:{
    height:35,
    width:width*0.9,
    backgroundColor:'blue',
    marginTop:30,
    marginBottom:20,
    justifyContent:'center',//主轴对齐方式
    alignItems:'center',
    borderRadius:8,//圆角
  },
  settingStyle:{
    //设置主轴方向
    flexDirection:'row',
    justifyContent:'space-between',
    width:width*0.9,
    // backgroundColor:'red'
  },
  otherLoginStyle:{
    // backgroundColor:'red',
    //设置主轴方向
    flexDirection:'row',
    ///侧轴(横)居中
    alignItems:'center',
    //绝对定位
    position:'absolute',
    bottom:10,
    left:20,

  },
  otherImageStyle:{
    width:50,
    height:50,
    marginLeft:8,
    borderRadius:8
  }
});