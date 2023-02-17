import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

export default function Sale({ precio, createAt }) {
  return (
    
    <RN.View style={style.productContainer}>
      <RN.Text style={style.createAt}>
        {moment(createAt.toDate()).format("DD/MM/YYYY HH:mm A")}
      </RN.Text>
      <RN.Text style={style.precio}>${precio}</RN.Text>
    </RN.View>
  );
}




const style = RN.StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
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
