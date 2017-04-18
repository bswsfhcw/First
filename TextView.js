import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Image,TextInput} from 'react-native';

/**---------第三个示例---------**/
 /*{alignSelf:特殊处理对齐方式}*/
export default class TextView extends Component {
  render() {
       return (
      <View style={styles2.container}>
        <Text style={{backgroundColor:'red',flex:1,height:60,alignSelf:'flex-start'}}>
          第一个
        </Text>
        <Text style={{backgroundColor:'green',flex:1,height:70}}>
          第二个
        </Text>
        <Text style={{backgroundColor:'blue',flex:2,height:80}}>
          第三个
        </Text>
       <Text style={{backgroundColor:'yellow',flex:2,height:90}}>
          第四个
        </Text>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    //上边距
    marginTop:25,
    //改变主轴方向
    flexDirection:'row',
    //设置主轴对齐方式
    justifyContent:'flex-start',
    //设置侧轴对齐方式
    alignItems:'center'
  }
});
