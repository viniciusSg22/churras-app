import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, View, CheckBox, Text } from "react-native";
import { styles } from "../../assets/css/Css.js";

export default function CalculoCarne() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [qtdHomens, setQtdHomens] = useState(0);
  const [qtdMulheres, setQtdMulheres] = useState(0);
  const [qtdCriancas, setQtdCriancas] = useState(0);
  const [kiloCarne, setKiloCarne] = useState(0);

  const [bovinoCheck, setBovinoSelection] = useState(false);
  const [suinoCheck, setSuinoSelection] = useState(false);
  const [aveCheck, setAveSelection] = useState(false);
  const [divisao, setDivisao] = useState(0);

  useEffect(() => {
    setKiloCarne(
      homens * qtdHomens + mulheres * qtdMulheres + criancas * qtdCriancas
    );
  }, [<TextInput />]);

  useEffect(() => {
    if (bovinoCheck && suinoCheck && aveCheck) {
      setDivisao(kiloCarne / 3);
    } else if ((bovinoCheck && suinoCheck) || aveCheck) {
      setDivisao(kiloCarne / 2);
    } else if (bovinoCheck || suinoCheck || aveCheck) {
      setDivisao(kiloCarne);
    }
  }, [<CheckBox />]);

  return (
    <SafeAreaView>
      <label>Número de homens</label>
      <TextInput style={styles.input} onChangeText={setHomens} />
      <label>Quantidade aproximada que come</label>
      <TextInput style={styles.input} onChangeText={setQtdHomens} />
      <label>Número de mulheres</label>
      <TextInput style={styles.input} onChangeText={setMulheres} />
      <label>Quantidade aproximada que come</label>
      <TextInput style={styles.input} onChangeText={setQtdMulheres} />
      <label>Número de crianças</label>
      <TextInput style={styles.input} onChangeText={setCriancas} />
      <label>Quantidade aproximada que come</label>
      <TextInput style={styles.input} onChangeText={setQtdCriancas} />
      <View>{kiloCarne}</View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={bovinoCheck}
            onValueChange={setBovinoSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Carne Bovina?</Text>
          <CheckBox
            value={suinoCheck}
            onValueChange={setSuinoSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Carne Suína?</Text>
          <CheckBox
            value={aveCheck}
            onValueChange={setAveSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Carne de Aves?</Text>
        </View>
        <Text>{bovinoCheck ? "👍" : "👎"}</Text>
        <Text>{suinoCheck ? "👍" : "👎"}</Text>
        <Text>{aveCheck ? "👍" : "👎"}</Text>
        <Text>{divisao.toFixed(2)} </Text>
      </View>
    </SafeAreaView>
  );
}