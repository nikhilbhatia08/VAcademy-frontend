import { SafeAreaView, Text, Image, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as Icons from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { GET_TOP, GET_CATS } from '../components/utils';

const allcats = [
    "UPSC",
    "Development",
    "Business",
    "Finance",
    "Design",
    "Marketing",
    "IT & Software",
    "Personal Development",
    "Photography",
    "Health & Fitness",
]

const mocks = [
    {
        title: "UPSC Mock Test",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
        title: "IIT-JEE Mock Test",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqe4NGl7ai2EO2mAoWdxOBeZqtzBc40yBNhw&usqp=CAU=",
    },
]

const login = true;

const Home = () => {
    const navigation = useNavigation();
    const [allcats, setAllCats] = useState([]);
    const [details, setDetails] = useState('');
    const fun = async() => {
        try {
            const value = await AsyncStorage.getItem('user');
            if(value !== null) {
                setDetails(JSON.parse(value))
                console.log(value)
            }
        } catch(e) {
            console.log(e)
        }
    }

    const handlFetch = async() => {
        try{
            const res = await axios.get(GET_CATS)
            //console.log(res.data)
            setAllCats(res.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    navigation.addListener("beforeRemove", (e) => {
        if(!login) {
            return ;
        } else {
            e.preventDefault();
        }
    });

    useEffect(() => {
        handlFetch();
        fun();
    }, []);
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_100Thin,
        Inter_600SemiBold
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      //console.log(AsyncStorage)
  return (
    <SafeAreaView className=" bg-white">
        <StatusBar backgroundColor='#fff' />
        <GestureHandlerRootView>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flexGrow: 0, marginBottom: 64}}

        >
        <View className="pt-10 flex-row">
            <View className="flex-row px-5 items-center">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('UserScreen')
                    }}
                >
                    <Image 
                        source={{
                            uri: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
                        }}
                        className='h-12 w-12 p-4 bg-gray-300 rounded-full'
                    />
                </TouchableOpacity>
                <View className="flex-col px-3">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: 'Inter_900Black'}}>Hi, {details.name}👋</Text>
                    <Text className="text-gray-500">Welcome Back!</Text>
                </View>
                <View className="ml-16">
                    <TouchableOpacity>
                        <Icons.BellAlertIcon color="#2196F3"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View className='flex-row items-center space-x-2 pb-2 mx-4 pt-5'>
            <View className='flex-row space-x-2 flex-1 bg-white shadow-xl shadow-black items-center rounded-3xl p-3' >
                <Icons.MagnifyingGlassIcon color="#2196F3" size={30}/>
                <TextInput keyboardType='default' className='flex-1 text-xl text-blue-500' style={{fontFamily: 'Inter_400Regular'}} placeholder='Search'/>
                <Icons.AdjustmentsHorizontalIcon color="#2196F3" />
            </View>
        </View>
        <View className="pt-5">
            <View className="ml-4">
                <View className="flex-row items-center justify-between">
                    <Text className="text-xl text-black" style={{fontFamily: "Inter_600SemiBold"}}>Categories</Text>
                    <TouchableOpacity
                        className="mr-4"
                        onPress={() => {
                            navigation.navigate('AllCats')
                        }}
                    >
                        <Text className="text-blue-500 text-lg" style={{fontFamily: "Inter_400Regular"}}>See All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                <View className="flex-row mt-4 mb-5 items-center">
                                <TouchableOpacity
                                    className="bg-blue-500 p-2.5 mr-2 rounded-3xl"
                                >
                                    <Text className="text-white px-2" style={{fontFamily: "Inter_400Regular"}}>All</Text>
                                </TouchableOpacity>
                    {
                        allcats.map((cat, index) => {
                            return (
                                index < 7 ? 
                                <TouchableOpacity
                                key={index}
                                    className="bg-white p-2 mr-2 border-x-[1px] border-y-[1px] border-blue-500 rounded-3xl"
                                    onPress={() => {
                                        navigation.navigate('SpecificCategory', {
                                            id: cat.id,
                                            category: cat
                                        })
                                    }}
                                >
                                    <Text className="text-blue-500 px-2" style={{fontFamily: "Inter_400Regular"}}>{cat.name}</Text>
                                </TouchableOpacity>
                                :
                                <View key={index}>
                                </View>
                            )
                        })
                    }
                </View>
                </ScrollView>
            </View>
            <View className="flex-col">
                <Text className="ml-4 text-xl text-black" style={{fontFamily: "Inter_600SemiBold"}}>Mock Tests</Text>
                <View className="">
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            paddingTop: 19,
                        }}
                        showsHorizontalScrollIndicator={false}
                    >
                    {
                        mocks.map((mock, index) => {
                            return(
                                <TouchableOpacity key={index}
                                
                                    onPress={() => {
                                        navigation.navigate('MockScreen')
                                    }}
                                >
                                <View className="mb-6 ml-2" key={index}>
                                    <View className="bg-white rounded-lg mx-2">
                                        <Image
                                            source={{
                                                uri: mock.image
                                            }}
                                            className="h-32 w-52 rounded-lg"
                                        />
                                        <Text className="text-xl mt-2" style={{fontFamily: "Inter_600SemiBold"}}>{mock.title}</Text>
                                    </View>
                                    <View className=" ml-3 mt-1 items-center rounded-sm bg-red-500 w-10">
                                        <Text className="text-white">Live</Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </ScrollView>
                </View>
            </View>
            <View className="ml-4">
                <Categories/>
            </View>
        </View>
        </ScrollView>
        </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default Home