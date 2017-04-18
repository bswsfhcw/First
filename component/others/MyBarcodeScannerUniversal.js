/*
Android && IOS
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  //震动
  Vibration,
  View,
  Platform,
} from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-universal'
class MyBarcodeScannerUniversal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: '扫描结果 BarcodeUniversal',
      torchMode: 'off',
      type: '',
    };
  }

  barcodeReceived(e) {
    //两次扫描不一样才执行一下操作
    if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();
    this.setState({
      barcode: e.data,
      text: `${e.data} (${e.type})`,
      type: e.type,
    });
  }

  render() {
    let scanArea = null
    if (Platform.OS === 'ios') {//调试区别IOS Android
      scanArea = (
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}>
          {scanArea}
        </BarcodeScanner>
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
  camera: {
    flex: 1
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
});
//输出组件类
module.exports = MyBarcodeScannerUniversal;