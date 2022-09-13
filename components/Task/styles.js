import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    task: {
      shadowRadius:10,
      marginVertical:5,
      borderWidth: 3,
      marginHorizontal:3,
      padding:10,
      borderRadius: 10,
      borderColor: '#254272',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    textForTask:{
        width:'92%',
        maxWidth: '92%',
        flexWrap: 'wrap',
        color:'gray',
    },
    taskTouchable:{
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    checkBox:{
        
        width: 24,
        height: 24,
        borderWidth: 3,
        borderColor: '#01d7b6',
        borderRadius: 9,
        backgroundColor: '#01b2e3',
    }
    

});
export default styles;