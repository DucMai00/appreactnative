import React , { Component } from 'react'
import Login from './Login';
import Setting from './Setting';
import Home from '../ScreenApp/Home';
// import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeViewAndroid from "../../components/AndroidsafeArea";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screentab from '../../navigation/tabs'



// const Stack = createStackNavigator();
// export default RootComponent = function() {
//     return (
//         // <Login/> 
//         // <Setting/>
//         // <Home/>
//         <View>
//           <NavigationContainer>
//               <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
//                   <Stack.Screen name="Login" component={Login} />
//                   <Stack.Screen name="Home" component={Home} />
//                   <Stack.Screen name="Setting" component={Setting} />
//               </Stack.Navigator>
//           </NavigationContainer>
//         </View>
        // <View>
        //   <Text>DucMaine</Text>
        // </View>

//     );
// }


