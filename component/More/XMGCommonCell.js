import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    Switch,

} from 'react-native';

/**
 * 启动图片
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/**导入外部组件 */

var CommonCell = React.createClass({

    getDefaultProps() {
        return {
            title: '',//标题
            isSWitch: false,//是否展示开关
            rightTitle:'',
        }
    },

getInitialState(){
    return{
        isOn:false,//开关状态
    }
},

    render() {
        return (
            <TouchableOpacity onPress={() => { alert('点了！') }}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{ marginLeft: 8 }}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    //cell右边显示的内容
    renderRightView() {
        //判断开关
        if (this.props.isSWitch) {
            return (
                <Switch 
                value ={this.state.isOn === true}
                onValueChange={() =>{this.setState({isOn:!this.state.isOn})}}//点击取反
                    style={{ marginRight: 8 }}
                />
            );
        } else {
            return (
                <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.rightTitle()} 
                <Image source={{ uri: 'shuangjianbao' }} style={{ width: 8, height: 13, marginRight: 8 }} />
                </View>
            );
        }
    },
    //判断是否有右侧标题
    rightTitle(){
        if (this.props.rightTitle.length > 0) {
            return(
                <Text style={{color:'gray',marginRight:3,}}>{this.props.rightTitle}</Text>
            );
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 44 : 35,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 5,
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: 'space-between',
        //垂直居中 侧轴
        alignItems: 'center',
    },
});
//输出组件类
module.exports = CommonCell;