import { StyleSheet } from "react-native";
import { StretchOutY } from "react-native-reanimated";

export default StyleSheet.create({
  item: {
    margin: 5,
    padding: 5,
    color: "black",
    backgroundColor: "white",
    textAlign: "center"
  },
  lazyItem: {
    color: "black",
    backgroundColor: "white",
    textAlign: "left"
  },

  filter: {
    display: "flex",
    alignSelf: "stretch",
    width: 250,
    height: 40,
  },

  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white"
  },
});