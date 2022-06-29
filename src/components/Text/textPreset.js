import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";


const BASE ={
  fontFamily:typography.regular,
  fontSize:16,
  color:colors.black,
}
const BOLD ={
  fontFamily:typography.primary,
  fontSize:16,
  color:colors.black,
}

export const presets ={
  default : BASE,
  bold:BOLD,
  h1:{
    ...BOLD,
    fontSize:32,
  },
  h2:{
    ...BOLD,
    fontSize:24,
  },
  h3:{
    ...BASE,
    fontSize:18,
  },
  h4:{
    ...BASE,
    fontSize:16,
  },
  h5:{
    ...BASE,
    fontSize:14,
  },
  small:{
    ...BASE,
    fontSize:12,
  }

  
}