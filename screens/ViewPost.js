import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import * as Icons from "react-native-heroicons/outline";
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import * as BoldIcons from 'react-native-heroicons/solid';

const ViewPost = (props) => {
    const navigation = useNavigation();
    const [liked, setLiked] = useState(0);
    const [likes, setLikes] = useState(props.route.params.likes.length);
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
        <GestureHandlerRootView>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 64,
            }}
        >
        <View className=" pt-12 pb-4 flex-row items-center pl-4">
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
            <Text className="text-2xl ml-4" style={{fontFamily: "Inter_600SemiBold"}}>View Post</Text>
        </View>
        <View className="flex-col mt-2 mr-4 ml-4">
            <View className="bg-white p-2 rounded-lg flex-col">
                <View className="flex-row pt-2 pl-2 items-center">
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
                        }}
                        className="h-12 w-12 rounded-full"
                    />
                    <View className="flex-col ml-2">
                        <Text numberOfLines={1} className="text-lg" style={{fontFamily: "Inter_600SemiBold"}}>
                            {props.route.params.name}
                        </Text>
                        <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>
                            {props.route.params.postedAt}
                        </Text>
                    </View>
                </View>
                <View className="mt-3 pl-2 pr-2">
                    <Text className="text-xl text-black" style={{fontFamily: "Inter_600SemiBold"}}>{props.route.params.title}</Text>
                </View>
                <View className="mt-2 pl-2 pr-3">
                    <Text className="text-sm text-gray-400" style={{fontFamily: "Inter_400Regular"}}>{props.route.params.description}</Text>
                </View>
                <GestureHandlerRootView>
                    <TouchableOpacity
                        onPress={() => {
                            if(liked === 0) {
                                setLiked(1)
                                setLikes(likes + 1)
                            }
                            else {
                                setLiked(0)
                                setLikes(likes - 1)
                            }
                        }}
                    >
                        <View className="mt-2 flex-row items-center pl-2">
                            {
                                liked === 0 ? <Icons.HandThumbUpIcon className="text-gray-400" size={24}/> : <BoldIcons.HandThumbUpIcon className="text-blue-500" size={24}/>
                            }
                            <Text className="ml-1 text-lg">{likes}</Text>
                        </View>
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
            <View className="mt-4 bg-white rounded-lg p-4 flex-col">
                <Text className="text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Add Comment</Text>
                <TextInput
                    className="mt-2 p-2 bg-gray-100 rounded-lg h-24"
                    placeholder="Well I think..."
                />
                <GestureHandlerRootView>
                    <TouchableOpacity
                        onPress={() => {
                            //alert("Comment Added!")
                        }}
                    >
                        <View className="mt-2 flex-row justify-center items-center bg-blue-500 p-3 rounded-lg">
                            <Text className="text-lg text-white" style={{fontFamily: "Inter_600SemiBold"}}>Add Comment</Text>
                        </View>
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
            <View className="mt-2">
                <Text className="text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Replies ({props.route.params.comments.length})</Text>
            </View>
            <View className="flex-col">
                {
                    props.route.params.comments.map((comment, index) => {
                        return (
                            <View key={index} className="bg-white rounded-lg p-3 mt-3">
                                <View className="flex-row items-center">
                                    <Image
                                        source={{
                                            uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
                                        }}
                                        className="h-12 w-12 rounded-full"
                                    />
                                    <View className="flex-col ml-2">
                                        <Text numberOfLines={1} className="text-lg" style={{fontFamily: "Inter_600SemiBold"}}>{comment.name}</Text>
                                        <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>{comment.postedAt}</Text>
                                    </View>
                                </View>
                                <View className="mt-2">
                                    <Text className="text-sm" style={{fontFamily: "Inter_400Regular"}}>{comment.comment}</Text>
                                </View>
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

export default ViewPost