/*
Android
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  //震动
  Vibration,
  View
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

class MyBarcodeScanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: '扫描结果 Barcode',
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
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
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
});
//输出组件类
module.exports = MyBarcodeScanner;