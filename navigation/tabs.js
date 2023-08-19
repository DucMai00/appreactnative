import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'

import Homescreen from '../src/ScreenApp/Homescreen';
import Findscreen from '../src/ScreenApp/Findscreen';
import Navigationscreen from '../src/ScreenApp/Navigationscreen'
import Profilescreen from '../src/ScreenApp/Profilescreen';
import ScanScreen from '../src/ScreenApp/Scanscreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import homeIcon from '../src/Imgaes/Homeicon.png'
import userIcon from '../src/Imgaes/usericon.png'
import search from '../src/Imgaes/loupeicon.png'
import nofitication from '../src/Imgaes/bell.png'

const Tab = createBottomTabNavigator();

const Screentab = () =>{
    return (
      <Tab.Navigator initialRouteName="HomeScreen"screenOptions={{headerShown: false}}>
        <Tab.Screen name='HomeScreen' component={Homescreen} options={{tabBarIcon: () => <Image source={homeIcon} style={{width: 30 , height: 30 , flex: 1 }} resizeMode='contain'/>}}/>
        <Tab.Screen name='Sreach' component={Findscreen} options={{tabBarIcon: () => <Image source={search} style={{width: 30 , height: 30 }} resizeMode='stretch'/>}}/>
        <Tab.Screen name='ScanScreenS' component={ScanScreen} />
        <Tab.Screen name='Notification' component={Navigationscreen} options={{tabBarIcon: () => <Image source={nofitication} style={{width: 30 , height: 30 }} resizeMode='stretch'/>}}/> 
        <Tab.Screen name='Profile' component={Profilescreen} options={{tabBarIcon: () => <Image source={userIcon} style={{width: 30 , height: 30 }} resizeMode='stretch'/>}}/>
      </Tab.Navigator>    
    );
};
export default Screentab;