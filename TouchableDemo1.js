import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


//ES5
var TouchableDemo1 = React.createClass({
  getDefaultProps(){//不可改变的值
    return{
      age:18
    }
  },
  getInitialState() {//可改变的值
    return {
      title: '不透明触摸',
      person:'张三'
    }
  },
  render() {
    return (
      <View ref ='topView' style={styles.container}  >
        <TouchableOpacity activeOpacity={0.5}
          onPress={() => this.activeEvent('点击')}
          onPressIn={() => this.activeEvent('按下')}
          onPressOut={() => this.activeEvent('抬起')}
          onLongPress={() => this.activeEvent('长按')}
        >
          <View style={styles.innerViewStyle}>
            <Text >常用的事件</Text>
            <Text >{this.state.person}</Text>
            <Text >{this.props.age}</Text>
          </View>
        </TouchableOpacity>
        <View >
          <Text>{this.state.title}</Text>
        </View>
      </View>
    );
  },
  activeEvent: function (event) {
    this.setState({
      title: event,
      person:'李四'
    })
    //拿到view
    this.refs.topView
  }
});
//ES6写法
// export default class TouchableDemo1 extends Component {

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //所有内容侧轴(横)居中
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerViewStyle: {
    backgroundColor: 'red'
  }
});

module.exports = TouchableDemo1;