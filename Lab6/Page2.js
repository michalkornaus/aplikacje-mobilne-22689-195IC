import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Slider from '@react-native-community/slider';
import styles from "./styles";

export default function Page2({ navigation }) {
  const logo = require("./img/Apple-logo.png");
  const logoAndroid = require("./img/Android-logo.png");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [widthAndroid, setWidthAndroid] = useState(100);
  const [heightAndroid, setHeightAndroid] = useState(100);
  return (
    <View >
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page1')}>
          <Text>1</Text>
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
        <Image source={logo} style={{ width, height }} />
          <Text>Width: {width}</Text>
          <Text>Height: {height}</Text>
          <Slider
            style={styles.slider}
            minimumValue={50}
            maximumValue={200}
            value={width}
            step={1}
            onValueChange={value => {
              setWidth(value);
              setHeight(value);
          }}
          />
          <Image source={logoAndroid} style={{ width: widthAndroid, height: heightAndroid }} />
          <Text>Width: {widthAndroid}</Text>
          <Text>Height: {heightAndroid}</Text>
          <Slider
            style={styles.slider}
            minimumValue={50}
            maximumValue={200}
            value={widthAndroid}
            step={1}
            onValueChange={value => {
              setWidthAndroid(value);
              setHeightAndroid(value);
          }}
          />
      </View>
    </View>
  );
}
Page2.navigationOptions = {
  title: "22689 - Obrazki | Slider"
};