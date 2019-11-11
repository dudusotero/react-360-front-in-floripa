import React from 'react';
import {
  Text,
  View,
} from 'react-360';
import { PLANETS as planets } from '../../constants';
import styles from './styles';

export default class Info extends React.Component {

  description(description) {
    return (
      <View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    );
  }

  render() {
    const { currentPlanet } = this.props;

    return (
      <View style={styles.info}>
        <View>
          <Text style={styles.infoTitle}>
            { currentPlanet }
          </Text>
        </View>

        { this.description(planets[currentPlanet].description) }
      </View>
    );
  }
}
