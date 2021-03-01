import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: "#222",
    marginLeft: 0,
    marginRight: 50,
  },
  myMessageBox: {
    backgroundColor: "#343",
    marginLeft: 50,
    marginRight: 0,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});
