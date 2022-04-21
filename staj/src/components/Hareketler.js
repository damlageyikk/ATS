import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default class Hareketler extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>

				<View style={styles.card}>

					<Text style={styles.cardTitle}>  Arıza Kaydı'nın durumu değişti</Text>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="edit" size={20}/> Makina:</Text>
						<Text style={styles.textTwo}>TÜRBİN</Text>
					</View>

					<View>
						<Text style={styles.textOne}>	<Icon name="clockcircleo" size={20}/> 23 Haziran Çarşamba, 07:55</Text>
					</View>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="sync" size={20}/> İşlem Durumu:</Text>
						<Text style={styles.cardBg}>Tamamlandı</Text>
					</View>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="pushpino" size={20}/> Öncelik:</Text>
						<Text style={styles.cardBg}>Normal</Text>
					</View>

					<Text style={styles.textOne}> <Icon name="user" size={20}/> Ali Veli Selami </Text>

				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>  Arıza Kaydı'nın durumu değişti</Text>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="edit" size={20}/> Makina:</Text>
						<Text style={styles.textTwo}>TÜRBİN</Text>
					</View>

					<View>
						<Text style={styles.textOne}>	<Icon name="clockcircleo" size={20}/> 23 Haziran Çarşamba, 07:55</Text>
					</View>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="sync" size={20}/> İşlem Durumu:</Text>
						<Text style={styles.cardBg}>Tamamlandı</Text>
					</View>

					<View style={styles.cardText}>
						<Text style={styles.textOne}> <Icon name="pushpino" size={20}/> Öncelik:</Text>
						<Text style={styles.cardBg}>Normal</Text>
					</View>

					<Text style={styles.textOne}> <Icon name="user" size={20}/> Ali Veli Selami </Text>

				</View>

			</View>

    );
  }
}

const styles = StyleSheet.create({
	cardContainer:{
		paddingHorizontal: 10,
		paddingVertical: 10
	},
	card: {
		marginTop:1,
		paddingHorizontal:5,
		padding:20,
		backgroundColor: '#e9e9e9'
	},
	textOne: {
		fontWeight: 'bold',
		marginTop: 10,
		color: '#4e4e4e'
	},
	textTwo: {
		marginTop:15,
		color: '#4e4e4e',
		fontSize: 12,
		paddingHorizontal:10
	},
	cardTitle: {
		fontSize: 18,
		textAlign:'center',
		fontWeight: 'bold',
		color: '#4e4e4e'
	},
	cardText: {
		flexDirection: 'row',
	},

	cardBg: {
		marginTop:10,
		padding:5,
		paddingHorizontal:10,
		backgroundColor: '#0095b6',
		color: '#fff',
		marginHorizontal:5,
		marginVertical:5,
		borderRadius:5,

	}
});



