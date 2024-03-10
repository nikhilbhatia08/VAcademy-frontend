import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Icons from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const allcats = [
    "UPSC",
    "Development",
    "Business",
    "Finance",
    "Design",
    "Marketing",
    "IT & Software",
    "Personal Development",
    "Photography",
    "Health & Fitness",
]


const AllCats = () => {
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
  return (
    <>
        <SafeAreaView
            className="bg-white h-full"
        >
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
                <View>
                    <Text className="text-2xl ml-4" style={{fontFamily: "Inter_400Regular"}}>Categories</Text>
                </View>
            </View>
            <View className="bg-white ml-4">
                {
                    allcats.map((cat, index) => {
                        return (
                            <View key={index} className="mt-7">
                                <GestureHandlerRootView>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('SpecificCategory', {
                                                category: cat,
                                            })
                                        }}
                                    >
                                        <Text className="text-lg" style={{fontFamily: "Inter_400Regular"}}>{cat}</Text>
                                    </TouchableOpacity>
                                </GestureHandlerRootView>
                            </View>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    </>
  )
}

export default AllCats