import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.welcomeBackParent}>
        <Text
          style={[styles.welcomeBack, styles.logInToTypo]}
        >{`Welcome Back `}</Text>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame19.png")}
        />
      </View>
      <Text style={[styles.logInTo, styles.logInToTypo]}>
        Log in to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logInToTypo: {
    textAlign: "left",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  welcomeBack: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 8,
  },
  welcomeBackParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logInTo: {
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    marginTop: 4,
  },
  frameParent: {
    flex: 1,
    width: "100%",
  },
});

export default Frame;
