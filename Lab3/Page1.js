import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import List from "./components/List";

//const items = new Array(100).fill(null).map((v, i) => `${i}`);
const items = Array(100).fill().map(() => Math.round(Math.random() * 1000));

function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || (i+'').includes(text))
    .sort(
       asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    ); 
}
export function fetchItems(filter, asc) {
  return new Promise(resolve => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc)
        })
    });
  });
}

function mapItems(items) {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

export default function Page1({ navigation }) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchItems(filter, asc)
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(mapItems(items));
      });
  }, []);
  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page2')}>
          <Text>Lazy loading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page3')}>
          <Text>Step progress</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <List
          data={data}
          asc={asc}
          onFilter={text => {
            fetchItems(text, asc)
              .then(resp => resp.json())
              .then(({ items }) => {
                setFilter(text);
                setData(mapItems(items));
              });
          }}
          onSort={() => {
            fetchItems(filter, !asc)
              .then(resp => resp.json())
              .then(({ items }) => {
                setAsc(!asc);
                setData(mapItems(items));
              });
          }}
        />
      </View>
    </View>
  );
}
Page1.navigationOptions = {
  title: "Sorting and Filtering - 22689"
};