import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const VerificationCode6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameLayout} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Text style={styles.enterVerificationCode}>Enter verification code</Text>
      <Text style={[styles.verificationCode1, styles.passwordRecoveryFlexBox]}>
        Verification code
      </Text>
      <Text style={styles.pleaseMakeSure}>
        Please make sure your email Example@gmail.com has been sent a 4-digit
        code
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("VerificationCode5")}
      >
        <Text style={[styles.text, styles.textTypo]}>Send</Text>
      </Pressable>
      <View style={[styles.iDidNotReceiveTheCodeReParent, styles.didLayout]}>
        <Text style={[styles.iDidNotContainer, styles.batteryIconPosition]}>
          <Text style={styles.iDidNot}>{`I did not receive the code?  `}</Text>
          <Text style={styles.reTransmitter}>{`Re-transmitter
`}</Text>
        </Text>
        <View style={styles.groupChild} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <View style={styles.iphoneXOrNewer}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
              resizeMode="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi4.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              resizeMode="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={[styles.recordingIndicatorIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.passwordRecovery, styles.arrow21Position]}>
          Password Recovery
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.groupInnerPosition}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.groupPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameLayout: {
    height: 60,
    width: 60,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    backgroundColor: Color.whait,
  },
  passwordRecoveryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
    left: "50%",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  didLayout: {
    height: 24,
    width: 189,
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  groupInnerPosition: {
    marginLeft: -80,
    width: 160,
    top: 0,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 29,
  },
  rectangleParent: {
    marginLeft: -163.5,
    top: 366,
    justifyContent: "flex-end",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  enterVerificationCode: {
    top: 182,
    right: 166,
    width: 193,
    height: 16,
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    position: "absolute",
  },
  verificationCode1: {
    marginLeft: -73.5,
    top: 318,
    width: 148,
    textAlign: "center",
    justifyContent: "center",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  pleaseMakeSure: {
    top: 214,
    right: 16,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    height: 48,
    width: 343,
    color: Color.ternary,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text: {
    color: Color.whait,
    width: 291,
  },
  button: {
    marginLeft: -171.5,
    top: 714,
    backgroundColor: Color.praimary,
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  iDidNot: {
    color: Color.ternary,
  },
  reTransmitter: {
    color: Color.praimary,
  },
  iDidNotContainer: {
    fontSize: FontSize.size_3xs,
    height: 24,
    width: 189,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    right: 0,
  },
  groupChild: {
    top: 22,
    right: 2,
    borderColor: Color.praimary,
    borderTopWidth: 1,
    width: 68,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iDidNotReceiveTheCodeReParent: {
    top: 442,
    right: 170,
    position: "absolute",
  },
  groupItem: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    top: 0,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    height: 11,
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
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  passwordRecovery: {
    marginLeft: -75.5,
    width: 151,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
    left: "50%",
  },
  groupInner: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  icon1: {
    top: 3,
    right: 30,
    width: 100,
    height: 42,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -80.5,
    top: 86,
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    height: 134,
    top: 0,
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  verificationCode: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default VerificationCode6;
