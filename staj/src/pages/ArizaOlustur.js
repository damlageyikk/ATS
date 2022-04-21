
import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	KeyboardAvoidingView,
	ScrollView, Image
} from "react-native";

export default class Arıza extends Component{
	static navigationOptions= {header:null}
	onPressButton = () => {
		alert('Hello');
	}
	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={{...styles.header,marginBottom:'5%'}}>
						<View style={{backgroundColor:'#0057ff'}}>
							<TouchableOpacity style={{alignItems: 'center',}}>
								<Image style={{width: 40, height: 30, marginTop:15, backgroundColor: '#fff', marginRight:5, borderRadius:20}} source={require('../assets/worker.png')}/>
							</TouchableOpacity>
							<View style={{alignItems: 'center',}}>
								<Text style={styles.headerText
								}>ARIZA LİSTESİ DETAY</Text>
							</View>
						</View>
					</View>
					<View style={styles.slideOne}>
						<KeyboardAvoidingView>
							<View style={styles.text}>
								<Text style={styles.textOne}>Oluşturulma Tarihi:</Text>
								<Text style={styles.textTwo}>23 Haziran Çarşamba, 21.15</Text>
							</View>

							<View style={styles.text}>
								<Text style={styles.textOne} >İş Emri No:</Text>
								<Text style={styles.textTwo} >IE1234</Text>
							</View>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}>Makina Adı:</Text>
									<Text style={styles.textTwo}>Toplayıcı</Text>
								</View>
								<View style={styles.right}>
									<Text style={styles.textOne} >Makina kodu:</Text>
									<Text style={styles.textTwo}>YT12332</Text>
								</View>
							</View>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}>Vardiya:</Text>
									<Text style={styles.textTwo} >Sabah</Text>
								</View>
								<View style={styles.right}>
									<Text style={styles.textOne}>Üretim Durumu:</Text>
									<Text style={styles.textTwo}>Beklemede</Text>
								</View>
							</View>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne} >Öncelik:</Text>
									<Text style={styles.textBackground}>Normal</Text>
								</View>
								<View style={styles.right}>
									<Text style={styles.textOne}>Durum</Text>
									<Text style={styles.textBackground}>Başlamadı</Text>
								</View>
							</View>

							<View style={styles.text}>
								<Text style={styles.textOne}
											style={{marginTop:30}}>Arıza İsmi </Text>
								<TextInput style={styles.faultInput}></TextInput>
							</View>

							<View style={styles.text} >
								<Text style={{marginTop:30}}>Arıza Türü</Text>
								<Picker
									style={styles.picker}>
									<Picker.Item label="Yağ Arızası" value="" />
									<Picker.Item label="Arıza2" value="" />
									<Picker.Item label="Arıza3" value="" />
								</Picker>
							</View>

							<View style={styles.text}>
								<Text  style={{marginTop:40}}>Açıklama</Text>
								<TextInput style={styles.description}></TextInput>
							</View>

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('RegisterForm')}>
								<View style={styles.buttonContainer}>
									<Text style={styles.buttonTitle}>Kaydet</Text>
								</View>
							</TouchableOpacity>

						</KeyboardAvoidingView>
					</View>
				</ScrollView>
				<View style={styles.slideTwo}></View>

			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#fff',
		paddingVertical: 80,

	},
	header: {
		top:0,
		left:0,
		height:200,
		width:'100%',
		backgroundColor:'#0057ff',
	},
	headerText: {
		color: '#fff',
		fontWeight: 'bold',
		marginBottom:10,
	},
	slideOne:{
		flex:2,
		marginVertical: 10,
		paddingHorizontal:5,
	},
	slideTwo:{
		flex:1,
	},
	text: {
		flexDirection: 'row',
		paddingHorizontal:5,
	},
	right: {
		flexDirection: 'row',
		paddingHorizontal: 5,
		width: '50%',
	},
	left: {
		flexDirection: 'row',
		paddingHorizontal: 5,
		width: '50%',
	},
	space:{
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textOne: {
		fontWeight: 'bold',
		marginTop: 10,
		color: '#4e4e4e'
	},
	textTwo: {
		paddingHorizontal: 5,
		marginTop: 10,
	},
	textDescription: {
		fontWeight: 'bold',
		marginTop: 30,
	},
	buttonTitle: {
		fontSize: 24,
		color: '#fff',
		textAlign: 'center',
	},
	buttonContainer: {
		padding: 15,
		backgroundColor: '#0057ff',
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:10,
		paddingHorizontal: 20,
	},
	faultInput: {
		width:'100%',
		height: 40,
		paddingHorizontal:5,
		borderWidth:2,
		borderRadius: 4,
		borderColor: '#f1f1f1',
		marginTop: 20,
		marginBottom:5,
	},
	description: {
		width:'100%',
		height: 80,
		paddingHorizontal: 5,
		borderWidth:2,
		borderRadius: 4,
		borderColor: '#f1f1f1',
		marginTop: 20,
	},
	textBackground: {
		paddingHorizontal: 15,
		marginTop:10,
		color: '#fff',
		backgroundColor: '#0057ff',
	},
	picker: {
		marginTop:20,
		width: '80%',
		height: 40,
		paddingHorizontal:5,
		borderWidth:2,
		borderRadius: 4,
		borderColor: '#f1f1f1',
		marginBottom:5,
	},

});
