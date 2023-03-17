import { StyleSheet } from 'react-native';
import { CTA_DISTANCE_FROM_EDGE } from '@constants';

const HomeScreenStyles = StyleSheet.create({
  actionButton: {
    position: 'absolute',
    bottom: CTA_DISTANCE_FROM_EDGE.BOTTOM,
    right: CTA_DISTANCE_FROM_EDGE.RIGHT,
    borderRadius: 1000,
    padding: 6,
  },
});

export default HomeScreenStyles;
