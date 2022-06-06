import React, { useState, useEffect  } from "react";
import { View, Text, TouchableOpacity, Picker, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import LazyImage from "./LazyImage";
import iconNames from "./icon-names.json";

const remote = "https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=20&m=925389178&s=612x612&w=0&h=6TUJn0mknsO7gPO0j_OKMBhs1ng0LbBKq5OiN_fhVBQ=";

export default function Page3({ navigation }) {
  const [source, setSource] = useState(null);
  const [selected, setSelected] = useState("Web Application Icons");
  const [listSource, setListSource] = useState([]);
  const categories = Object.keys(iconNames);
  function updateListSource(selected) {
  setListSource(iconNames[selected]);
  setSelected(selected);
  }
  useEffect(() => {
    updateListSource(selected);
    }, []);
  return (
    <View >
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page6')}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.container}>
        <View>
          <LazyImage
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            source={source}
          />
          <TouchableOpacity onPress={() => {
            setSource({ uri: remote });}}>
            <Text>Załaduj obrazek</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.picker}>
            <Picker selectedValue={selected} onValueChange={updateListSource}>
              {categories.map(category => (
                <Picker.Item key={category} label={category} value={category} />
              ))}
            </Picker>
          </View>
          <FlatList
            style={styles.icons}
            data={listSource.map((value, key) => ({ key: key.toString(), value }))}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Icon name={item.value} style={styles.itemIcon} /> 
                <Text style={styles.itemText}>{item.value}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
Page3.navigationOptions = {
  title: "22689 - Lazy load + icons"
};
