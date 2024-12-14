import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.offer}>50% OFF</Text>
      </View>
      <View style={styles.purchaseContainer}>
        <Text style={styles.purchase}>on your first purchase</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>Enter your email address here</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>GET MY 50% OFF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomContainer}>
        <Text style={styles.bottonText}>NO, THANKS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    alignSelf: "stretch",
    backgroundColor: "#AB4459",
    padding: 20,
    justifyContent: "ce nter",
    alignItems: "center",
  },
  topContainer: {
    height: "auto",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  offer: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  purchaseContainer: {
    height: "auto",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  purchase: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
  inputContainer: {
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    fontWeight: "500",
  },
  buttonContainer: {
    height: 50,
    width: "90%",
    backgroundColor: "#441752",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  bottomcontainer: {
    height: "auto",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  bottonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});
