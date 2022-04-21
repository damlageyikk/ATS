import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	TextInput,
	Picker,
	Alert, Image
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AlertPro from "react-native-alert-pro";
import RNPickerDialog from 'rn-modal-picker';
export default class RegisterForm extends Component{
	static navigationOptions= {header:null}
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
			const {navigate, goBack} = this.props.navigation;
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={{...styles.header,marginBottom:'5%'}}>
						<View style={{backgroundColor:'#0057ff',}}>
							<View style={{ flexDirection:'row',}}>
								<View>
									<TouchableOpacity
										onPress={() => goBack()}>
										<Icon name={"left"} size={40} color={"#fff"}/>
									</TouchableOpacity>
								</View>
								<View  style={{alignItems: 'center',}}>
									<Image style={{width: 40, height: 30, marginTop:15, backgroundColor: '#fff', marginRight:5
										, borderRadius:20, marginLeft:120}} source={require('../assets/worker.png')}/>
								</View>
							</View>
							<View style={{alignItems: 'center',}}>
								<Text style={styles.headerText
								}>ARIZA TAKİP SİSTEMİ</Text>
							</View>
						</View>
					</View>

					<View style={styles.slideOne}>
						<KeyboardAvoidingView>

							<View style={styles.space}>
								<View style={styles.left}>
									<Text style={styles.textOne}>	<Icon name="calendar" size={20}/> Oluşturulma Tarihi:</Text>
									<TextInput style={styles.textInputTwo}>{this.state.name}</TextInput>
								</View>

								<View style={styles.right}>

									<Text style={styles.textOne}><Icon  name="infocirlceo" size={20}/> İş Emri No:</Text>
									<TextInput style={styles.textInputTwo}></TextInput>
								</View>
							</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina Adı:</Text>
										<TextInput style={styles.textInputTwo}></TextInput>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="edit" size={20}/> Makina kodu:</Text>
										<TextInput style={styles.textInputTwo}></TextInput>
									</View>
								</View>

							<View style={styles.space}>
								<View style={styles.left} >
									<Text style={styles.textOne}><Icon name="clockcircleo" size={20}/> Vardiya:</Text>
									<TextInput style={styles.textInputTwo}></TextInput>
								</View>

								<View style={styles.right}>
									<Text style={styles.textOne}><Icon name="tool" size={20}/> Üretim Durumu:</Text>
									<TextInput style={styles.textInputTwo}></TextInput>
								</View>
							</View>

								<View style={styles.space}>
									<View style={styles.left}>
										<Text style={styles.textOne}><Icon name="pushpino" size={20}/> Öncelik:</Text>
										<TextInput style={styles.textInputTwo}></TextInput>
									</View>

									<View style={styles.right}>
										<Text style={styles.textOne}><Icon name="sync" size={20}/> Durum:</Text>
										<TextInput style={styles.textInputTwo}></TextInput>
									</View>
								</View>


							<View style={styles.twoText}>
								<Text style={styles.textOne}
											style={{marginTop:30, fontWeight: 'bold', color: '#1A237E', marginRight:5}}>
									<Icon name="edit" size={20}/> Arıza İsmi </Text>
								<TextInput style={styles.faultInput}></TextInput>
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

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Arizalar')}>
								<View style={styles.buttonContainer}>
									<Text style={styles.buttonTitle}>Kaydet</Text>
								</View>
							</TouchableOpacity>

						</KeyboardAvoidingView>
					</View>
					<View style={styles.slideTwo}></View>
				</ScrollView>

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
		height:20,
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
		marginHorizontal: 10,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		marginTop:50
	},
	slideTwo:{
		flex:1,
	},
	text: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	textOne: {
		marginTop: 5,
		fontWeight: 'bold',
		color: '#1A237E'
	},
	twoText: {
		flexDirection: 'row',
		marginHorizontal: 0,
	},
	textInput: {
		width:'75%',
		height: 40,
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
		width: '90%',
		height: 40,
		marginTop: 10,
		marginBottom:5,
		paddingHorizontal:10,
		color: '#000',
		borderBottomWidth:1,
		borderBottomColor: '#0288D1',
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
