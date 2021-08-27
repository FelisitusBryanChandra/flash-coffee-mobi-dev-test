// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Schedule from './src/Screens/Schedule';
import ScheduleDetails from './src/Screens/ScheduleDetails';

const HomeStack = createNativeStackNavigator();



export default () => (
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
);