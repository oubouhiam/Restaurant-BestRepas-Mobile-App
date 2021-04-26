// source={{uri: item.food.image}}

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {AsyncStorage}  from 'react-native';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// import icons
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = () => {

    const [dataCart, setdataCart] = useState([])

    useEffect(()=>{
        AsyncStorage.getItem('cart').then((cart)=>{
          // if (cart !== null) {
          //   // We have data!!
          //   const cartfood = JSON.parse(cart)
          //   setdataCart(cartfood)
          // }
          AsyncStorage.clear()
        })
        .catch((err)=>{
          alert(err)
        })
      })
    

    return (
        <View style={{width:'100%', flex:1}}>
         <View style={{height:20}} />
    
         <View style={{flex:1}}>

           <ScrollView>

             {
               dataCart.map((item)=>{
                 return(
                    <View style={style.cartCard} key={item.id}>
                    <Image source={item.food.image} style={{height: 80, width: 80 , borderRadius:50}} />
                    <View
                      style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                      }}>
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.food.name}</Text>
                      <Text style={{fontSize: 13, color: 'grey'}}>
                        hhhhhhh
                      </Text>
                      <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.food.price}</Text>
                    </View>
                   
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity>
                            <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>1</Text>
                        <TouchableOpacity>
                            <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                        </View>
                      <View style={style.actionBtn}>
                        <Icon name="remove" size={25} color={'white'} />
                        <Icon name="add" size={25} color={'white'} />
                      </View>
                   
                  </View>
                 )
               })
             }

             <View style={{height:20}} />

             <TouchableOpacity style={{
                 backgroundColor:"#FFB833",
                
                 alignItems:'center',
                 padding:10,
                 borderRadius:5,
                 margin:20
               }}>
               <Text style={{
                   fontSize:20,
                   fontWeight:"bold",
                   color:'white'
                 }}>
                 CHECKOUT
               </Text>
             </TouchableOpacity>

             <View style={{height:20}} />
           </ScrollView>
         </View>
         
      </View>
    );
  }
    

  const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    cartCard: {
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: 'white',
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
  
  });

export default Cart
