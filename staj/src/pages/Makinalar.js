import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import {firebase} from "@react-native-firebase/firestore";

export default class Makinalar extends Component {
	static navigationOptions= {header:null}
	constructor(props) {
		super(props);
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
										<Icon name={"leftcircleo"} size={30} color={"#fff"} style={{marginTop:15}} />
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

				<TouchableOpacity style={styles.card}
						onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MAKİNA İKMAL MÜDÜRLÜĞÜ/SARI KAVAK</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>TÜRBİN</Text>
						<Text style={styles.dateOne}>Sonraki Bakım Tarihi: 12 Gün Sonra</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 6 Ay Önce</Text>
						<Text style={styles.state}>Çalışıyor</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}
								onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MOGAN ENERJİ/HES TESİSLERİ/KAÇKAR</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>VANA</Text>
						<Text style={styles.dateOne}>Sonraki Bakım Tarihi: 12 Gün Sonra</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 2 Ay Önce</Text>
						<Text style={styles.state}>Çalışıyor</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}
							onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MAKİNA İKMAL MÜDÜRLÜĞÜ/SARI KAVAK</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>TÜRBİN</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 6 Ay Önce</Text>
						<Text style={styles.state}>Çalışıyor</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}
							onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MOGAN ENERJİ/HES TESİSLERİ/KAÇKAR</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>VANA</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 2 Ay Önce </Text>
						<Text style={styles.stateTwo}>Çalışmıyor</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}
									onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MOGAN ENERJİ/HES TESİSLERİ/KAÇKAR</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>VANA</Text>
						<Text style={styles.dateOne}>Sonraki Bakım Tarihi: 12 Gün Sonra</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 2 Ay Önce </Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.card}
								onPress={() => this.props.navigation.navigate('MakinalarDetay')}>
						<Text style={styles.cardTitle}>MOGAN ENERJİ/HES TESİSLERİ/KAÇKAR</Text>
					<View style={styles.space}>
							<Text style={styles.machine}>VANA</Text>
					</View>
					<View style={styles.space}>
							<Text style={styles.dateTwo}>Önceki Bakım Tarihi: 2 Ay Önce</Text>
						<Text style={styles.stateTwo}>Çalışmıyor</Text>
					</View>
				</TouchableOpacity>

					{/*<TouchableOpacity*/}
					{/*	onPress={() => this.props.navigation.navigate('MakinalarDetay')}>*/}
					{/*	<Text style={styles.button}>Makinalar detay</Text>*/}
					{/*</TouchableOpacity>*/}
			</ScrollView>
			</View>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		flex:1
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
		marginTop:30,
		marginBottom:5,
		marginHorizontal: 5,
		paddingHorizontal:5,
		paddingVertical: 5,
		backgroundColor: '#e9e9e9'
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
	stateTwo: {

		backgroundColor: '#bc0101',
		color:'#fff',
		marginTop:8,
		marginHorizontal:10,
		paddingHorizontal:20,
		paddingVertical:3,
		borderRadius:5
	},
	button: {
		color: '#fff',
		backgroundColor: '#0057ff',
		paddingVertical:10,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
		marginVertical:10,
		marginHorizontal:30,
		borderRadius:5
	}
});
