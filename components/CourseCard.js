import { View, Text, TouchableOpacity, Image, Animated, StyleSheet, ProgressBarAndroidBase } from 'react-native'
import React from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import ProgressBar from 'react-native-progress/Bar';
import * as SolidIcons from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';


const CourseCard = (props) => {
    const navigation = useNavigation();
    // in mycourses database there will be course id with which i will check whether the user has registered for the course or not
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
    <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Course', {
                id: props.id,
                title: props.Title,
                imgUrl: props.imgUrl,
            })
        }}
    className=' mt-3 h-40 w-80 bg-white shadow-xl shadow-black rounded-xl'>
        <View className="flex-row items-center">
            <Image 
                source={{
                    uri: props.imgUrl,
                }}
                className='mt-4 mx-2 h-20 w-32 rounded-md'
            />
            <View className="mt-2 ml-2 flex-col flex-shrink">
                <Text numberOfLines={1} className="text-blue-500 text-2xl" style={{fontFamily: 'Inter_600SemiBold'}}>{props.Title}</Text>
                <View className="flex-row items-center mt-2">
                    <Icons.UserCircleIcon className="text-gray-400" size={19}/>
                    <Text className="text-gray-400">Patrecia Jones</Text>
                </View>
            </View>
       </View>
      <View className="flex-row items-center justify-between">
        <Text className='pt-3 pl-1 bottom-1 text-black text-lg left-1' style={{fontFamily: 'Inter_900Black'}}>Course Progress</Text>
        <View className="flex-row items-center justify-between pt-2">
            <Text className="text-gray-400 pr-6" style={{fontFamily: 'Inter_400Regular'}}>70% Complete</Text>
        </View>
      </View>
      <View className="pl-2 pt-1">
        <ProgressBar progress={0.7} width={287} height={3} color="#2196F3" />
      </View>
      
    </TouchableOpacity>
  )
}

export default CourseCard