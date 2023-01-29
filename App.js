import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import ImgTop from './Components/Top';
import CenterBlock from './Components/CenterBlock';
import Links from './Components/Links';
import { Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shop from './Components/Shop';
import Video from './Components/Video';
import Radio from './Components/Radio';

function EventsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text>Yo</Text>
        <ImgTop element="Events"/>
        <CenterBlock imageUri={require('./assets/FX32UA5VUAA8D-Y.jpg')} location = "Tomorrowland" more = "Boom, Belgium July 22-24 & July 29-31, 2022"/>
        <Links/>
        <CenterBlock imageUri={require('./assets/20220723_152640.jpg')} location = "Tomorrowland" more = "Core stage 24 July, 2022"/>
        <Links/>
        <CenterBlock imageUri={require('./assets/20220724_003706.jpg')} location = "Tomorrowland" more = "Freedom stage 24 July, 2022"/>
        <Links/>
        <CenterBlock imageUri={require('./assets/20220723_163711.jpg')} location = "Tomorrowland" more = "Toujours s'hydrater"/>
        <Links/>
        <CenterBlock imageUri={require('./assets/aezqe.jpg')} location = "Bruxelles" more = "Toujours important de se relaxer"/>
        <Links/>
      </ScrollView>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor : 'black' }}>
      <ImgTop element="Radio"/>
      <Radio/>
    </View>
  );
}
function RadioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor : 'black' }}>
      <ImgTop element="Home"/>
    </View>
  );
}

function ShopScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor : 'black' }}>
      <ImgTop element="Shop" />
      <Shop />
    </View>
  );
}
function VideosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor : 'black' }}>
      <ImgTop element="Videos"/>
      <Video/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  slides = {
    a: './assets/20220723_152640.jpg',
    b: './assets/20220723_152640.jpg',
    c: './assets/20220724_003706.jpg',
    d: './assets/20220723_163711.jpg',
    e: './assets/aezqe.jpg',
  }
  return (
    
    <NavigationContainer style={styles.nav}>
      <Tab.Navigator screenOptions={{headerShown : false,
  "tabBarActiveTintColor": "white",
  "tabBarInactiveTintColor": "white",
  "tabBarActiveBackgroundColor": "#171717",
  "tabBarInactiveBackgroundColor": "#000000",
  "tabBarItemStyle": {
    "height": 100,
    "paddingBottom": 50,
    "borderTopColor": "red"
  },
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}}  >
        <Tab.Screen name="Events" component={EventsScreen} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('./assets/004-music.png')}
                />
              );
            },
          }}/>
        <Tab.Screen name="Radio" component={SettingsScreen} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('./assets/001-radio.png')}
                />
              );
            },
          }}/>
        <Tab.Screen name="Home" component={RadioScreen} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('./assets/003-home.png')}
                />
              );
            },
          }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('./assets/001-shopping-cart.png')}
                />
              );
            },
          }}/>
        <Tab.Screen name="Videos" component={VideosScreen} options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('./assets/005-video-marketing.png')}
                />
              );
            },
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});



