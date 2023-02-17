import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Sales")}
          style={[styles.button, styles.button1]}
        >
          <MaterialIcons name="point-of-sale" size={30} color="#fff" />
          <Text style={styles.text}>Ventas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Costs")}
          style={[styles.button, styles.button2]}
        >
          <MaterialCommunityIcons name="cash-remove" size={30} color="#fff" />
          <Text style={styles.text}>Gastos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Incomes")}
          style={[styles.button, styles.button3]}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="hand-coin-outline"
              size={30}
              color="#fff"
            />
            <Feather name="plus-circle" size={16} color="#fff" />
          </View>
          <Text style={styles.text}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pedidos")}
          style={[styles.button, styles.button4]}
        >
          <Icon name="clipboard" size={30} color="#fff" />
          <Text style={styles.text}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Deben")}
          style={[styles.button, styles.button5]}
        >
          <Feather name="users" size={30} color="#fff" />
          
          <Text style={styles.text}>Deben</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Notas")}
          style={[styles.button, styles.button6]}
        >
          <Icon name="sticky-note" size={30} color="#fff" />
          <Text style={styles.text}>Notas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Faltantes")}
          style={[styles.button, styles.button7]}
        >
          <Icon name="list" size={30} color="#fff" />
          <Text style={styles.text}>Cosas que faltan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("Report")}
          onPress={() => navigation.navigate("Login")}
          style={[styles.button, styles.button8]}
        >
          <Icon name="bar-chart" size={30} color="#fff" />
          <Text style={styles.text}>Corte de caja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 17,
  },
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "4%",
    fontWeight: "bold",
  },
  buttonsContainer: {
    marginTop: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: "48%",
    alignItems: "center",
  },
  button1: {
    backgroundColor: "#03bb85",
  },
  button2: {
    backgroundColor: "#ff6961",
  },
  button3: {
    backgroundColor: "#f39f18",
  },
  button4: {
    backgroundColor: "#0cb7f2",
  },
  button5: {
    backgroundColor: "#c29b61",
  },
  button6: {
    backgroundColor: "#efd690",
  },
  button7: {
    backgroundColor: "#bdcdcd",
  },
  button8: {
    backgroundColor: "#4c2882",
  },
});

export default HomeScreen;
