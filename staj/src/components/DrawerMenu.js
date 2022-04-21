import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
	StatusBar,
	ScrollView,
	Button, Platform, ImageBackground
} from 'react-native';
import MyBackButton from "./MyBackButton";
import Main from "../pages/Main";
import Ariza from "../pages/Ariza";
import Makinalar from "../pages/Makinalar";
import PeriyodikBakım from "../pages/PeriyodikBakım";
import Settings from "../pages/Settings";
import Icon from "react-native-vector-icons/AntDesign";

export default class DrawerMenu extends Component {
	_navigateToScreen = (route) => {
		this.props.navigation.navigate(route);
	}

	render() {
		const {navigation} = this.props;
		const {navigate, goBack} = this.props.navigation;
		return (
			<View style={styles.container}>

				<View style={styles.header}>
					<View>
						<TouchableOpacity
							onPress={() => goBack()}>
							<Icon name={"leftcircleo"} size={30} color={"#0057ff"} style={{marginTop:5, marginRight:240}}/>
						</TouchableOpacity>
					</View>
					<Image source={require('../assets/Group.png')}
								 style={{height:70, width:70, alignItems: 'center', marginTop:10, borderRadius:50, borderWidth:2, borderColor:'#a0a0a0'}}/>
					<Text
						style={{color: '#fff', fontWeight: 'bold', fontSize: 18, marginTop:10}}>Arıza Takip Sistemi</Text>
				</View>

				{/*					<TouchableOpacity*/}
				{/*						style = {styles.buttonStyle}*/}
				{/*					onPress={() => this.props.navigation.navigate('Arizalar')}>*/}
				{/*					<Text  style={styles.menuText}> <Icon  name="tool" size={25}/> Arıza</Text>*/}
				{/*					</TouchableOpacity>*/}

				{/*				<TouchableOpacity*/}
				{/*					style={styles.buttonStyleTwo}*/}
				{/*				onPress={() => this.props.navigation.navigate('Makinalar')}>*/}
				{/*				<Text style={styles.menuTextTwo}><Icon  name="android" size={25} color={'#fff'}/>  Makinalar</Text>*/}
				{/*			</TouchableOpacity>*/}

				{/*<TouchableOpacity*/}
				{/*	style={styles.buttonStyleTwo}*/}
				{/*	onPress={() => this.props.navigation.navigate('PeriyodikBakım')}>*/}
				{/*	<Text style={styles.menuTextTwo}><Icon  name="dashboard" size={25} color={'#fff'}/>  Periyodik Bakım</Text>*/}
				{/*</TouchableOpacity>*/}

				<TouchableOpacity
					style={styles.buttonStyleTwo}
					onPress={() => this.props.navigation.navigate('Settings')}>
					<Text style={styles.menuTextTwo}><Icon  name="setting" size={25} color={'#fff'}/> Ayarlar</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonStyleTwo}
					onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={styles.menuTextTwo}><Icon  name="poweroff" size={25} color={'#fff'}/>  Çıkış</Text>
				</TouchableOpacity>

			</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignContent: 'center',
		display: 'flex',
		height: '100%',
		backgroundColor: '#0057ff'
	},
	header: {
		alignItems: 'center',
	},
	footerButtonText: {
		paddingLeft: 5,
		// fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 20,
		color: '#fff'
	},
	buttonStyle: {
		height: 40,
		backgroundColor: '#0057ff',
		width:'100%',
		marginTop: 40,
	},
	menuText: {
		fontSize: 18,
		fontWeight:'bold',
		color: '#fff',
		marginTop: 5,
		marginVertical:5,
		marginHorizontal: 10,
	},
	menuTextTwo: {
		color: '#fff',
		fontWeight: 'bold',
	},
	buttonStyleTwo: {
		marginTop:10,
		marginVertical: 10,
		marginHorizontal: 10,
	},


});
