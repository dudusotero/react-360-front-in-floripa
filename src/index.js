import React from 'react'
import { View } from 'react-360'
import {
  Header, Planet, Menu, Info,
} from './components'
import { PLANETS as planets } from './constants'
import styles from './styles'

export default class SolarSystem extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPlanet: 'Earth',
    }
    this.switchPlanet = this.switchPlanet.bind(this)
  }

  switchPlanet(planet) {
    this.setState({ currentPlanet: planet })
  }

  render() {
    const {
      currentPlanet,
    } = this.state

    return (
      <View style={styles.root}>
        <Info currentPlanet={currentPlanet} />
        <View style={styles.middle}>
          <Header currentPlanet={currentPlanet} />
          <Planet currentPlanet={currentPlanet} />
        </View>
        <Menu planets={planets} switchPlanet={this.switchPlanet} currentPlanet={currentPlanet} />
      </View>
    )
  }
}
