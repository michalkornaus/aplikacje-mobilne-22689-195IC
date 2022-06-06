import React from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Page1({ navigation, image1, image2 }) {
  return (
    <View >
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page6')}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image style={styles.image1} source={image1} />
        <Image style={styles.image2} source={image2} />
      </View>
    </View>
  );
}
Page1.navigationOptions = {
  title: "22689 - Obrazki"
};

const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
  uri: PropTypes.string.isRequired
  }),
  PropTypes.number
  ]).isRequired;

Page1.propTypes = {
  image1: sourceProp,
  image2: sourceProp
};

Page1.defaultProps = {
  image1: {
    uri: "https://reactjs.org/logo-og.png"
    },
    image2: require("./img/react.png")
};