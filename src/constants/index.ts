import { Dimensions, Platform } from 'react-native';

const Window = Dimensions.get('window');
const Screen = Dimensions.get('screen');

export type ColoursObject = {
  background: {
    light: string;
    dark: string;
  };
};

export type ScreenDimensionsObject = {
  window: typeof Window;
  screen: typeof Screen;
  width: typeof Window.width;
  height: typeof Window.height;
  topEdgeDelta: typeof Window.height;
};

export const Colours: ColoursObject = {
  background: {
    light: 'white',
    dark: 'black',
  },
};

export const ScreenDimensions: ScreenDimensionsObject = {
  window: Window,
  screen: Screen,
  width: Screen.width,
  height: Screen.height,
  topEdgeDelta: Screen.height - Window.height,
};

export const Colors = {
  bg: { dark: '#393E46', light: '#EEEEEE' },
  orange: '#D65A31',
  grey: '#222831',
};

const os = Platform.OS;
export const HEADER_HEIGHT =
  ScreenDimensions.height * (os === 'ios' ? 0.12 : 0.05) + ScreenDimensions.topEdgeDelta;

export const CTA_DISTANCE_FROM_EDGE = {
  RIGHT: ScreenDimensions.width * (os === 'ios' ? 0.05 : 0.03),
  BOTTOM: ScreenDimensions.height * (os === 'ios' ? 0.05 : 0.03),
};
