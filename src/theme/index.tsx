import { colors } from "./colors";
import { shadow } from "./shadow";

interface ITheme {
  colors: {[key: string] : string};
  shadow: {[key: string] : string};
}

export const theme: ITheme = {
  colors,
  shadow,
}