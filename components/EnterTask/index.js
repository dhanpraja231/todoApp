import React from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity,ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Radio from '../Radio';

const EnterTask = (props) =>{
  const [task, setTask] = React.useState("");
  const [priority, setPriority] = React.useState(0);
  const {setRunOnce} = props.route.params;

    const handleSetPriority = (priority)=>{
        setPriority(priority);
    }

    return (
        <SafeAreaView>
        <Text style={styles.inputDesc}>Enter Task Name </Text>

        <TextInput
            style={styles.input}
            onChangeText={setTask}
            value={task}
        />
        <Radio handlePriority= {handleSetPriority}/>
        <TouchableOpacity 
            onPress = {() => {
            if(task!==""){
            setRunOnce(true);
            //TODO: send data to home screen
            props.navigation.navigate({
                name: 'Home',
                params: {taskName:task,priorityLevel:priority},
                merge: true,          
            });}
            else{
                ToastAndroid.showWithGravity(
                    "Task Cannot be Empty",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
            }
            }}
    >

            <View style={styles.addTask}>
            <Text style={styles.addTaskText}>Add Task</Text>
            </View>

        </TouchableOpacity>
        
        </SafeAreaView>

    )
}


export default EnterTask;