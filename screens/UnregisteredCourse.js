import { View, Text, SafeAreaView, Dimensions, StyleSheet, StatusBar, Image, Animated, Easing } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import { GestureHandlerRootView, NativeViewGestureHandler, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Icons from "react-native-heroicons/outline";
import * as BoldIcons from "react-native-heroicons/solid";
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { GET_COURSE } from '../components/utils';
//import  RazorpayCheckout  from 'react-native-razorpay';
const RazorpayCheckout =  require('react-native-razorpay');

const { height, width } = Dimensions.get('window');


const imgURL =
  'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UF1000,1000_QL85_.jpg';

var options = {
    description: 'Credits towards consultation',
    image: imgURL, //require('../../images.png')
    currency: 'INR', //In USD - only card option will exist rest(like wallet, UPI, EMI etc) will hide
    key: 'rzp_test_yMVBlgAnRpPvqo',
    amount: '5000',
    external: {
        wallets: ['paytm']
    },
    name: 'Acme Corp',
    order_id: '1234', //Replace this with an order_id(response.data.orderId) created using Orders API.
    prefill: {
      email: 'hasan@example.com',
      contact: '8790372393',
      name: 'Hasan',
    }, //if prefill is not provided then on razorpay screen it has to be manually entered.
    theme: {color: '#53a20e'},
}

function setOrientation() {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {

      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    }
    else {
      
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    }
}

const UnregisteredCourse = (props) => {
    const navigation = useNavigation();
    const [show, setShow] = useState(-1);
    const video = React.useRef(null);
    const [data, setData] = useState(null);
    const [cobs, setCobs] = useState([]);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const handleFecth = async() => {
            try{
                const res = await axios.get(GET_COURSE + props.route.params.id);
                setData(res.data);
                console.log(res.data)
                setCobs(res.data.courseobjs);
            }
            catch(error) {
                console.log(error)
            }
    }
    useEffect(() => {
        handleFecth();
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

    const onPressBuy = () => {
        console.log(RazorpayCheckout.default)
          RazorpayCheckout.default.open(options)
            .then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
              console.log(error)
            });
    }

    const slide = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }
  return (
        data === null ? <></>:
    <SafeAreaView className="bg-white">
        <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
        />
        <GestureHandlerRootView>
        <ScrollView
            style={{flexGrow: 0, marginBottom: 20, paddingBottom: 20}}
            
        >
        <View className=" pt-12 pb-4 flex-row bg-white items-center pl-4">
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
        </View>
        <View className="bg-white object-cover">
            <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    onFullscreenUpdate={setOrientation}
                    videoStyle={{resizeMode: 'contain'}}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                />
        </View>
        <View className="bg-white ml-2 flex-col">
            <Text className="text-2xl ml-1 text-blue-500" style={{fontFamily: "Inter_900Black"}}>{data.course_name}</Text>
            <Text className="text-gray-400 ml-1 mt-1" style={{fontFamily: "Inter_400Regular"}}>{data.course_desc}</Text>
            <View className="flex-row mt-1 ml-1 items-center">
                <Text>4.7</Text>
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
            <View className="mt-1 ml-1">
                <Text className="text-blue-500" style={{fontFamily: "Inter_400Regular"}}>(19,000 ratings) - 20,000 Students</Text>
            </View>
            <View className="mt-3 ml-1 flex-row items-center">
                <Text>Created by</Text>
                <Text className="text-blue-500 ml-2" style={{fontFamily: "Inter_600SemiBold"}}>{data.instructor}</Text>
            </View>
            <View className="ml-2 mt-2 flex-col">
                <View className="flex-row items-center">
                    <Icons.ExclamationCircleIcon className="text-gray-400"/>
                    <Text className="ml-2 text-black" style={{fontFamily: "Inter_400Regular"}}>Last Updated 04/2022</Text>
                </View>
                <View className="flex-row items-center">
                    <Icons.GlobeAltIcon className="text-gray-400" size={24}/>
                    <Text className="ml-2 text-black" style={{fontFamily: "Inter_400Regular"}}>English</Text>
                </View>
            </View>
            <View className="mt-4 ml-2">
                <Text className="text-2xl" style={{fontFamily: "Inter_900Black"}}>₹{data.price}</Text>
            </View>
            <View className="mt-2 mr-2">
                <GestureHandlerRootView
                    className=""
                >
                    <TouchableOpacity
                        onPress={() => {
                            // onPressBuy();
                            navigation.navigate('payment')
                        }}
                    >
                        <View className="flex-row justify-center mx-1 px-5 py-3 bg-blue-500 rounded-sm">
                            <Text className="text-lg text-white" style={{fontFamily: "Inter_600SemiBold"}}>Buy Now</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="flex-row mx-1 justify-center mt-2 px-6 py-3 border-x-2 border-y-2 border-black rounded-sm">
                            <Text className="text-lg text-black" style={{fontFamily: "Inter_600SemiBold"}}>Add To Cart</Text>
                        </View>
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
            <View className="mt-3 ml-1 flex-col">
                    <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_600SemiBold"}}>
                                    What You will learn
                            </Text>
                {
                    cobs.map((obj, index) => {
                        return (
                                <View className="flex-row items-center ml-1 mt-2" key={index}>
                                    <Icons.CheckBadgeIcon className="text-blue-500" size={24}/>
                                    <View className="flex-row ml-2 flex-1 flex-wrap">
                                        <Text className="text-black text-md" style={{fontFamily: "Inter_400Regular"}}>{obj}</Text>
                                    </View>
                                </View>
                        )
                    })
                }
            </View>
            <View className="mt-4 ml-1 flex-col">
                <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_600SemiBold"}}>
                    Curriculum
                </Text>
                <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>
                    {2} sections • {3} lectures • 6h 30m total length
                </Text>
                {
                    data === null ? <></> :
                    data?.sections.map((section, index) => {
                        return (
                            <View key={index}>
                                <View key={index} className="mt-2 flex-row justify-between items-center">
                                    <Text className="text-gray-400" style={{fontFamily: "Inter_400Regular"}}>
                                        Section - {index + 1} : {section.section_title}
                                    </Text>
                                    {show !== index ? <Icons.PlusIcon onPress={() => {setShow(index)}} className="mr-4 text-blue-500" size={24} onPressIn={slide}/> : <Icons.MinusIcon onPress={() => {setShow(-1)}} className="mr-4 text-blue-500" size={24}/>}
                                </View>
                                    <Animated.View
                                        style={[
                                            {
                                                opacity: fadeAnim
                                            }
                                        ]}
                                    >
                                    {
                                        show === index ? 
                                            <View style={{}}>
                                                {
                                                    section.lectures.map((lecture, index) => {
                                                        return (
                                                            <View key={index} className="flex-row items-center mr-4 ml-4 mt-2">
                                                                <Text className="text-xl">{index + 1}</Text>
                                                                <View className="flex-row ml-4 items-center justify-between">
                                                                    <View>
                                                                        <Text numberOfLines={1} className="text-black text-xl" style={{fontFamily: "Inter_400Regular"}}>
                                                                            {lecture.title}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                            :
                                            <View>

                                            </View>
                                    }
                                    </Animated.View>
                            </View>
                        )
                    })
                }
            </View>
            <View className="mt-4 flex-col">
                <Text className="text-blue-500 ml-1 text-2xl" style={{fontFamily: "Inter_600SemiBold"}}>Instructor</Text>
                <Text className="text-black mt-1 ml-1 text-md" style={{fontFamily: "Inter_600SemiBold"}}>{data.instructor}</Text>
                <Text className="text-sm ml-1 mt-2 text-gray-400" style={{fontFamily: "Inter_400Regular"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, quo obcaecati soluta error ea iusto. Temporibus corrupti itaque minus ea beatae.</Text>
                <View className="mt-5 ml-4 flex-row">
                    <Image 
                        source={{
                            uri: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
                        }}
                        className='h-24 w-24 p-4 bg-gray-300 rounded-full'
                    />
                    <View className="ml-4 mt-2 p-1 flex-col">
                        <Text className="text-sm text-black" style={{fontFamily: "Inter_400Regular"}}>4.7 Instructor Rating</Text>
                        <Text className="text-sm text-black" style={{fontFamily: "Inter_400Regular"}}>22,000 Reviews</Text>
                        <Text className="text-sm text-black" style={{fontFamily: "Inter_400Regular"}}>34 courses</Text>
                        <Text className="text-sm text-black" style={{fontFamily: "Inter_400Regular"}}>75,000 students</Text>
                    </View>
                </View>
                <View className="mt-5 p-1">
                    <Text className="text-black" style={{fontFamily: "Inter_400Regular"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas asperiores quis excepturi laudantium quaerat laborum debitis harum, minima voluptates sapiente minus illum enim in maxime suscipit dolorem odit totam animi. Facilis omnis accusamus corporis saepe totam quis asperiores corrupti, voluptatibus assumenda eum officiis error sit et ducimus placeat, quam eveniet alias iure ipsam exercitationem repudiandae modi nobis itaque blanditiis? Dolores ipsam similique cum.</Text>
                </View>
                <View className="mt-1">
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('InstructorProfile')
                        }} 
                    >
                        <View className="flex-row justify-center px-6 py-3 mx-1 mr-3 border-x-2 border-y-2 border-black rounded-sm">
                            <Text className="text-lg text-black" style={{fontFamily: "Inter_600SemiBold"}}>View Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
        </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: width/1.08,
        height: height/3.0,
        marginTop: -26,
    }
});

export default UnregisteredCourse