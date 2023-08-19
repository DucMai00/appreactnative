import React from 'react'
import {View , Text , Button, StyleSheet ,ImageBackground } from 'react-native';




const ScanScreen = ({navigation}) => {
    return (
        // <ImageBackground source={{Background}} resizeMode='cover'style={styles.image}>
            <View style={styles.container}>
                <Text>Scan để làm sau</Text>
            </View>
        // </ImageBackground>
    );
};

export default ScanScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});

  