import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";


const PedidosScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Generador de pedidos
      </Text>

      {/* botones */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("NOCC")}>
        <Image
            style={styles.buttonImage}
            source={require("../img/coca.jpg")}
          />
          <Text style={styles.buttonText}>Coca-Cola</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("NOL")}>

        <Image
            style={styles.buttonImage}
            source={require("../img/lala.png")}
          />
          <Text style={styles.buttonText}>Lala</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Image
            style={styles.buttonImage}
            source={require("../img/Modelo.png")}
          />
          <Text style={styles.buttonText}>Cerveza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image
            style={styles.buttonImage}
            source={require("../img/sabritas.jpg")}
          />
          <Text style={styles.buttonText}>Sabritas</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
};
export default PedidosScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 0,
  },
  button: {
    backgroundColor: "transparent",
    // padding: 30,
    paddingBottom:45,
    paddingTop: 45,
    margin: 0,
    borderRadius: 5,
    width: 180,
    height: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
});