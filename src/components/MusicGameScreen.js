import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
	Animated
} from 'react-native';
import Draggable from './Draggable';
import appStyle from '../statics/styles/appStyle';
// import Sound from 'react-native-sound';


export default class MusicGameScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instruments: props.config.instruments,
			dropZones: [],
			instrumentsPosition: {}
		}
	}
	static navigatorStyle = {
		navBarHidden: true
	};
	setDropZoneValues(event) {
		this.state.dropZones.push(Object.assign({},event.nativeEvent.layout,{}));
	}
	render() {
		// let whoosh = new Sound('cumbia.wav', Sound.MAIN_BUNDLE, (error) => {
		// 	if (error) {
		// 		console.log('failed to load the sound', error);
		// 		return;
		// 	}
		// 	// loaded successfully
		// 	console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
		// });
		// whoosh.play((success) => {
		// 	if (success) {
		// 		console.log('successfully finished playing');
		// 	} else {
		// 		console.log('playback failed due to audio decoding errors');
		// 		// reset the player to its uninitialized state (android only)
		// 		// this is the only option to recover after an error occured and use the player again
		// 		whoosh.reset();
		// 	}
		// });
		return (
			<Image style={styles.backgroudLevel} source={this.props.config.background}>
				<Text style={styles.title}>
					{this.props.config.name.toUpperCase()}
				</Text>
				<View style={styles.containerDropInstruments} >
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
				</View>
				<View style={styles.containerImagesIntruments} >
					{
						this.state.instruments.map(instrument => {
							return <Draggable key={instrument.name} dropzones={this.state.dropZones} instrument={instrument}></Draggable>
						})
					}
				</View>
			</Image>
		);
	}
}

const styles = StyleSheet.create(appStyle);