import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';


class Schedule extends React.Component {
  state = {
    items:{
        "2021-04-07": [
            {
              name: 'Mediterania',
              height: 95,
              scheduleTime:'08.00 - 18.00'
            },
        ],
        '2021-04-08':[
            {
                name:'Mediterania 2',
                height: 95,
                scheduleTime:'08.00 - 17.00'
            }
        ],
        '2021-04-09':[
            {
                name:'Mediterania 3',
                height: 95,
                scheduleTime:'09.00 - 19.00'
            }
        ]
      }
  };

  
  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text style={{fontWeight:'bold'}}>NO SCHEDULE</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 0;
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: '',
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, {height: item.height}]}
        onPress={() => this.props.navigation.navigate('ScheduleDetails')}
      >
        <Text style={{fontSize:25, fontWeight:'bold'}}>{this.props.DATA[0].destination}</Text>
        <Text style={{fontSize:15}}>{item.scheduleTime}</Text>
      </TouchableOpacity>
    );
  }

  componentDidMount(){
    console.log(this.props.DATA)
  }

  render() {
    return (
        <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={'2021-04-07'}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            showClosingKnob={true}
        />
      
    );
  }

}

function mapStateToProps(state){
  return{
      DATA: state.DATA
  }
}

export default connect(mapStateToProps)(Schedule);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 25,
    marginTop:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:'gray',
    borderStyle:'dashed',
    marginRight:10,
    // backgroundColor:'blue',
    alignItems:'center'
  }
});