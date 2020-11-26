import React from 'react';
import { StyleSheet, View ,Text,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayer =({route})=>{
   const {VideoId} = route.params;
   return <View style={{flex:1}}>
     <View style={{width: '100%',height: Dimensions.get('screen').height}}>
         <WebView 
         javaScriptEnabled={true}
         downStorageEnabled={true}
         source={{ uri: `https://www.youtube.com/watch?v=${VideoId}` }} />
     </View>
              
     <View style={{borderBottomWidth: 1}}/>
   </View>
}
const styles= StyleSheet.create({
   mytext:{
      fontSize:20,
      letterSpacing: -1,
      color: "#212121",
      fontWeight: "600",
      margin: 9,
      width: Dimensions.get("screen").width-50
  }
})
export default VideoPlayer;