import { StyleSheet } from 'react-360'
import { SIZE } from './constants'

const { width, height } = SIZE

const styles = StyleSheet.create({
  root: {
    width,
    height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middle: {
    flex: 1,
    height,
    flexDirection: 'column',
  },
})

export default styles
