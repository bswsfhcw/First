import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image,
    Platform,

} from 'react-native';

/**
 **/
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

//全局
var cols = 5;
var cellW = Platform.OS === 'ios' ? 70 :60;
var cellH =70;
var vmargin = (width-cellW*cols) / (5 + 1);








//引入jscon


var TopListView = React.createClass({

    getDefaultProps() {
        return {
            dataArr: []
        }
    },

    getInitialState() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                 contentContainerStyle={styles.contentViewStyle}
                 scrollEnabled={false}
            />
        );
    },
    //具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('点击了！')}} style={styles.cellStyle} >
            <View style={{justifyContent: 'center',alignItems:'center'}}>
                <Image source ={{uri:rowdata.image}} style={{width:52,height:52}} />
                <Text>{rowdata.tittle}</Text>
            </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width, 
    },
    cellStyle:{
        backgroundColor:'white',
        width:cellW,
        height:cellH,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:(width-cellW*cols)/(cols+1),
    }
});
//输出组件类
module.exports = TopListView;