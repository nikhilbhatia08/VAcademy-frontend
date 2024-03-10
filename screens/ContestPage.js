import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Icons from 'react-native-heroicons/outline';
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import {TouchableOpacity, GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import QuestionCard from '../components/QuestionCard';

const questions = [
    {
        id: 1,
        title: "How to create new react app in react js using npx command",
        options: [
            {
                option: "npx-react",
                ans: 0
            },
            {
                option: "npx-react-app",
                ans: 0
            },
            {
                option: "npx-app",
                ans: 0
            },
            {
                option: "npx-create-react-app",
                ans: 1
            },
        ]
    },
    {
        id: 2,
        title: "How to create new react app in react js using npx command",
        options: [
            {
                option: "npx-react",
                ans: 0
            },
            {
                option: "npx-react-app",
                ans: 0
            },
            {
                option: "npx-app",
                ans: 0
            },
            {
                option: "npx-create-react-app",
                ans: 1
            },
        ]
    }
]

let UserResponseMap = new Map();

const ContestPage = () => {
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
    console.log(UserResponseMap)
  return (
    <SafeAreaView
        className="bg-white h-screen"
    >
        <View className="mt-12 ml-4 flex-row items-center">
                <GestureHandlerRootView>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                            UserResponseMap.clear();
                        }}
                    >
                        <View className="rounded-full p-1 bg-blue-500">
                            <Icons.ArrowLeftIcon className="text-white" size={32}/>
                        </View>
                    </TouchableOpacity>
                </GestureHandlerRootView>
                <Text className=" ml-4 text-xl text-black" style={{fontFamily: "Inter_600SemiBold"}}>Conetst</Text>
        </View>
        <View className="ml-4">
            {
                questions.map((question, index) => {
                    return (<QuestionCard key={index} mp={UserResponseMap} idx={index} id={question.id} title={question.title} options={question.options}/>)
                })
            }
        </View>
    </SafeAreaView>
  )
}

export default ContestPage