import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import {theme} from "./assets/theme";
import MainMenu from './components/mainMenu';

export default function App() {
  const [logged,toggleLogin] = useState(false);
  const Splash = require('./assets/splash.png');
  return (
      <View style={styles.container}>
      {
      (!logged ?
        <>
          <View style={{margin:25}}>
            <Image
              style={{width: 260, height: 50}}
              source={Splash}
            />
          </View>
          <View style={styles.login}>
            <Text
              style={styles.text}
            >
              RD21 EM App Login
            </Text>
            <TextInput
              value={''}
              onChangeText={() => null}
              placeholder={'Employee ID'}
              style={styles.input}
            />
            <TextInput
              value={''}
              onChangeText={() => null}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={()=>toggleLogin(true)}
            >
              <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{margin:25}}>
            <Text style={{color:'white'}}>© RD21 MetalCraft 2020</Text>
          </View>
        </>
      :
        <>
          <View>
            <Button title={'Logout'} color={theme.primary} onPress={()=> toggleLogin(false)}/>
          </View>
          <MainMenu/>
        </>
       )}
      </View>
  );
}

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
      alignItems: 'center',
      backgroundColor: theme.primary,
      padding: 10,
      marginTop: 25,
      borderRadius: 12
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
