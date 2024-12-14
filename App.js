import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Card } from "./src/components/Card";
import { Modal } from "./src/components/Modal";

export default function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F29F58" }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonOpenAnimation}
          onPress={() => {
            setVisibility(true);
          }}
        >
          <Text style={styles.buttonOpenAnimationText}>Abrir Modal</Text>
        </TouchableOpacity>
        <Modal
          visibility={visibility}
          dismissable={true}
          setVisibility={setVisibility}
        >
          <Card />
        </Modal>

        <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1833",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpenAnimation: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#F29F58",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonOpenAnimationText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
