import React from 'react';
import {
  Text,
  View,
} from 'react-360';
import styles from './styles';

const Header = ({ currentPlanet }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>The Solar System</Text>
    <Text style={styles.headerSubtitle}>{currentPlanet}</Text>
  </View>
);

export default Header;