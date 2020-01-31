import {StyleSheet} from "react-native";

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

export default styles;
