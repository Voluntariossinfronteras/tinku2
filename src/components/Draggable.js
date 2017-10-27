import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PanResponder,
	Animated
} from 'react-native';
import appStyle from '../statics/styles/appStyle';

export default class Draggable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDraggable: true,
			dropZoneValues: null,
			pan: new Animated.ValueXY(),
			initial: new Animated.ValueXY(),
			position:null
		};
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, {
				dx: this.state.pan.x,
				dy: this.state.pan.y
			}]),
			onPanResponderRelease: (e, gesture) => {
				if(this.isDropZone(e,gesture)){ //Step 1
					this.setState({
						showDraggable : false //Step 3
					});
				}else{
					Animated.spring(
						this.state.pan,
						{toValue:{x:0,y:0}}
					).start();
				}
			}
		});
	}
	isDropZone(e,gesture){     //Step 2
		console.log((gesture.y0-gesture.moveY)+(this.state.position.y))
		console.log(this.props.dropzones[0])
		let isDropZones = this.props.dropzones.map(dz=>{
			return (this.state.position.y > dz.y && this.state.position.y < dz.y + dz.height) && (this.state.position.x > dz.x && this.state.position.x < dz.x + dz.width);
		});
		let isDropeable = isDropZones.reduce((_old,_new)=>{return _old || _new});
		return isDropeable && this.props.instrument.valid;
	}
	render() {
		return (
			<Animated.View onLayout={(e)=>{this.setState({position:e.nativeEvent.layout})}}
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout()]}>
				<Image style={appStyle.instrument} source={this.props.instrument.img} />
				<Text style={appStyle.descriptionInstrument}>{this.props.instrument.name}</Text>
			</Animated.View>
		);
	}
}
