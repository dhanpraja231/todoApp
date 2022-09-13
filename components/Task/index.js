import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const Task = (props) =>{
    const task = props.task;
    return (
        <View style={styles.task}>

            <View style = {styles.taskTouchable}
            
            >
            <Text style={styles.textForTask}>{task}</Text>
            <View style={styles.checkBox}></View>

            </View>

        </View>

    )
}


export default Task;