import { View, Text, Image } from 'react-native'
import React from 'react'
import * as BoldIcons from 'react-native-heroicons/solid'
import * as Icons from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler'

const AllCourseCard = (props) => {
    const navigation = useNavigation();
    //console.log(props)
  return (
    <GestureHandlerRootView>
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('UnregisteredCourse', {
                title: props.title,
                imgUrl: props.image
            })
        }}
    >
    <View className="flex-row mt-2">
        <Image
            source={{
                uri: props.image
            }}
            className="h-16 w-16 rounded-md"
        />
        <View className="flex-col w-64">
            <Text numberOfLines={2} className="ml-2 text-sm" style={{fontFamily: "Inter_600SemiBold"}}>{props.title}</Text>
            <Text 
                numberOfLines={1} className="ml-2 text-gray-400 text-sm" style={{fontFamily: "Inter_400Regular"}}
                lineBreakMode='tail'
            >Patrecia Jones | AWS Certified Cloud Practitioner
            </Text>
            <View className="flex-row mt-1 ml-2 items-center">
                <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>{props.rating}</Text>
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
            </View>
            <View>
                <Text className="ml-2 text-sm" style={{fontFamily: "Inter_600SemiBold"}}>₹ {props.price}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
    </GestureHandlerRootView>
  )
}

export default AllCourseCard