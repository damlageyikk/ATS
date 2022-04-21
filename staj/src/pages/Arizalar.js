import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TextInput,
	Image,
	Alert
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import ArizaDetay from "../components/ArizaDetay";
import Hareketler from "../components/Hareketler";
import RNPickerDialog from "rn-modal-picker";
import {firebase} from "@react-native-firebase/firestore";

export default class Arizalar extends Component {
	static navigationOptions = {header: null}

	constructor(props) {
		super(props);
		this.getUser();
		this.dbRef = firebase.firestore().collection('Register');
		this.subscriber = firebase.firestore().collection("Register").doc('iaB5ThqocklVGxx2ICBI').onSnapshot(doc => {
			this.setState({
				Register: {
					date: doc.data().date,
					durum: doc.data().durum,
					isEmri: doc.data().isEmri,
					islemDurumu: doc.data().islemDurumu,
					islemSuresi: doc.data().islemSuresi,
					makinaAdi: doc.data().makinaAdi,
					makinaKodu: doc.data().makinaKodu,
					olusturan: doc.data().olusturan,
					oncelik: doc.data().oncelik,
					sorumlu: doc.data().sorumlu,
					vardiya: doc.data().vardiya,
					uretimDurumu: doc.data().uretimDurumu,
					arizaSuresi: doc.data().arizaSuresi,
					arizaKodu: doc.data().arizaKodu,
				}
			})
		})
		this.state = {
			isOpen: false,
			Register: {
				date: "",
				durum: "",
				isEmri: "",
				islemDurumu: "",
				islemSuresi: "",
				makinaAdi: "",
				makinaKodu: "",
				olusturan: "",
				oncelik: "",
				sorumlu: "",
				vardiya: "",
				uretimDurumu: "",
				arizaSuresi: "",
				arizaKodu: "",
				arizaismi: '',
				aciklama: '',
			},
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

	getUser = async () => {
		const userDocument = await firebase.firestore().collection("Register").doc('iaB5ThqocklVGxx2ICBI').get()
		console.log(userDocument)
	}
	inputValueUpdate = (val, prop) => {
		const state = this.state;
		state[prop] = val;
		this.setState(state);
	}

	storeUser() {
		const {navigate} = this.props.navigation;
		this.dbRef.add({
			arizaismi: this.state.arizaismi,
			aciklama: this.state.aciklama,
		}).then((res) => {
			this.setState({
				arizaİsmi: '',
				aciklama: '',
			});
			Alert.alert(
				"Kaydedildi",
				"Kayıt başarılı",
				[
					{ text: "OK", onPress: () => navigate("Main")}
				],
			);
		})
			.catch((err) => {
				console.error("Error found: ", err);
			});
	}

	selectedValue(index, item) {
		this.setState({selectedText: item.name});
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
									<Icon name={"leftcircleo"} size={30} color={"#fff"} style={{marginTop: 15}}/>
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
							<Text style={styles.headerText
							}>ARIZA TAKİP SİSTEMİ</Text>
						</View>
					</View>
				</View>

				<ScrollView>
					<View style={styles.selectButton}>
						<TouchableOpacity
							onPress={() => {
								this.setState({isOpen: false})
							}}
							style={styles.left}>
							<View>
								<Text style={styles.selectButtonTitle}>Arıza Detay</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								this.setState({isOpen: true})
							}}
							style={styles.left}>
							<View>
								<Text style={styles.selectButtonTitleTwo}>Hareketler</Text>
							</View>
						</TouchableOpacity>
					</View>

				</ScrollView>

				{
					this.state.isOpen === false &&

					<ScrollView>
						<View style={styles.slideOne}>
							<KeyboardAvoidingView>
								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}> <Icon name="calendar" size={20}/> Oluşturulma Tarihi:</Text>
										<Text style={styles.textInputTwo}>
											{this.state.Register.date}
										</Text>
									</View>

									<View style={styles.right}>

										<Text style={styles.textOne}><Icon name="infocirlceo" size={20}/> İş Emri No:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.isEmri}</Text>
									</View>
								</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina Adı:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.makinaAdi}</Text>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina kodu:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.makinaKodu}</Text>
									</View>
								</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> Vardiya:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.vardiya}</Text>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="tool" size={20}/> Üretim Durumu:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.uretimDurumu}</Text>
									</View>
								</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="pushpino" size={20}/> İşlem Durum:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.islemDurumu}</Text>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="sync" size={20}/> Durum:</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.durum}</Text>
									</View>
								</View>

								<View style={styles.left}>
									<Text style={styles.textOne}><Icon name="pushpino" size={20}/> Öncelik:</Text>
									<Text style={styles.textInputTwo}>{this.state.Register.oncelik}</Text>
								</View>


								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> İşlem Süresi</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.islemSuresi}</Text>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> Arıza Süresi</Text>
										<Text style={styles.textInputTwo}>{this.state.Register.arizaSuresi}</Text>
									</View>
								</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="user" size={20}/> Sorumlu Kişi/Takım: </Text>
										<Text style={styles.textInputTwo}>Ayşe Fatma</Text>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="adduser" size={20}/> Oluşturan Kişi: </Text>
										<Text style={styles.textInputTwo}>Ali Veli Selami</Text>
									</View>
								</View>

								<View style={styles.twoText}>
									<Text style={styles.textOne}
												style={{marginTop: 30, fontWeight: 'bold', color: '#1A237E', marginRight: 5}}>
										<Icon name="edit" size={20}/> Arıza İsmi </Text>
									<TextInput style={styles.faultInput}
														 value={this.state.arizaismi}
														 onChangeText={(val) => this.inputValueUpdate(val, 'arizaismi')}/>
								</View>

								<View style={styles.twoText}>
									<Text style={styles.textOne}
												style={{marginTop: 30, fontWeight: 'bold', color: '#1A237E', marginRight: 5}}>
										<Icon name="edit" size={20}/> Arıza Kodu </Text>
									<Text style={{marginTop: 30,}}>{this.state.Register.arizaKodu}</Text>
								</View>

								<View style={styles.twoText}>
									<Text style={{marginTop: 40, fontWeight: 'bold', color: '#1A237E', marginRight: 5}}>
										<Icon name="retweet" size={20}/> Arıza Türü</Text>
									<RNPickerDialog
										data={this.state.data}
										pickerTitle={'Arıza türü seçiniz'}
										showPickerTitle={true}
										listTextStyle={styles.listTextStyle}
										pickerStyle={styles.pickerStyle}
										selectedText={this.state.selectedText}
										placeHolderText={this.state.placeHolderText}
										searchBarPlaceHolder={'Search.....'}
										searchBarPlaceHolderColor={'#9d9d9d'}
										selectedTextStyle={styles.selectedTextStyle}
										placeHolderTextColor={'gray'}
										dropDownIconStyle={styles.dropDownIconStyle}
										selectedValue={(index, item) => this.selectedValue(index, item)}
									/>
								</View>

								<View style={styles.twoText}>
									<Text style={{marginTop: 40, fontWeight: 'bold', color: '#1A237E', marginRight: 5}}>
										<Icon name="edit" size={20}/> Açıklama</Text>
									<TextInput style={styles.description}
														 value={this.state.aciklama}
														 onChangeText={(val) => this.inputValueUpdate(val, 'aciklama')}
					/>
								</View>

								<Text tyle={styles.textOne}><Icon name="check" size={20}/> Teknik Servis</Text>
								<TouchableOpacity
									onPress={() => this.storeUser()}>
									<View style={styles.buttonContainer}>
										<Text style={styles.buttonTitle}>Kaydet</Text>
									</View>
								</TouchableOpacity>

							</KeyboardAvoidingView>

						</View>
						<View style={styles.slideTwo}></View>
					</ScrollView>

				}

				{
					this.state.isOpen === true &&
					<View>
						<Hareketler/>
					</View>
				}


			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
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
	},
	selectButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
		marginBottom:20
	},
	selectButtonTitle: {
		padding:20,
		backgroundColor: '#0057ff',
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 5,
	},
	selectButtonTitleTwo: {
		padding:20,
		backgroundColor: '#4682b4',
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 5,
	},
	slideOne:{
		flex:2,
		marginVertical: 10,
		marginHorizontal: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginTop:20,
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
		paddingHorizontal:5,
		paddingVertical:5,
		width: '50%',
	},
	left: {
		paddingHorizontal:5,
		paddingVertical:5,
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
