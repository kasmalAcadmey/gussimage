import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result</Text>
      <View style={styles.resultText}>
        <Text style={styles.textAnswer}>Total correct Answers</Text>
        <Text style={styles.textQuestion}>4 out 5 Question</Text>
      </View>

      <View style={styles.result}>
        <Text style={styles.textScroe}>Your final Score is</Text>
        <View style={styles.rounded}>
          <Text style={{ color: "white", fontSize: 80 }}>40</Text>
        </View>
      </View>
      <Pressable style={styles.continue}>
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    padding: 10,
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
    textAlign: "right",
    color: "white",
  },
  resultText: {
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 10,
  },
  textAnswer: {
    fontSize: 22,
    color: "white",
    fontStyle: "normal",
    fontWeight: "500",
  },
  textQuestion: {
    fontSize: 19,
    color: "lightgray",
    fontStyle: "normal",
    fontWeight: "500",
  },
  result: {
    backgroundColor: "white",
    height: 350,
    width: 350,
    borderRadius: 20,
    marginTop: 40,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textScroe: {
    fontSize: 35,
    color: "black",
    marginBottom: 40,
  },
  rounded: {
    backgroundColor: "green",
    width: 180,
    height: 190,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  continue: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 27,
  },
  btnText: {
    color: "black",

    fontSize: 18,
  },
});
