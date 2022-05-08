import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styles";

export default function Page4({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const showSelectedDatetime = () => {
    alert("Wybrany termin: " + date.toLocaleString("pl-PL"));
  };
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
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Page5')}>
          <Text>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View>
          <View style={styles.topDateView}>
            <Button onPress={showDatepicker} title="Wybierz datę" />
            <Button onPress={showTimepicker} title="Wybierz czas" />
          </View>
          <View style={styles.dateView}>
            <Button onPress={showSelectedDatetime} title="Wyświetl termin" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </View>
  );
}
Page4.navigationOptions = {
  title: "Komponent DateTimePicker"
};
