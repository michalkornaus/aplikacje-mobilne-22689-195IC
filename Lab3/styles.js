import { Platform, StyleSheet, StatusBar } from "react-native";

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
  box1: {
    width: 340,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    marginBottom: 15,
    padding: 5,
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
  content1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
    ios: { paddingTop: 20 },
    android: { paddingTop: StatusBar.currentHeight }
    })
  },
  box2: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'darkslategray',
    margin: 10,
    padding: 5,
  },
  content2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
      })
  },
});