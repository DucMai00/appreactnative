import React from 'react'
import {View , Text , Button, StyleSheet ,Image } from 'react-native';


const Findscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Find Screen</Text>
            {/* <Button
                title ="Click Here"
                onPress={() => arlert('Button Clieked')}
            /> */}
        </View>
    );
};

export default Findscreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },
});