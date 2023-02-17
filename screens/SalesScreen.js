import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Sale from "../src/components/Sale";
import { useNavigation } from "@react-navigation/native";
import * as RN from "react-native";


export default function SalesScreen() {
  const navigation = useNavigation();
  const [sales, setSales] = React.useState([]);


  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Ventas',
      headerRight: () => <RN.Button title="Agregar" onPress={() => navigation.navigate('Ventas')}/>
    })
  }, [])

  React.useEffect(() => {
    const collectionRef = collection(database, 'sales');
    const q = query(collectionRef, orderBy('createAt', 'desc'))


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setSales(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          nombre: doc.data().nombre,
          precio: doc.data().precio,
          createAt: doc.data().createAt,
        }))
        );
        
      }, (error) => {
        console.error(error);
      });
    
      return unsuscribe;
    },[]);

  return (
    <View>
    
    <RN.ScrollView>
    {sales.map(sale => <Sale key={sale.id} {...sale} />)}
    </RN.ScrollView>
    
      </View>
    // <View>
    //   <Text
    //     style={{
    //       fontSize: 30,
    //       textAlign: "center",
    //       marginTop: "20%",
    //     }}
    //   >
    //     Resumen de ventas
    //   </Text>
    // </View>
  );
}
