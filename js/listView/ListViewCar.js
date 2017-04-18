import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
    ListView,  
    Image,  
    TouchableOpacity  
} from 'react-native';  

/**
 但是遗憾的是，在Android平台上不支持吸顶效果
 **/
var Car = require('../../json/car.json');  
  
var ListViewCar = React.createClass({  
  getInitialState(){  
    return{  
      ds: new ListView.DataSource({  
        getSectionData: (dataBlob, sectionID) => dataBlob[sectionID],  
        getRowData: (dataBlob, sectionID, rowID) => dataBlob[sectionID + ':' + rowID],  
        rowHasChanged: (r1, r2) => r1 !== r2,  
        sectionHeaderHasChanged:(s1, s2) => s1 !== s2  
      })  
    }  
  },  
  componentDidMount(){  
    var jsonData = Car.data;  
    var dataBlob = {}, sectionIDs = [], rowIDs = [], cars = [];  
    for(var i=0; i<jsonData.length; i++){  
      sectionIDs.push(i);  
      dataBlob[i] = jsonData[i].title;  
      cars = jsonData[i].cars;  
      rowIDs[i] = [];  
      for(var j=0; j<cars.length; j++){  
        rowIDs[i].push(j);  
        dataBlob[i+':'+j] = cars[j];  
      }  
    }  
    this.setState({  
      ds: this.state.ds.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)  
    });  
  },  
  render() {  
    return (  
        <View style={styles.outerViewStyle}>  
          <View style={styles.headerViewStyle}>  
            <Text style={{color:'white', fontSize:20}}>tableview吸顶效果Demo</Text>  
          </View>  
          <ListView  
              dataSource={this.state.ds}  
              renderRow={this.renderRow}  
              renderSectionHeader={this.renderSectionHeader}  
          />  
        </View>  
    );  
  },  
  renderRow(row){  
    return(  
        <TouchableOpacity activeOpacity={0.5}>  
          <View style={styles.rowStyle}>  
            <Image source={{uri:'danjianbao'}} style={styles.rowImageStyle}/>  
            <Text style={{marginLeft:8}}>{row.name}</Text>  
          </View>  
        </TouchableOpacity>  
    );  
  },  
  renderSectionHeader(sectionData, sectionID){  
    return(  
        <View style={styles.sectionHeaderViewStyle}>  
          <Text style={{marginLeft:8, color:'white'}}>{sectionData}</Text>  
        </View>  
    );  
  }  
});  
  
const styles = StyleSheet.create({  
  outerViewStyle:{  
    flex:1  
  },  
  headerViewStyle:{  
    height:44,  
    backgroundColor:'orange',  
    justifyContent:'flex-end',  
    alignItems:'center'  
  },  
  rowStyle:{  
    flexDirection:'row',  
    alignItems:'center',  
    padding:8,  
    borderBottomColor:'#EEEEEE',  
    borderBottomWidth:0.5  
  },  
  rowImageStyle:{  
    width:60,  
    height:60,  
  },  
  sectionHeaderViewStyle:{  
    backgroundColor:'#BBBBBB',  
    height:20,  
    justifyContent:'center'  
  }  
});  
module.exports = ListViewCar;