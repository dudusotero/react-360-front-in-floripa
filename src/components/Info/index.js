import React from 'react'
import {
  Text,
  View,
} from 'react-360'
import { PLANETS as planets } from '../../constants'
import styles from './styles'

const Info = ({ currentPlanet }) => (
  <View style={styles.info}>
    <View>
      <Text style={styles.infoTitle}>
        { currentPlanet }
      </Text>
    </View>

    <View>
      <Text style={styles.description}>
        { planets[currentPlanet].description }
      </Text>
    </View>
  </View>
)

export default Info
