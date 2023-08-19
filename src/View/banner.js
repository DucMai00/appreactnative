import React , {Component , useState , useEffect} from 'react'
import { 
    View,
    SafeAreaView,
    Text,
    Image,
    Dimensions,
    ScrollView,


    
} from 'react-native';
import SafeViewAndroid from "../../components/AndroidsafeArea";

export default Banner= () => {
    const [imgaeList,setImageList]=useState([]);
    useEffect(() => {
        // //load data sever 
        // const data = [
        //     image: <image/> ,
        //     type: 'png',
        //     camera:'sony'
// ]        
    } , [])


    return(

        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}  >
            <View style={{flex: 1 , justifyContent: 'center'}}>
                <Text style={{fontSize: 20}}>Banner List</Text>
            </View>
    
        </SafeAreaView>
    )      
}