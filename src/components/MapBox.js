import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const MapBox = () => {
  const initialRegion = {
    latitude: 33.5812797, // Latitude for Chouf
    longitude: 35.6948353, // Longitude for Chouf
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <View style={styles.container2}>
          <MapView style={styles.map} region={initialRegion} />
        </View>
        <View style={{ position: "absolute", top: 10, width: "100%" }}>
          <TextInput
            style={{
              borderRadius: 10,
              margin: 10,
              color: "#000",
              borderColor: "white",
              backgroundColor: "#FFF",
              borderWidth: 1,
              height: 45,
              paddingHorizontal: 20,
              fontSize: 15,
            }}
            placeholder={"Search"}
            placeholderTextColor={"#666"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#D7D7D7",
    borderWidth: 0.5, // Set a borderWidth to see the border
    width: "100%", // Set a default width or make it dynamic
    height: 400, // Set a default height or make it dynamic
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  textStyle: {
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 0.7 * 16,
  },
  container: {
    flexDirection: "column",
  },
  container2: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
//   searchBox: {
//     position: "absolute",
//     width: "90%",
//     borderRadius: 8,
//     borderWidth: 0.5,
//     borderColor: "#aaa",
//     backgroundColor: "white",
//     padding: 8,
//     alignSelf: "center",
//     marginTop: 20,
//   },
//   searchBoxField: {
//     borderColor: "#777",
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     fontSize: 18,
//     marginBottom: 8,
//   },
});

export default MapBox;
