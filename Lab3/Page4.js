import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Page4({ navigation }) {
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page3')}>
          <Text>Step progress 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page4')}>
          <Text>Step progress 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page5')}>
          <Text>Step progress 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.indicatorContent}>
        <ActivityIndicator size="small" color="green"/>
      </View>
    </View>
  );
}
Page4.navigationOptions = {
  title: "Step progress Second - 22689"
};
