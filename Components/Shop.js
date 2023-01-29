import { Assets } from '@react-navigation/stack';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import ImgTop from './Top';


const Shop = () => {
  return (
    <View style={styles.main}>
        
        <View style={styles.mainTop}>
        <ImgTop style={styles.top}/>
        <Image style={styles.img} source={require('../assets/20220722_095306.jpg')}/>
        </View>
            <View style={styles.container}>
                    <FlatList style={styles.flat}
                        data={[
                        {key: 'T-Shirts',},
                        {key: 'Sweats'},
                        {key: 'Caps'},
                        {key: 'Bracelets'},
                        {key: 'Jeans'},
                        {key: 'Watchs'},
                        {key: 'Bombers'},
                        {key: 'Shoes'},
                        {key: 'Decoration'},
                        {key: 'Beers'},
                        {key: 'Red Bull'},
                        {key: 'JBL'},
                        {key: 'Other'},

                        
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                
        </View>
    </View>
  );
}

export default Shop;

const styles = StyleSheet.create({
    container: {
     paddingTop: 22,
     display : "flex",
     flexDirection : "row",
     
    },
    mainTop : {
        zIndex : 4,
        alignItems : "center",
     justifyContent : "center",
    },
    main :{
    alignItems : "center",
     justifyContent : "center",
     width : 300
    },
    item: {
      flex : 1,
      padding: 0,
      fontSize: 18,
      height: 44,
      color : "white",
      textTransform : "uppercase",
      fontWeight : "bold",
      paddingTop : 20,
      marginTop : 20,
      borderBottomColor : "white",
      borderBottomWidth : 0.2,
      
    },
    img : {
      marginTop : 60,
      width : 300,
      height : 80,
      position: 'absolute',
        top: 20,  
        zIndex : 3
    },
  });
  