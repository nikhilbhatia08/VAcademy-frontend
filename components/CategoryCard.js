import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import * as BoldIcons from 'react-native-heroicons/solid';
import * as Icons from 'react-native-heroicons/outline';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

const CategoryCard = (props) => {
    const navigation = useNavigation();
    const isRegistered = false;
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
    <GestureHandlerRootView>
    <TouchableOpacity className='mr-3 h-56 w-56 bg-white'
        onPress={()=>{
          if(isRegistered){
            navigation.navigate('Course', {
                id: props.id,
                title: props.Title,
                imgUrl: props.imgUrl,
            })
          }
          else {
            navigation.navigate('UnregisteredCourse', {
                id: props.id,
                title: props.Title,
                imgUrl: props.imgUrl,
            })
          }
        }}
    >
      <Image 
        source={{
            uri: props.imgUrl,
        }}
        className='h-32 w-56 rounded-md'
      />
      <View className="flex-col">
        <Text numberOfLines={2} className='pt-2 text-black text-lg' style={{fontFamily: 'Inter_400Regular'}}>{props.Title}</Text>
        <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>Patrecia Jones</Text>
        <View className="flex-row mt-1 items-center">
                <Text>4.7</Text>
                <View className="ml-1">
                    <BoldIcons.StarIcon className="text-yellow-400" size={16}/>
                </View>
                <View className="ml-1">
                    <BoldIcons.StarIcon className="text-yellow-400" size={16}/>
                </View>
                <View className="ml-1">
                    <BoldIcons.StarIcon className="text-yellow-400" size={16}/>
                </View>
                <View className="ml-1">
                    <BoldIcons.StarIcon className="text-yellow-400" size={16}/>
                </View>
                <View className="ml-1">
                    <Icons.StarIcon className="text-yellow-400" size={16}/>
                </View>
                <View>
                  <Text className="pl-1 text-gray-500">(2,735)</Text>
                </View>
            </View>
        <Text className="pt-1 text-blue-500 font-bold" style={{fontFamily: 'Inter_400Regular'}}>₹{props.price} /-</Text>
      </View>
    </TouchableOpacity>
    </GestureHandlerRootView>
  )
}

export default CategoryCard