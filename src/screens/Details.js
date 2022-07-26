import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';
const Details = ({route}) => {
  const travels =route.params.item;
  const {id,fullImage,description,liked,price,rating,duration,location,title} =travels
  return (
    <SafeAreaView>
      <ScrollView>
<View >
 {/* image */}
 <ImageBackground style={styles.detailsImage} source={fullImage}>
  <View style={styles.detailsView}>
   <Text preset='h1' style={styles.discoverItemTitle}>{title}</Text>
            <View style={styles.discoverItemLocation}>
              <FontAwesome5  name="map-marker-alt" size={15} color="white" />
              <Text style={styles.discoverItemLocationText}>
              {location}
              </Text>
            </View>
    </View> 
 </ImageBackground>
 {/* Description */}
 <View style={styles.descriptionView}>
  <Text style={styles.descripTitle} preset='h2'>Description</Text>
  <Text style={styles.description}>{description}</Text>
  <View style={styles.pricingView}>
    <View >
      <Text style={styles.commonColor}>PRICE</Text>
      <View style={styles.commonView}>
      <Text preset='h1' style={styles.commonTitle}>${price}</Text> 
      <Text style={styles.commonColor}>/person</Text>
      </View>
    </View>
    <View >
      <Text  style={styles.commonColor}>RATING</Text>
      <View style={styles.commonView}>
      <Text preset='h1' style={styles.commonTitle}>{rating}</Text> 
      <Text style={styles.commonColor}>/5</Text>
      </View>
    </View>
    <View >
      <Text style={styles.commonColor}>DURATION</Text>
      <View style={styles.commonView}>
      <Text preset='h1' style={styles.commonTitle}>{duration}</Text> 
      <Text style={styles.commonColor}>hours</Text>
      </View>
    </View>
   
  </View>
 </View>
</View>


      </ScrollView>
  </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailsView:{
  paddingLeft:spacing[5]
  },
  detailsImage:{
    height: 450,
  },
  discoverItemTitle:{
    marginTop:333,
    color:colors.white,
    paddingRight:spacing[5],
    width:314
  },
  discoverItemLocation:{
    marginTop:7,
    flexDirection:'row',
  },
  discoverItemLocationText:{
    color:colors.white,
    marginLeft:10
  },
  descriptionView:{
   borderTopRightRadius:25,
   borderTopLeftRadius:25,
   backgroundColor:colors.white,
   marginTop:-20
  },
  descripTitle:{
    paddingLeft:spacing[5],
    marginTop:spacing[8],
  },
  description:{
    padding:spacing[5],
    color:colors.grey
  },
  pricingView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:spacing[5]
  },
  commonView:{
    paddingTop:5,
    flexDirection:'row',
    alignItems:'baseline'
  },
  commonColor:{
    color:colors.grey
  },
  commonTitle:{
    color:colors.orange,
  }

})