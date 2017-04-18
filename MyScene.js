import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
'use strict';
export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={{fontStyle:'italic'}}>next 场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>last 页面</Text>
        </TouchableHighlight>    
      </View>
    )
  }
}