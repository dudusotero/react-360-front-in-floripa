import { StyleSheet } from 'react-360'

const styles = StyleSheet.create({
  planet: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    transform: [{translate: [0, -100, 0]}]
  },
});

export default styles;