import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  FlatList,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useTheme } from '@react-navigation/native';
import axios from 'axios';
import MiniCard from './MiniCard';
import Constant from 'expo-constants';

const search = (props) => {
  const { colors } = useTheme();
  const textColor = colors.iconColor;
  const [input, setInput] = useState('');
  // const [data,setData]= useState(null);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);
  const [error, seterror] = useState(null);
  // const [loading,setLoading]= useState(false)
  const FetchData = () => {
    Keyboard.dismiss();
    dispatch({ type: 'loading', payload: true });
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&type=video&key=AIzaSyDQBJK-4MQBEoTzI21VvdCMW7ii5c-Pf6g`;
    axios
      .get(url)
      .then((res) => {
        seterror(null);
        dispatch({ type: 'add', payload: res.data.items });
        // setData(res.data.items);
        dispatch({ type: 'loading', payload: false });
      })
      .catch((err) => {
        dispatch({ type: 'loading', payload: false });
        seterror(err);
      });
  };

  let screen;
  if (data) {
    screen = (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <MiniCard
              VideoId={item.id.videoId}
              uri={item.snippet.thumbnails.default.url}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
            />
          );
        }}
        onRefresh={() => FetchData()}
        refreshing={loading}
      />
    );
  }
  if (loading) screen = <ActivityIndicator size="large" color="#0000ff" />;
  if (error) {
    screen = Alert.alert(`${error}`);
  }
  return (
    <View style={styles.root}>
      <View
        style={{ ...styles.container, backgroundColor: colors.headerColor }}
      >
        <Ionicons
          style={{ marginLeft: 3, marginTop: 6 }}
          onPress={() => props.navigation.goBack()}
          name="md-arrow-back"
          size={32}
          color={textColor}
        />
        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Search YouTube"
          placeholderTextColor="#A9A9A9"
          onSubmitEditing={FetchData}
        />
        <Ionicons
          style={{ marginLeft: 3, marginTop: 6 }}
          name="md-send"
          size={32}
          color={textColor}
          onPress={FetchData}
        />
      </View>
      {screen}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    width: Dimensions.get('screen').width - 5,
  },
  textInput: {
    width: '70%',
    height: '80%',
    backgroundColor: '#e6e6e6',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
export default search;
