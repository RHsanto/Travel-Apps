import React from 'react';
import { Image,FlatList, SafeAreaView, ScrollView, StyleSheet, View, ImageBackground,TouchableOpacity }
 from 'react-native';
import { spacing } from '../theme/spacing';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../theme/color';
import Text from '../components/Text/Text';
import discoverData from '../../assets/data/discoverData'
import activitiesData from '../../assets/data/activitiesData';
import learnMoreData from '../../assets/data/learnMoreData';
const Home = ({navigation}) => {
    {/* here render all data */}
    const renderDiscoverItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              item: item,
            })
          }>
          <ImageBackground
            source={item.image}
            style={[
              styles.discoverItem,
              {marginLeft: item.id === 'discover-1' ? 20 : 0},
            ]}
            imageStyle={styles.discoverItemImage}>
            <Text style={styles.discoverItemTitle}>{item.title}</Text>
            <View style={styles.discoverItemLocationWrapper}>
              <FontAwesome5  name="map-marker-alt" size={15} color="white" />
              <Text style={styles.discoverItemLocationText}>
              {item.location}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    };
    // render activities data
    const renderActivitiesItem =({item})=>{
     return (
      <View style={styles.actView}>
        <Image style={styles.actImage} source={item.image} />
        <Text style={styles.activitiesSubTitle}>{item.title}</Text>
      </View>
     )
    }
    // render learn data

    const renderLearnData =({item})=>{
      return(
       <View style={styles.learnView}>
        <Image style={styles.learnImage} source={item.image} />
       </View>
      )
    }
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
{/* Discover */}
    <View style={styles.discoverView}>
       <Text preset='h1'>Discover</Text>
     <View style={styles.discoverSubTitle}>
        <Text style={{color:colors.orange}}>All</Text>
        <Text style={styles.categoryText}>Destination</Text>
        <Text style={styles.categoryText} >Cities</Text>
        <Text style={styles.categoryText} >Experience</Text>
     </View>
     <View>
     <FlatList
      data={discoverData}
      renderItem={renderDiscoverItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}/>
     </View>
    </View>
{/* Activities */}
   <View>
    <Text style={styles.activitiesTitle} preset='h2'>Activities</Text>
{/* render activities data */}
    <FlatList
    data={activitiesData}
    renderItem={renderActivitiesItem}
    keyExtractor={(item)=>item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
     />
   </View>
{/* Learn More */}
   <View>
    <Text preset='h2'>Learn More</Text>
    <FlatList
    data={learnMoreData}
    renderItem={renderLearnData}
    keyExtractor={(item)=> item.id}
    horizontal
     />
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
 },
 discoverView:{
  marginTop:spacing[5]
 },
 discoverSubTitle:{
  marginVertical:spacing[5],
  flexDirection:'row',
  justifyContent:'space-between',
 },
 categoryText:{
  fontWeight:'600',
  color:'grey'
 },
 discoverItem: {
  width: 170,
  height: 250,
  justifyContent: 'flex-end',
  paddingHorizontal: 10,
  paddingVertical: 15,
  marginRight: 20,
},
discoverItemImage: {
  borderRadius: 20,
},
discoverItemTitle: {
  fontFamily: 'Lato-Bold',
  fontSize: 18,
  color: colors.white,
},
discoverItemLocationWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
},
discoverItemLocationText: {
  marginLeft: 5,
  fontFamily: 'Lato-Bold',
  fontSize: 14,
  color: colors.white,
},
activitiesTitle:{
  marginTop:spacing[8]
},
activitiesSubTitle:{
  marginTop:15,
  color:colors.grey2
},
actView:{
  margin:spacing[6]
},
learnView:{
  marginTop:spacing[5]
},
learnImage:{
marginRight:spacing[5],
borderRadius:spacing[5],

}
 })







 {/* <View>
    <Pressable
    onPress={()=>{
      navigation.navigate('Details')
    }}
    >
     <Text>Hello </Text>
    </Pressable>
   </View> */}