import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const NotasScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Notas Screen
      </Text>
      <View>
        <Image
          style={{
            width: "50%",
            height: "50%",
            alignSelf: "center",
            marginTop: 100,
          }}
          source={require("../img/pet.gif")}
        />
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          ¡Ups, no hay nada que ver aquí! 😓
        </Text>
      </View>
    </View>
  );
}
export default NotasScreen;