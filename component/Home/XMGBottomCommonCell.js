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


var BottomCommonCell = React.createClass({

    getDefaultprops() {
        return {
            leftIcon: '',
            leftTitle: '',
            rightTitle: '',
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={() =>alert('点了')}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{ uri: this.props.leftIcon }} style={{ width: 23, height: 23,marginRight:5 }} />
                    <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>

                    <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={{ uri: 'shuangjianbao' }} style={{ width: 8, height: 13, marginRight: 8,marginLeft:5 }} />
                </View>
            </View>
            </TouchableOpacity>

        );
    }
});

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',//次轴对齐方式
        //设置对齐方式
        justifyContent:'space-between',
        //设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,


    },
    leftViewStyle: {
        flexDirection: 'row',//改变主轴方向
        alignItems: 'center',
        marginLeft:8
    },
    rightViewStyle: {
        flexDirection: 'row',//改变主轴方向
        alignItems: 'center',
    },

});
//输出组件类
module.exports = BottomCommonCell;