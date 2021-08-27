import React from "react"
import {Alert, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import { connect } from "react-redux";

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#fafafd',
        flex:1,
        padding:20
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        margin:5,
        marginTop:10
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent: 'center'
    },
    storeText:{
        color:'#f93d70',
        borderColor:'#f93d70',
        borderWidth:1.5,
        width:120,
        padding:5,
        textAlign:'center',
        borderRadius:20
    },
    card:{
        backgroundColor:'#f4f4f4',
        height:150,
        borderRadius:8,
        padding:10,
        marginBottom:10
    }
})

class ScheduleDetails extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                
                <Text style={styles.header}>STORE</Text> 
                <View style={styles.card}>
                    <View style={styles.row}>
                        <View>
                            <Image
                            style={{width:60, height:60, borderRadius:5}}
                            source={{uri: this.props.DATA[0].image}}
                            />
                        </View>
                        <View style={{marginHorizontal:15}}>
                            <Text style={{fontWeight:'bold', fontSize:17, marginBottom:5,}}>{this.props.DATA[0].destination}</Text>
                            <Text style={{color:'#a0a0a0'}}>{this.props.DATA[0].address}</Text>
                            <TouchableHighlight style={{marginTop:30}}>
                                <Text style={styles.storeText}>View Maps</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

                <Text style={styles.header}>TIME SCHEDULE</Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        DATA: state.DATA
    }
  }

export default connect(mapStateToProps)(ScheduleDetails);