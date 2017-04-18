import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon
var beer = require('../../json/beer.json');


var ListViewBeer = React.createClass({


  getDefaultProps() {//不可改变的值
    return {
    }
  },
  getInitialState() {//设置初始值 
    //1设置数据源
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
     //1设置返回值
    return  {
      dataSource: ds.cloneWithRows(beer),//放置数组
    };
  },
  //设置render函数
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}//数据源
        renderRow={this.renderRow}//组件
      />
    );
  },
  //返回具体的cell
  renderRow(rowData, sectionID, rowID, highlightRow){
    // alert(sectionID+","+rowID);
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={() =>{alert("点击了第"+rowID+"行")}}>
        <View style ={styles.cellViewStyle}>
          {/*左边的图片*/}
          <Image
            source={{uri:rowData.image}}//项目资源
            style={styles.leftImageStyle}
          />
          {/*右边的view*/}
          <View style ={styles.rightViewStyle}>
            {/*上边的text*/}
            <Text style ={styles.topTitleStyle}>{rowData.name}</Text>
            {/*下边的text*/}
            <Text style ={styles.bottomTitleStyle}>￥{rowData.money}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  container: {

  },
  cellViewStyle:{
    padding :10,
    backgroundColor:'white',
    //下划线
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8',
    //主轴方向
    flexDirection:'row',

  },
  leftImageStyle:{
    width:60,
    height:60,
    marginRight:10//外右边距
  },
  rightViewStyle:{
    justifyContent:'center',//主轴对齐方式
  },
  topTitleStyle:{
    color:'red',
    fontSize:15,
    width:width*0.7,
    marginBottom:8
  },
  bottomTitleStyle:{
    color:'blue'
  }
});

module.exports = ListViewBeer;