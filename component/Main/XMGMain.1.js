import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断当前运行的系统
    Navigator
} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

/** -------导入外部组件类-------**/
import TabNavigator from 'react-native-tab-navigator';

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

    render() {
        return (
            <View style={styles.container} >
                <TabNavigator>
                    {/*--首页--*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image source={{ uri: 'danjianbao' }} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{ uri: 'qiabao' }} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Navigator
                            initialRoute={{ name: "首页", component: Home }}
                            configureScence={() => {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />;
                            }}
                        />
                    </TabNavigator.Item>
                    {/*--商家--*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'shop'}
                        title="商家"
                        renderIcon={() => <Image source={{ uri: 'danjianbao' }} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{ uri: 'qiabao' }} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'shop' })}
                    >
                        <Navigator
                            initialRoute={{ name: "商家", component: Shop }}
                            configureScence={() => {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />;
                            }}
                        />
                    </TabNavigator.Item>
                    {/*--我的--*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title="我的"
                        renderIcon={() => <Image source={{ uri: 'danjianbao' }} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{ uri: 'qiabao' }} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'mine' })}
                    >
                        <Navigator
                            initialRoute={{ name: "我的", component: Mine }}
                            configureScence={() => {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />;
                            }}
                        />
                    </TabNavigator.Item>
                    {/*--更多--*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'more'}
                        title="更多"
                        renderIcon={() => <Image source={{ uri: 'danjianbao' }} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={{ uri: 'qiabao' }} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'more' })}
                    >
                        <Navigator
                            initialRoute={{ name: "更多", component: More }}
                            configureScence={() => {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />;
                            }}
                        />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
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
});
//输出组件类
module.exports = Main;