import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView} from 'react-native'; 
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task from '../Task';
import TabX from '../Tab';

// function TabA(props){
//   const [taskItemsP1, setTaskItemsP1] = useState(['task3','task4']);
  
//   const deleteTask = (index) =>{
//     //TODO: continue from here
//     let itemsCopy = [...taskItemsP1];
//     itemsCopy.splice(index,1);
//     setTaskItemsP1(itemsCopy);
//   }
//   let count =0;
//     return (
      
//       <View style={styles.container}>
//         <ScrollView>
        
//         {taskItemsP1.map((item,index) => {
          
//           return(
//           <TouchableOpacity key ={index} onPress={()=>deleteTask(index)}>
//           <Task  task ={ "new task"}/>
//           </TouchableOpacity>)
//         })}
//         <TouchableOpacity
//         onPress={()=>{

//           setTaskItemsP1([...taskItemsP1, 'newTask']);
//         }}
//         ><Text>press me</Text></TouchableOpacity>
//         </ScrollView>
//       </View>
      
//     );
// };



const Tab = createMaterialTopTabNavigator();

const TopTabs = (props) => {

  const [runOnce, setRunOnce] = useState(true);
  const [taskItemsP1, setTaskItemsP1] = useState([]);
  const [taskItemsP2, setTaskItemsP2] = useState([]);
  const [taskItemsP3, setTaskItemsP3] = useState([]);
  //console.log('runs1');
  if (typeof props.route.params !== "undefined"){
    let { taskName, priorityLevel } = props.route.params;
    //console.log('runs2');

  const addTaskToTab =(name,priority)=>{
    //console.log("priority: "+ priority);
    //console.log("task name: "+ name);
    if(runOnce && priority==="Priority 1"){
      setRunOnce(false); 
      //console.log('runs3');
      setTaskItemsP1([...taskItemsP1, name]);
    }
    else if(runOnce && priority==="Priority 2"){
      setRunOnce(false);
      //console.log('runs3');
      setTaskItemsP2([...taskItemsP2, name]);
      
    }
    else if(runOnce &&priority==="Priority 3"){
      setRunOnce(false);
      setTaskItemsP3([...taskItemsP3, name]);
      
    }
  }
  addTaskToTab(taskName,priorityLevel);
  
  
  }

    return (

    <NavigationContainer independent={true}>

    <Tab.Navigator style = {styles.tabNav}>
      <Tab.Screen name='Priority 1' children={()=><TabX taskItems={taskItemsP1} setTaskItems={setTaskItemsP1} setRunOnce={setRunOnce}/>} />
      <Tab.Screen name='Priority 2' children={()=><TabX taskItems={taskItemsP2} setTaskItems={setTaskItemsP2} setRunOnce={setRunOnce}/>} />
      <Tab.Screen name='Priority 3' children={()=><TabX taskItems={taskItemsP3} setTaskItems={setTaskItemsP3} setRunOnce={setRunOnce}/>}  />
    </Tab.Navigator>
    <TouchableOpacity style = {styles.sicrButton}
    onPress = {() => {
      props.navigation.navigate({
        name: 'EnterTask',
        params: {setRunOnce:setRunOnce,},
        merge: true,          
    });

    }}
    >
        <View style={styles.addTask}>
        <Text style={styles.addTaskText}>Add Task</Text>
        </View>

    </TouchableOpacity>

    </NavigationContainer>
  );
};
export default TopTabs;
