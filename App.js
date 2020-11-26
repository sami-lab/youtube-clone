import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer ,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons} from '@expo/vector-icons';
import Home from './src/Components/Home';
import Explore from './src/Components/Explore';
import Subcribe from './src/Components/Subcribe';
import Search from './src/Components/Common/search';
import VideoPlayer from './src/Components/Common/VideoPlayer'

import {createStore} from 'redux'
import {Provider,useSelector} from 'react-redux'
import reducer from './src/Components/reducer/reducer'


const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
   headerColor: '#a9a9a9',
   iconColor: 'white',
   tabIcon:"white"
  },
};
const CustomWhiteTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
   headerColor: 'white',
   iconColor: 'black',
   tabIcon:"red"
  },
};
const store  = createStore(reducer)


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const RootHome=()=>{
  const {colors}= useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({  color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }
        else if (route.name === 'Subcribe') {
          iconName = 'subscriptions';
        }
        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size ={32} color={colors.tabIcon} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Subcribe" component={Subcribe} />
      </Tab.Navigator>
  )
}

export default ()=>{
  return <Provider store={store}>
       <Navigation/>
  </Provider>
}
export  function Navigation() {
 
  const {darkTheme}= useSelector(state=> state)
  return (  
    <NavigationContainer  theme={darkTheme?CustomDarkTheme: CustomWhiteTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
