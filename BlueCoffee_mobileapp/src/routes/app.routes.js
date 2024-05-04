import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from'react-native-vector-icons/Feather';

import Profile from '../pages/Profile';
import PostsUser from '../pages/PostsUser';
import MyMatchs from '../pages/MyMatchs';
import Menu from '../pages/Menu';
import HomeScreen from '../pages/Home';
import Order from '../pages/Order'
import MyOrders from '../pages/MyOrders';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="PostsUser"
        component={PostsUser}
        options={{
          headerTintColor: '#FFF',
          headerStyle:{
          backgroundColor: '#36393F'
          }
        }}
      />

      <Stack.Screen 
        name="Order"
        component={Order}
        options={{
          headerTintColor: '#FFF',
          headerStyle:{
          backgroundColor: '#36393F'
          }
        }}
      />

    </Stack.Navigator>
  )
}


function AppRoutes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',

        tabBarStyle:{
          backgroundColor: '#202225',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
      name="HomeTab" 
      component={StackRoutes} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="home" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Menu"
      component={Menu}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="coffee" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="MyOrders"
      component={MyOrders}
      options={{
      tabBarIcon: ({ color, size }) => {
        return <Feather name="clipboard" color={color} size={size} />
      }
      }}
      />

      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="user" color={color} size={size} />
        }
      }}
      />

    </Tab.Navigator>
  )
}

export default AppRoutes;