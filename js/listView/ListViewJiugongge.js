import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity//不透明的触摸
} from 'react-native';

/**
 **/
//获取屏幕
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon
var beer = require('../../json/jiugongge.json');

//一些常量

var cols = 3;  //3列
var cellWH = 100;
var vMargin = (width - cellWH * cols) / (cols + 1) //左边距
var hMargin = 25;


//ES5
var ListViewJiugongge = React.createClass({
  //固定值
  getDefaultProps() {

  },
  //可变
  getInitialState() {
    //创建数据源
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(beer.data)
    }
  },
  render() {
    return (
      < ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.listViewStyle}
      />
    );
  },
  //单独的cell
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert("选择了:"+rowData.title)}}>
        <View style={styles.innerViewStyle}>
          <Image source={{ uri: rowData.icon }}
            style={styles.icoonStyle}
          />
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
});
const styles = StyleSheet.create({
  container: {

  },
  listViewStyle: {
    flexDirection: 'row',//改变主轴
    flexWrap: 'wrap',//换行
    // 侧轴方向  
    alignItems: 'center', // 必须设置,否则换行不起作用  
  },
  innerViewStyle: {
    width: cellWH,
    height: cellWH,
    marginLeft: vMargin,
    marginTop: hMargin,
    //居中
    alignItems: 'center'
  },
  icoonStyle: {
    width: 80,
    height: 80
  }
});

module.exports = ListViewJiugongge;