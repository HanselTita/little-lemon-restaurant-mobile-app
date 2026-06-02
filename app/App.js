import { View } from "react-native";

import Footer from "../components/Fotter";
import LittleLemonHeader from "../components/LittleLemonHeader";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#495E57",
        justifyContent: "space-between",
      }}
    >
      <LittleLemonHeader />
      <Footer />
    </View>
  );
}
