import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight} from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";

export default function Page3({ navigation }) {
  const [count, setCount] = useState(0);
  const [web, setWeb] = useState(0);
  const setValueWeb = () => {
    setWeb(previousState => !previousState);
  }
  const onPressMinus = () => setCount(prevCount => prevCount - 1);
  const onPressPlus = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
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
      </View>
      <View style={styles.container3}>
        <Text style={styles.countText}>
            Ilość kliknąć: {count || null}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressMinus}
        >
          <Text>Opacity -1</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.button} onPress={onPressPlus} underlayColor='#c1d22e'>
            <Text>Highlight +1</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.button}
          onPress={setValueWeb}
        >
          <Text>WebView</Text>
        </TouchableOpacity>
        {web ?
            <WebView source={{ uri: 'https://zacniewski.github.io/tasks-mobile-apps-react-native/#lab5' }}/>
            : null }
      </View>
    </View>
  );
}
Page3.navigationOptions = {
  title: "Touchable + WebView"
};
