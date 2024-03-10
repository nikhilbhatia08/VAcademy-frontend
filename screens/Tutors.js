import { View, Text, SafeAreaView, Touchable, Button } from 'react-native'
import React from 'react'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { TouchableOpacity, GestureHandlerRootView, Gesture, ScrollView } from 'react-native-gesture-handler';
import * as Icons from 'react-native-heroicons/outline';
import ForumCard from '../components/ForumCard';
import {useNavigation } from '@react-navigation/native';

const query = [
  {
    title: "How to create a new project in React?",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Patrecia Jones",
    postedAt: "2 days ago",  
    description: "I am new to React and I want to create a new project in React. Can anyone help me with this?",
    images: [],
    likes: [1, 2, 3, 4],
    comments: [
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
    ],
  },
  {
    title: "How to create a new project in React?",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Patrecia Jones",
    postedAt: "2 days ago",  
    description: "I am new to React and I want to create a new project in React. Can anyone help me with this?",
    images: [],
    likes: [1, 2, 3, 4],
    comments: [
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
    ],
  },
  {
    title: "How to create a new project in React?",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Patrecia Jones",
    postedAt: "2 days ago",  
    description: "I am new to React and I want to create a new project in React. Can anyone help me with this?",
    images: [],
    likes: [1, 2, 3, 4],
    comments: [
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
        comment: "You can use create-react-app to create a new project in React.",
        postedAt: "2 days ago",
      },
    ],
  },
]

const Tutors = () => {
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
      className=" h-screen"
    >
      <GestureHandlerRootView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 0, marginBottom: 32}}
        >
      <View className="mt-10 flex-col ml-4">
        <Text className="text-2xl text-blue-500" style={{fontFamily: "Inter_400Regular"}}>Forum</Text>
        <View className="mt-4 mr-4">
                <GestureHandlerRootView
                    className=""
                >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('PostQuery')
                      }}
                    >
                        <View className="flex-row justify-center items-center px-5 py-3 bg-blue-500 rounded-lg">
                            <Text className="text-lg text-white ml-4" style={{fontFamily: "Inter_600SemiBold"}}>Ask a Question</Text>
                            <Icons.PlusIcon className="text-white ml-5" size={24}/>
                        </View>
                    </TouchableOpacity>
                </GestureHandlerRootView>
            </View>
            <View className="mt-5">
              <Text className="text-lg" style={{fontFamily: "Inter_400Regular"}}>Trending Posts</Text>
            </View>
            <View className="mt-5">
                  <View className="flex-col">
                    {
                      query.map((q, index) => {
                        return (
                          <ForumCard
                            key={index}
                            title={q.title}
                            image={q.image}
                            name={q.name}
                            postedAt={q.postedAt}
                            description={q.description}
                            images={q.images}
                            likes={q.likes}
                            comments={q.comments}
                          />
                        )
                      })
                    
                    }
                    <ForumCard/>
                  </View>
            </View>
      </View>
      </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default Tutors