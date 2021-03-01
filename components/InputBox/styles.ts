import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 10
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10
  },
  icon: {
    marginHorizontal: 5
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
