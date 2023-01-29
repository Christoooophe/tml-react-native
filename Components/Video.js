import * as React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Linking} from 'react-native';

const Video = () => {
    return(
            <TouchableOpacity style={styles.container}
    onPress={() => {
        Linking.openURL( 'https://www.youtube.com/watch?v=iZaDfkt4xPw&t=354s&ab_channel=pietrekk'  );}}>
            <Text style={styles.text}>Dimitri Vegas & like mike set</Text>
            <Image style={styles.img} source={require('../assets/download.jpg')}/>
            </TouchableOpacity>
    )
}

export default Video;

const styles = StyleSheet.create ({
    img : {
        width : 300,
        height : 150
    },
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        color : "white",
        textTransform : "uppercase",
        fontWeight : "bold",
        fontSize : 20,
        marginBottom : 20,
        textAlign : "center"
    }

})