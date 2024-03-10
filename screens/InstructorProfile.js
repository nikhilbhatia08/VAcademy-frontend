import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import {useNavigation} from '@react-navigation/native'
import * as BoldIcons from 'react-native-heroicons/solid';
import * as Icons from 'react-native-heroicons/outline';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

const InstructorProfile = () => {
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
    <SafeAreaView>
        <View className=" pt-12 pb-4 flex-row bg-white items-center pl-4">
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
            <Text className="text-2xl ml-8" style={{fontFamily: "Inter_400Regular"}}>
                Instructor
            </Text>
        </View>
        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default InstructorProfile