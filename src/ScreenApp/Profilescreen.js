import React from 'react'
import {View , Text , Button, StyleSheet } from 'react-native';

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            {/* <Button
                title ="Click Here"
                onPress={() => arlert('Button Clieked')}
            /> */}
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    },
});