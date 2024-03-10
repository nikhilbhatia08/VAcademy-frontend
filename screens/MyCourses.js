import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import CourseCard from '../components/CourseCard';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

const courses = [
    {
        title: "React Native",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEJ90Fl6qXfpbmVGPgvOq9tmQRu-4ri5ztA&usqp=CAU',
        rating: 4.8,
        price: 3999
    },
    {
        title: "React Native",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqe4NGl7ai2EO2mAoWdxOBeZqtzBc40yBNhw&usqp=CAU=',
        rating: 4.8,
        price: 3999
    },
    {
        title: "React Native",
        image: 'data:image/jpeg;base64,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',
        rating: 4.8,
        price: 3999
    },
]

export default function MyCourses() {
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
    <SafeAreaView className="bg-white">
        <View className=" pt-16 pb-3 rounded-b-2xl flex-row bg-blue-500 items-center pl-4">
            <Text className="text-2xl text-white" style={{fontFamily: "Inter_600SemiBold"}}>MyCourses</Text>
        </View>
        <GestureHandlerRootView>
        <ScrollView
            contentContainerStyle={{height: 1470, paddingBottom: 250}}
        >
        <View className="pt-4 bg-white">
            <View className="flex-row justify-evenly">
                <View className="flex-col items-center">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_900Black"}}>24</Text>
                    <Text className=" text-sm text-gray-600" style={{fontFamily: "Inter_400Regular"}}>Courses</Text>
                </View>
                <View className="flex-col items-center">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_900Black"}}>04</Text>
                    <Text className="text-sm text-gray-600" style={{fontFamily: "Inter_400Regular"}}>Categories</Text>
                </View>
                <View className="flex-col items-center">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_900Black"}}>16</Text>
                    <Text className="text-sm text-gray-600" style={{fontFamily: "Inter_400Regular"}}>Ongoing</Text>
                </View>
                <View className="flex-col items-center">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_900Black"}}>08</Text>
                    <Text className="text-sm text-gray-600" style={{fontFamily: "Inter_400Regular"}}>Completed</Text>
                </View>
            </View>
            <View className="flex-col items-center">
            {
                courses.map((course, index) => {
                    return(
                        <View className="mb-3" key={index}>
                            <CourseCard imgUrl={course.image} key={index} Title={course.title} price={course.price}/>
                        </View>
                    )
                })
            }
            </View>
        </View>
        </ScrollView>
        </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})