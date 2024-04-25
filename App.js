import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import image from "./assets/gus.png";
import QustionScreen from "./screens/QustionScreen";
import ResultScreen from "./screens/ResultScreen";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return <QustionScreen />;
}

const styles = StyleSheet.create({});
