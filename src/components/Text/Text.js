import { View,Text as RNtext} from "react-native";



const Text = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Text;