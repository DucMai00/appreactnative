import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native' ;
import Bookimage from '../assets/book.png'

export default function CategoryListItem (props) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>App Bit Tuot </Text>
        <Image style={styles.categoryImage} source={Bookimage}/>
    </View>
    );
}



const styles = StyleSheet.create ({
    container:{
        alignItems:'center',
        pandding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0 , height: 0 }
    },
    categoryImage: {
        width:64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});