import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FinalDesignIn = () => {
  return <Text style={styles.finalDesignIn}>Final design in Arabic</Text>;
};

const styles = StyleSheet.create({
  finalDesignIn: {
    fontSize: FontSize.size_201xl,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 2359,
  },
});

export default FinalDesignIn;
