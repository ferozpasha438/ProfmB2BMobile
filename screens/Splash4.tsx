import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Splash4 = () => {
  return (
    <View style={styles.splash4}>
      <View style={styles.logoParent}>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            style={[styles.logo1Icon, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/logo-11.png")}
          />
        </View>
        <Text style={[styles.poweredBy, styles.b2bClr]}>Powered by</Text>
      </View>
      <View style={[styles.webViewbottom, styles.b2bPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-33.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-45.png")}
      />
      <Image
        style={styles.splash4Child}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      <View style={[styles.iphoneXOrNewer, styles.b2bPosition]}>
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
      <Image
        style={styles.splash4Item}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={[styles.b2b, styles.b2bPosition]}>تطبيق - B2B</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    height: 42,
    left: 0,
    width: 100,
    position: "absolute",
  },
  b2bClr: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  b2bPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    width: 300,
    top: "50%",
    marginLeft: -149.5,
    left: "50%",
    position: "absolute",
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
    marginTop: -62,
    height: 102,
  },
  icon1: {
    marginTop: 40,
    height: 23,
  },
  splash4Child: {
    top: -185,
    left: 239,
    width: 400,
    height: 400,
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
  splash4Item: {
    top: 698,
    left: -103,
    width: 200,
    height: 200,
    position: "absolute",
  },
  b2b: {
    marginLeft: -58.5,
    top: 501,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  splash4: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default Splash4;
