import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const Links = () => {
    return(
        <View style = {style.mainContainer}>
            <View style = {style.container}>
                <Text style = {style.text1}>Info</Text>
                <Image source = {require('../assets/white-arrow-32-700x368.png')} style={style.img}/>  
            </View>
            <View style = {style.container}>
                <Text style = {style.text1}>line-up</Text>
                <Image source = {require('../assets/white-arrow-32-700x368.png')} style={style.img}/>  
            </View>
            <View style = {style.container}>
                <Text style = {style.text1}>festival app</Text>
                <Image source = {require('../assets/white-arrow-32-700x368.png')} style={style.img}/>  
            </View>
            <View style = {style.container}>
                <Text style = {style.text1}>your account</Text>
                <Image source = {require('../assets/white-arrow-32-700x368.png')} style={style.img}/>  
            </View>
            
        </View>
    )
}

export default Links

const style = StyleSheet.create ({
    mainContainer : {
        width : 350,
        flexDirection : "column",
        marginTop : 30,
        
    },
    container : {
        flexDirection : "row",
        justifyContent : "space-between",
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        marginBottom: 10,
        marginRight : 20,
        marginLeft : 20,

    },
    text1 : {
        color : "white",
        textTransform : "uppercase",
        fontSize : 20,
        padding : 0,
        paddingBottom : 10,
        fontWeight : "bold"
    },
    img : {
        width : 25,
        height : 25
    }
})