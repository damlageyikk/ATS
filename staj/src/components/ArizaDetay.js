import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import RNPickerDialog from "rn-modal-picker";
import AlertPro from "react-native-alert-pro";

export default class ArizaDetay extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
				<ScrollView>

					<View style={styles.slideOne}>
						<KeyboardAvoidingView>
							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}>	<Icon name="calendar" size={20}/> Oluşturulma Tarihi:</Text>
									<Text style={styles.textInputTwo}>23 Haziran Çarşamba, 21:15</Text>
								</View>

								<View style={styles.right}>

									<Text style={styles.textOne}><Icon  name="infocirlceo" size={20}/> İş Emri No:</Text>
									<Text style={styles.textInputTwo}>IE1234</Text>
								</View>
							</View>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina Adı:</Text>
									<Text style={styles.textInputTwo}>Toplayoco</Text>
								</View>

								<View style={styles.right}>
									<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina kodu:</Text>
									<Text style={styles.textInputTwo}>YT123321</Text>
								</View>
							</View>

							<View style={styles.space}>
								<View style={styles.left} >
									<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> Vardiya:</Text>
									<Text style={styles.textInputTwo}>Sabah</Text>
								</View>

								<View style={styles.right}>
									<Text style={styles.textOne}><Icon name="tool" size={20}/> Üretim Durumu:</Text>
									<Text style={styles.textInputTwo}>Devam Ediyor</Text>
								</View>
							</View>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}><Icon name="pushpino" size={20}/> İşlem Durum:</Text>
									<Text style={styles.textInputTwo}>Beklemeye Alındı</Text>
								</View>

								<View style={styles.right}>
									<Text style={styles.textOne}><Icon name="sync" size={20}/> Durum:</Text>
									<Text style={styles.textInputTwo}>Açık</Text>
								</View>
							</View>

							<View style={styles.left}>
								<Text style={styles.textOne}><Icon name="pushpino" size={20}/> Öncelik:</Text>
								<Text style={styles.textInputTwo}>Normal</Text>
							</View>



							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> İşlem Süresi</Text>
									<Text style={styles.textInputTwo}></Text>
								</View>

								<View style={styles.right}>
									<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> Arıza Süresi</Text>
									<Text style={styles.textInputTwo}></Text>
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
											style={{marginTop:30, fontWeight: 'bold', color: '#1A237E', marginRight:5}}>
									<Icon name="edit" size={20}/> Arıza İsmi </Text>
								<TextInput style={styles.faultInput}></TextInput>
							</View>

							<View style={styles.twoText}>
								<Text style={styles.textOne}
											style={{marginTop:30, fontWeight: 'bold', color: '#1A237E', marginRight:5}}>
									<Icon name="edit" size={20}/> Arıza Kodu </Text>
								<Text style={{marginTop: 30,}}>ARZ24685</Text>
							</View>

							<View style={styles.twoText} >
								<Text  style={{marginTop:40, fontWeight: 'bold', color: '#1A237E', marginRight:5}}>
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
								<Text  style={{marginTop:40, fontWeight: 'bold', color: '#1A237E', marginRight:5}}>
									<Icon name="edit" size={20}/> Açıklama</Text>
								<TextInput style={styles.description}></TextInput>
							</View>

							<Text style={styles.textOne}><Icon name="check" size={20}/> Teknik Servis</Text>
							<TouchableOpacity
								onPress={() => this.AlertPro.open()}>
								<View style={styles.buttonContainer}>
									<Text style={styles.buttonTitle}>Kaydet</Text>
								</View>
							</TouchableOpacity>

						</KeyboardAvoidingView>

					</View>
					<View style={styles.slideTwo}></View>
				</ScrollView>

				<AlertPro
					ref={ref => {
						this.AlertPro = ref;
					}}
					onConfirm={() => this.AlertPro.close()}
					textCancel="Üretim Durdu"
					textConfirm="Üretim Devam Ediyor"
					customStyles={{
						mask: {
							backgroundColor: "transparent",
							flexDirection:'row'
						},
						container: {
							borderColor: "#9900cc",
							shadowColor: "#000000",
							shadowOpacity: 0.1,
							shadowRadius: 10,


						},
						buttonCancel: {
							backgroundColor: "#a51b0b",
							height: 50,

						},
						buttonConfirm: {
							backgroundColor: "#0057ff",
							height: 50,

						}
					}}
				/>
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
