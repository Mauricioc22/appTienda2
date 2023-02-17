// import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { database } from "../src/config/fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';

const VentasScreen = () => {
  const navigation = useNavigation();
  const [newItem, setNewItem] = React.useState({
    nombre: "",
    precio: Number(0),
    createAt: new Date(),
  });

  const onSend = async () => {
    // const price = parseFloat(newItem.precio);
    const itemToSave = { ...newItem };
    itemToSave.precio = Number(itemToSave.precio);
    if (isNaN(itemToSave.precio) || itemToSave.precio<=0 || itemToSave.precio=="") {
      Alert.alert(
        'Aviso',
        'Por favor, ingrese un valor valido.',
        [
          {
            text: 'Aceptar',
          }
        ],
        { cancelable: false }
      );
          } else {
      await addDoc(collection(database, "sales"), itemToSave);
      Alert.alert(
        'Aviso',
        'Guardado exitosamente :)',
        [
          {
            text: 'Aceptar',
          }
        ],
        { cancelable: false }
      );
            navigation.goBack();
    }
  };

  // const [data, setData] = useState();
  // const [rtData, setRTData] = useState([]);

  // const [nombre, setNombre] = useState("");
  // const [precio, setPrecio] = useState("");
  // const [nota, setNota] = useState("");

  // const saveVenta = async () =>{
  //   if (precio ==='') {
  //       alert('Ingresa un valor valodo')
  //   } else{
  //       await firebase.db.collection('ventas').add({
  //           name: nombre,
  //           price: precio,
  //       })
  //       alert('Guardado')
  //   }
  // }

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Agregar venta
      </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nombre"
            // value={newItem.nombre}
            onChangeText={(text) => setNewItem({ ...newItem, nombre: text })}
            style={styles.input}
          />

          <TextInput
            placeholder="Precio $"
            // value={newItem.precio}
            onChangeText={(text) => setNewItem({ ...newItem, precio: text })}
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onSend()}
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          Guardar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default VentasScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 1,
    marginTop: 1,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 1,
    padding: 5,
  },
});
