import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.forgotPassword, styles.iconLayout]}>
      <Text style={[styles.forgotYourPassword, styles.emailLayout]}>
        Forgot your password?
      </Text>
      <Text style={styles.dontWorryThis}>
        Don't worry this happens all the time please enter your account email or
        mobile number
      </Text>
      <View style={styles.emailParent}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.buttonLayout]} />
          <View style={[styles.emailmobileNumberParent, styles.buttonFlexBox]}>
            <Text style={[styles.emailmobileNumber, styles.emailTypo]}>
              Email/mobile number
            </Text>
            <Image
              style={styles.smsIcon}
              resizeMode="cover"
              source={require("../assets/sms.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("VerificationCode6")}
      >
        <Text style={[styles.text, styles.textTypo]}>Submit</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
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
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.recoverPassword, styles.arrow21Position]}>
          Recover password
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
  emailLayout: {
    height: 16,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
  },
  emailTypo: {
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  buttonLayout: {
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupPosition: {
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
    height: 24,
    top: 48,
    position: "absolute",
  },
  groupItemPosition: {
    marginLeft: -80,
    width: 160,
    top: 0,
    left: "50%",
    height: 48,
    position: "absolute",
  },
  forgotYourPassword: {
    top: 182,
    right: 166,
    fontSize: FontSize.size_lg,
    width: 193,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  dontWorryThis: {
    top: 214,
    right: 54,
    lineHeight: 20,
    color: Color.ternary,
    width: 305,
    height: 48,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  email: {
    width: 147,
    height: 16,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
    borderColor: Color.colorLightsteelblue_100,
    borderWidth: 0.5,
    zIndex: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    shadowRadius: 10,
  },
  emailmobileNumber: {
    color: Color.colorLightsteelblue_100,
    textAlign: "right",
    opacity: 0.5,
  },
  smsIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  emailmobileNumberParent: {
    top: 18,
    left: 187,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    width: 343,
  },
  emailParent: {
    marginLeft: 171.5,
    top: 310,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    width: 343,
    left: "50%",
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
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
    left: "50%",
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
  recoverPassword: {
    marginLeft: -70.5,
    textTransform: "capitalize",
    width: 141,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
    height: 24,
    top: 48,
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
    left: "50%",
    height: 48,
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
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  forgotPassword: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default ForgotPassword;
