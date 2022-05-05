import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content:{
    marginTop: 10,
  },
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
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  lazyContainer:{
    display: "flex",
    flexDirection: "row",
  },
  indicatorContent: {
    marginTop: 250,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});