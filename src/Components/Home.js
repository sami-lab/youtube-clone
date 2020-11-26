import React from 'react';
import { StyleSheet, View,ScrollView ,FlatList} from 'react-native';
import Header from './Common/Header';
import Cards from './Common/Cards';
import {useSelector} from 'react-redux'
 const  Home =()=> {
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
       <View style ={styles.container}>
        <Header/> 
        {screen}
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
   flex:1
  },
});
export default Home;