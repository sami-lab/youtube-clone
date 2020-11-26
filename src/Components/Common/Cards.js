import React from 'react';
import { StyleSheet,Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native';
import { MaterialIcons,Entypo,AntDesign,Ionicons} from '@expo/vector-icons';
import { useNavigation,useTheme } from '@react-navigation/native';
const Cards =(props)=>{
      const {colors}= useTheme();
      const textColor= colors.iconColor;
      const {uri,title,channelTitle,VideoId}= props;
      const navigation = useNavigation();
      return (
      <TouchableOpacity style={styles.root}  onPress={()=>navigation.navigate("VideoPlayer",{VideoId,title,channelTitle})}>
          <Image source={{uri:uri}} style={{width:"100%",height:250}}/> 
            <View style= {styles.container}>
                <MaterialIcons style ={{marginLeft: 3}} name="account-circle" size={38} color={textColor}/> 
                 <View style={{marginLeft: 10}}>
                      <Text style={{...styles.mytext,color:textColor}} ellipsizeMode="tail" numberOfLines={2}>{title}</Text>
                      <Text style={{color: textColor}}>{channelTitle}</Text>
                </View>
            </View>
      </TouchableOpacity>
)};

const styles= StyleSheet.create({
      root:{
         marginVertical: 2,
         elevation: 5,
         shadowColor: '#000',
         shadowOffset: { width: 0.5, height: 0.5 },
         shadowOpacity: 0.5,
         shadowRadius: 3,
         borderBottomWidth: 0.5,
         borderColor: "white",
      },
      container :{
            flexDirection:"row",
            margin:5,
           
       },
       mytext:{
        fontSize:18,
        letterSpacing: -1,
        fontWeight: "600",
        width: Dimensions.get("screen").width-50
    } 
})
export default Cards;