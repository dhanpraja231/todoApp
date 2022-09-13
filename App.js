import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import TopTabs from './components/TopTabs';
import EnterTask from './components/EnterTask';

function EnterTaskScreen({route,navigation}) {
  return (
    <EnterTask navigation ={navigation} route={route} />
  );
}

function HomeScreen({route,navigation}) {
  return (
    <TopTabs navigation ={navigation} route={route} />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer initialRouteName="EnterTask">
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ taskName:"init", priorityLevel:"priority 2", }}/>
        <Stack.Screen name="EnterTask" component={EnterTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({

  tabNav:{
    marginTop:"5%", 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});