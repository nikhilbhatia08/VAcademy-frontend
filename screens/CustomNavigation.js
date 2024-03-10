import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from "react-native-heroicons/outline";
import Home from './Home';
import UserScreen from './UserScreen';
import MyCourses from './MyCourses';
import Tutors from './Tutors';
import Course from './Course';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      height: 66,
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 30,
      shadowColor: '#000000',
      borderTopWidth: 0,
    },
  }
  

const HomeNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="HomeNavigator" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Icons.HomeIcon color={focused ? "#2196F3" : "#575454"} size={24}/>
                  {focused ? <Text style={{color: "#2196F3"}}>Home</Text> : <Text style={{color: "#575454"}}>Home</Text>}
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="MyCourses" 
          component={MyCourses} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Icons.BookOpenIcon color={focused ? "#2196F3" : "#575454"} size={24}/>
                  {focused ? <Text style={{color: "#2196F3"}}>My Courses</Text> : <Text style={{color: "#575454"}}>My Courses</Text>}
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Tutors" 
          component={Tutors} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Icons.ChatBubbleOvalLeftIcon color={focused ? "#2196F3" : "#575454"} size={24}/>
                  {focused ? <Text style={{color: "#2196F3"}}>Forum</Text> : <Text style={{color: "#575454"}}>Forum</Text>}
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="UserScreen" 
          component={UserScreen} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Icons.UserIcon color={focused ? "#2196F3" : "#575454"} size={24}/>
                  {focused ? <Text style={{color: "#2196F3"}}>My Account</Text> : <Text style={{color: "#575454"}}>My Account</Text>}
            </View>
              )
            }
          }}
          />
          </Tab.Navigator>
    );
}

export {HomeNavigator};

const MyCoursesNavigator = () => {
    const navigation = useNavigation();
    return (
        <>
        </>
    );
}

export {MyCoursesNavigator};