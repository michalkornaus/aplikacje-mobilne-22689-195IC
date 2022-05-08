import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';
import styles from "./styles";

export default function Page2({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("csharp");
  return (
    <View>
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
      </View>
      <View>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="C#" value="csharp"/>
          <Picker.Item label="C++" value="cplus"/>
          <Picker.Item label="C" value="c"/>
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="C#" value="csharp"/>
          <Picker.Item label="C++" value="cplus"/>
          <Picker.Item label="C" value="c"/>
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="C#" value="csharp"/>
          <Picker.Item label="C++" value="cplus"/>
          <Picker.Item label="C" value="c"/>
        </Picker>
      </View>
    </View>
  );
}
Page2.navigationOptions = {
  title: "Komponent Select"
};