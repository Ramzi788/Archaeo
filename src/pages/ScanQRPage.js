import React, { Suspense, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GLView } from "expo-gl";
import { Renderer, THREE } from "expo-three";
import { Asset } from "expo-asset";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Canvas } from "@react-three/fiber/native";

export default function ScanQRPage() {
  return <SafeAreaView></SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
