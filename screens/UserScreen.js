import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Inter_900Black, Inter_100Thin, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const UserScreen = () => {
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
    <SafeAreaView className="h-screen bg-white">
      <View className="mt-10 flex-col items-center">
        <View className="mt-5">
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=1024x1024&w=is&k=20&c=fRiq_aLd5eX7bjr9Y0umM-b0kIxYDewARvO_9Ykqayc=',
            }}
            className="h-36 w-36 rounded-full"
          />
        </View>
        <View className="mt-4">
            <Text className="text-blue-500 text-2xl" style={{fontFamily: "Inter_400Regular"}}>Alice Bob</Text>
        </View>
      </View>
      <View className="mt-2">

      </View>
    </SafeAreaView>
  )
}

export default UserScreen