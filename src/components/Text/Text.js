import { View,Text as RNtext, StyleSheet} from "react-native";
import { presets } from "./textPreset";



const Text = ({children,preset="default",style}) => {
  const TextStyle =StyleSheet.compose(presets[preset],style);
  return (
    <View>
      <RNtext style={TextStyle}>{children}</RNtext>
    </View>
  );
};

export default Text;