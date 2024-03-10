import { View, Text, SafeAreaView, Image } from 'react-native'
import React, {useState} from 'react'
import * as Icons from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, GestureHandlerRootView} from 'react-native-gesture-handler';
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const RegisterForMock = () => {
    const navigation = useNavigation();
    const [isRegistered, setIsRegistered] = useState(0); // will fetch from the backend
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
                <Text className=" ml-4 text-xl text-black" style={{fontFamily: "Inter_600SemiBold"}}>Mock Test</Text>
      </View>
      <View className=" ml-4 mt-5">
            
      </View>
      <View className="mt-2">
        <Image
            source={{
                uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }}
            className="h-40 w-[330px] rounded-lg ml-4"
        />
        <View className="flex-row items-center">
            <Text className="text-xl mt-3 ml-4 text-black" style={{fontFamily: "Inter_600SemiBold"}}>UPSC Mock Test</Text>
            <View className=" ml-4 mt-2 items-center rounded-sm bg-red-500 w-10">
                <Text className="">Live</Text>
            </View>
        </View>
        <View className="mt-2 ml-4 mr-2">
            <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi quisquam voluptatem mollitia molestiae, quae hic sequi sint vel maxime distinctio dicta culpa esse maiores qui ducimus recusandae perferendis consequatur!
            </Text>
        </View>
        <GestureHandlerRootView>
            <TouchableOpacity
                onPress={() => {
                    setIsRegistered(1);
                }}
            >
                {
                    isRegistered === 0 ? 
                    <View className="ml-4 mt-4 bg-blue-500 flex-col items-center mr-4 rounded-lg">
                        <Text className="text-xl text-white p-3" style={{fontFamily: "Inter_600SemiBold"}}>Register Now</Text>
                    </View>
                    :
                    <View className="ml-4 mt-4 bg-green-400 flex-col items-center mr-4 rounded-lg">
                        <Text className="text-xl text-white p-3" style={{fontFamily: "Inter_600SemiBold"}}>Registered</Text>
                    </View>
                }
            </TouchableOpacity>
        </GestureHandlerRootView>
        <GestureHandlerRootView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ContestScreen');
                }}
            >
                {
                    isRegistered === 1 ?
                    <View className="ml-4 mt-4 bg-blue-500 flex-col items-center mr-4 rounded-lg">
                        <View className="flex-row items-center">
                            <Text className="text-xl text-white p-3" style={{fontFamily: "Inter_600SemiBold"}}>Go To Contest</Text>
                            <Icons.ArrowRightIcon className="text-white" size={24}/>
                        </View>
                    </View>
                    :
                    <>
                    </>
                }
            </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  )
}

export default RegisterForMock