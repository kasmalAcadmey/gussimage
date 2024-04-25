import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import data from "../data";

const QustionScreen = () => {
  const item = data[0];
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.chalangeText}>
        <Text style={styles.gus}>Gus Challange</Text>
        <View style={styles.counter}>
          <Text style={styles.textCounter}>13</Text>
        </View>
      </View>
      <View style={styles.progess}>
        <Text style={{ fontSize: 17, color: "gray" }}>Your Progess</Text>
        <Text style={{ fontSize: 17, color: "gray" }}>
          (3/5) Question Answered
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#EBECF0",
          shadowOffset: 1,
          width: "100%",
          borderRadius: 10,
          marginVertical: 10,
          height: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            width: 200,
            borderRadius: 10,
            height: 100,
            height: "70%",
          }}
        />
      </View>
      {/* <View style={styles.progessBar}></View> */}
      <View style={styles.bottom}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.question}</Text>
        <View style={styles.optionContainer}>
          <FlatList
            data={item.options}
            renderItem={({ item }) => (
              <Pressable style={styles.option}>
                <View style={styles.item}>
                  <View style={styles.rounded}>
                    <Text>{item.options}</Text>
                  </View>
                  <Text style={{ fontSize: 17 }}>{item.answer}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <Pressable style={styles.continue}>
          <Text style={{ color: "white", fontSize: 17 }}>Countinue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default QustionScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 10,
  },
  progess: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    paddingVertical: 5,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
  },
  textCounter: {
    color: "white",
  },
  gus: {
    fontSize: 22,
    fontWeight: "500",
  },
  chalangeText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  bottom: {
    marginTop: 20,

    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  optionContainer: {
    gap: 10,
    marginVertical: 10,
  },
  option: {
    borderColor: "green",
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rounded: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  continue: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
