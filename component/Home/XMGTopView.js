import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ListView,
    Image,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入外部组件
var TopListView = require('./XMGTopListView');

//引入jscon
var TopMemu = require('../../LocalData/TopMenu.json');

var TopView = React.createClass({

    getInitialState() {//可改变的值
        return {
            //当前页码，默认：0
            activePage: 0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容*/}
                <ScrollView
                    horizontal={true}//水平排列
                    showsHorizontalScrollIndicator={false}//隐藏水平滚动条
                    pagingEnabled={true}//自动分页
                    //每一帧滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                >

                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码*/}
                <View style={styles.indicateViewStyle}>
                    {this.renderIndicate()}
                </View>
            </View>
        );
    },
    //ScrollView 内部组件
    renderScrollItem() {
        //组件数组
        var itemArr = [];
        //颜色数组
        var colorArr = TopMemu.data;
        for (var i = 0; i < colorArr.length; i++) {
            itemArr.push(

                <TopListView key={i}
                    dataArr={colorArr[i]}
                   
                />
                
            );
        }
        return itemArr;
    },
    renderIndicate() {
        var indicateArr = [], style;
        for (var i = 0; i < 2; i++) {
            //设置原点样式
            style = (i === this.state.activePage) ? { color: 'orange' } : { color: 'gray' };
            indicateArr.push(
                <Text key={i} style={[{ fontSize: 25 }, style]} >&bull;</Text>
            );
        }
        return indicateArr;
    },
    //每一帧滚动结束
    onAnimationEnd(e) {
        //求水平方向偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //求出当前页数
        var currentPage = Math.floor(offSetX / width);
        // alert(currentPage);
        //跟新状态机，重新绘制UI
        this.setState(
            {
                activePage: currentPage
            }
        );
        // alert(currentPage);
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    indicateViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20,
    }
});
//输出组件类
module.exports = TopView;