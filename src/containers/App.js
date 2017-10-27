/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Orientation from 'react-native-orientation';
import MusicGameScreen from "../components/MusicGameScreen";
import appStyle from '../statics/styles/appStyle'; 

export default class App extends Component<{}> {

  componentDidMount() {
    Orientation.lockToLandscape();
  }
  render() {
    const config = {
      name: 'Cumbia',
      title: require('../statics/images/cumbiaTitulo.png'),
      background: require('../statics/images/fondoCumbia.png'),
      instruments: [
        {
          name: 'Maracas', 
          valid: true, 
          img: require('../statics/images/instrumentos/maracas.png')
        },
        {
          name: 'Tambora', 
          valid: true, 
          img: require('../statics/images/instrumentos/tambora.png')
        },
        {
          name: 'Gaita', 
          valid: true, 
          img: require('../statics/images/instrumentos/gaita.png')
        },
        {
          name: 'Arpa', 
          valid: false, 
          img: require('../statics/images/instrumentos/arpa.png')
        },
        {
          name: 'Birimbao', 
          valid: false, 
          img: require('../statics/images/instrumentos/barimbaru.png')
        }
      ]
    }
    return (
      <View style={styles.container}>
        <MusicGameScreen config={config}></MusicGameScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create(appStyle);
