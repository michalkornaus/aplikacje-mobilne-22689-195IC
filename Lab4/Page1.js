import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

export default function Page1({ navigation }) {
  const [text, onChangeText] = useState("Tekst do zmiany");
  const [number, onChangeNumber] = useState(null);
  return (
    <View>
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
      </View>
      <View>
        <TextInput
          style={styles.input}
          selectionColor='#FF00FF'
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.inputNum}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Tekst numeryczny"
          placeholderTextColor='#FF0000'
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          editable={false}
          placeholderTextColor='#FF0000'
        />
        <TextInput
          style={styles.input}
          defaultValue="Adres email"
          keyboardType="email-address"
        />
      </View>
    </View>
  );
}
Page1.navigationOptions = {
  title: "Przegląd komponentu TextInput"
};