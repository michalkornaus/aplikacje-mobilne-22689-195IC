import { StyleSheet } from "react-native";
import { RollInRight } from "react-native-reanimated";

export default StyleSheet.create({
  navigationBar: {
    flexDirection: "row",
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "ghostwhite",
  },
  navButton: {
    flex: 1,
    shadowColor: 'rgba(0,0,0, .6)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#fff',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "ghostwhite",
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 300,
    height: 300,
    margin: 20,
  },
  image2: {
    width: 300,
    height: 100,
    margin: 20,
  },
  slider: {
    marginTop: 20,
    width: 150,
  },
  picker: {
    height: 50,
    width: 250,
    marginTop: 20,
  },
  icons: {
    alignSelf: "stretch"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  itemIcon: {
    padding: 10,
    color: "slategrey"
  },
  itemText: {
    color: "slategrey"
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
button: {
  alignItems: "center",
  backgroundColor: "#CCCCCC",
  color: "#FFFFFF",
  padding: 10,
  width: 80,
},
});