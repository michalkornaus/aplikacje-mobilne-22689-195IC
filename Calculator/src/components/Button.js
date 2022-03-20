import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors';

class Button extends Component {

  handleOperation = () => {
    this.props.operation(this.props.char)
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >
        <Text style={this.props.darkMode ? styles.textDark : styles.textLight}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDark: {
    color: colors.white,
    fontSize: 30
  },
  textLight: {
    color: colors.black,
    fontSize: 30
  }
})

export default Button;