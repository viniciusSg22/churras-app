import { View, Text } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <button onClick={() => navigation.navigate("Criar")}>Criar</button>
    </View>
  );
}

export default Home;
