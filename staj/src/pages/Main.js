import React, { Component } from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import DrawerMenu from "../components/DrawerMenu";

export default class Main extends Component {
  static navigationOptions= {header:null}
  openDrawerMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{...styles.header,marginBottom:'5%'}}>
          <View style={{backgroundColor:'#0057ff',}}>
          <View style={{ flexDirection:'row',}}>
            <TouchableOpacity
            onPress={this.openDrawerMenu}>
              <Icon name="menuunfold" size={30} style={styles.icon} />
            </TouchableOpacity>
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

    <ScrollView>

        <View style={styles.mainOne}>
        <TouchableOpacity style={styles.leftCard}
           onPress={() => this.props.navigation.navigate('Arizalar')}>
          <Image
            resizeMode={'contain'}
            source={require('../assets/technician.png')} style={styles.arıza}/>
          <Text style={styles.text}>ARIZA</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.rightCard}
                            onPress={() => this.props.navigation.navigate('Makinalar')}>
            <Image
              resizeMode={'contain'}
              source={require('../assets/conveyor.png')} style={styles.arıza}/>
            <Text style={styles.text}>MAKİNALAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainOne}>
          <TouchableOpacity style={styles.rightCard}
                            onPress={() => this.props.navigation.navigate('PeriyodikBakım')}>
            <Image
              resizeMode={'contain'}
              source={require('../assets/team.png')} style={styles.arıza}/>
            <Text style={styles.text}>PERİYODİK BAKIM</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom:10,
  },
  mainOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCard: {
    width:'45%',
    height: 100,
    backgroundColor: '#fff',
    marginTop:40,
    marginBottom:10,
    marginHorizontal: 5,
    paddingHorizontal:5,
    paddingVertical: 10,
    borderRadius:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  rightCard: {
    width:'45%',
    height: 100,
    backgroundColor: '#fff',
    marginTop:40,
    marginBottom:10,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal:5,
    borderRadius:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.00,

    elevation: 5,
  },
arıza: {
    width: '100%',
  height:50,
  marginTop:2,
},
  text: {
    fontWeight: 'bold',
   textAlign: 'center',
    color: '#003fff',
    marginTop:10
  },
icon: {
    marginTop:15,
  color: '#fff',
  marginLeft:2
},

});
