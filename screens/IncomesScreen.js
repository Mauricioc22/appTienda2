import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Income from "../src/components/Income";
import { useNavigation } from "@react-navigation/native";
import * as RN from "react-native";


export default function IncomesScreen() {
  const navigation = useNavigation();
  const [values, setValues] = React.useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Entradas de dinero',
      headerRight: () => <RN.Button title="Agregar" onPress={() => navigation.navigate('Ingresos')}/>
    })
  }, [])

  React.useEffect(() => {
    const collectionRef = collection(database, 'Ingresos');
    const q = query(collectionRef, orderBy('createAt', 'desc'))


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setValues(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          value: doc.data().value,
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
    {values.map(value => <Income key={value.id} {...value} />)}
    
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
