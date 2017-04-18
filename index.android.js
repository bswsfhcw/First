import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Linking,
    Navigator
} from 'react-native';
import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';
/** 提供入口即可**/
//引入外部js
import QQLoginView from './QQLoginView';
import ImageView from './ImageView';
import TextInputView from './TextInputView';
import TextView from './TextView';
import TouchableDemo1 from './TouchableDemo1';
import ScrollViewDemo1 from './js/ScrollViewDemo1';
import ListViewBeer from './js/listView/ListViewBeer';
import ListViewJiugongge from './js/listView/ListViewJiugongge';
import ListViewCar from './js/listView/ListViewCar';
import ToastMyAndroidUse from './component/Native/ToastMyAndroidUse'
import MyCamera from './component/others/MyCamera'
import MyBarcodeScanner from './component/others/MyBarcodeScanner'
import MyBarcodeScannerUniversal from './component/others/MyBarcodeScannerUniversal'

import _updateConfig from './update.json';
const { appKey } = _updateConfig[Platform.OS];

//引入外部组件类
var Main = require('./component/Main/XMGMain');
var LaunchImage = require('./component/Main/XMGlaunchImage');
class SimpleNavigationAppQQLogin extends Component {
    componentWillMount() {
        if (isFirstTime) {
            Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
                { text: '是', onPress: () => { throw new Error('模拟启动失败,请重启应用') } },
                { text: '否', onPress: () => { markSuccess() } },
            ]);
        } else if (isRolledBack) {
            Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }
    doUpdate = info => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?'+hash, [
                { text: '是', onPress: () => { switchVersion(hash); } },
                { text: '否', },
                { text: '下次启动时', onPress: () => { switchVersionLater(hash); } },
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    checkUpdate = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    { text: '确定', onPress: () => { info.downloadUrl && Linking.openURL(info.downloadUrl) } },
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本' + info.name + ',是否下载?\n' + info.description, [
                    { text: '是', onPress: () => { this.doUpdate(info) } },
                    { text: '否', },
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎使用热更新服务
        </Text>
                <Text style={styles.instructions}>
                    这是版本一 {'\n'}
                    当前包版本号: {packageVersion}{'\n'}
                    当前版本Hash: {currentVersion || '(空)'}{'\n'}
                </Text>
                <TouchableOpacity onPress={this.checkUpdate}>
                    <Text style={styles.instructions}>
                        点击这里检查更新21
          </Text>
                </TouchableOpacity>
            </View>
        )
        /*return (
            // <MyBarcodeScannerUniversal/>//二维码Andriod && IOS
            // <MyBarcodeScanner/>//Andriod二维码
            // <MyCamera/>//摄像头
            // <ToastMyAndroidUse/>//调用原生模块
            // <QQLoginView/>//QQ登陆
            // <ImageView/> //图片
            // <TextInputView/>//输入框
            // <TextView/>//textView布局
            // <TouchableDemo1/>//触摸事件
            // <ScrollViewDemo1/>// 图片轮播
            // <ListViewBeer/>//listView 展示啤酒列表
            // <ListViewJiugongge/>//listView 展示九宫格
            // <ListViewCar/>//listView 展示汽车吸顶效果
            // <Main/>//电商项目入口
            <Navigator
                initialRoute={{ name: '启动页', component: LaunchImage }}
                configureScence={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator} />;
                }}
            />
        )*/
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('FirstReDemo', () => SimpleNavigationAppQQLogin);
