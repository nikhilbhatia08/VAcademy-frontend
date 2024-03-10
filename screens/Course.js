import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions, Touchable } from 'react-native'
import * as Icons from "react-native-heroicons/outline";
import * as BoldIcons from "react-native-heroicons/solid";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import React, {useState, useRef, useEffect} from 'react';      
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';


const { height, width } = Dimensions.get('window');

let present_running_video;

const sections = [
    {
        section_title: "Sectoion-1 ReadMe: Basic Information",
        lectures: [
            {
                title: "Introduction to the Course",
                duration: "2:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                title: "What is Python?",
                duration: "4:30",
                video_url: "https://v5.cdnpk.net/videvo_files/video/premium/video0521/large_watermarked/GENERAL_SA_AERIAL_00080_preview.mp4"
            },
            {
                title: "Why Python?",
                duration: "3:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            }
        ]
    },
    {
        section_title: "Section-2 Python Basics",
        lectures: [
            {
                title: "Python Installation",
                duration: "2:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                title: "Python Basics",
                duration: "4:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                title: "Python Variables",
                duration: "3:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            }
        ]
    },
    {
        section_title: "Section-3 Python Advanced",
        lectures: [
            {
                title: "Python Functions",
                duration: "2:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                title: "Python Classes",
                duration: "4:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            },
            {
                title: "Python Inheritance",
                duration: "3:30",
                video_url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            }
        ]
    }
]

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

const Course = (props) => {
    //console.log(props.route.params.title)
    const navigation = useNavigation();
    const playbackInstance = useRef(null);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [focused, setFocused] = useState(0);
    
    const [vid, setVid] = useState(sections[0].lectures[0]);

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
    <SafeAreaView className="bg-white">
        <View className=" pt-12 pb-4 flex-row bg-blue-500 items-center pl-4">
            <GestureHandlerRootView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <View className="rounded-full bg-white">
                        <Icons.ArrowLeftIcon className="text-blue-500" size={32}/>
                    </View>
                </TouchableOpacity>
            </GestureHandlerRootView>
            <Text className="text-4xl ml-3 text-white" style={{fontFamily: "Inter_600SemiBold"}}>{props.route.params.title}</Text>
        </View>
        <View className="bg-white">
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: vid.video_url,
                }}
                onFullscreenUpdate={setOrientation}
                videoStyle={{resizeMode: 'contain'}}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                onLoad={status => setStatus(() => status)}
                onError={status => setStatus(() => status)}
                
            />
        </View>
        <View >
        <View>
        <GestureHandlerRootView>
        <ScrollView
            stickyHeaderIndices={[1]}
            contentContainerStyle={{height: 1700, paddingBottom: 250}}
        >
            <View className="ml-2 flex-col">
                <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_400Regular"}}>{props.route.params.title}</Text>
                <View className="flex-row py-2 items-center">
                    <Image 
                        source={{
                            uri: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
                        }}
                        className='h-8 w-8 p-4 bg-gray-300 rounded-full'
                    />
                    <Text className="text-xl pl-3 text-gray-400" style={{fontFamily: "Inter_400Regular"}}>Patrecia Jones</Text>
                </View>
            </View>
            <View className="pl-2 mb-10 bg-white">
                <View className="flex-row">
                    <TouchableOpacity
                        onPress={() => {
                            setFocused(0);
                            className="w-200 h-10"
                        }}
                    >
                        {focused == 0 ? 
                        <View className="border-b-2 h-10 bg-white border-b-blue-500 pb-2">
                            <Text className="text-blue-500 text-xl" style={{fontFamily: 'Inter_400Regular'}}>Lectures</Text>
                        </View>
                         : <View className="pb-2 h-10">
                            <Text className="text-black text-xl" style={{fontFamily: 'Inter_400Regular'}}>Lectures</Text>
                         </View>
                        }
                    </TouchableOpacity>
                    <View className="h-10 w-3 bg-white">

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setFocused(1);
                        }}
                    >
                        {focused == 1 ? 
                        <View className="border-b-2 h-10 border-b-blue-500 pb-2">
                            <Text className="text-blue-500 text-xl" style={{fontFamily: 'Inter_400Regular'}}>More</Text> 
                        </View>
                        :<View className='h-10 bg-white'>
                            <Text className="text-black text-xl" style={{fontFamily: 'Inter_400Regular'}}>More</Text>
                        </View> 
                        }
                    </TouchableOpacity>
                    <View className="h-10 w-full bg-white">

                    </View>
                </View>
                
            </View>
            <View>
            {focused == 0 ?
                <View className="pt-2 pl-2">
                    {sections.map((section, index) => {
                        return (
                            <View className="mt-2" key={index}>
                                <Text className="text-lg text-blue-500" style={{fontFamily: 'Inter_400Regular'}}>{section.section_title}</Text>
                                <View className="flex-col">
                                    {section.lectures.map((lecture, index) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setVid(lecture);                                 
                                                }}
                                                key={index}
                                            >
                                                <View className="flex-row ml-3 mt-2" key={index}>
                                                    <View className="flex-row items-center">
                                                        <Text className="text-lg text-blue-500" style={{fontFamily: "Inter_400Regular"}}>{index + 1}</Text>
                                                    </View>
                
                                                    <View className="ml-3">
                                                        <Text className="pl-2 text-black" style={{fontFamily: 'Inter_400Regular'}}>{lecture.title}</Text>
                                                        <Text className="pl-2 text-gray-400" style={{fontFamily: 'Inter_400Regular'}}>video - {lecture.duration}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                        )
                    })}
                </View> 
                :
                <View>
                    
                </View>
            }
            </View>
        </ScrollView>
        </GestureHandlerRootView>
        </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: width,
        height: height/3.0,
    }
});
  
export default Course