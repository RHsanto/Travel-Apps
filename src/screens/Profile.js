import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Text from '../components/Text/Text';

const Profile = () => {
  return (
   <SafeAreaView>
    <ScrollView>
    <View>
      <Text>This is Profile</Text>
    </View>   
    </ScrollView>     
   </SafeAreaView>
  );
};

export default Profile;