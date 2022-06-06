import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { set, get } from "./store";

const boolMap = {
  true: true,
  false: false
};

export default function Page6({ navigation }) {
  const [message, setMessage] = useState(null);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const setters = new Map([
    ["first", setFirst],
    ["second", setSecond],
    ["third", setThird]
  ]);
  function save(key) {
    return value => {
      set(key, value).then(
        connected => {
          setters.get(key)(value);
          setMessage(connected ? null : "Zmiany zapisane offline");
        },
        err => {
          setMessage(err);
        }
      );
    };
  }

  useEffect(() => {
    NetInfo.fetch().then(() =>
      get().then(
        items => {
          for (let [key, value] of Object.entries(items)) {
            setters.get(key)(value);
          }
        },
        err => {
          setMessage(err);
        }
      )
    );
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
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page5')}>
          <Text>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
      <Text>{message}</Text>
        <View>
          <Text>Switch 1</Text>
          <Switch
            value={boolMap[first.toString()]}
            onValueChange={save("first")}
          />
        </View>
        <View>
          <Text>Switch 2</Text>
          <Switch
            value={boolMap[second.toString()]}
            onValueChange={save("second")}
          />
        </View>
        <View>
          <Text>Switch 3</Text>
          <Switch
            value={boolMap[third.toString()]}
            onValueChange={save("third")}
          />
        </View>
      </View>
    </View>
  );
}
Page6.navigationOptions = {
  title: "22689 - Synchronizing data"
};
