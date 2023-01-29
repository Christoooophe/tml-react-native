import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const ImgTop = (props) => (
    <View style={style.container}>
        <Image source = {require('../assets/001-refer.png')} style={style.img}/>
        <Text style = {style.text}>{props.element}</Text>
        <Image source = {require('../assets/002-wifi.png')} style={style.img}/>
    </View>
)

export default ImgTop;

const style = StyleSheet.create ({
    container: {
        width : 350,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor : 'black',
        position: 'absolute',
        top: 20,        
      },
      img : {
          margin : 20,
      },
      text : {
        textTransform : 'uppercase',
        color : 'white',
        fontWeight : "bold"
      }

});
