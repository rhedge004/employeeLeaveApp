import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Items from './items';
import {theme} from "../../assets/theme";
const NoProfile = require('../../assets/noprofile.jpg');
import { Ionicons } from '@expo/vector-icons';

const MainMenu = () => {
    return(
      <View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePicture}
            source={NoProfile}
          />
          <View style={styles.profileBody}>
              <Text style={{color:'white',fontSize:25}}>Juan dela Cruz</Text>
              <Text style={{color:theme.gray,fontSize:15}}>Please select an action below.</Text>
          </View>
        </View>
        <View  style={styles.itemsContainer}>
          {Object.values(Items).map((data)=>(
            <TouchableOpacity
            style={styles.button}
            onPress={()=> null}>
                <Ionicons name={data.icon} size={50} color={data.color} />
                <Text style={{color: data.color,fontSize:15,textAlign:'center'}}>{data.text}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.footer}>
              <Text style={{color:'white'}}>© RD21 MetalCraft 2020</Text>
          </View>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
  profileContainer: {
    display:'flex',
    padding:10,
    alignItems:'flex-start',
    flexDirection:'row',
    width:'100%',
    backgroundColor: theme.background,
    borderBottomWidth:5,
    borderBottomColor:theme.primary
  },
  profileBody:{
    flex:1
  },
  profilePicture:{
    height:70,
    width:70,
  },
  itemsContainer: {
      flex:1,
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'space-evenly',
      width:'100%',
      backgroundColor: theme.white,
  },
  button:{
      backgroundColor:theme.gray,
      height:125,
      width:125,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 20
  },
  footer: {
    alignSelf:'flex-end',
    width:'100%',
    color:'black',
    backgroundColor:theme.background,
    marginTop:90,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: theme.primary,
    borderTopWidth: 5
  }
});

export default MainMenu;
