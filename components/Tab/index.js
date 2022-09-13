import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'; 
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Task from '../Task';

const Tab = createMaterialTopTabNavigator();

const TabX=(props)=>{
  //props.taskItems
  let taskItems = props.taskItems;
  //const [taskItemsP1, setTaskItemsP1] = useState(['task3','task4']);
  
  const deleteTask = (index) =>{
    //TODO: continue from here
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    
    props.setTaskItems(itemsCopy);
    
  }
  
  
    return (
      <View style={styles.container}>
        
        {taskItems.map((item,index) => {
          
          return(
          <TouchableOpacity key ={index} 
          onPress={()=>deleteTask(index)}>
          <Task  task ={item}/>
          </TouchableOpacity>)
        })}
        
      </View>
    );
};

export default TabX;