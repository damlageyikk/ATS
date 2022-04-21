import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	CheckBox,
	ScrollView,
	KeyboardAvoidingView,
	Image
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import RNPickerDialog from "rn-modal-picker";

export default class PeriyodikBakım extends Component {
	static navigationOptions= {header:null}
	state: {
		checked: false,
	}
	constructor(props) {
		super(props);
		this.state = {

			data: [
				{
					id: 1,
					name: '8 Temmuz Perş-2021, Saat 12:00',
				},
				{
					id: 2,
					name: '8 Temmuz Perş-2021, Saat 12:10',
				},
			],
			placeHolderText: '8 Temmuz Perş-2021, Saat 12:00',
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
    return (
      <View style={styles.container}>
				<ScrollView>
					<View style={{...styles.header,marginBottom:'5%'}}>
						<View style={{backgroundColor:'#0057ff',}}>
							<View style={{ flexDirection:'row',}}>
								<View>
									<TouchableOpacity
										onPress={() => goBack()}>
										<Icon name={"leftcircleo"} size={30} color={"#fff"} style={{marginTop:15}}/>
									</TouchableOpacity>
								</View>
								<View  style={{alignItems: 'center',}}>
									<Image style={{width: 40, height: 30, marginTop:15, backgroundColor: '#fff', marginRight:5
										, borderRadius:20, marginLeft:150}} source={require('../assets/worker.png')}/>
								</View>
							</View>
							<View style={{alignItems: 'center',}}>
								<Text style={styles.headerText
								}>ARIZA TAKİP SİSTEMİ</Text>
							</View>
						</View>
					</View>

					<KeyboardAvoidingView>
			<View style={styles.card}>
					<View>
						<Text style={styles.machine}>TOPLAYICI</Text>
					</View>
					<View style={styles.space}>
						<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 6 Ay Önce</Text>
						<Text style={styles.state}>Çalışıyor</Text>
					</View>
			</View>

				<View style={styles.twoText} >
					<RNPickerDialog
						data={this.state.data}
						pickerTitle={''}
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

				<View style={styles.checkboxContainer}>
						<CheckBox
							checked={this.state.checked}
							onPress={() => this.setState({ checked: !this.state.checked })}
						/>
					<Text style={styles.checkBoxText}>Yağ kontrolü yapıldı</Text>
				</View>


				<View style={styles.twoText} >
					<RNPickerDialog
						data={this.state.data}
						pickerTitle={''}
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
					<View style={styles.checkboxContainer}>
						<CheckBox
							checked={this.state.checked}
							onPress={() => this.setState({ checked: !this.state.checked })}
						/>
						<Text style={styles.checkBoxText}>Titreşim oranı ölçüldü</Text>
					</View>

				<View style={styles.twoText} >
					<RNPickerDialog
						data={this.state.data}
						pickerTitle={''}
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

					<View style={styles.checkboxContainer}>
						<CheckBox
							checked={this.state.checked}
							onPress={() => this.setState({ checked: !this.state.checked })}
						/>
						<Text style={styles.checkBoxText}>Motor kontrolü yapıldı</Text>
					</View>

				<View style={styles.twoText} >
					<RNPickerDialog
						data={this.state.data}
						pickerTitle={''}
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

				<TouchableOpacity>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonTitle}>Kaydet</Text>
					</View>
				</TouchableOpacity>
						</KeyboardAvoidingView>
			</ScrollView>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efefef'
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
		fontWeight: 'bold',
		marginBottom:10,
	},
	card: {
		marginTop:40,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
		backgroundColor: '#e9e9e9'
	},
	space: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	machine: {
		fontWeight: 'bold',
		marginTop:8,
		marginHorizontal:5

	},
	dateTwo: {
		marginHorizontal:5,
		marginTop:8,
		color: '#8e8b8b',
		fontWeight: 'bold'
	},
	state: {
		backgroundColor: '#008000',
		color:'#fff',
		marginTop:8,
		marginHorizontal:10,
		paddingHorizontal:20,
		paddingVertical:3,
		borderRadius:5
	},
	selectedTextStyle: {
		height: 40,
		borderColor: 'gray',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		width: '100%',
		color: 'black',
		fontSize: 15,
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
		marginTop: 15,
	},
	listTextStyle: {
		color: '#000',
		marginVertical: 10,
		flex: 0.9,
		marginLeft: 10,
		marginHorizontal: 10,
		textAlign: 'left',
	},
	pickerStyle: {
		width: '100%',
		shadowRadius: 2,
		shadowOpacity: 0.5,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#fff',
		borderColor: '#e9e9e9',
	},
	dropDownIconStyle: {
		color: '#0057ff'
	},
	description: {
		width:'75%',
		height: 80,
		paddingHorizontal: 5,
		borderWidth:2,
		borderRadius: 10,
		backgroundColor: '#fff',
		marginTop: 20,
		borderColor: '#fff'
	},
	buttonTitle: {
		fontSize: 24,
		color: '#fff',
		textAlign: 'center',
	},
	buttonContainer: {
		padding: 10,
		backgroundColor: '#0057ff',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:15,
		marginBottom:15,
		paddingHorizontal: 20,
	},
	twoText: {
		flexDirection: 'row',
		paddingRight:15
	},
	checkboxContainer:{
		flexDirection: 'row',
	},
	checkBoxText: {
		marginTop: 4,
		fontWeight: 'bold',
		color: '#666666'
	}

});
