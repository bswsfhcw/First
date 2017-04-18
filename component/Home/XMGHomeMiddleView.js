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
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入外部组件类
var CommonView = require('./XMGMiddleCommonView');

//引入jscon
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        {/*左边*/}
        {this.renderLeftView()}
        {/*右边*/}
        <View>
          {this.renderRightView()}
        </View>
      </View>
    );
  },
  renderLeftView() {
    var data = TopMiddleData.dataLeft[0];
    return (
      <TouchableOpacity onPress={()=>{alert('点击了')}}>
      <View style = {styles.leftViewStyle}>
        <Image source={{uri:data.img1}} style={styles.leftImgSttyle}/>
        <Image source={{uri:data.img2}} style={styles.leftImgSttyle}/>
        <Text style={{color:'gray'}}> {data.title}</Text>
        <View style={{flexDirection:'row',marginTop:5}}>
          <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
          <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  },
  renderRightView() {
    var itemArr = [];
    var rightData = TopMiddleData.dataRight;
    for (var i = 0; i < rightData.length; i++) {
      var data = rightData[i];
      itemArr.push(
        <CommonView key={i}
          title={data.title}
          subTitle={data.subTitle}
          rightImg={data.rightImg}
          titleColor={data.titleColor}
        />
      );
    }
    return itemArr;
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection:'row',

  },
  leftViewStyle:{
    width:width*0.5,
    height:119,
    backgroundColor:'white',
    
    alignItems:'center',
    justifyContent:'center',

  },
  leftImgSttyle:{
    width:120,
    height:30,

    //内容模式
    resizeMode:'contain',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20
  }
});
//输出组件类
module.exports = HomeMiddleView;