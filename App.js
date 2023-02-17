import { Asset } from 'expo-asset';
import React from "react";
import Navigatio from "./Navigation";
const icon = Asset.fromModule(require('./img/icon.png')).uri;

export default function App() {
  return (
   <Navigatio/>
  );
}

