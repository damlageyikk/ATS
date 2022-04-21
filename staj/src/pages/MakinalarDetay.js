import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import style from "react-native-calendars/src/calendar/header/style";

export default class MakinalarDetay extends Component {
	static navigationOptions= {header:null}
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
									<Image style={{width: 40, height: 30, marginTop:15, backgroundColor: '#fff', marginRight:5,
										borderRadius:20, marginLeft:150}} source={require('../assets/worker.png')}/>
								</View>
							</View>
							<View style={{alignItems: 'center',}}>
								<Text style={styles.headerText
								}>ARIZA TAKİP SİSTEMİ</Text>
							</View>
						</View>
					</View>

					<View style={styles.card}>
						<View style={styles.space}>
							<Text style={styles.cardTitle}>Makina İkmal Müdürlüğü / SARI KAVAK</Text>
						</View>
						<View style={styles.space}>
							<Text style={styles.machine}>TÜRBİN</Text>

							<View style={styles.iconContainer}>
							<TouchableOpacity>
								<Icon name={"addfile"} size={25} style={styles.icon}/>
								<Text style={styles.iconText}>DOSYA EKLE</Text>
							</TouchableOpacity>

							<TouchableOpacity>
								<Icon name={"scan1"} size={25} style={styles.icon}/>
								<Text style={styles.iconText}>KAREKOD</Text>
							</TouchableOpacity>
						</View>

						</View>
						<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 6 Ay Önce</Text>
							<Text style={styles.state}>Çalışıyor</Text>
						</View>
						<Text style={styles.dateOne}>Sonraki Bakım Tarihi: 12 Gün Sonra</Text>
					</View>

					<View style={ styles.cardTwo}>
						<View style={styles.space}>
							<View style={styles.left}>
								<Image
									source={require ('../assets/maps.png')}
								style={styles.maps}/>
								<Text style={styles.cardTwoText}>C İşletmesi</Text>
								<Text style={styles.leftText}>7.Bölüm</Text>
								<Text style={styles.leftText}>5. Makina</Text>
							</View>
							<View style={styles.right}>
								<Image
									resizeMode={'contain'}
									source={require('../assets/makinaDetay.png')} />
							</View>
						</View>
					</View>

					<View style={styles.rowCardTitle}>
							<Text style={styles.title}>Sayaç</Text>
							<Text style={styles.title}>Operatörler</Text>
						</View>
					<View style={styles.rowCard}>
						<View style={styles.leftCard}>
							<Text style={styles.text}>Elektrik Tüketimi</Text>
							<Text style={styles.dateOne}>3703 kWh</Text>
						</View>
						<View style={styles.rightCard}>
							<Text style={styles.text}>Ahmet Mehmetoğlu</Text>
							<Text style={styles.text}>Ayşe Çalışkan</Text>
						</View>
						</View>


					<Text style={styles.title}>Bakım ve Onarımlar</Text>
					<View style={styles.card}>
						<Text style={styles.machine}>Titreşim Frekansı</Text>
						<View style={styles.space}>
							<Text style={styles.dateOne}>27.34 Vib</Text>
							<Text style={styles.dateOne}>Bugün (12.09.2021)</Text>
						</View>
						<View style={styles.space}>
							<Text style={styles.dateTwo}>24.88 Vib</Text>
							<Text style={styles.dateTwo}>6 Ay Önce (20.03.2021)</Text>
						</View>
					</View>

					<Text style={styles.title}>Sarf Edilen Malzemeler</Text>
					<View style={styles.card}>
						<View style={styles.space}>
							<Text style={styles.dateOne}>Vida</Text>
							<Text style={styles.dateOne}>21 Adet</Text>
						</View>
						<View style={styles.space}>
							<Text style={styles.dateTwo}>Vida</Text>
							<Text style={styles.dateTwo}>21 Adet</Text>
						</View>
					</View>
				</ScrollView>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
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
		marginBottom:10,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
		backgroundColor: '#fff'
	},
	cardTitle: {
		color: '#0057ff',
		fontWeight:'bold',
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
	text: {
		fontWeight: 'bold',
		marginVertical:10,
		marginHorizontal:10
	},
	dateOne: {
		marginHorizontal:5,
		marginTop:8,
		color: '#8e8b8b',
		fontWeight: 'bold'
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
	iconContainer: {
		flexDirection: 'row',
		marginVertical:2,
		marginHorizontal:10,
		paddingVertical:2,
		paddingHorizontal:2
	},
	iconButton: {
		flexDirection: 'row',
		marginVertical:2,
		marginHorizontal:10
	},
	icon:{
	marginHorizontal:15

	},
	iconText: {
		marginTop:2,
		color: '#8e8b8b',
		fontWeight: 'bold',
		marginHorizontal:5,
		fontSize:10
	},
	cardTwo: {
		marginTop:10,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
		backgroundColor: '#fff'
	},
	leftCard: {
		width:'50%',
		backgroundColor: '#fff',
		marginTop:20,
		marginBottom:10,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,

	},
	rightCard: {
		width:'50%',
		backgroundColor: '#fff',
		marginTop:20,
		marginBottom:10,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
	},
	cardTwoText:{
		marginTop:3,
		marginHorizontal:5,
		paddingHorizontal:20,
		paddingVertical:5,
		color: '#666666',
		fontWeight: 'bold',
		fontSize:18
	},
	leftText:{
		marginHorizontal:5,
		paddingHorizontal:20,
		paddingVertical:5,
		color: '#666666',
		fontWeight: 'bold',
		fontSize:18
	},
	rowCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		color: '#0057ff',
		fontWeight:'bold',
		fontSize: 16,
		marginTop:10
	},
	rowCardTitle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	left: {
		width: '50%'
	},
	right: {
		width: '50%'
	},
	maps: {
		width: 50,
		height: 50,
		marginHorizontal:60,
		marginTop:20
	}

});
