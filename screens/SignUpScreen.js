import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { REGISTER_API } from '../components/utils';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState('');

    const signup = async() => {
        if(pass !== repass) {
            alert('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post(REGISTER_API, {
            name: name,
            email: email,
            password: pass,
            });
            if(res.status === 200) {
                alert('User Created');
                console.log(JSON.parse(res)._response)
                navigation.navigate('Login');
            }
            
        }
        catch(error) {
            console.log(error);
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
    <SafeAreaView>
        <View className="mt-12 flex-col items-center">
            <Text className="text-3xl text-blue-500" style={{fontFamily: "Inter_600SemiBold"}}>Sign Up</Text>
            <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Name'
                    onChangeText={(text) => {setName(text)}}
                />
            </GestureHandlerRootView>
            <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Email'
                    onChangeText={(text) => {setEmail(text)}}
                />
            </GestureHandlerRootView>
            <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Password'
                    onChangeText={(text) => {setPass(text)}}
                />
            </GestureHandlerRootView>
            <GestureHandlerRootView className="mt-4">
                <TextInput keyboardType='default' className='text-xl w-80 border-y-2 border-x-2 border-blue-500 rounded-md p-4 text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Re-Enter Password'
                    onChangeText={(text) => {setRePass(text)}}
                />
            </GestureHandlerRootView>
            <TouchableOpacity className="mt-5 rounded-md p-4 w-80 flex-col items-center bg-blue-500"
                onPress={() => {
                    signup();
                }}
            >
                <View className="">
                    <Text className="text-white text-xl" style={{fontFamily: "Inter_600SemiBold"}}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignUpScreen