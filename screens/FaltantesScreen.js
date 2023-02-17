import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const FaltantesScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Cosas que faltan Screen
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
export default FaltantesScreen;