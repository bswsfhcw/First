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

var MyCell = React.createClass({

    getDefaultProps() {//传参数
        return {
            leftIconName: '',
            leftTitle: '',
            rightIconName: '',
            rigthTitle: '',
        }
    },

    getInitialState() {
        return {
            isOn: false,//开关状态
        }
    },

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}  onPress={() => { alert('点了！') }}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{ uri: this.props.leftIconName }} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    //右边的内容   文字和图片只有一个
    rightSubView() {
        return (
            <View style={{flexDirection:'row' ,alignItems:'center'}}>
            {this.renderRightContent()}
            {/*箭头*/}
            <Image source={{uri:'qiabao'}} style={{width:8,height:13,marginRight:8,marginLeft:5}} />
            </View>
        );
    },
    //右边具体返回的值
    renderRightContent(){
        if(this.props.rightIconName.length == 0){//不返回图片
            return(
                <Text  style={{color:'gray'}}>{this.props.rigthTitle}</Text>
            );
        }else{//返回图片
            return(
                 <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
            );
        }
    },
});

const styles = StyleSheet.create({
    container: {
         //主轴方向
        flexDirection:'row',
        //主轴对齐
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:Platform.OS === 'ios' ?40 : 36,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,

    },
    leftViewStyle: {
        //主轴方向
        flexDirection:'row',
        //测轴居中
        alignItems:'center',
        //左外边距
        marginLeft:8,
    },
    leftTitleStyle: {
        fontSize:16
    },
    leftImgStyle: {//左边图片
        width: 30,
        height: 30,
        marginRight:6,
        borderRadius:12

    },
    rightViewStyle: {

    },
});
//输出组件类
module.exports = MyCell;