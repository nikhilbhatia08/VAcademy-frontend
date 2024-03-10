import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity, GestureHandlerRootView} from 'react-native-gesture-handler'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const UserResponseMap = new Map();

const QuestionCard = (props) => {
    const [ans, setAns] = useState(-1);
    const [opt, setOpt] = useState(-1);
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
    <View className="mt-3 ml-2 flex-col mr-4">
      <Text className="text-xl" style={{fontFamily: "Inter_600SemiBold"}}>{props.idx + 1}. {props.title}</Text>
      <View className="mt-2 flex-col">
            {
                props.options.map((option, index) => {
                    return (
                        <GestureHandlerRootView key={index}>
                        <TouchableOpacity
                            onPress={() => {
                                setAns(index);
                                setOpt(index);
                                if(option.ans === 1) {
                                    if(props.mp.has(props.id)) {
                                        props.mp.set(props.id, [index, 1]);
                                    }
                                    else {
                                        props.mp.set(props.id, [index, 1]);
                                    }
                                }
                                else {
                                    props.mp.set(props.id, [index, 0]);
                                }
                                console.log(props.mp)
                            }}
                        >
                        <View className="flex-row items-center mt-2">
                            {
                                (props.mp.has(props.id) && props.mp.get(props.id)[0] === index) || ans === index ? (
                                    <View className="h-6 w-6 rounded-full bg-blue-500">
                                    </View>
                                ) : 
                                <View className="h-6 w-6 rounded-full border-blue-500 border-x-[2px] border-y-[2px]">
                                </View>
                            }
                            <Text className="ml-2 text-lg" style={{fontFamily: "Inter_400Regular"}}>{option.option}</Text>
                        </View>
                        </TouchableOpacity>
                        </GestureHandlerRootView>
                    )
                })
            }
      </View>
    </View>
  )
}

export default QuestionCard