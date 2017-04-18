import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    BackAndroid,
    ToastAndroid
} from 'react-native';

var firstClick = 0;
/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon


var HomeDetail = React.createClass({
    getDefaultProps() {
        return {
            //回调函数
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.popToHome() }}>
                    <Text style={styles.welcome}>测试跳转</Text>
                </TouchableOpacity>
                {this.receive()}
            </View>

        );
    },
    popToHome() {
        this.props.navigator.pop();
    },
    receive() {
        alert(this.props.data);
    },
    //组件挂载的时候调用
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.back);
    },
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.back)
    },
    back() {
        var navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        } else {
            var timestamp = (new Date()).valueOf();
            if (timestamp - firstClick > 500) {
                firstClick = timestamp;
                ToastAndroid.show('双击退出', ToastAndroid.SHORT);
                return true;
            } else {
                return false;
            }
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'

    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20
    }
});
//输出组件类
module.exports = HomeDetail;