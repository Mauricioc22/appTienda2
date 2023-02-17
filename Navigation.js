import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screen
// import HomeScreen from "./screen/HomeScreen";
import HomeScreen from "./screens/Homescreen";
import Login from "./screens/Login";
import SettingScreen from "./screens/SettingScreen";
import DebenScreen from "./screens/DebenScreen";
import GastosScreen from "./screens/GastosScrees";
import NotasScreen from "./screens/NotasScreen";
import PedidosScreen from "./screens/PedidosScreen";
import VentasScreen from "./screens/VentasScreen";
import SalesScreen from "./screens/SalesScreen";
import CostsScreen from "./screens/CostsScreen";
import IncomesScreen from "./screens/IncomesScreen";
import NewOrdersCoca from "./screens/NewOrdersCoca";
import NewOrdersLala from "./screens/NewOrdersLala";
import ReportScreen from "./screens/ReportScreen";
import IngresosScreen from "./screens/IngresosScreen";
import FaltantesScreen from "./screens/FaltantesScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackScreen from "./screens/StackScreen";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Stack" component={StackScreen} />
      <HomeStackNavigator.Screen name="Login" component={Login} />

      <HomeStackNavigator.Screen name="Deben" component={DebenScreen} />
      <HomeStackNavigator.Screen name="Gastos" component={GastosScreen} />
      <HomeStackNavigator.Screen name="Ingresos" component={IngresosScreen} />
      
      <HomeStackNavigator.Screen name="Notas" component={NotasScreen} />
      <HomeStackNavigator.Screen name="Pedidos" component={PedidosScreen} />
      <HomeStackNavigator.Screen name="Ventas" component={VentasScreen} />
      <HomeStackNavigator.Screen name="Sales" component={SalesScreen} />
      <HomeStackNavigator.Screen name="Costs" component={CostsScreen} />
      <HomeStackNavigator.Screen name="NOCC" component={NewOrdersCoca} />
      <HomeStackNavigator.Screen name="NOL" component={NewOrdersLala} />
      <HomeStackNavigator.Screen name="Report" component={ReportScreen} />
      <HomeStackNavigator.Screen name="Incomes" component={IncomesScreen} />
      <HomeStackNavigator.Screen name="Faltantes" component={FaltantesScreen} />
      

    </HomeStackNavigator.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          //tabBarActiveTintColor: 'none',
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"grey"} size={30} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={30} color="black" />
          ),
          tabBarLabel: "Config",
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigatio() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
