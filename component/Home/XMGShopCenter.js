import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入外部组件类
var CommonCell = require('./XMGBottomCommonCell');

//引入jscon
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({

getDefaultprops() {
    return {
      popToHomeView:null,//回掉函数
    }
  },
  render() {
    return (
      <View style={styles.container}>
        {/*上部分*/}
        <CommonCell
          leftIcon="danjianbao"
          leftTitle="购物中心"
          rightTitle={Home_D5.tips}
        />
        {/*下部分*/}
        <ScrollView horizontal={true}//横向
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewStyle}>
          {this.renderAllItem()}
        </ScrollView>
      </View>
    );
  },
  //返回下部分所有Item
  renderAllItem() {
    var itemArr = [];//定义组件数组
    //取出数据
    var shopData = Home_D5.data;
    //遍历
    for (var i = 0; i < shopData.length; i++) {
      //取出单个数据
      var data = shopData[i];
      //创建组件装入数组
      itemArr.push(
        <ShopCenterItem
          key={i}
          shopImage={data.img}
          shopSale={data.showText.text}
          shopName={data.name}
          detailurl={data.detailurl}
          popToShopCenter ={(url)=> this.popToHome(url)}
        />
      );
    }
    return itemArr;
  },
  popToHome(url){
     if(this.props.popToHomeView == null){
      return;
    }else{//执行回掉函数
        this.props.popToHomeView(url);
    }
  }
});
//每一个商场
var ShopCenterItem = React.createClass({

  getDefaultprops() {
    return {
      shopImage: '',
      shopSale: '',
      shopName: '',
      detailurl:'',//接收
      popToShopCenter:null,
    }
  },
  render() {
    return (
      <TouchableOpacity onPress={() => this.clickItem(this.props.detailurl)}>
        <View style={styles.itemViewStyle}>
          <Image source={{ uri: this.props.shopImage }} style={styles.imgStyle} />
          <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
          <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    );
  },
  clickItem(url){
    if(this.props.detailurl == null){
      return;
    }else{//执行回掉函数
        this.props.popToShopCenter(url);
    }
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,

  },
  scrollViewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  itemViewStyle: {
    margin: 8,
    borderRadius: 8,
  },
  imgStyle: {
    width: 129,
    height: 100,
  },
  shopSaleStyle: {
    //绝对定位
    position: 'absolute',
    left: 0,
    bottom: 30,
    backgroundColor: 'red',
    color: 'white',
    padding: 3,
  },
  shopNameStyle:{
    textAlign:'center',
    marginTop:5,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
//输出组件类
module.exports = ShopCenter;