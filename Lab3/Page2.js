import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import * as api from "./components/LazyListAPI";
import List from "./components/LazyList";

export default function Page2({ navigation }) {
  
  function fetchItems() {
    return api
      .fetchItems()
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(
          items.map((value, i) => ({
            key: i.toString(),
            value
          }))
        );
      });
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page1')}>
          <Text>Sorting and Filtering</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page3')}>
          <Text>Step progress</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lazyContainer}>
        <List data={data} fetchItems={fetchItems} />
      </View>
    </View>
  );
}
Page2.navigationOptions = {
  title: "Lazy loading - 22689"
};