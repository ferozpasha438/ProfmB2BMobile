import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Splash2 = () => {
  return (
    <View style={styles.splash2}>
      <View style={[styles.iphoneXOrNewer, styles.webViewbottomPosition]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi10.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal2.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side5.png")}
        />
      </View>
      <View style={styles.logoParent}>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            style={[styles.logo1Icon, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/logo-11.png")}
          />
        </View>
        <Text style={styles.poweredBy}>Powered by</Text>
      </View>
      <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-31.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-43.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webViewbottomPosition: {
    left: "50%",
    position: "absolute",
  },
  logoLayout: {
    height: 42,
    left: 0,
    width: 100,
    position: "absolute",
  },
  iconPosition: {
    height: 102,
    top: "50%",
    marginTop: -62,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  logo1Icon: {
    top: 0,
  },
  logo: {
    top: 26,
  },
  poweredBy: {
    left: 18,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  logoParent: {
    top: 662,
    left: 138,
    height: 68,
    width: 100,
    position: "absolute",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    marginLeft: -187.5,
    bottom: 0,
    width: 375,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  icon: {
    marginLeft: -149.5,
    width: 208,
  },
  icon1: {
    marginLeft: 245.5,
    width: 93,
    opacity: 0,
  },
  splash2: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default Splash2;
