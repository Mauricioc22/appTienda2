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

export default function Sale({ id, nombre, precio, createAt }) {
  const onDelete = () => {
    const docRef = doc(database, "sales", id);
    Alert.alert(
      "Confirmar eliminación",
      `¿Estás seguro que quieres eliminar la venta de ${nombre}?`,
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
          {moment(createAt.toDate()).format("ddd h:mm A")}
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
        <RN.Text style={[style.nombre, { color }]}>{nombre}</RN.Text>
        <RN.Text style={[style.precio, { color }]}>${precio}</RN.Text>
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
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createAt: {
    fontSize: 18,
    fontWeight: "bold",
  },
  precio: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
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
