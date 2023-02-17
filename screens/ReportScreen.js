import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { database } from "../src/config/fb";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
// import Sale from "../src/components/Report";
import { useNavigation } from "@react-navigation/native";
import * as RN from "react-native";
import moment from "moment";
import "moment/locale/es"; // Agregar la configuración de idioma español
moment.locale("es");

export default function ReportScreen() {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Corte de caja",
    });
  }, []);

  const navigation = useNavigation();
  const [sales, setSales] = React.useState([]);
  const [costs, setCosts] = React.useState([]);
  const [incomes, setIncomes] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0); // nuevo estado para el precio total
  const [totalCost, setTotalCost] = React.useState(0);
  const [totalIncome, setTotalIncome] = React.useState(0);
  const fecha = new Date();

  React.useEffect(() => {
    const today = new Date();
    // Formatea la fecha actual como una cadena 'YYYY-MM-DD'
    const todayStr = today.toLocaleDateString("es-ES");

    const collectionRef = collection(database, "sales");
    const collectionRefCost = collection(database, "costs");
    const collectionRefIncome = collection(database, "Ingresos");

    const q = query(
      collectionRef,
      orderBy("createAt", "desc"),
      // Agrega un filtro para traer solo las ventas creadas hoy
      where("createAt", ">=", new Date(todayStr))
    );
    const r = query(
      collectionRefCost,
      orderBy("createAt", "desc"),
      // Agrega un filtro para traer solo las ventas creadas hoy
      where("createAt", ">=", new Date(todayStr))
    );
    const i = query(
      collectionRefIncome,
      orderBy("createAt", "desc"),
      // Agrega un filtro para traer solo las ventas creadas hoy
      where("createAt", ">=", new Date(todayStr))
    );

    const unsuscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setSales(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            precio: doc.data().precio,
            createAt: doc.data().createAt,
          }))
        );
      },
      (error) => {
        console.error(error);
      }
    );

    //
    //////////unsuscribe2
    const unsuscribe2 = onSnapshot(
      r,
      (querySnapshot) => {
        setCosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            cost: doc.data().cost,
            createAt: doc.data().createAt,
          }))
        );
      },
      (error) => {
        console.error(error);
      }
    );

    const unsuscribe3 = onSnapshot(
      i,
      (querySnapshot) => {
        setIncomes(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            value: doc.data().value,
            createAt: doc.data().createAt,
          }))
        );
      },
      (error) => {
        console.error(error);
      }
    );
    // Devuelve una función que cancele ambas suscripciones
    return () => {
      unsuscribe();
      unsuscribe2();
      unsuscribe3();
    };
  }, []);

  React.useEffect(() => {
    // función para calcular la suma de los precios
    const calculateTotalPrice = () => {
      let total = 0;
      sales.forEach((sale) => {
        total += sale.precio;
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [sales]);

  React.useEffect(() => {
    // función para calcular la suma de los gastos
    const calculateTotalCost = () => {
      let total = 0;
      costs.forEach((cost) => {
        total += cost.cost;
      });
      setTotalCost(total);
    };
    calculateTotalCost();
  }, [costs]);

  React.useEffect(() => {
    // función para calcular la suma de los ingresos
    const calculateTotalIncome = () => {
      let total = 0;
      incomes.forEach((income) => {
        total += income.value;
      });
      setTotalIncome(total);
    };
    calculateTotalIncome();
  }, [incomes]);

  return (
    // <View>
    //   <RN.ScrollView></RN.ScrollView>
    //   {/* mostrar el precio total */}
    //   <Text style={style.nombre}>Ventas totales de hoy:      ${totalPrice}</Text>
    //   <Text style={style.nombre}>Gastos totales de hoy:      ${totalCost}</Text>
    //   <Text style={style.nombre}>Ingresos totales de hoy:   ${totalIncome}</Text>
    //   <Text style={style.nombre}>Total despues de gastos{"\n"}mas ingresos:                     ${totalPrice - totalCost + totalIncome}</Text>
    //   <Text></Text>
    //   <Text style={style.precio}>No olvides revisar las recargas.</Text>
    //   <Text></Text>
    // </View>

    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Reporte diario</Text>
      <Text style={styles.date}>
        {moment(fecha).format("dddd D [de] MMMM [de] YYYY")}
      </Text>

      {/* Tabla de ventas, gastos e ingresos */}
      <View style={[styles.tableContainer, styles.tableContainerIn]}>
        <Text style={styles.tableHeader}>Ventas totales</Text>
        <Text style={styles.tableData}>${totalPrice}</Text>
      </View>

      <View style={[styles.tableContainer, styles.tableContainerOut]}>
        <Text style={styles.tableHeader}>Gastos totales</Text>
        <Text style={styles.tableData}>${totalCost}</Text>
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableHeader}>Entradas totales</Text>
        <Text style={styles.tableData}>${totalIncome}</Text>
      </View>

      <View style={[styles.tableContainer, styles.totalRow]}>
        <Text style={styles.totalHeader}>Total </Text>
        <Text style={styles.totalData}>
          ${totalPrice - totalCost + totalIncome}
        </Text>
      </View>

      {/* Texto adicional */}
      <Text style={styles.text}>No olvides revisar las recargas.</Text>

      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sales")}
        >
          <Text style={styles.buttonText}>Ventas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Costs")}
        >
          <Text style={styles.buttonText}>Gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Incomes")}
        >
          <Text style={styles.buttonText}>Añadir dinero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D3557",
    textAlign: "center",
  },
  date: {
    fontSize: 18,

    color: "#1D3557",
    marginBottom: 30,
    textAlign: "center",
  },
  tableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableContainerIn: {
    backgroundColor: "#03bb85",
  },
  tableContainerOut: {
    backgroundColor: "#ff6961",
  },
  tableHeader: {
    fontWeight: "bold",
    color: "#1D3557",
    flex: 2,
    textAlign: "left",
    fontSize: 22,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 8,
  },
  tableData: {
    color: "#333",
    flex: 1,
    textAlign: "left",
    fontSize: 22,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 8,
  },
  totalRow: {
    marginTop: 5,
  },
  totalHeader: {
    fontWeight: "bold",
    color: "#1D3557",
    flex: 2,
    fontSize: 22,
    textAlign: "right",
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 8,
  },
  totalData: {
    fontWeight: "bold",
    color: "#1D3557",
    flex: 1,
    textAlign: "left",
    fontSize: 22,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 8,
  },

  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  button: {
    backgroundColor: "#1e90ff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
