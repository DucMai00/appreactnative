import React , { Component , useState }from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar,
    Dimensions,
    TextInput,
    backgroundColor, navigation , Button,

} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeViewAndroid from "../../components/AndroidsafeArea";
// import Header from './ComponentLogin/Header';
// import Body from './ComponentLogin/Body';
import Nerd from '../Imgaes/nerd.png'


const Stack = createNativeStackNavigator();
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
// const Sign_In = 'Sign_In'; // dang nhap
// const Register = 'Register';
const screen = () => {
    return (
        <View style={{width: '100%' , height: '100%' ,backgroundColor: '#D7BBF5'  }}> 
            <View style={{height: '28%' , width: '100%'  }}>
                {/* <Header/> */}
            </View>
            <View style={{width: '100%' , height: '55%' , justifyContent: 'center' , alignItems: 'center' }}>
                <Body/>
            </View>
        </View>
        
    )
}


// const Header = () => {
//     return (
//         <View style={{flex: 1}}>
//             <StatusBar barStyle={'light-content'}/>   
//         </View>
//     )
// }
const Details =({ navigation }) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
const Body = ({ navigation }) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle={'light-content'}/>   
                <View style={{width: '100%' , height: '100%' , justifyContent: 'center' , alignItems: 'center'  , borderwidth: 1}}>
                    <Image source={Nerd} style={{width: '25%' ,height: '25%', marginLeft: 10}}/>
                    <Text style={{width: '100%',height: '13%' ,fontSize: 30 , fontWeight: '600', justifyContent: 'center' , alignItems: 'center' }}> .Bít Tuốt</Text>
                    <Text style={{ height: '5%' ,  justifyContent: 'center' ,alignItems: 'center' }}>    Giải nhanh như cách nyc trở mặt👍</Text>          
                    {/* Bottom tab Login & Register */}
                    {/* <View>
                        <TouchableOpacity style={{  height: '25%' ,width: windowwidth * 0.5, justifyContent : 'center' ,  alignItems: 'center' , backgroundColor: 'white' , borderRadius: 20 }}>
                            <Text style={{fontSize: 20 , height: '100%', width: '100%', justifyContent : 'center' ,  alignItems: 'center' , marginLeft: 70 , marginTop: 10}}>Đăng nhập</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{height: '25%',  width: windowwidth * 0.5 ,backgroundColor: 'white' , alignItems: 'center' , backgroundColor: 'white' , borderRadius: 20 }}>
                            <Text style={{fontSize: 20 , height: '100%', width: '100%', justifyContent: 'center' , alignItems: 'center' ,  marginLeft: 100 , marginTop: 10}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View> */}
                <View style={{width: '100%' , height: '20%'  , borderColor: 'white' , marginTop: 0.15 * windowheight , justifyContent: 'center' ,alignItems : 'center'}}>
                {/*Đăng nhập*/}
                    <TouchableOpacity >
                        <Button
                        title="Go to Details"
                        onPress={() => {navigation.navigate('Details')}}
                      />
                        <Text style={{color: 'gray' , fontSize: 20}}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    {/* Đăng ký */}
                    <TouchableOpacity 
                        style={{ marginTop : 20  ,width: '60%' , heigth: '30%' , borderColor: 'black' ,borderWidth: 1 , borderRadius: 100 , justifyContent: 'center' , alignItems: 'center'}}
                        onPress={() => {
                        navigation.navigate('Register');
                        }}>
                        <Text style={{color:'gray' , fontSize: 20}}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>  
            </View>      
        </View>
    )
}


            
export default Login = () => {
    return (

        <NavigationContainer>
           <Stack.Navigator initialRouteName="screen" screenOptions={{headerShown: false}}>
                <Stack.Screen name="screen" component={screen} options={{ headerShown: false }}/>     
                <Stack.Screen name='Details' component={Details} />           
            </Stack.Navigator>
        </NavigationContainer>
    )
}
  

 
















import SignIn from './ComponentLogin/SignIn';
import Regiser from './ComponentLogin/Dangky';
// import Home from '../ScreenApp/Home'
// import Background from '../Imgaes/background2.png';
// import eye from '../Imgaes/view.png'
// import hideEye from '../Imgaes/hide.png'
// export default Login = ({navigation}) => {
//     const [getPasswordVisible, setPasswordVisible] = useState(false);
//     // const [getEmail , setEmail] = useState('');
//     // console.log('GetEmail: ' , getEmail)
//     return (
//         <View>
//             <ImageBackground source={Background} style={{height: '100%' , width: '100%' , justifyContent: 'center'}}  resizeMode='contain'>
//                 <StatusBar barStyle='light-content'/>
//                 <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} >
//                     <View style={{height: '100%' , width: '100%'}}>
//                         {/*Email and password*/}
//                         <View style={{width:'100%',height: '100%' ,marginTop: 0.4 * windowheight}}>
//                             {/*Email*/}
//                             <View style={{width: '70%' , height: 30 , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-between'}}>
//                                 <Text style = {{color: 'black',width: 50}}>Email</Text>
//                                 <TextInput 
//                                 style={{color: 'gray' ,height: '100%' , width: '70%' ,borderBottomColor: 'black' , borderBottomWidth: 1 , textAlign: 'left' , paddingLeft :10 /*vt tuwf been naof sang */ }}
//                                 autoCapitalize='none'// tu dong nhap chu thuong dau tien 
//                                 /> 
//                             </View>
//                             {/*Password*/}
//                             <View style={{width: '70%' , height: 30 , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-between' }}>
//                                 <Text style = {{color: 'black'}}>Password</Text>
//                                 <TextInput 
//                                     style={{color: 'gray' ,height: '100%' , width: '70%' ,borderBottomColor: 'black' , borderBottomWidth: 1 , textAlign: 'left'  , paddingLeft: 10 }}
//                                     autoCapitalize='none'
//                                     secureTextEntry={getPasswordVisible? false : true}/>
//                                     <TouchableOpacity 
//                                         style={{height: '100%' , width: 30 , position: 'absolute' , right: -5}}
//                                         onPress={()=> {
//                                         setPasswordVisible(!getPasswordVisible)
//                                         }}>
//                                         { getPasswordVisible?
//                                         <Image source={eye} style={{width: '100%' ,height: '100%'}} resizeMode= 'contain' />
//                                         :
//                                         <Image source={hideEye} style={{width:'100%' , height: '100%' }} resizeMode= 'contain'/>
//                                         }
//                                     </TouchableOpacity>
//                             </View>
//                             {/*Buttons Logins and register */}
//                             <View style={{width: '100%' , height: '20%' ,borderWidth: 2 , borderColor: 'white' , marginTop: 0.15 * windowheight , justifyContent: 'center' ,alignItems : 'center'}}>
//                                 {/*Đăng nhập*/}
//                                 <TouchableOpacity 
//                                     style={{ width: '60%' , heigth: '30%' , borderColor: 'black' ,borderWidth: 1 , borderRadius: 100 , justifyContent: 'center' , alignItems: 'center'}}
//                                     onPress={() => {
//                                         navigation.navigate('SignIn');
//                                     }}
//                                 >
//                                     <Text style={{color: 'gray' , fontSize: 20}}>Login</Text>
//                                 </TouchableOpacity>
//                                 {/* Đăng ký */}
//                                 <TouchableOpacity 
//                                     style={{ marginTop : 20  ,width: '60%' , heigth: '30%' , borderColor: 'black' ,borderWidth: 1 , borderRadius: 100 , justifyContent: 'center' , alignItems: 'center'}}
//                                     onPress={() => {
//                                         navigation.navigate('DangKy');
//                                     }}
//                                 >
//                                     <Text style={{color:'gray' , fontSize: 20}}>Register</Text>
//                                 </TouchableOpacity>
//                             </View>  
//                         </View>
//                     </View>
//                 </SafeAreaView>
//             </ImageBackground>
//         </View>
//     );
// };


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: 'column',
// //   },
// //   image: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //     justifyContent: 'center',
// //   },
// //   text: {
// //     color: 'white',
// //     fontSize: 42,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     backgroundColor: '#000000a0',
// //   },
// // });