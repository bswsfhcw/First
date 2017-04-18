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
var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem() {
        //定义数组
        var itemArr = [];
        //遍历
        for (var i = 0; i < MiddleData.length; i++) {
            //取出单独的数据
            var data = MiddleData[i];
            //创建组件装入数组
            itemArr.push(
                <InnerView key={i}
                    iconName={data.iconName}
                    title={data.title}
                />
            );
        }
        return itemArr;
    }
});


var InnerView = React.createClass({
    getDefaultProps() {//传参数
        return {
            iconName: '',
            title: '',
        }
    },
    render() {
        return (
            <View style = {{justifyContent :'center',alignItems:'center', marginLeft:15,marginRight:15}}>
                <Image source={{ uri: this.props.iconName }} style={{ width: 30, height: 20,marginTop:5 }} />
                <Text style={{marginBottom:5}}>{this.props.title}</Text>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',

    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20
    }
});
//输出组件类
module.exports = MineMiddleView;