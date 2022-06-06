import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function Page5({ navigation }) {
    const [textKey, onKeyChange] = React.useState("");
    const [textValue, onValueChange] = React.useState("");
    const [readValue, onReadChange] = React.useState("");
    const onPressSave = async (textKey, textValue) => {
        try {
            await AsyncStorage.setItem(textKey, textValue);
            onKeyChange("");
            onValueChange("");
        } catch (e) { }
    }
    const onPressRead = async (textKey) => {
        try {
            const value = await AsyncStorage.getItem(textKey)
            if (value !== null) {
                showAlert(textKey, value);
            }
        } catch (e) { }
    }
    const showAlert = (textKey, textValue) => {
        var textKey = "Klucz: " + String(textKey);
        var textValue = "Wartość: " + String(textValue);
        Alert.alert(
            textKey,
            textValue,
            [{
                    text: "Zamknij",
                    style: "cancel",
            },]
        );
    }
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page6')}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
            <TextInput
                style={styles.input}
                onChangeText={onKeyChange}
                value={textKey}
                placeholder="Klucz"
            />
            <TextInput
                style={styles.input}
                onChangeText={onValueChange}
                value={textValue}
                placeholder="Wartość"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPressSave(textKey, textValue)}
            >
                <Text>Zapisz</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={onReadChange}
                value={readValue}
                placeholder="Odczytaj klucz"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPressRead(readValue)}
            >
                <Text>Odczytaj</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}
Page5.navigationOptions = {
  title: "22689 - AsyncStorage"
};
