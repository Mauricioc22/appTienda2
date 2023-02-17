import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "../src/config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Cost from "../src/components/Cost";
import { useNavigation } from "@react-navigation/native";
import * as RN from "react-native";


export default function CostsScreen() {
  const navigation = useNavigation();
  const [costs, setCosts] = React.useState([]);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Gastos',
      headerRight: () => <RN.Button title="Agregar" onPress={() => navigation.navigate('Gastos')}/>
    })
  }, [])


  React.useEffect(() => {
    const collectionRef = collection(database, 'costs');
    const q = query(collectionRef, orderBy('createAt', 'desc'))


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setCosts(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          cost: doc.data().cost,
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
    {costs.map(cost => <Cost key={cost.id} {...cost} />)}
    
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
