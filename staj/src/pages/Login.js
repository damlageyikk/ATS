import React, {Component, useState, useEffect} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Alert
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import auth from "@react-native-firebase/auth";
import {firebase} from "@react-native-firebase/auth";

export default class Login extends Component{
	static navigationOptions= {header:null}
	constructor(props) {
		super(props);
		this.state = ({
			email: '',
			password: '',
		})
	}

	updateInputVal = (val, prop) => {
		const state = this.state;
		state[prop] = val;
		this.setState(state);
	}

	userLogin = () => {
		if(this.state.email === '' && this.state.password === '') {
			this.props.navigation.navigate('Main')
		} else {
			this.setState({
				isLoading: true,
			})
			firebase
				.auth()
				.signInWithEmailAndPassword(this.state.email, this.state.password)
				.then((res) => {
					console.log(res)
					console.log('User logged-in successfully!')
					this.setState({
						isLoading: false,
						email: '',
						password: ''
					})
					this.props.navigation.navigate('Main')
				})
				.catch(error => this.setState({ errorMessage: error.message }))
		}
	}

	render() {

			return (
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.header}>
							<Icon name="tool" size={120} color={'#fff'}/>
							<Text style={styles.headerTitle}>Arıza Takip Sistemi</Text>
						</View>
						<View style={styles.slideOne}>

							<KeyboardAvoidingView>
								<View style={styles.login}>
									<View>
										<Text style={styles.title}>Giriş Yap</Text>

										<View style={styles.space}>
											<View style={styles.left}>
												<Icon name="user" size={25} color={'#999'}/>
											</View>
											<View style={styles.right}>
												<TextInput
													onChangeText={(val) => this.updateInputVal(val, 'email')}
													returnKeyType={"next"}
													autoCapitalize="none"
													placeholder="Kullanıcı adı"
													onSubmitEditing={() => this.passwordInput.focus()}
													style={styles.textInput}
												/>
											</View>
										</View>

										<View style={styles.space}>
											<View style={styles.left}>
												<Icon name="lock" size={25} color={'#999'}/>
											</View>

											<View style={styles.right}>
												<TextInput
													onChangeText={(val) => this.updateInputVal(val, 'password')}
													returnKeyType={"go"}
													secureTextEntry={true}
													placeholder="Şifre"
													inputRef={input => this.passwordInput = input}
													style={styles.textInput}
												/>
											</View>
										</View>

									</View>
									<TouchableOpacity
										//onPress={() => this.props.navigation.navigate('Main')}
										onPress={() => this.userLogin()}
										style={styles.button}>
										<Text style={{color: '#f1f1f1'}}>Giriş Yap</Text>
									</TouchableOpacity>

									<View style={styles.signUp}>
										<Text style={styles.description}>Hesabınız yok mu ?</Text>
										<TouchableOpacity
											onPress={() => this.props.navigation.navigate('Account')}>
											<Text style={styles.hesapButton}>Hesap Oluştur</Text>
										</TouchableOpacity>
									</View>
								</View>

							</KeyboardAvoidingView>
						</View>
						<View style={styles.slideTwo}></View>
					</ScrollView>
				</View>
			);
		}
}
const styles = StyleSheet.create({
container: {
	flex:1,
},
	header: {
	position: 'absolute',
		top:0,
		left:0,
		width: '100%',
		height: 400,
		backgroundColor: '#0057ff',

	},
slideOne: {
	flex:2,
},
	slideTwo: {
flex:1
	},
	headerTitle: {
		color: '#fff',
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	login: {
		marginHorizontal: 40,
		marginVertical: 40,
		height:400,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOpacity: .9,
		marginTop: 200
	},
	description:{
	color: '#999',
		textAlign: 'center',
		marginTop: 50
	},
	hesapButton: {
	color: '#666',
		textAlign: 'center',
		marginTop: 10,
	fontWeight: 'bold',
	},
	button:{
		padding: 10,
		backgroundColor: '#0057ff',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:20,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#4e4e4e'

	},
	space: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
	},
	right: {
		width: '90%',
	},
	left: {
		width: '10%',
		marginTop:25,

	},
	textInput: {
	marginTop:10,
		borderWidth:1,
		borderColor: '#e5dede',
		borderRadius:5
	}

});

