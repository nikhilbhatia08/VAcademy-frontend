import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TailwindProvider} from 'tailwindcss-react-native'
import Home from './screens/Home'
import UserScreen from './screens/UserScreen'
import * as Icons from "react-native-heroicons/outline";
import { NativeWindStyleSheet } from "nativewind";
import MyCourses from './screens/MyCourses';
import Tutors from './screens/Tutors';
import Course from './screens/Course';
import { HomeNavigator, MyCoursesNavigator } from './screens/CustomNavigation';
import UnregisteredCourse from './screens/UnregisteredCourse';
import AllCats from './screens/AllCats';
import SpecificCategory from './screens/SpecificCategory';
import OtherCourses from './screens/OtherCourses';
import InstructorProfile from './screens/InstructorProfile';
import PostQuery from './screens/PostQuery';
import ViewPost from './screens/ViewPost';
import RegisterForMock from './screens/RegisterForMock';
import ContestPage from './screens/ContestPage';
import PaymentScreen from './screens/PaymentScreen';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeNavigator} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="MyCourses" component={MyCourses} />
          <Stack.Screen name="Tutors" component={Tutors} />
          <Stack.Screen name="Course" component={Course} />
          <Stack.Screen name="UnregisteredCourse" component={UnregisteredCourse}/>
          <Stack.Screen name="AllCats" component={AllCats}/>
          <Stack.Screen name="SpecificCategory" component={SpecificCategory} />
          <Stack.Screen name="OtherCourses" component={OtherCourses} />
          <Stack.Screen name="InstructorProfile" component={InstructorProfile} />
          <Stack.Screen name="PostQuery" component={PostQuery} />
          <Stack.Screen name="ViewPost" component={ViewPost} />
          <Stack.Screen name="MockScreen" component={RegisterForMock} />
          <Stack.Screen name="ContestScreen" component={ContestPage} />
          <Stack.Screen name="payment" component={PaymentScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    </>
  );
}


