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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    paddingHorizontal: 10,
    width: '100%',
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "ghostwhite",
  },
  scrollBox2: {
    padding: 5,
    backgroundColor: "white",
    width: "50%",
  },
  container3: {
    flex: 1,
    width: '100%'
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  scroll: {
    height: 1,
    alignSelf: "stretch"
  },
  scrollItem: {
    margin: 15,
    alignSelf: "center"
  },
  scrollBox: {
    margin: 20,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 150,
    padding: 10,
    margin: 15,
  },
  textLeft: {
    textAlign: "right",
    paddingRight: 20,
  }
});