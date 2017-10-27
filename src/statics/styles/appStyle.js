import responsive from './Stylesheet';
export default {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroudLevel: {
		padding: '5%',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'column'
	},
	title: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: responsive.FONT_SIZE_TITLE,
	},
	label: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 30,
	},
	containerDropInstruments: {
		flex: 1,
		flexDirection: 'row',
		width: '50%', 
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,		
		// flexWrap:'wrap'
	},
	dropZone: {
		borderRadius: 110,
		borderWidth: 3,
		borderStyle: 'dashed',
		borderColor: '#724212',
		backgroundColor: '#ffffff',
		height: responsive.HEIGHT(220),
		width: responsive.WIDTH(220),
		margin: 15
	},
	containerImagesIntruments: {
		flex: 1,
		flexDirection: 'row',
		width: '70%',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 100,		
	},
	instrument: {
		// marginLeft: 25,
		// marginRight: 25,
		height: responsive.HEIGHT(120),
		width: responsive.WIDTH(120),
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: responsive.FONT_SIZE,
		justifyContent: 'center',
		alignItems: 'center',
	}
};