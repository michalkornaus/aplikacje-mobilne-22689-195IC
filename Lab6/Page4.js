import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";

const connectedMap = {
  none: "Rozłączony",
  unknown: "Nieznane połączenie",
  wifi: "Połączony z siecią WiFi",
  cellular: "Połączony z siecią komórkową",
  ethernet: "Połączony z siecią lokalną",
  other: "Inne połączenie",
  };

export default function Page4({ navigation }) {
  const [connected, setConnected] = useState("");
  useEffect(() => {
    function onNetworkChange(connection) {
    setConnected(connectedMap[connection.type]);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {
    unsubscribe();
    };
    }, []);
    
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
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page6')}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>{connected}</Text>
      </View>
    </View>
  );
}
Page4.navigationOptions = {
  title: "22689 - Network detection"
};
