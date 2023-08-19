import React , {Component} from 'react' ;
// import RootComponent from  './src/View/index';

import {  Button,View, Text ,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createstacknavigator, createappcontainer } from "react-navigation";

import Login from './src/View/Login'
// import Home from './src/ScreenApp/Home'
// import Setting from './src/View/Setting'
import SignIn from './src/View/ComponentLogin/SignIn';
import Register from './src/View/ComponentLogin/Dangky';

import 'react-native-gesture-handler';
import { Image } from 'react-native';
import Nerd from './src/Imgaes/nerd.png'

import Screentab from './navigation/tabs'
 
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// const ScreenDrawer = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
//             <Drawer.Screen name='Home' component={Home}/>
//             <Drawer.Screen name='Setting' component={Setting}/>
//         </Drawer.Navigator>
//     );
// }



// const StackNavigator = () => {
//     <Stack.Navigator >
//         <Stack.Screen name="Login" component={Login} />     
//         <Stack.Screen name='Screentab' component={Screentab} options={{ headerShown: false }}/>           
//     </Stack.Navigator>
// }


// export default RootComponent = function() {
//     return (
//         <NavigationContainer>
//            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>     
//                 <Stack.Screen name='Details' component={Details} />           
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App = () => {
//     return (
//         <Login/>  
//     )
// }




// const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         alignItems: 'stretch',
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         paddingLeft: 16,
//         paddingRight: 16,
//     },
// });
// export default function App  ()  {
//     return (
//         <View>
//             <LoginDemo/>
//         </View> 
//     )
// }
import Setting from './src/ScreenApp/Setting';


export default Test = () => {
    return (
        <View>
            <Setting/>
        </View>  
    )
}

