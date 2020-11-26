import React from 'react';
import { StyleSheet, View ,Text,Dimensions,FlatList,ScrollView} from 'react-native';
import {useSelector} from 'react-redux'
import Header from './Common/Header';
import { MaterialIcons} from '@expo/vector-icons';
import { useTheme} from '@react-navigation/native';
import Cards from './Common/Cards';
const LittleCard =(props)=>{
      const {colors}= useTheme();
      const textColor= colors.iconColor;
   return (
       <View style={styles.root}>
        <View style={{flexDirection: "row",alignContent: "center"}}>
         <MaterialIcons style ={{marginLeft: 3,marginTop: 6}} name={props.name} size={32} color={textColor}/> 
         <Text style={{...styles.textInput,color: textColor}}>{props.title}</Text>
         </View>
       </View>
     
   );
}
const Explore =(props)=>{
   const {data,loading}= useSelector(state=> state);
   let screen;
    if(data){
       screen=  <FlatList
               data={data}
               keyExtractor ={item=> item.id.videoId}
       renderItem={({item})=>{
         return  <Cards 
                VideoId={item.id.videoId}
                uri={item.snippet.thumbnails.high.url}
                title={item.snippet.title} 
                channelTitle={item.snippet.channelTitle}
                />
       }}
       />
    }
    else {
      screen = <ScrollView>
      <Cards title= "title text" channelTitle="Channel Title" uri="https://images.unsplash.com/photo-1562526109-878e3d276ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>   
      <Cards title= "title text" channelTitle="Channel Title" uri="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>   
      </ScrollView>
    }
   return (
   <View style={{flex:1}}>
   <ScrollView>
    <Header/> 
     <View style={{flexDirection: "row",justifyContent: "space-around",flexWrap: "wrap"}}>
      <LittleCard title="Trending" name="photo-filter"/>
      <LittleCard title="Music" name="music-note"/>
      <LittleCard title="Gaming" name="videogame-asset"/>
      <LittleCard title="News" name="fiber-new"/>
     </View>
     <Text style={{margin: 8,borderBottomWidth: 1,fontSize: 20}}>Trending Videos</Text>
     {screen}
     </ScrollView>
   </View>
   )
}
const styles =StyleSheet.create({
   root:{
      backgroundColor: 'red',
      borderRadius: 4,
      height: 40,
      width:  Dimensions.get("screen").width/2-30,
      marginTop: 10,
   },
   textInput:{
      textAlign: 'center',
      fontSize: 20,
      marginTop: 6,
      marginLeft: 5
  }
});
export default Explore;