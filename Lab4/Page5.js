import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, Modal, Pressable, ToastAndroid } from "react-native";
import styles from "./styles";

export default function Page5({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
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
      </View>
      <View style={styles.switchContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal został zamknięty.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Własny modal + ToastAndroid</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTimeout(()=>{
                    ToastAndroid.show("Ukryto modal - komunikat z ToastAndroid", ToastAndroid.SHORT)
                  }, 1000);
                }}
              >
                <Text style={styles.textStyle}>Ukryj Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.switch}>
          <Text>Pokaż Modal!</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4054e0" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => { toggleSwitch(); setModalVisible(!modalVisible) }}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
Page5.navigationOptions = {
  title: "Modal + ToastAndroid"
};
