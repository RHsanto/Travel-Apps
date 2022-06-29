import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
const Stack = createNativeStackNavigator();

export default function App() {
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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
 
  );
}

