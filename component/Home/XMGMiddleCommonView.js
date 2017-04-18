import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
    Image,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon


var CommonView = React.createClass({

getDefaultProps(){
    //传参数
    return{
        title:"",
        subTitle:"",
        rightImg:"",
        titleColor:"",
        tpUrl:"",//下界页面的路径
        //回调函数
        callBackClickCell:null
    }

},

  render() {
    return (
        <TouchableOpacity onPress={()=>this.clickCell(this.props.tpUrl)} style={styles.container}>
      <View style={styles.container}>
       {/*左边*/}
       <View>
        <Text style ={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
         <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
       </View>
        {/*右边*/}
        <Image source={{uri:this.props.rightImg}} style ={{width:64,height:43,resizeMode:'contain'}}/>
      </View>
      </TouchableOpacity>
    );
  },
  clickCell(data){
     this.props.callBackClickCell(data);
  }
});

const styles = StyleSheet.create({
  container: {
      width:width*0.5-1,
      height:59,
      marginBottom:1,
      marginRight:1,
      
      flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white'

  },titleStyle:{
      fontSize:15,

  },
  subTitleStyle:{
      color:'gray',
      marginLeft:2,
  }
});
//输出组件类
module.exports = CommonView;