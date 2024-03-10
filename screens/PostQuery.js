import { View, Text, SafeAreaView, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Icons from "react-native-heroicons/outline";
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as BoldIcons from 'react-native-heroicons/solid';
import axios from 'axios';
import { BASE_URL, POST_FORUM } from '../components/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostQuery = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const get = async() => {
        try {
            const value = await AsyncStorage.getItem('user');
            const data = JSON.parse(value);
            //const ii = await AsyncStorage.getItem('id');
            console.log(AsyncStorage.getAllKeys())
            if(value !== null) {
                setName(data.name);
                setId(data.id);
            }
        } catch(e) {
            console.log(e);
        }
    }

  const handleSubmit = async() => {
    try {
      const res = await axios.post(POST_FORUM, {
        img_url: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UF1000,1000_QL85_.jpg",
        id: id,
        name: name,
        title: title,
        description: description,
      });
      if(res.status === 200) {
        navigation.goBack();
      }
    }
    catch(error) {
      console.log(error);
    }
  }
  useEffect(() => [
    get()
  ], [])
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_100Thin,
    Inter_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
    }
  return (
    <SafeAreaView>
        <View className=" pt-12 pb-4 flex-row items-center pl-4">
            <GestureHandlerRootView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <View className="rounded-full p-1 bg-blue-500">
                        <Icons.ArrowLeftIcon className="text-white" size={32}/>
                    </View>
                </TouchableOpacity>
            </GestureHandlerRootView>
            <Text className="text-2xl ml-4" style={{fontFamily: "Inter_600SemiBold"}}>Ask a Question</Text>
        </View>
        <View className="mt-5 mr-4 ml-4 flex-col">
            <View>
                <Text className="text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Title</Text>
                <TextInput
                    className="rounded-lg bg-white p-3 mt-2 border-gray-300"
                    placeholder="Enter the title of your question"
                    style={{fontFamily: "Inter_400Regular"}}
                    onChangeText={(text) => {setTitle(text)}}
                />
            </View>
            <View className="mt-7">
                <Text className="text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Description</Text>
                <TextInput
                    className="rounded-lg bg-white p-3 mt-2 border-gray-300 h-52"
                    placeholder="Enter the description of your question"
                    multiline
                    numberOfLines={4}
                    editable
                    style={{fontFamily: "Inter_400Regular"}}
                    onChangeText={(text) => {setDescription(text)}}
                />
            </View>
            <GestureHandlerRootView>
            <TouchableOpacity
                onPress={() => {
                    handleSubmit();
                }}
            >
            <View className="mt-7 mr-1 flex-row justify-end">
                <View className="bg-blue-500 p-2 rounded-full">
                    <BoldIcons.PaperAirplaneIcon className="text-white" size={32}/>
                </View>
            </View>
            </TouchableOpacity>
            </GestureHandlerRootView>
        </View>
    </SafeAreaView>
  )
}

export default PostQuery