import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import appStyle from '../../statics/styles/appStyle';


export default class MusicGameScreen extends Component {

  constructor(props){
    super(props);
    this.state = {jojo:require('../../statics/images/backgroud_level.png')};
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={this.state.jojo}>
        <Text style={styles.title}>
          LA CUMBIA DE TINKU
        </Text>
        <Text style={styles.label}>
          Autor de la cancion
        </Text>
        <View style={styles.containerDropInstruments}>
          <View style={styles.dropIntrument}></View>
          <View style={styles.dropIntrument}></View>
          <View style={styles.dropIntrument}></View>
        </View>
        <View style={styles.containerImagesIntruments}>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Acordeon.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Agogo.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Arpa.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Bandola.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Bandoneon.png')}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(appStyle);