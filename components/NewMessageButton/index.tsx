import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { Screen } from "../../types";
import { View } from "../Themed";
import styles from "./styles";

export default () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].tint }]}>
      <TouchableOpacity onPress={() => navigation.navigate(Screen.Contacts)}>
        <MaterialCommunityIcons name={'message-reply-text'} size={32} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}
