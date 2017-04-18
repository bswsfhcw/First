import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Image,TextInput} from 'react-native';

/** ----------第一个示例 图片---------**/
var  Dimensions = require('Dimensions');
//导入json数据
var BadgeData = require('./BadgeData.json');
var width = Dimensions.get('window').width;
//定义一些全局变量,构造九宫格
var cols  =3; //3 列
var  boxW = 100; //宽度=高度  方形盒子
var vMargin = (width-cols*boxW) / (cols+1);//间距：（屏幕宽-3个盒子总宽 ）/ 间距个数 4
var hMargin = 25; //上下间距

// alert("vMargin:"+vMargin);
export default class ImageView extends Component {
  render() {
       return (
      <View style = {stylesImage.container}>
        {/*返回6个包*/}
        {this.renderAllBag()}
      </View>
    );
  };
  //返回所有包
  renderAllBag(){
    //定义数组装所有的子组件
    var allBag = [];
    //遍历json
    var icon = require('./img/bao/danjianbao.png');
    for(var i = 0 ;i<BadgeData.data.length;i++){
      //取出单独数据对象
      var badge = BadgeData.data[i];//坑：注意：为了使新的图片资源机制正常工作，require中的图片名字必须是一个静态字符串。 
      if(badge.icon =="danjianbao"){
        icon = require('./img/bao/danjianbao.png');
      }else if(badge.icon =="liatiaobao"){
        icon = require('./img/bao/liatiaobao.png');
      }else if(badge.icon =="qiabao"){
        icon = require('./img/bao/qiabao.png');
      }else if(badge.icon =="shoutibao"){
        icon = require('./img/bao/shoutibao.png');
      }else if(badge.icon =="shuangjianbao"){
        icon = require('./img/bao/shuangjianbao.png');
      }else if(badge.icon =="xiekuabao"){
        icon = require('./img/bao/xiekuabao.png');
      }
      //直接转入数组
      allBag.push(  // key={i}  数组的每个child都要有一个唯一的key
        <View key={i} style = {stylesImage.outViewStyle}>
           <Image source={icon} style={stylesImage.imagesStyle}/>
          <Text style = {stylesImage.textsStyle}>
            {badge.title}
          </Text>
        </View>
      );
    }
    //返回数组
    return allBag;
  }
}

const stylesImage = StyleSheet.create({
  container: {
    // flex:1,
    //确定主轴方向
    flexDirection:'row',
    //换行显示
    flexWrap:'wrap'
  },
  outViewStyle: {
   backgroundColor:'red',
   //侧轴对齐方式
   alignItems:'center',
   width:boxW,
   height:boxW,
   marginLeft:vMargin,
   marginTop:hMargin
  },
  imagesStyle:{
    height:80,
    width:80
    
  },
  textsStyle:{

  }
});
