import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Switch } from "react-native";
import styles from "./styles";

export default function Page2({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
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
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container2}>
        {new Array(12).fill(null).map((v, i) => (
          <View key={i} style={styles.scrollBox2}>
            <Text style={[styles.scrollItem, styles.text]}>Pudełko {i+1}</Text>
            <ActivityIndicator style={styles.scrollItem} size="small" color="green" />
            <Switch style={styles.scrollItem} 
            onValueChange={toggleSwitch}
            value={isEnabled}
             />
          </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
Page2.navigationOptions = {
  title: "ScrollView Ekran 2"
};