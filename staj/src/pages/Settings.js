import React, { Component } from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import {firebase} from "@react-native-firebase/auth";
export default class Settings extends Component {
	static navigationOptions= {header:null}
	constructor() {
		super();
		this.state = {
			userName: '',
		password: '',
		};
	}

	updateInputVal = (val, prop) => {
		const state = this.state;
		state[prop] = val;
		this.setState(state);
	}
 storeHighScore(user, score) {
	 if (user != null) {
		 firebase
			 .auth()
			 .ref('users/' + user.uid)
			 .set({
				 highscore: score,
			 });
	 }
 }

	signOut = () => {
		firebase.auth().signOut().then(() => {
			this.props.navigation.navigate('Login')
		})
			.catch(error => this.setState({ errorMessage: error.message }))
	}

	render() {
		const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
				<View style={{...styles.header,marginBottom:'5%'}}>
					<View style={{backgroundColor:'#0057ff',}}>
						<View style={{ flexDirection:'row',}}>
							<TouchableOpacity
								onPress={() => goBack()}>
								<Icon name={"leftcircleo"} size={30} color={"#fff"} style={{marginTop: 15}}/>
							</TouchableOpacity>
						</View>
						<View style={{alignItems: 'center',}}>
							<Text style={styles.headerText}>AYARLAR</Text>
						</View>
					</View>
				</View>
				<View style={ {alignItems: 'center'}}>
					<Image style={{width: 100, height: 100, marginTop:60,}} source={require('../assets/user1.png')}/>
				</View>
					<View style={styles.card}>
								<Text style={{color: '#c0c0c0', fontWeight: 'bold', fontSize:24, textAlign: 'center'}}>Profili Düzenle</Text>
						<View style={styles.space}>
								<TextInput
									value={this.state.email}
									onChangeText={(val) => this.updateInputVal(val, 'email')}
									returnKeyType={"next"}
									autoCapitalize="none"
									placeholder="Kullanıcı adı"
									onSubmitEditing={() => this.passwordInput.focus()}
									style={styles.textInput}
								/>
						</View>

						<View style={styles.space}>

								<TextInput
									value={this.state.password}
									onChangeText={(val) => this.updateInputVal(val, 'password')}
									returnKeyType={"go"}
									secureTextEntry={true}
									placeholder="Eski Şifre"
									inputRef={input => this.passwordInput = input}
									style={styles.textInput}
								/>
						</View>


						<View style={{alignItems: 'center'}}>
							<TouchableOpacity
								onPress={this.storeHighScore}
								style={styles.button}>
								<Text style={{color: '#fff'}}>KAYDET</Text>
							</TouchableOpacity>
						</View>

						<View style={{alignItems: 'center'}}>
							<TouchableOpacity
								onPress={this.signOut}
								style={styles.buttonTwo}>
								<Text style={{color: '#fff'}}>Çıkış Yap</Text>
							</TouchableOpacity>
						</View>
					</View>

			</View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:  '#e9e9e9'
	},
	header: {
		top:0,
		left:0,
		height:30,
		width:'100%',
		backgroundColor:'#0057ff',
	},
	headerText: {
		color: '#fff',
		marginBottom:10,
		fontWeight: 'bold',
		fontSize:16
	},
	icon: {
		marginTop:15,
		color: '#fff',
		marginLeft:2
	},
	card: {
		marginTop:25,
		marginBottom:5,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
		backgroundColor: '#fff',

	},
	space: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	textInput: {
		marginTop:30,
		marginBottom:10,
		borderWidth:1,
		borderColor: '#e5dede',
		borderRadius:5,
		width: '85%',
		backgroundColor:'#fff',
		marginLeft: 30
	},
	button:{
		width: '85%',
		padding: 10,
		marginBottom:10,
		backgroundColor: '#0057ff',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:20,
		paddingHorizontal: 20,

	},
	buttonTwo:{
		width: '85%',
		padding: 10,
		marginBottom:10,
		backgroundColor: '#B71C1C',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:20,
		paddingHorizontal: 20,

	},
});
