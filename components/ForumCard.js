import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Icons from 'react-native-heroicons/outline';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'

const ForumCard = (props) => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView>
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('ViewPost', {
                title: props.title,
                image: props.image,
                name: props.name,
                postedAt: props.postedAt,
                description: props.description,
                images: props.images,
                likes: props.likes,
                comments: props.comments,
            })
        }}
    >
    <View className="bg-white mr-4 flex-col mb-3 rounded-xl">
      <View className="flex-row pt-3 pl-3 items-center">
        <Image
            source={{
                uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
            }}
            className="h-12 w-12 rounded-full"
        />
        <View className="flex-col ml-2">
            <Text numberOfLines={1} className="text-lg" style={{fontFamily: "Inter_600SemiBold"}}>
                c# in a Nutshell
            </Text>
            <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>
                John Doe • 1h ago
            </Text>
        </View>
      </View>
      <View className="p-3">
        <Text numberOfLines={2} className="text-sm text-gray-500" style={{fontFamily: "Inter_400Regular"}}>
            So, i've been using c# for a whole decade now, if you guys know how to break the boring feeling of using the same language for a long time, please let me know.
        </Text>
      </View>      
      <View className="mt-1 mb-3 ml-3 mr-3 flex-row justify-between items-center">
        <View className="flex-row items-center">
            <Icons.HandThumbUpIcon className="text-gray-400" size={24}/>
            <Text className="text-xs text-gray-400">120 Likes</Text>
        </View>
        <View className="flex-row items-center">
            <Icons.ChatBubbleLeftIcon className="text-gray-400" size={24}/>
            <Text className="text-xs text-gray-400">12 Comments</Text>
        </View>
        <View className="flex-row items-center">
            <Icons.EyeIcon className="text-gray-400" size={24}/>
            <Text className="text-xs text-gray-400">120 Views</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    </GestureHandlerRootView>
  )
}

export default ForumCard