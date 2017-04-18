import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断当前运行的系统
    Navigator,
    AppState
} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/** -------导入外部组件类-------**/
import TabNavigator from 'react-native-tab-navigator';
import codePush from 'react-native-code-push'
//引入外部组件类
var Home = require('../Home/XMGHome');
var Mine = require('../Mine/XMGMine');
var Shop = require('../Shop/XMGShop');
var More = require('../More/XMGMore');


var Main = React.createClass({
    //初始化函数 变量可以改变的 充当状态机

    getInitialState() {
        return {
            selectedTab: 'home'
        }
    },

    componentDidMount() {
        // AppState.addEventListener("change", (newState) => {
        //     alert("新版本:"+newState);
        //     // newState === "active" && codePush.sync();
        // });
    },
    render() {
        return (
            <View style={styles.container} >
                <TabNavigator>
                    {/*--首页--*/}
                    {this.renderTabBarItem('首页', 'danjianbao', 'qiabao', 'home', '首页', Home)}
                    {/*--商家--*/}
                    {this.renderTabBarItem('商家', 'danjianbao', 'qiabao', 'shop', '商家', Shop)}
                    {/*--我的--*/}
                    {this.renderTabBarItem('我的', 'danjianbao', 'qiabao', 'mine', '我的', Mine)}
                    {/*--更多--*/}
                    {this.renderTabBarItem('更多', 'danjianbao', 'qiabao', 'more', '更多', More, '10')}
                </TabNavigator>
            </View>
        );
    },
    //每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}//传递变量要加{}
                renderIcon={() => <Image source={{ uri: iconName }} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{ uri: selectedIconName }} style={styles.iconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}//气泡
            >
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScence={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator} />;
                    }}
                />
            </TabNavigator.Item>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25

    },
    selectedTitleStyle: {
        color: 'orange'
    }
});
//输出组件类
module.exports = Main;