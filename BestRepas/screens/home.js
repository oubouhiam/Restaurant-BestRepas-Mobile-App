import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View, Image, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity, FlatList, TextInput  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import {AsyncStorage}  from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FlatButton from '../components/Button';
import data from '../screens/data';





const Home = ({navigation}) => {


    const image = { uri :
        "https://image.freepik.com/vecteurs-libre/fond-tableau-noir-vecteur-tableau-noir-traces-craie_1284-44064.jpg"

    }
        function renderCategories(){
        return(
           <View style={{flexDirection:'row'}}>
               <View style={{marginBottom:30}}>
                 <AntDesign style={{fontSize:90, marginLeft:90}} name="shoppingcart" size={24} color="black" 
                 onPress={() => navigation.navigate('Cart', {
                    
                  }) 
                }
                  />
               </View>
           </View>
        )
    }
    function renderList(){
  return (
    <View>
        <View>
        <ScrollView>
            <ImageBackground
            source={image}
            style={{width: '100%', height:200}}
            imageStyle={{borderBottomLeftRadius:50, borderBottomRightRadius : 50}}
            >
                <View style={styles.DarkOverlay}></View>
                <View style={styles.HeaderContainer}>
                    <Text style={styles.UserGreet}> Welcome</Text>
                    <Text style={styles.UserText}> To The best Ramadan Table </Text>
                </View>   
            </ImageBackground>

            <View>
            <ScrollView>
            
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={(item)=> item.id}
                    data={data}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <View style={{alignItems: 'center', top:5}}>
                                <Image source={item.image} style={{height:100, width:150, borderRadius:20}}/>
                            </View>
                            <View style={{marginHorizontal:20}}>
                                <Text style={{fontSize:18, fontWeight:'bold', top:20, textAlign:'center'}}>{item.name}</Text>
                                <Text style={{fontSize:14, color:'grey', marginTop:2}}>{item.ingrediants}</Text>
                            </View>
                            <View style={{marginTop:10,marginHorizontal:20,flexDirection:'row',justifyContent:'center',}}>
                                <Text style={{fontSize:18,fontWeight:'bold', textAlign:'center'}}>${item.price}</Text>
                            </View>
                            {/* <Icon name="add"  size={40}  style={{justifyContent:'center', color:'orange', alignItems:'center' }}/> */}
                            {/* <FlatButton text='Buy' /> */}

                            <TouchableOpacity
                                onPress={()=> onClickAddCart(item)}
                                    style={{
                                        width:'100%',
                                        backgroundColor:'#fd7e14',
                                        flexDirection:'row',
                                        alignItems:'center',
                                        justifyContent:"center",
                                        borderRadius:5,
                                        padding:4
                                    }}>
                                <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
                                <View style={{width:10}} />
                                <Icon name="ios-add-circle" size={30} color={"white"} />
                            </TouchableOpacity>
                    </View>
        )} />
        </ScrollView>
            </View>
            </ScrollView>
        </View>

    </View>
  )};
     function onClickAddCart(data) {
       console.log(data)

        const itemcart = {
          food: data,
          quantity:  1,
          price: data.price
        }
     
        AsyncStorage.getItem('cart').then((dataCart)=>{
            console.log(dataCart)
            if (dataCart !== null) {
              // We have data!!
              const cart = JSON.parse(dataCart)
              cart.push(itemcart)
              AsyncStorage.setItem('cart',JSON.stringify(cart));
            }
            else{
              const cart  = []
              cart.push(itemcart)
              AsyncStorage.setItem('cart',JSON.stringify(cart));
            }
            alert("Add Cart")
          })
          .catch((err)=>{
            alert(err)
          })
      }
    return (
        <SafeAreaView style={styles.container}>
             {renderCategories()}
             {renderList()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DarkOverlay:{
      position:'absolute',
      top: 0,
      right: 0,
      left: 0,
      height:205,
      backgroundColor: '#000',
      opacity: 0.2,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
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
  card:{
          height: 240,
          
          marginHorizontal: 23,
          marginBottom: 0,
          marginTop: 20,
          borderRadius: 15,
          elevation: 13,
          backgroundColor: 'white',
        },

});

export default Home
