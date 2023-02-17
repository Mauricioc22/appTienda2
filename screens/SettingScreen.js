import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

const SettingScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Setting Screen
      </Text>
      <View>
        
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
};
export default SettingScreen;
