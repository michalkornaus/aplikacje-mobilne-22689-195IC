import React, { Component } from 'react';
import { TouchableOpacity, Text, StatusBar, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Display from './src/components/Display'
import Buttons from './src/components/Buttons'
import colors from './src/utils/colors';

export default class App extends Component {

  state = {
    display: '',
    result: '',
    darkMode: true
  }

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={this.state.darkMode ? styles.containerDark : styles.containerLight}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.themeButton}>
            <Entypo name={this.state.darkMode ? 'light-up' : 'moon'} size={24} color={this.state.darkMode ? 'white' : 'black'} 
            onPress={() => this.state.darkMode ? this.setState({darkMode: false}): this.setState({darkMode: true})}/>
          </TouchableOpacity>
          <Text style={this.state.darkMode ? styles.textDark : styles.textLight}>Kalkulator - Michał Kornaus 22689</Text>
        </View>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons darkMode={this.state.darkMode} operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
  containerLight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors['grey-lighter'],
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLight: {
    color: colors.black,
    fontSize: 30,
  },
  textDark: {
    color: colors.white,
    fontSize: 30,
  },
  themeButton: {
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
});