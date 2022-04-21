import React, { Component } from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Input from "../components/Input";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/AntDesign"
import {serializeKey} from "../common/index";;
export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userPassword: ''
		};
	}
	goLogin() {
		Alert.alert(this.state.userName + this.state.password);
	}
  render() {
    return (
      <View>
				<Text style={styles.title}>Giriş Yap</Text>

				<View style={styles.space}>
					<View style={styles.left}>
						<Icon name="user" size={25} color={'#999'} />
					</View>
						<View style={styles.right}>
							<TextInput
								value={this.state.userName}
								onChangeText={(value) => this.setState({userName: value})}
								returnKeyType={"next"}
								autoCapitalize="none"
								placeholder="Kullanıcı adı"
								onSubmitEditing={() => this.passwordInput.focus()}
								value
							/>
						</View>
				</View>

				<View style={styles.space}>
					<View style={styles.left}>
						<Icon name="lock" size={25} color={'#999'}/>
					</View>
					<View style={styles.right}>
						<TextInput
							value={this.state.userPassword}
							onChangeText={(value) => this.setState({userPassword: value})}
							returnKeyType={"go"}
							secureTextEntry={true}
							placeholder="Şifre"
							inputRef={input => this.passwordInput = input}
						/>
					</View>
				</View>

			</View>
    );
  }
}

const styles = StyleSheet.create({
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

});
