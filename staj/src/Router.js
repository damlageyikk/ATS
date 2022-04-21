import React, { Component } from 'react';
import { createAppContainer,createSwitchNavigator} from 'react-navigation'; //"react-navigation": "^4.4.2",
import { createStackNavigator } from 'react-navigation-stack';//"react-navigation-stack": "^2.8.4",
import { createDrawerNavigator } from 'react-navigation-drawer';//"react-navigation-drawer": "^2.4.10",
import {createBottomTabNavigator} from 'react-navigation-tabs'; //"react-navigation-tabs": "^2.9.2"
import DrawerMenu from './components/DrawerMenu';
import Login from "./pages/Login";
import Main from "./pages/Main";
import Arizalar from "./pages/Arizalar";
import RegisterForm from "./pages/RegisterForm";
import Ariza from "./pages/Ariza";
import Makinalar from "./pages/Makinalar";
import MakinalarDetay from "./pages/MakinalarDetay";
import PeriyodikBakım from "./pages/PeriyodikBakım";
import Account from "./pages/Account";
import Settings from "./pages/Settings";

const AuthNavigator= createStackNavigator({
	Login: Login,
},{
	headerMode:"none"

});
const AppNavigator= createStackNavigator({
	Login:Login,
	Account: Account,
	Settings: Settings,
	Main:Main,
	Ariza:Ariza,
	Arizalar: Arizalar,
	RegisterForm:RegisterForm,
	Makinalar: Makinalar,
	MakinalarDetay: MakinalarDetay,
	PeriyodikBakım: PeriyodikBakım,

	},{
		mode: 'modal',
	navigationOptions: {header:{visible:false},
		defaultNavigationOptions: {
			headerBackTitle: null,
		}
	},

	});

const DrawerNavigator=createDrawerNavigator({
	Main:AppNavigator,
},{
	contentComponent:DrawerMenu
},
);
const MainNavigator = createSwitchNavigator({
	auth:AuthNavigator,
	app:DrawerNavigator,
},{
	initialRouteName:'auth'
});


export default createAppContainer(MainNavigator);
