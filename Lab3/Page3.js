import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Page3({ navigation }) {
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page1')}>
          <Text>Spread Operator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate('Page2')}>
          <Text>Rest parameters</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content1}>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Hook stanu (ang. hook useState)</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. 
          Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym.</Text>
        </View>
      </View>
    </View>
  );
}
Page3.navigationOptions = {
  title: "Hook useState - 22689"
};
