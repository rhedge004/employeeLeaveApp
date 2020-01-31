import React from 'react';
import {TextInput, View, Text, Button, StyleSheet} from 'react-native';
import {theme} from "../../assets/theme";

const MainMenu = () => {
    return(
      <View style={styles.login}>
          <Text>Main Menu!</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
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
