import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors';

const Display = ({ state }) => (
  <View style={state.darkMode ? styles.containerDark : styles.containerLight}>
    <SafeAreaView style={styles.safe}>
      <Text
        style={state.darkMode ? styles.displayDark : styles.displayLight}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{state.display}</Text>
      { state.result !== '' &&
        <Text
          style={state.darkMode ? styles.resultDark : styles.resultLight}
          adjustsFontSizeToFit
          numberOfLines={1}
        >{state.result}</Text>
      }
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: colors.dark,
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  containerLight: {
    backgroundColor: colors['grey-lightest'],
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  displayDark: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 40,
  },
  displayLight: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 40,
  },
  resultDark: {
    textAlign: 'right',
    fontSize: 30,
    color: colors.white,
  },
  resultLight: {
    textAlign: 'right',
    fontSize: 30,
    color: colors.black,
  },
})

export default Display;