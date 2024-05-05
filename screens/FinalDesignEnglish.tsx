import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FinalDesignEnglish = () => {
  return <Text style={styles.finalDesignEnglish}>Final design English</Text>;
};

const styles = StyleSheet.create({
  finalDesignEnglish: {
    fontSize: FontSize.size_201xl,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 2083,
  },
});

export default FinalDesignEnglish;
