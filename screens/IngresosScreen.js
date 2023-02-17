import React from "react";
import { TextInput } from "react-native-paper";
import { database } from "../src/config/fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Alert } from 'react-native';


const IngresosScreen = () => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Entradas',
    })
  }, [])




  const navigation = useNavigation();
  const [newIngreso, setNewIngreso] = React.useState({
    name: "",
    value: Number(0),
    createAt: new Date(),
  });


  const onSend = async () => {
    
    // const price = parseFloat(newItem.precio);
    const itemToSave = { ...newIngreso };
    itemToSave.value = Number(itemToSave.value);
    if (isNaN(itemToSave.value) || itemToSave.value<=0 || itemToSave.value=="") {
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
      await addDoc(collection(database, "Ingresos"), itemToSave);
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


  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Agregar
      </Text>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Proveedor/nombre"
            // value={newItem.nombre}
            onChangeText={(text) => setNewIngreso({ ...newIngreso, name: text })}
            style={styles.input}
          />

          <TextInput
            placeholder="$ Importe"
            // value={newItem.precio}
            onChangeText={(text) => setNewIngreso({ ...newIngreso, value: text })}
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
}
export default IngresosScreen;


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
