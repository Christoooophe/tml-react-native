import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const BottomBlock = () =>{
    return(
        <View style = {style.container}>
            <Image source = {require('../assets/white-arrow-32-700x368.png')} style={style.img}/>
            <View style = {style.container2}>
                <Text style = {style.text1}>Tomorrowland</Text>
                <Text style = {style.text2}>Musique</Text>
            </View>
            <Image source = {require('../assets/favicon.png')} style={style.img}/>
        </View>
    )
}

export default BottomBlock;

const style = StyleSheet.create ({
    container :{
        width : 320,
        alignItems : "center",
        display : "flex",
        flexDirection : "row",
        justifyContent: "space-between",
        borderColor: 'white',
        borderWidth: 0.2,
        marginBottom : 10,
        marginTop : 20
    },
    img : {
        width : 25,
        height : 25,
        rotation : 270
    },
    text1 : {
        color : "white",
        marginTop : 10
    },
    text2 : {
        color : "white",
        paddingBottom : 10
    }
})