import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import image from "../assets/gus.png";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.quizContainer}>
        <Text style={styles.title}>Guess The Images </Text>
        <View style={styles.sub}>
          <View style={styles.quiz}>
            <Text style={styles.number}>1:</Text>
            <Text style={styles.text}>
              Waxad samayn dontaa in qiyaasto sawirada
            </Text>
          </View>
          <View style={styles.quiz}>
            <Text style={styles.number}>1:</Text>
            <Text style={styles.text}>
              waxad ahaystaa 15 diqiqo oo kaliya faldan ka jwaab dhaman su'alaha
            </Text>
          </View>
          <View style={styles.quiz}>
            <Text style={styles.number}>1:</Text>
            <Text style={styles.text}>
              su'awlaba aad ka jawabto waxad lee dahahy 10 dhibcood faldan
              ilaalso
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Start Gusing</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: 80,
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "contain",
  },
  quizContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  title: {
    fontSize: 42,
    color: "white",
  },
  quiz: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 12,
  },
  text: {
    fontSize: 17,
    fontWeight: "200",
    color: "lightgray",
  },
  number: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  sub: {
    marginHorizontal: 20,
  },
  btnText: {
    color: "black",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "white",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 40,
  },
});
