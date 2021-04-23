import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FlatButton from '../components/Button';
const Home = () => {


    const image = { uri :
        "https://image.freepik.com/vecteurs-libre/fond-tableau-noir-vecteur-tableau-noir-traces-craie_1284-44064.jpg"

    }
    

  return (
    <View>
        <View>
            <ImageBackground
            source={image}
            style={{width: '100%', height:270}}
            imageStyle={{borderBottomLeftRadius:50, borderBottomRightRadius : 50}}
            >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.HeaderContainer}>
                    <Text style={styles.UserGreet}> Welcome</Text>
                    <Text style={styles.UserText}> To The best Ramadan Table </Text>
                    <FlatButton text='Explore' />
                </View>   
            </ImageBackground>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DarkOverlay:{
      position:'absolute',
      top: 0,
      right: 0,
      left: 0,
      height:275,
      backgroundColor: '#000',
      opacity: 0.2,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
  },
  HeaderContainer:{
      paddingLeft: 16,

  },
  UserGreet:{
      fontSize: 38,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      top: 50
  },
  Button:{
      width: 20,
      top: 70,
      color: '#2196F3',

  },
  UserText:{
      fontSize: 16,
      fontWeight: 'normal',
      color: 'orange',
      textAlign: 'center',
      top: 80
  },

});

export default Home;
