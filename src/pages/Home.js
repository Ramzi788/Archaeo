import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer, loadAsync, THREE } from 'expo-three';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RoundedBox from "../components/RoundedBox";
import LargeRoundedBox from "../components/LargeRoundedBox";
import MapBox from "../components/MapBox";

export default function Home({}) {

  const favoritePlaces = [
    <RoundedBox
      key="p1"
      source={require('../assets/Moussa-Castle.png')}
      title="Moussa Castle"
    />,
    <RoundedBox
      key="p2"
      source={require('../assets/Moussa-Castle.png')}
      title="Moussa Castle"
    />,
    <RoundedBox
      key="p3"
      source={require('../assets/Moussa-Castle.png')}
      title="Moussa Castle"
    />,
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerText}>Welcome,</Text>
            <Text style={styles.headerText}>Ramzi Zeineddine!</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="hand-wave"
              size={iconSize}
              color="#FFBF00"
              style={styles.iconStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.firstRow}>
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
            Your Favorite Places in Chouf
          </Text>
          <ScrollView
            horizontal={true}
            style={styles.boxScroll}
            showsHorizontalScrollIndicator={false}
          >
            {favoritePlaces.map((roundedBox, index) => (
              <View key={index} style={styles.roundedBoxContainer}>
                {roundedBox}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.secondRow}>
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
            Discover New Sites in Chouf
          </Text>
       <MapBox/>
        </View>
      </View>
    </ScrollView>
  );
}
const baseUnit = 16;
const iconSize = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#00A59B",
    height: 130,
  },
  headerContent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 1.2 * baseUnit,
    lineHeight: 30,
  },
  center: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    padding: 1.5 * baseUnit,
  },
  firstRow: {
    flexDirection: "column",
    paddingTop: 1.5 * baseUnit,
  },
  roundedBoxContainer: {
    paddingRight: 1.2 * baseUnit,
  },
  secondRow: {
    marginTop: 2 * baseUnit,
  },
  bottom: {},
});
