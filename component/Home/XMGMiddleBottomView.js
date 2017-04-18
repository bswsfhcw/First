import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;


//引入外部组件类
var CommonView = require('./XMGMiddleCommonView');

//引入jscon
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

var BottomView = React.createClass({

    getDefaultProps() {
        //传参数
        return {

            //回调函数
            popTopHome: null
        }

    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    //下部分所有子组件
    renderBottomItem() {
        //组件数组
        var itemArr = [];
        //拿到对应数据
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
            var itemData = dataArr[i];
            //创建组件，装入数组
            itemArr.push(
                <CommonView
                    key={i}
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightImg={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tpUrl={itemData.tpUrl}
                    callBackClickCell={(data) => this.popToTopView(data)}
                />
            );
        }
        //返回组件数组
        return itemArr;
    },
    //继续往父级页面传递数居
    popToTopView(data) {
        //继续执行回调函数
        this.props.popTopHome(data);
    },
    //处理图像尺寸
    dealWithImgUrl(url) {
        if (url.search('w.h') == -1) {//未找到
            return url;
        } else {//
            return url.replace('w.h', '120.90');
        }
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    topViewStyle: {

    },
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap:'wrap' //换行没生效，求解
    }
});
//输出组件类
module.exports = BottomView;