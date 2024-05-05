import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const VerificationCode5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <Text style={styles.resetYourNew}>Reset your new password</Text>
      <Pressable
        style={[styles.button, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Login1")}
      >
        <Text style={styles.text}>Submit your new password</Text>
      </Pressable>
      <Text style={styles.confirmPassword}>Confirm password</Text>
      <View
        style={[
          styles.pleaseEnterYourPasswordAgaParent,
          styles.pleaseParentPosition,
        ]}
      >
        <Text style={[styles.pleaseEnterYour, styles.pleaseTypo]}>
          Please enter your password again
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
          <View
            style={[
              styles.encapsulatedGroupParent,
              styles.encapsulatedGroupPosition,
            ]}
          >
            <Image
              style={styles.encapsulatedGroupLayout}
              resizeMode="cover"
              source={require("../assets/eyeslash2.png")}
            />
            <View style={styles.parentFlexBox}>
              <Text style={styles.passwordTypo}>Password</Text>
              <Image
                style={styles.lockIconLayout}
                resizeMode="cover"
                source={require("../assets/lock.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.pleaseEnterYourPasswordParent,
          styles.pleaseParentPosition,
        ]}
      >
        <Text style={[styles.pleaseEnterYour1, styles.pleaseTypo]}>
          Please enter your password
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
          <View style={[styles.encapsulatedGroupGroup, styles.groupFlexBox]}>
            <Image
              style={styles.encapsulatedGroupLayout}
              resizeMode="cover"
              source={require("../assets/eyeslash2.png")}
            />
            <View
              style={[
                styles.atLeastOneUppercaseAndLowParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={styles.passwordTypo}>
                At least one uppercase and lowercase letter
              </Text>
              <Image
                style={styles.lockIconLayout}
                resizeMode="cover"
                source={require("../assets/lock.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.recoverYourPassword, styles.minimum8CharactersTypo]}>
        Recover your password
      </Text>
      <Text style={[styles.minimum8Characters, styles.minimum8CharactersTypo]}>
        Minimum 8 characters
      </Text>
      <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.iphoneXOrNewer}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
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
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.groupChildPosition]}>
        <View style={[styles.homeIndicator, styles.groupFlexBox]}>
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
  parentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pleaseParentPosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    marginLeft: 171.5,
    left: "50%",
    width: 343,
    position: "absolute",
  },
  pleaseTypo: {
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 16,
    color: Color.praimary,
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  encapsulatedGroupPosition: {
    zIndex: 1,
    width: 311,
    left: 16,
    top: 18,
    flexDirection: "row",
    position: "absolute",
  },
  groupFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  minimum8CharactersTypo: {
    width: 210,
    right: 149,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.ternary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChildPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
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
  groupItemPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  resetYourNew: {
    top: 214,
    right: 16,
    height: 24,
    width: 343,
    display: "flex",
    textAlign: "left",
    color: Color.ternary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  text: {
    color: Color.whait,
    width: 291,
    textAlign: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  button: {
    marginLeft: -171.5,
    top: 714,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    flexDirection: "row",
    left: "50%",
    width: 343,
    position: "absolute",
  },
  confirmPassword: {
    top: 182,
    right: 204,
    fontSize: FontSize.size_lg,
    width: 155,
    height: 16,
    color: Color.praimary,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    position: "absolute",
  },
  pleaseEnterYour: {
    width: 219,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  encapsulatedGroupLayout: {
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  passwordTypo: {
    opacity: 0.5,
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  lockIconLayout: {
    marginLeft: 8,
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  encapsulatedGroupParent: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 311,
    left: 16,
    top: 18,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  pleaseEnterYourPasswordAgaParent: {
    top: 384,
  },
  pleaseEnterYour1: {
    width: 185,
  },
  atLeastOneUppercaseAndLowParent: {
    marginLeft: 126,
  },
  encapsulatedGroupGroup: {
    zIndex: 1,
    width: 311,
    left: 16,
    top: 18,
    flexDirection: "row",
    position: "absolute",
  },
  pleaseEnterYourPasswordParent: {
    top: 278,
  },
  recoverYourPassword: {
    top: 503,
  },
  minimum8Characters: {
    top: 482,
  },
  groupChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginLeft: -187.5,
    backgroundColor: Color.whait,
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
    color: Color.praimary,
    top: 48,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  groupItem: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    shadowRadius: 10,
    marginLeft: -80,
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
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
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

export default VerificationCode5;
