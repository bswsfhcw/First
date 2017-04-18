import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    WebView,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//引入jscon


var Shop = React.createClass({

    getInitialState() {
        return {
            detailUrl: 'http://www.baidu.com',
        }
    },

    render() {
        // alert(this.props.url);
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{ uri: this.state.detailUrl }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },
    //导航条
    renderNavBar() {
        return (
            <View style={styles.navOutViewStyle}>

                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>商家</Text>
                <TouchableOpacity onPress={() => { alert('点了！') }} style={styles.rightViewStyle}>
                    <Image source={{ uri: 'qiabao' }} style={styles.navImageStyle} />
                </TouchableOpacity>
            </View>

        );
    }
});

const styles = StyleSheet.create({
    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',
        //设置主轴方向
        flexDirection: 'row',
        //垂直居中---》侧轴对齐方式
        alignItems: 'center',
        //主轴方向居中
        justifyContent: 'center',
    },
    navImageStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },
    leftViewStyle: {
        //绝对定位
        position: 'absolute',
        left: 10,
        bottom: 20,
    },
    rightViewStyle: {
        //绝对定位
        position: 'absolute',
        right: 10,
        bottom: 20,
    },
    container: {
        flex: 1,

    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 20
    }
});
//输出组件类
module.exports = Shop;