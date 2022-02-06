import React, { useState } from "react";
import { SafeAreaView, TextInput, View, CheckBox, Text } from "react-native";
import { styles } from "../../assets/css/Css.js";

export default function CalculoBebida() {
  const [checkBebida, setCheckBebida] = useState(false);
  const [checkCerveja, setCheckCerveja] = useState(false);
  const [checkRefrigerante, setCheckRefrigerante] = useState(false);
  const [checkSuco, setCheckSuco] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <Text>Gostaria de bebidas?</Text>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={checkBebida}
              onValueChange={setCheckBebida}
              style={styles.checkbox}
            />
          </View>
        </View>
        {checkBebida && (
          <View>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <Text>Cerveja?</Text>
                <CheckBox
                  value={checkCerveja}
                  onValueChange={setCheckCerveja}
                  style={styles.checkbox}
                />
                {checkCerveja && (
                  <View>
                    <label>Quantos bebem?</label>
                    <TextInput style={styles.input} />
                  </View>
                )}
                <Text>Refrigerante?</Text>
                <CheckBox
                  value={checkRefrigerante}
                  onValueChange={setCheckRefrigerante}
                  style={styles.checkbox}
                />
                {checkRefrigerante && (
                  <View>
                    <label>Quantos bebem?</label>
                    <TextInput style={styles.input} />
                  </View>
                )}
                <Text>Suco?</Text>
                <CheckBox
                  value={checkSuco}
                  onValueChange={setCheckSuco}
                  style={styles.checkbox}
                />
                {checkSuco && (
                  <View>
                    <label>Quantos bebem?</label>
                    <TextInput style={styles.input} />
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
        {!checkBebida && <button>Criar</button>}
      </View>
    </SafeAreaView>
  );
}
