import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TaskListScreen,
  TaskDetailsScreen,
  TaskCreationScreen,
} from '../screens';
import type {RootStackParamList} from './app-navigator.types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TaskList">
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);