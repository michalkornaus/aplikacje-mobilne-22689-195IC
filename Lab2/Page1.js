import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Page1({ navigation }) {
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page2')}>
          <Text>Rest parameters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page3')}>
          <Text>Hook useState</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content1}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Składnia rozwinięcia (ang. spread syntax)</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe
           lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji)</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Przykład</Text>
          <View>
            <Text>const arrValue = ['My', 'name', 'is', 'Jack'];</Text>
            <Text>console.log(arrValue);   // ["My", "name", "is", "Jack"]</Text>
            <Text>console.log(...arrValue); // My name is Jack</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
Page1.navigationOptions = {
  title: "Spread Operator - 22689"
};