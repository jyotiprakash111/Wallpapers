import { PixelRatio, View,Text,Dimensions} from 'react-native';
import { actuatedNormalize } from './actualnormalize';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const scale = SCREEN_WIDTH / 375;

export function actuactualPixelSize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return  Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
  }

