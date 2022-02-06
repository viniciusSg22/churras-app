import React from "react";
import { View } from "react-native";
import CalculoBebida from "../components/calculoBebida";
import CalculoCarne from "../components/calculoCarne";

export default function Criar() {
  return (
    <View>
      <CalculoCarne />
      <CalculoBebida />
    </View>
  );
}
