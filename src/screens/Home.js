import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { spacing } from '../theme/spacing';
import { FontAwesome } from '@expo/vector-icons';
const Home = () => {
  return (
  <SafeAreaView>
    <ScrollView>
{/* Container */}
    <View style={styles.container}>
{/* Navbar */}
   <View style={styles.navbarView}>
     <FontAwesome name="bars" size={32} color="black" />
     <View>
      <Image style={styles.profileImg}  source={require('../../assets/images/person.png')} />
     </View>
   </View>


    </View>
    </ScrollView>
  </SafeAreaView>
  ); 
};

export default Home;

 const styles=StyleSheet.create({
 container:{
  paddingHorizontal:spacing[5],
 },
 navbarView:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:spacing[8]
 },
 profileImg:{
 borderRadius:10
 }
 })
