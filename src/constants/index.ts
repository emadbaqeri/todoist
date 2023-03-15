import { Dimensions } from 'react-native';

export type ColoursObject = {
  background: {
    light: string;
    dark: string;
  };
};

export type ScreenDimensionsObject = {
  screen: typeof Screen;
  width: typeof Screen.width;
  height: typeof Screen.height;
};

export const Colours: ColoursObject = {
  background: {
    light: 'white',
    dark: 'black',
  },
};

const Screen = Dimensions.get('window');
export const ScreenDimensions: ScreenDimensionsObject = {
  screen: Screen,
  width: Screen.width,
  height: Screen.height,
};
