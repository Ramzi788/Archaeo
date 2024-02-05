import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const LargeRoundedBox = ({ source }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image source={source} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "rgba(110, 110, 110, 0.75)",
    borderWidth: 0.5, // Set a borderWidth to see the border
    width: 237, // Set a default width or make it dynamic
    height: 226, // Set a default height or make it dynamic
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
});

export default LargeRoundedBox;
