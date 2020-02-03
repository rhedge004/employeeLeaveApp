import React from 'react';
import {TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from "../../assets/theme";
import { Ionicons } from '@expo/vector-icons';


const Item = ({data}) => {
    return (
    <>
          <TouchableOpacity
            style={styles.button}
            onPress={()=> null}>
                <Ionicons name={data.icon} size={50} color={data.color} />
                <Text style={{color: data.color,fontSize:15}}>{data.text}</Text>
          </TouchableOpacity>
    </>);
};


const styles = StyleSheet.create({
  button:{
      backgroundColor:theme.gray,
      height:140,
      width:140,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 20
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    width:'100%',
    color:'gray',
  },
});

export default Item;
