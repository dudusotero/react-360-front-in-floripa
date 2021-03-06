import React from 'react'
import {
  asset,
  View,
  Animated,
} from 'react-360'
// eslint-disable-next-line import/no-unresolved
import Entity from 'Entity'
import styles from './styles'

export default class Planet extends React.Component {
  constructor() {
    super()

    this.state = {
      rotation: 0,
      bounceValue: new Animated.Value(1),
    }

    this.lastUpdate = Date.now()

    this.rotate = this.rotate.bind(this)
  }

  componentDidMount() {
    this.rotate()
  }

  componentWillReceiveProps(nextProps) {
    const { currentPlanet } = this.props
    const { bounceValue } = this.state

    if (currentPlanet !== nextProps.currentPlanet) {
      const planetConfig = {
        value: bounceValue,
        initial: 0.3,
        toValue: 1,
        friction: 5,
      }

      this.bounce(planetConfig)
    }
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle)
      this.frameHandle = null
    }
  }

  rotate() {
    const { rotation } = this.state
    const now = Date.now()
    const delta = now - this.lastUpdate

    this.time = this.time + 1

    this.lastUpdate = now
    this.setState({
      rotation: rotation + delta / 150,
    })
    this.frameHandle = requestAnimationFrame(this.rotate)
  }

  bounce({
    value, initial, toValue, friction = 1.5,
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
    const { currentPlanet } = this.props
    const { rotation, bounceValue } = this.state
    const scale = bounceValue

    return (
      <View style={styles.planet}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Entity
            source={{ obj: asset(`models/${currentPlanet}.obj`) }}
            texture={asset(`textures/${currentPlanet}.png`)}
            style={
              [
                {
                  transform: [
                    { translate: [0, 0, 0] },
                    { scale: 9 },
                    { rotateY: rotation },
                  ],
                },
              ]
            }
          />
        </Animated.View>
      </View>
    )
  }
}
