import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_API } from '../components/utils';


const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tt, setTT] = useState(false);
    const login = async() => {
        try {
            const res = await Axios.post(LOGIN_API, {
                email: email,
                password: pass,
            });
            if(res.status === 200) {
                console.log(res.data);
                await AsyncStorage.setItem('user', JSON.stringify(res.data));
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
            setTT(true);
        }
    }

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
    <SafeAreaView className="h-[1000px] bg-white">
        <View className="mt-10 mr-4 flex-col items-center">
            <Image
                source={{
                    uri: 'data:image/jpeg;base64,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'
                }}
                className="h-56 w-56"
            />
        </View>
        <View className="mt-3 ml-5">
            <Text className="text-2xl" style={{fontFamily: "Inter_600SemiBold"}}>Login</Text>
        </View>
        <View className="mt-3 flex-col items-center">
            <GestureHandlerRootView>
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Login'
                    onChangeText={(text) => setEmail(text)}
                />
            </GestureHandlerRootView>
            {
                tt === true ? 
                <>
                <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-red-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Password'
                    secureTextEntry
                    onChangeText={(text) => setPass(text)}
                />
                </GestureHandlerRootView>
                <Text className="text-red-500 text-md" style={{fontFamily: "Inter_400Regular"}}>Wrong Password</Text>
                </>
                :
                <>
                <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Password'
                    secureTextEntry
                    onChangeText={(text) => setPass(text)}
                />
                </GestureHandlerRootView>
                </>
            }
            {/* <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Password'
                    secureTextEntry
                    onChangeText={(text) => setPass(text)}
                />
            </GestureHandlerRootView> */}
            <TouchableOpacity className="mt-5 rounded-md p-4 w-80 flex-col items-center bg-blue-500"
                onPress={() => {
                    login();
                }}
            >
                <View className="">
                    <Text className="text-white text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Sign In</Text>
                </View>
            </TouchableOpacity>
            <View className="mt-3 flex-row items-center">
                <Text className="" style={{fontFamily: "Inter_400Regular"}}>Don't Have An Account </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Signup')
                    }}
                >
                    <Text className="ml-1 text-blue-500 text-lg" style={{fontFamily: "Inter_600SemiBold"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen