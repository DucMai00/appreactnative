import React from 'react'
import {View , Text , Button, StyleSheet } from 'react-native';

const Navigationscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Navigation Screen</Text>
            {/* <Button
                title ="Click Here"
                onPress={() => arlert('Button Clieked')}
            /> */}
        </View>
    );
};

export default Navigationscreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },
});