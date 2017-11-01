import React, { Component } from 'react';
import {
	Alert,
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
	Animated
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Draggable from '../components/Draggable';
import appStyle from '../statics/styles/appStyle';

export default class MusicGameScreen extends Component {

	constructor(props) {
		super(props);
		this.instruments = props.config.instruments;
		this.dropZones = [];
		this.state = {
			containerZone: null,
			countTruety: 0,
			count: 0,
			failed: false,
			gameOver: false
		};
	}

	setContainerZone(event) {
		this.setState({ containerZone: event.nativeEvent.layout });
	}

	setDropZoneValues(event) {
		this.dropZones.push(event.nativeEvent.layout);
	}

	updateCountTrue(event) {
		this.setState(previousState => {
			return { countTruety: previousState.countTruety + 1 };
		});

		setTimeout(() => {
			if (this.state.countTruety === 3) {
				this.setState({ gameOver: true });
				Actions.musicGameOver({ 'config': this.props.config });
				// Alert.alert(
				// 	'Felicitaciones',
				// 	'¡Felicitaciones lo lograste!',
				// 	[
				// 		{ text: 'Ok', onPress: () => console.log('Ok') }

				// 	],
				// 	{ cancelable: false }
				// );
			}
		}, 300);
	}

	updateCount(event) {
		this.setState(previousState => {
			return { count: previousState.count + 1 };
		});

		setTimeout(() => {
			if (this.state.count === 3 && !this.state.gameOver) {
				this.setState({ count: 0, countTruety: 0, failed: true });
				Alert.alert(
					'Lo sentimos',
					'¡Intenta de nuevo!',
					[
						{ text: 'Ok', onPress: () => console.log('Ok') }

					],
					{ cancelable: false }
				);
				this.setState({ count: 0, failed: false });
			}
		}, 400);
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.backgroudLevel} source={this.props.config.background}>
					<Image style={styles.title} source={this.props.config.title} />
					<View onLayout={this.setContainerZone.bind(this)} style={styles.containerDropInstruments}>
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
					</View>
					<View style={styles.containerImagesIntruments}>
						{
							this.instruments
								.map((instrument) => {
									return <Draggable key={instrument.name} failure={this.state.failed} countInstruments={this.updateCount.bind(this)} countTrue={this.updateCountTrue.bind(this)} containerzone={this.state.containerZone} dropzones={this.dropZones} instrument={instrument} />;
								})
						}
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);