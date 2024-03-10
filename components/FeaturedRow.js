import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import CategoryCard from './CategoryCard'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { GET_TOP } from './utils';

const FeaturedRow = (props) => {
    const navigate = useNavigation();
    const [cs, setCs] = useState([]);
    const handleFetch = async() => {
        // try{
        //     const res = await axios.get(GET_TOP);
        //     setCs(res.data);
        // }
        // catch(error) {
        //     console.log(error);
        // }
    }
    useEffect(() => {
        handleFetch();
    }, [])
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
    <View className="">
        <View className= "flex-row justify-between items-center">
            <Text className="text-xl text-black" style={{fontFamily: 'Inter_600SemiBold'}}>
                {props.title}
            </Text>  
            <GestureHandlerRootView>
                <TouchableOpacity
                    onPress={() => {
                        navigate.navigate('OtherCourses', {
                            title: props.title
                        })
                    }}
                >
                <View className="flex-row items-center pr-3">
                    <Text className="pr-1 text-lg text-blue-500" style={{fontFamily: 'Inter_400Regular'}}>See all</Text>
                </View>
                </TouchableOpacity>
            </GestureHandlerRootView>
        </View>
        <GestureHandlerRootView>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingTop: 19,
            }}
            showsHorizontalScrollIndicator={false}
        >
        {
            props.courses.map((course, index) => {
                return(
                    <View className="mb-6" key={index}>
                        <CategoryCard id={course.id} imgUrl={course.img_url} key={index} Title={course.name} price={course.price}/>
                    </View>
                )
            })
        }
        </ScrollView> 
        </GestureHandlerRootView>
              
    </View>
  )
}

export default FeaturedRow