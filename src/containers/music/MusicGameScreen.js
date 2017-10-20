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
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Bandoneon.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Gaita.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Maracas.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Tambora.png')}/>
          <Image style={styles.instrument} source={require('../../statics/images/instrumentos/Sikus.png')}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(appStyle);
