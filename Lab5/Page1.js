import React from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Switch } from "react-native";
import styles from "./styles";

export default function Page1({ navigation }) {
  return (
    <View style={styles.container}>
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
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        {new Array(10).fill(null).map((v, i) => (
          <View key={i} style={styles.scrollBox}>
            <Text style={[styles.scrollItem, styles.text]}>Pudełko {i+1}</Text>
            <ActivityIndicator style={styles.scrollItem} size="large" color="red" />
            <Switch style={styles.scrollItem} />
          </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
Page1.navigationOptions = {
  title: "ScrollView Ekran 1"
};