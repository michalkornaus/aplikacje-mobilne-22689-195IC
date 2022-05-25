import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swipeable from 'react-native-swipeable';
import styles from "./styles";

export default function Page4({ navigation }) {
const [color, setColor] = useState(true);

const leftContent = <Text style={styles.textLeft}>Pociągnij aby zmienić stan!</Text>;

const rightButtons = [
  <TouchableOpacity style={{backgroundColor: "white"}}><Text style={{paddingLeft: 5}}>Przycisk 1</Text></TouchableOpacity>,
  <TouchableOpacity style={{backgroundColor: "white"}}><Text style={{paddingLeft: 5}}>Przycisk 2</Text></TouchableOpacity>
];
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page3')}>
          <Text>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}
        style={{backgroundColor:color ? '#DDDDDD': '#CCEECC', paddingBottom: 5, paddingTop: 5}}
        onLeftActionRelease={()=>setColor(!color)}
        >
          <Text style={{paddingLeft: 10}}>Komponent Swipeable</Text>
        </Swipeable>
      </View>
    </View>
  );
}
Page4.navigationOptions = {
  title: "Swipeable"
};
