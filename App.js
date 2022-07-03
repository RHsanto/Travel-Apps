import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,

} from '@expo-google-fonts/lato';
import Liked from './src/screens/Liked';
import Profile from './src/screens/Profile';
import { colors } from './src/theme/color';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs=()=>{
  return (
    <Tab.Navigator
    tabBarOptions={{
      style:styles.tabBar,
      activeTinColor:colors.orange,
      inactiveTinColor:colors.grey
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
  }
 const App =()=> {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (

    <> 
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
 
  );
}

export default App;

const styles= StyleSheet.create({
  tabBar:{
    backgroundColor:colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
})