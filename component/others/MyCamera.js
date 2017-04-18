import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import  ImagePicker from 'react-native-image-picker'; //第三方相机
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}

var MyCamera = React.createClass({

    render() {
        // alert(this.props.url);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.openMycamera()}>
                    <Text style={styles.welcome}>
                        相机&相册
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },
    openMycamera (){
        ImagePicker.showImagePicker(photoOptions,(response) =>{
            alert('response:'+response);
            if (response.didCancel){
                return response;
            }

        })
    }

});

const styles = StyleSheet.create({
   container: {
        // flex: 1,
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
//输出组件类
module.exports = MyCamera;