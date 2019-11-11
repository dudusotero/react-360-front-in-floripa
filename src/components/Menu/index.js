import React from 'react'
import {
  Text,
  View,
  Animated,
  VrButton,
} from 'react-360'
import { PLANETS as planets } from '../../constants'
import styles from './styles'

export default class Menu extends React.Component {
  constructor(props) {
    super()
    this.state = {
      bounceValue: new Animated.Value(1),
      activePlanet: props.currentPlanet,
    }
  }

  planetButton(planet) {
    const { activePlanet, bounceValue } = this.state
    const selected = activePlanet === planet
    const scale = selected ? bounceValue : 1
    const borderColor = selected ? 'purple' : '#fff'

    return (
      <VrButton key={`button-${planet}`} onClick={() => this.handleClick(planet)}>
        <Animated.View style={[styles.planetBtn, { transform: [{ scale }], borderColor }]}>
          <Text style={styles.planetBtnLabel}>{planet}</Text>
        </Animated.View>
      </VrButton>
    )
  }

  handleClick(planet) {
    const { switchPlanet } = this.props
    const { bounceValue } = this.state

    this.setState({ activePlanet: planet }, () => {
      const btnConfig = {
        value: bounceValue,
        initial: 1.1,
        toValue: 1,
      }

      this.bounce(btnConfig)

      switchPlanet(planet)
    })
  }

  bounce({
    value, initial, toValue, friction = 1.1,
  }) {
    value.setValue(initial)

    Animated.spring(
      value,
      {
        toValue,
        friction,
      },
    ).start()
  }

  render() {
    return (
      <View style={styles.menu}>
        { Object.keys(planets).map((planet) => this.planetButton(planet)) }
      </View>
    )
  }
}
