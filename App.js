import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useFonts,Lato_400Regular,Lato_700Bold,} from '@expo-google-fonts/lato';
import { colors } from './src/theme/color';
import { StyleSheet } from 'react-native';
import { Entypo ,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import Home from './src/screens/Home';
import Liked from './src/screens/Liked';
import Profile from './src/screens/Profile';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),   
        }}
      />
      <Tab.Screen
        name="Liked" 
        component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
 const App =()=> {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  
  });

  if (!fontsLoaded) {
    return null;
  } 
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});