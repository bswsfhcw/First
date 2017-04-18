import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Image,TextInput} from 'react-native';

/** ----------第一个示例 TextInput---------**/
export default class TextInputView extends Component {
  render() {
    return (
      <View style = {stylesTextInput.container}>
        <TextInput style = {stylesTextInput.inputStyle}
                    // value ={'我是默认文字'}
                    keyboardType={'numeric'}
                    //多行
                    // multiline={true}
                    secureTextEntry  = {true}//密码
                    placeholder ={'我是默认文字'}
                    
        />

      </View>
    );
  }
}

const stylesTextInput = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F5FCFF'
  },
  inputStyle:{
    marginTop:30,
    width:300,
    height:60,
    // backgroundColor:'black',
    //边框
    borderWidth:1,
    borderColor:'#e8e8e8'
    
  }
});