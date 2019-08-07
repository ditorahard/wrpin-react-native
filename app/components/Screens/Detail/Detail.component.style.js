import {StyleSheet} from 'react-native';
import SCREEN_IMPORT from 'Dimensions';
  
const IMAGE_WIDTH = SCREEN_IMPORT.get('window').width*0.5;

export default StyleSheet.create({
	container: {
	    padding:20,
	},
	imageDetail:{
		width:IMAGE_WIDTH,
		height:200,
		marginBottom:20,
	},
	title:{
		fontSize:20,
		color:"#272726",
		marginBottom:10,
	},
	publishedAt:{
		fontSize:12,
		marginBottom:10,
	},
	description:{
		fontSize:14,
		marginBottom:10,
	},
	url:{
		fontSize:12,
		color:"#0078D7",
		textDecorationLine:'underline'
	},
});