import React from 'react';
import { StyleSheet,Text, View ,Switch} from 'react-native';
import { MaterialIcons,AntDesign,Ionicons} from '@expo/vector-icons';
import { useNavigation,useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'

import Constant from 'expo-constants'
 const Header= ()=> {
   const dispatch= useDispatch();
   const {darkTheme}= useSelector(state=> state);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const mycolor= colors.iconColor;
  const backcolor=  colors.headerColor;
  const toggleSwitch = () => {
    dispatch({type:"ToggleTheme",payload:!darkTheme});
  }
  return (
    <View style={{...styles.root, backgroundColor:backcolor}}>
       <View style={styles.container}> 
           <AntDesign style ={{marginLeft: 3}} name="youtube" size={32} color="red"/> 
           <Text style={styles.mytext}>Youtube</Text>
       </View>
       <View style={{...styles.container,width:'40%', justifyContent: 'space-around'}}>
       <Ionicons style ={{marginLeft: 3}} name="md-videocam" size={32} color={mycolor}/> 
       <Ionicons style ={{marginLeft: 3}} onPress={()=> navigation.navigate("search")} name="md-search" size={32} color={mycolor}/> 
       <MaterialIcons style ={{marginLeft: 3}} name="account-circle" size={32} color={mycolor}/> 
       <Switch value={darkTheme}  onValueChange={toggleSwitch}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
      marginTop: Constant.statusBarHeight,
      height: 45,
      flexDirection:"row",
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: { width: 0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
  },
  container :{
    flexDirection:"row",
    margin:5, 
   },
mytext:{
    fontSize:22,
    marginTop:2,
    letterSpacing: -1,
    marginLeft:3,
    color: "#212121",
    fontWeight: "bold"
} 
});
export default Header;