import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon


var MineHeaderView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    },
    //上部分
    renderTopView() {
        return (
            <View style={styles.topViewStyle}>
                <Image source={{ uri: 'danjianbao' }} style={styles.leftIconStyle} />
                <View style={styles.centerViewStyle}>
                    <Text style={{ color: 'white' }} >小伟哥电商</Text>
                    <Image source={{ uri: 'qiabao' }} style={{ width: 17, height: 17 }} />
                </View>
                {/*右边的箭头*/}
                <Image source={{ uri: 'danjianbao' }} style={{ width: 8, height: 13, marginRight: 8 }} />
            </View>
        );
    },
    renderBottomView() {
        return (
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    },
    renderBottomItem() {
        var itemArr = [];
        //数据数组
        var data = [{ 'number': '100', 'title': '伟哥券' }, { 'number': '12', 'title': '评价' }, { 'number': '50', 'title': '收藏' }];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArr.push(
                <TouchableOpacity  key={i} onPress ={()=>{alert('点击了')}}>
                <View style = {styles.bottomInnerViewStye}>
                    <Text style ={{color:'white'}}>{item.number}</Text>
                    <Text style ={{color:'white'}}>{item.title}</Text>
                </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        height: Platform.OS==='ios' ? 400 :200,//为了IOS吸顶弹性效果，android不支持scrollView下拉
        backgroundColor: 'red'

    },
    topViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:  Platform.OS==='ios' ? 280 :80,//为了IOS吸顶弹性效果，android不支持scrollView下拉
        justifyContent: 'space-around',
    },
    centerViewStyle: {
        flexDirection: 'row',
        width: width * 0.7,
    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 35,
        borderColor: 'rgba(0,0,0,0.2)',
    },
    bottomViewStyle:{
        flexDirection:'row',
         //绝对定位
        position:'absolute',
        bottom:0,
       
    },
    bottomInnerViewStye:{
        width:width /3+1, // 宽度加1  去掉右边框
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1, //右边框
        borderRightColor:'white',
    },
});
//输出组件类
module.exports = MineHeaderView;