/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import SplashScreen from './SplashScreen';
import MusicListScreen from './MusicListScreen';
import MusicGameScreen from './MusicGameScreen';
import MusicGameOver from './MusicGameOver';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="splashScreen" component={SplashScreen} hideNavBar/>
					<Scene key="musicListScreen" component={MusicListScreen} hideNavBar/>
					<Scene key="musicGameScreen" component={MusicGameScreen} hideNavBar/>
					<Scene key="musicGameOver" component={MusicGameOver} hideNavBar/>
				</Scene>
			</Router>
		);
	}
}
