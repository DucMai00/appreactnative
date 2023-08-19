import React , { component } from 'react'
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
    
} from 'react-native'
import MenuButton from '../Imgaes/menu.png'
export default Home  = ({navigation}) => {
    
    return (
        <View style={{ flex: 1}}>
            {/*Header*/}
            <View style={{height: '8%', width: '100%' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-between'}}>
                <TouchableOpacity 
                style={{height:'100%' , aspectRatio: 1.7 , boderWidth: 1 ,alignItems: 'center'}}
                // onPress={() => navigation.openDrawer()} 
                >
                    
                <Image source={MenuButton} resizeMode='stretch'/>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {{height: '100%', aspectRatio: 1.7 , alignItems: 'center' , flexDirection: 'row' , justifyContent: 'space-between'}}
                onPress={() => navigation.navigate('Setting')}
                >
                    <Image/>
                </TouchableOpacity>
            </View>
            <View style={{flex : 1, justifyContent: 'center' , alignItems: 'center'}}>
                <Text style={{ fontSize: 30}}> Home Screen </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgae: {
        height: '100%',
        width: '100%'
    },
});