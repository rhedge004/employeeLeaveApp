import React from 'react';
import {TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from "../../assets/theme";
import { Ionicons } from '@expo/vector-icons';
import Items from './items';
import Item from './menuItem';

const MainMenu = () => {
    return(
      <View style={styles.container}>
        {Object.values(Items).map((data)=>(
          <Item data={data} />
        ))}
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'space-evenly',
      width:'100%',
      backgroundColor:'white',
  },
  login:  {
      borderRadius:20,
      borderColor: 'black',
      padding: 20,
      borderWidth: 1,
      backgroundColor:'white',
      width:'95%'
  },
  input: {
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E8E7E9',
    marginBottom: 10,
  },
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
  footer:{
      alignContent:'center',
      justifyContent:'center',
      textAlign:'center',
      backgroundColor: theme.background,
      height: 70
  },
  header:{
      backgroundColor: theme.background,
      height: 70
  }
});

export default MainMenu;
