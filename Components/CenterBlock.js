import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const CenterBlock = props =>{
        return(
            <View style = {style.container}>
                <Image source={props.imageUri} style={style.img}/>
                <Text style = {style.text1}>{props.location}</Text>
                <Text style = {style.text2}>{props.more}</Text>
            </View>
        )
}

export default CenterBlock;

const style = StyleSheet.create ({
    container :{
        width : 350,
        alignItems : "center",
        marginTop : 80
    },
    img : {
        width : 320,
        height : 200,
        borderRadius : 5
    },
    text1 : {
        color : "white",
        marginTop : 10,
        fontSize : 15,
        fontWeight : "bold",
        textAlign : "left"
    },
    text2 : {
        color : "white",
        fontSize :10
    }
})