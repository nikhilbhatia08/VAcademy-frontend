import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Icons from 'react-native-heroicons/outline'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { TouchableOpacity, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import FeaturedRow from '../components/FeaturedRow';
import AllCourseCard from '../components/AllCourseCard';

const TopCoursesToGetYouStarted = [
  {
      title: "React Native",
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
      rating: 4.8,
      price: 3999
  },
  {
      title: "React Native",
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
      rating: 4.8,
      price: 3999
  },
  {
      title: "React Native",
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
      rating: 4.8,
      price: 3999
  },
]

const Featured_courses = [
  {
      title: "React Native",
      image: 'data:image/png;base64,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',
      rating: 4.8,
      price: 3999
  },
  {
      title: "React Native",
      image: 'data:image/jpeg;base64,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',
      rating: 4.8,
      price: 3999
  },
  {
      title: "React Native",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqe4NGl7ai2EO2mAoWdxOBeZqtzBc40yBNhw&usqp=CAU=',
      rating: 4.8,
      price: 3999
  },
]

const SpecificCategory = (props) => {
    //console.log(props.route.params.category.name)
    // works perfectly fine 
    const navigation = useNavigation();
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
    <SafeAreaView
      className="bg-white"
    >
      <GestureHandlerRootView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: 1200, paddingBottom: 250, backgroundColor: 'white'}}
      >
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
      </View>
      <View className="mt-5 flex-col ml-4">
          <Text className="text-3xl" style={{fontFamily: "Inter_600SemiBold"}}>{props.route.params.category.name}</Text>
          <View className="mt-4">
            {
              <View className="">
                <FeaturedRow title={"courses to get you started"} courses={TopCoursesToGetYouStarted}/>
              </View>
            }
          </View>   
          <View className="mt-4">
            {
              <View className="">
                <FeaturedRow title={"Featured Courses"} courses={Featured_courses}/>
              </View>
            }
          </View>         
      </View>
      <View className="mt-2 flex-col ml-4">
          <Text className="text-xl mb-2 text-black" style={{fontFamily: "Inter_600SemiBold"}}>All Courses</Text>
          <View>
            {
              Featured_courses.map((course, index) => {
                return(
                  <View key={index}>
                    <AllCourseCard title = {course.title} image={course.image} price={course.price} rating={course.rating}/>
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

export default SpecificCategory