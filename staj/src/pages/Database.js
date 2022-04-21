import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {firebase} from "@react-native-firebase/firestore";

export default class Database extends Component {
	state = {
		Register : {
			date: ""
		}
	}
	constructor(props) {
		super(props);
		this.getUser();
		this.subscriber = firebase.firestore().collection("Register").doc('iaB5ThqocklVGxx2ICBI').onSnapshot(doc => {
			this.setState({
				Register: {
					date: doc.data().date
				}})
		})
	}
	getUser = async () => {
		const userDocument = await firebase.firestore().collection("Register").doc('iaB5ThqocklVGxx2ICBI').get()
		console.log(userDocument)
	}

  render() {
    return (
      <View>

				<Text>
					{this.state.Register.date}
				</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({



});
