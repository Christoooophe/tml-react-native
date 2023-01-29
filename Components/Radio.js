import * as React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Linking} from 'react-native';

const Radio = () => {
    return(
        <TouchableOpacity style={styles.container}
   onPress={() => {
      Linking.openURL( 'https://www.youtube.com/watch?v=araK9j8mN9Y&ab_channel=Tomorrowland'  );}}>
        <Text style={styles.text}>écoutez la radio tomorrowland juste ici :</Text>
            <Image style={styles.img} source={require('../assets/1454599-tomorrowland-one-world-radio.jpg')}/>
        </TouchableOpacity>
    )
}

export default Radio;

const styles = StyleSheet.create ({
    img : {
        width : 350,
        height : 250
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