import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default class Ariza extends Component {
	static navigationOptions = {
		header: null,
		headerBackTitle: 'Geri'
	}

	render() {
		const {navigate, goBack} = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={{...styles.header, marginBottom: '5%'}}>
					<View style={{backgroundColor: '#0057ff',}}>
						<View style={{flexDirection: 'row',}}>
							<View>
								<TouchableOpacity
									onPress={() => goBack()}>
									<Image style={{width: 40, height: 30, marginTop: 15, marginRight: 5}}
												 source={require('../assets/back.png')}/>
								</TouchableOpacity>
							</View>
							<View style={{alignItems: 'center',}}>
								<Image style={{
									width: 40, height: 30, marginTop: 15, backgroundColor: '#fff', marginRight: 5
									, borderRadius: 20, marginLeft: 150
								}} source={require('../assets/worker.png')}/>
							</View>
						</View>
						<View style={{alignItems: 'center',}}>
							<Text style={styles.headerText}>ARIZA TAKİP SİSTEMİ</Text>
						</View>
					</View>
				</View>
				<ScrollView>

					<View style={styles.cardContainer}>
						<View style={styles.card}>
							<Text style={styles.cardTitle}> Arıza Kaydı'nın durumu değişti</Text>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="edit" size={20}/> Makina:</Text>
								</TouchableOpacity>
								<Text style={styles.textTwo}>TÜRBİN</Text>
							</View>

							<View>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="clockcircleo" size={20}/> 23 Haziran Çarşamba, 07:55</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="sync" size={20}/> İşlem Durumu:</Text>
								</TouchableOpacity>
								<Text style={styles.cardBg}>Tamamlandı</Text>
							</View>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="pushpino" size={20}/> Öncelik:</Text>
								</TouchableOpacity>
								<Text style={styles.cardBg}>Normal</Text>
							</View>

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Arizalar')}>
								<Text style={styles.textOne}> <Icon name="user" size={20}/> Ali Veli Selami </Text>
							</TouchableOpacity>
						</View>

						<View style={styles.card}
									onPress={() => this.props.navigation.navigate('Arizalar')}>
							<Text style={styles.cardTitle}> Arıza Kaydı'nın durumu değişti</Text>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="edit" size={20}/> Makina:</Text>
								</TouchableOpacity>
								<Text style={styles.textTwo}>TÜRBİN</Text>
							</View>

							<View>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="clockcircleo" size={20}/> 23 Haziran Çarşamba, 07:55</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="sync" size={20}/> İşlem Durumu:</Text>
								</TouchableOpacity>
								<Text style={styles.cardBg}>Tamamlandı</Text>
							</View>

							<View style={styles.cardText}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Arizalar')}>
									<Text style={styles.textOne}> <Icon name="pushpino" size={20}/> Öncelik:</Text>
								</TouchableOpacity>
								<Text style={styles.cardBg}>Normal</Text>
							</View>

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Arizalar')}>
								<Text style={styles.textOne}> <Icon name="user" size={20}/> Ali Veli Selami </Text>
							</TouchableOpacity>
						</View>

					</View>

					<TouchableOpacity style={styles.plusButton}
														onPress={() => this.props.navigation.navigate('RegisterForm')}>
						<Icon name="plus" size={45} style={styles.plus}/>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		top: 0,
		left: 0,
		height: 30,
		width: '100%',
		backgroundColor: '#0057ff',
	},
	headerText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10
	},
	headerTitle: {
		color: '#fff',
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 20
	},
	cardContainer: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginTop: 20
	},
	card: {
		marginTop: 25,
		marginHorizontal: 5,
		paddingHorizontal: 5,
		paddingVertical: 5,
		padding: 20,
		backgroundColor: '#e9e9e9'
	},
	textOne: {
		fontWeight: 'bold',
		marginTop: 10,
		color: '#4e4e4e'
	},
	textTwo: {
		marginTop: 15,
		color: '#4e4e4e',
		fontSize: 12,
		paddingHorizontal: 10
	},
	cardTitle: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#4e4e4e'
	},
	cardText: {
		flexDirection: 'row',
	},

	cardBg: {
		marginTop: 10,
		padding: 5,
		paddingHorizontal: 10,
		backgroundColor: '#0095b6',
		color: '#fff',
		marginHorizontal: 5,
		marginVertical: 5,
		borderRadius: 5,

	},
	plus: {
		color: '#fff',
		backgroundColor: '#0057ff',
		padding: 10,
		borderRadius: 100,
		width: 70,
		height: 70,
		textAlign: 'center',

	},
	plusButton: {
		alignItems: 'flex-end',
		right: 10,
		top: -50

	}


});

