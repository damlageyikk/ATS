import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import RNPickerDialog from "rn-modal-picker";
import AlertPro from "react-native-alert-pro";

 class ArizaDetay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: true,
			data: [
				{
					id: 1,
					name: 'Yağ Arızası',
				},
				{
					id: 2,
					name: 'Arıza2',
				},
				{
					id: 3,
					name: 'Arıza3',
				},
			],
			placeHolderText: 'Yağ Arızası',
			selectedText: '',
			defaultValue: true,
			select: '',
			value: '',

		};
	}

	selectedValue(index, item) {
		this.setState({selectedText: item.name});
	}
	render() {
		return (
			<View style={styles.container}>


			</View>

		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	slideOne:{
		flex:2,
		marginVertical: 10,
		marginHorizontal: 10,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
	},
	slideTwo:{
		flex:1,
	},
	text: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	textOne: {
		fontWeight: 'bold',
		color: '#1A237E',
		marginTop:5
	},
	twoText: {
		flexDirection: 'row',
		marginHorizontal: 0,
	},
	textInput: {
		width:'75%',
		height: 30,
		borderWidth:2,
		borderRadius: 10,
		marginTop: 10,
		marginBottom:5,
		borderColor: '#f1f1f1',
		paddingHorizontal:10,
		borderBottomWidth:1,
	},
	space: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
	},
	right: {
		width: '50%',
	},
	left: {
		width: '50%',
	},
	textInputTwo: {
		width: '100%',
		height: 20,
		marginTop: 10,
		marginBottom:5,
		paddingHorizontal:10,
		color: '#4e4e4e',
		fontSize: 12,
		fontWeight: 'bold'
	},
	faultInput: {
		width:'75%',
		height: 40,
		paddingHorizontal:5,
		borderWidth:2,
		borderRadius: 10,
		borderColor: '#f1f1f1',
		marginTop: 20,
		marginBottom:5,
	},
	description: {
		width:'75%',
		height: 80,
		paddingHorizontal: 5,
		borderWidth:2,
		borderRadius: 10,
		borderColor: '#f1f1f1',
		marginTop: 20,
	},
	buttonTitle: {
		fontSize: 24,
		color: '#fff',
		textAlign: 'center',
	},
	buttonContainer: {
		padding: 10,
		backgroundColor: '#0057ff',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:15,
		paddingHorizontal: 20,
	},
	selectedTextStyle: {
		height: 50,
		borderColor: 'gray',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		width: '100%',
		color: 'black',
		fontSize: 20,
		paddingLeft: 10,
		marginTop: -2,
	},
	selectedTextStyle1: {
		height: 40,
		borderColor: 'gray',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		width: '100%',
		color: 'black',
		fontSize: 10,
		paddingLeft: 10,
		marginTop: 15,
	},
	listTextStyle: {
		color: '#000',
		marginVertical: 10,
		flex: 0.9,
		marginLeft: 20,
		marginHorizontal: 10,
		textAlign: 'left',
	},
	pickerStyle: {
		width: '85%',
		shadowRadius: 3,
		shadowOpacity: 0.5,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#f1f1f1'
	},
});
