// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Schedule from './src/Screens/Schedule';
import ScheduleDetails from './src/Screens/ScheduleDetails';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const HomeStack = createNativeStackNavigator();

const initialState ={
DATA:[ {
  id:0,
  day:'Wednesday',
  date:'7',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  destination:'Mediterania',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  scheduleTime:'08.00 - 17.00',
},
{
  id:1,
  day:'Thursday',
  date:'8',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 2',
  scheduleTime:'09.00 - 19.00'
},
{
  id:2,
  day:'Friday',
  date:'9',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 3',
  scheduleTime:'09.00 - 19.00',

},{
  id:3,
  day:'Monday',
  date:'12',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 4',
  scheduleTime:'09.00 - 19.00'
},{
  id:4,
  day:'Tuesday',
  date:'13',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 5',
  scheduleTime:'09.00 - 19.00'
},{
  id:5,
  day:'Wednesday',
  date:'14',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 6',
  scheduleTime:'09.00 - 19.00'
},{
  id:6,
  day:'Thursday',
  date:'15',
  month:'April',
  year:'2021',
  image:'https://ik.imagekit.io/tvlk/blog/2020/05/Ascott-Sudirman-Jakarta.jpeg',
  address:'Main Lobby Lt 5 Apartemen Boulevard',
  destination:'Mediterania 7',
  scheduleTime:'09.00 - 19.00'
},
]
}

const reducer = (state = initialState) =>{
  return state
}

const store = createStore(reducer)

export default () => (
  <Provider store={store}>
  <NavigationContainer>
      <HomeStack.Navigator>
          <HomeStack.Screen 
          name="Home" 
          component={Home} 
          options={
            {
              headerShown:false
            }
          } />
          <HomeStack.Screen 
          name="Schedule" 
          component={Schedule}
          options={{
            title:'UPCOMING SCHEDULE',
            headerStyle:{
              backgroundColor:'#fadb0c'
            },
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerTitleAlign:'center'
          }} />

          <HomeStack.Screen
          name="ScheduleDetails"
          component={ScheduleDetails}
          options={{
            headerStyle:{
              backgroundColor:'#fadb0c' 
            },
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerTitleAlign:'center'
          }}
          />
      </HomeStack.Navigator>
  </NavigationContainer>
  </Provider>
);