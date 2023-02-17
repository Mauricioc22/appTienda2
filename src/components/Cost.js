import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import moment from "moment";
import "moment/locale/es"; // Agregar la configuración de idioma español
moment.locale("es");

export default function Cost({ id, name, cost, createAt }) {
  const onDelete = () => {
    const docRef = doc(database, "costs", id);
    Alert.alert(
      "Confirmar eliminación",
      `¿Estás seguro que quieres eliminar: ${name}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            deleteDoc(docRef);
          },
        },
      ]
    );
  };

  const isToday = moment(createAt.toDate()).isSame(new Date(), "day");
  const backgroundColor = isToday ? "#03bb85" : "#fff";
  const color = isToday ? "#fff" : "#000";
  return (
    <RN.View style={[style.productContainer, { backgroundColor }]}>
      <RN.View style={style.container}>
        <RN.Text style={[style.createAt, { color }]}>
          {moment(createAt.toDate()).format("ddd H:mm A")}
        </RN.Text>
        <MaterialCommunityIcons
          style={style.icon}
          name="delete"
          color={"#fff"}
          size={30}
          onPress={onDelete}
        />
      </RN.View>
      <RN.View style={style.container}>
        <RN.Text style={[style.name, { color }]}>{name}</RN.Text>
        <RN.Text style={[style.cost, { color }]}>${cost}</RN.Text>
      </RN.View>
    </RN.View>
  );
}

const style = RN.StyleSheet.create({
  icon: {
    marginLeft: "auto",
  },
  container: {
    flexDirection: "row",
  },
  productContainer: {
    padding: 12,
    backgroundColor: "#fff",
    margin: 1,
    borderRadius: 8,
    // flexDirection: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createAt: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cost: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "auto",
  },
  button: {
    backgroundColor: "#0fa5e9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
