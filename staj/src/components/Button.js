import React, { Component } from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginForm from "../pages/LoginForm";
import {serializeKey} from "../common/index";
export default class Button extends Component {

  render() {
    return (
      <View>
				<TouchableOpacity
					style={styles.button}>
						<Text style={{color: this.props.textColor}}>{this.props.text}</Text>
				</TouchableOpacity>

	</View>
    );
  }
}

const styles = StyleSheet.create({

});
