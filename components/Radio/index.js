import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
const Radio = (props) => {
  const [checked, setChecked] = useState(0);
  
  let gender = ["Priority 1", "Priority 2","Priority 3"];
  props.handlePriority(gender[checked]);

  return (
    <View>
      <View style={styles.btn}>
        {gender.map((gender, key) => {
          return (
            <View key={gender}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../images/radio_Checked.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../images/radio_Unchecked.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      
      
      
    </View>

  );
};


export default Radio;