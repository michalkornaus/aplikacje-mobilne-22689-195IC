import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function Page2({ navigation }) {
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page1')}>
          <Text>Spread Operator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page3')}>
          <Text>Hook useState</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content2}>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Składnia - Rest parameter</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Umożliwia funkcji zaakceptowanie nieograniczonej ilości argumentów jako tablicę.</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Przykład zastosowania</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Przykład</Text>
          <View>
            <Text>{"function sumAll(...args) {"}</Text>
            <Text>{"let sum = 0;"}</Text>
            <Text>{"for (let arg of args)"}</Text>
            <Text>{"    sum += arg;"}</Text>
            <Text>{"return sum; }"}</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxText}>Wynik przykładu</Text>
          <View>
            <Text>{"console.log(sumAll(1, 2)); // 3"}</Text>
            <Text>{"console.log(sumAll(1, 2, 3)); // 6"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
Page2.navigationOptions = {
  title: "Rest parameters - 22689"
};