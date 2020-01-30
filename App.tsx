import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
import {theme} from "./assets/theme";
import Login from './components/login';

export default function App() {
  const [logged,isLogged] = useState(false);
  return (
      <View style={styles.container}>
        <Text
          numberOfLines={5}
          style={styles.text}
        >
          Welcome to Employee Leave App!
        </Text>
        <TextInput
          value={''}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={''}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          color={theme.primary}
          style={styles.button}
          onPress={()=>isLogged(true)}
        />
        {(logged ? <Login/> : null)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '90%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    marginBottom: 10,
  },
  button:{
    borderRadius: 100,
    width:'100'
  },
  text: {
    fontSize: 20,
    margin:20,
    width:'100%',
  }
});
