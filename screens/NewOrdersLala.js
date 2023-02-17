import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";

const NewOrdersLala = () => {
const [products, setProducts] = useState([
{ id: "1", name: "Producto 1", quantity: "0" },
{ id: "2", name: "Producto 2", quantity: "0" },
{ id: "3", name: "Producto 3", quantity: "0" },
]);

const renderItem = ({ item }) => {
return (
<View style={styles.item}>
<Text style={styles.itemText}>{item.name}</Text>
<TextInput
style={styles.itemInput}
// value={item.quantity}
placeholder="Nombre"
onChangeText={(text) => {
const newProducts = [...products];
const index = newProducts.findIndex((p) => p.id === item.id);
newProducts[index].quantity = text;
setProducts(newProducts);
}}
/>
</View>
);
};

return (
<View style={styles.container}>
<Text style={styles.title}>Generador de pedido Lala</Text>
<FlatList
data={products}
renderItem={renderItem}
keyExtractor={(item) => item.id}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
title: {
fontSize: 30,
textAlign: "center",
marginTop: 50,
},
item: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
paddingVertical: 10,
},
itemText: {
fontSize: 20,
},
itemInput: {
fontSize: 20,
width: 50,
textAlign: "center",
},
});

export default NewOrdersLala;