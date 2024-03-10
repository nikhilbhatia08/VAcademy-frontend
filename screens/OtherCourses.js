import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Icons from "react-native-heroicons/outline";
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AllCourseCard from '../components/AllCourseCard';

const CategoryCourses = [
    {
        title: "Python",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        rating: 4.7,
        price: 3499,
    },
    {
        title: "Python",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        rating: 4.7,
        price: 3499,
    },
    {
        title: "Python",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        rating: 4.7,
        price: 3499,
    },
]

const OtherCourses = (props) => {
    const navigation = useNavigation();
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_100Thin,
        Inter_600SemiBold
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    //console.log(props.route.params.title)
  return (
    <SafeAreaView className="bg-white h-screen">
        <View className="mt-12 ml-4 flex-row items-center">
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
      </View>
      <View className="ml-4 mt-3">
        <Text className="text-black text-3xl" style={{fontFamily: "Inter_600SemiBold"}}>
            {props.route.params.title}
        </Text>
        <View className="mt-2">
            {
                CategoryCourses.map((course, index) => {
                    return (
                        <View className="mt-1" key={index}>
                            <AllCourseCard title={course.title} image={course.image} price={course.price} rating={course.rating}/>
                        </View>
                    )
                })
            }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OtherCourses