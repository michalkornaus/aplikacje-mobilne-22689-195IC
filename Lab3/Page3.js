import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Page3({ navigation }) {
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page1')}>
          <Text>Sorting and Filtering</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page2')}>
          <Text>Lazy loading</Text>
        </TouchableOpacity>
      </View>
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
        <ActivityIndicator size="large" color="blue"/>
      </View>
    </View>
  );
}
Page3.navigationOptions = {
  title: "Step progress First - 22689"
};
