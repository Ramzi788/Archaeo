import React, { useState } from "react";
import MapView, { Polygon } from "react-native-maps";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const MapBox = () => {
  const [region, setRegion] = useState({
    latitude: 33.8938, // Example latitude
    longitude: 35.5018, // Example longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const CHOUF_COORDINATES = [
    { latitude: 33.6931, longitude: 35.5836 },
    { latitude: 33.7, longitude: 35.6 },
    // ... add all the other coordinates for the Chouf region
    { latitude: 33.6931, longitude: 35.5836 }, // The last point should connect back to the first point
  ];
  // Define the boundaries of the area you want to lock the map within
  const boundary = {
    north: 33.9,
    south: 33.8,
    east: 35.6,
    west: 35.4,
  };

  // Function to check and enforce the boundaries
  const enforceBoundary = (newRegion) => {
    let { latitude, longitude } = newRegion;

    // Check latitude boundaries
    if (latitude > boundary.north) latitude = boundary.north;
    if (latitude < boundary.south) latitude = boundary.south;

    // Check longitude boundaries
    if (longitude > boundary.east) longitude = boundary.east;
    if (longitude < boundary.west) longitude = boundary.west;

    // Update the region to enforce the boundary
    setRegion({
      ...region,
      latitude,
      longitude,
    });
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <View style={styles.container2}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={enforceBoundary}
          >
            <Polygon
              coordinates={CHOUF_COORDINATES}
              strokeColor="#FF0000" // red border
              fillColor="rgba(255, 0, 0, 0.2)" // semi-transparent fill
              strokeWidth={2}
            />
          </MapView>
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
