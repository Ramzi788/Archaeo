import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RoundedBox from "../components/RoundedBox";
import LargeRoundedBox from "../components/LargeRoundedBox";

export default function TourMain({ route }) {
  const { backgroundImage } = route.params;
  const favoritePlaces = [
    <LargeRoundedBox
      key={"p1"}
      source={require("../assets/hamadeh-palace.jpeg")}
    />,
    <LargeRoundedBox
      key={"p2"}
      source={require("../assets/Moussa-Castle.png")}
    />,
    <LargeRoundedBox
      key={"p3"}
      source={require("../assets/Moussa-Castle.png")}
    />,
  ];

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Overlay View */}
      <View style={styles.overlay}>
        <View style={styles.content}>
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
          <View style={styles.info}>
            <Text style={styles.title}>Moussa Castle</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium. Lorem ipsum dolor sit amet
              consectetur adipiscing elit. Maxime mollitia
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start tour</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(110, 110, 110, 0.75)",
  },
  content: {
    padding: 30,
    paddingTop: 100,
  },
  info: {
    marginTop: 50,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "justify",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3C3C3C", // Example button color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  roundedBoxContainer: {
    paddingRight: 1.2 * 16,
  },
});
