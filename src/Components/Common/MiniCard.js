import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';

const MiniCard= (props)=>{
    const {uri,title,channelTitle,VideoId}= props;
    const {colors}= useTheme();
      const textColor= colors.iconColor;
    const navigation = useNavigation();
   return (
        <TouchableOpacity style={styles.root}  onPress={()=>navigation.navigate("VideoPlayer",{VideoId,title,channelTitle})}>
             <Image source={{uri:uri}} style={{width:"45%",height:100}}/> 
             <View>
                 <Text style={{...styles.mytext,color:textColor}} ellipsizeMode="tail" numberOfLines={3}>{title}</Text>            
                 <Text style={{fontSize: 12,color: textColor}}>{channelTitle}</Text>             
             </View>
        </TouchableOpacity>
   );
};
const styles= StyleSheet.create({
    root:{
        flexDirection:"row",
        margin:10,
        marginBottom: 0,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderBottomWidth: 0.5,
        borderColor: "white",
        justifyContent: "space-between"
     },
    mytext:{
        fontSize:15,
        letterSpacing: -1,
        fontWeight: "600",
        width: Dimensions.get("screen").width/2
    }
});
export default MiniCard;