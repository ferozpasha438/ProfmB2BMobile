import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.login, styles.iconLayout1]}>
      <View
        style={[
          styles.manWorkerCleaningFloorWithParent,
          styles.groupChildLayout,
        ]}
      >
        <Image
          style={styles.manWorkerCleaningFloorWithIcon}
          resizeMode="cover"
          source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-1.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
          useAngle={true}
          angle={180.13}
        />
      </View>
      <View style={[styles.loginChild, styles.loginChildBg]} />
      <View style={[styles.webViewbottom, styles.loginChildBg]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
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
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
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
          source={require("../assets/left-side.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.loginItemPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.mobileNumberemailParent}>
            <Text style={[styles.mobileNumberemail, styles.passwordFlexBox]}>
              Mobile number/email
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View
                style={[
                  styles.pleaseEnterYourEmailParent,
                  styles.parentPosition1,
                ]}
              >
                <Text style={styles.pleaseTypo}>Please enter your email</Text>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/sms.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.passwordParent, styles.passwordSpaceBlock]}>
            <Text style={[styles.password, styles.passwordFlexBox]}>
              Password
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.eyeSlashParent, styles.parentPosition]}>
                <Image
                  style={styles.eyeSlashIcon}
                  resizeMode="cover"
                  source={require("../assets/eyeslash3.png")}
                />
                <View style={styles.pleaseEnterYourPasswordParent}>
                  <Text style={styles.pleaseTypo}>
                    Please enter your password
                  </Text>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/lock.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.forgotYourPasswordWrapper, styles.passwordSpaceBlock]}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={[styles.forgotYourPassword, styles.newToTypo]}>
            Forgot your password?
          </Text>
        </Pressable>
      </View>
      <View style={[styles.welcomeBackParent, styles.parentPosition]}>
        <Text style={[styles.welcomeBack, styles.enClr]}>welcome back !</Text>
        <Text style={[styles.logInTo, styles.enClr]}> Log in to continue</Text>
      </View>
      <View style={[styles.logInWrapper, styles.faceIdPosition]}>
        <Text style={styles.logIn}>Log in</Text>
      </View>
      <Pressable
        style={styles.frameContainer}
        onPress={() => navigation.navigate("SIGNUP")}
      >
        <View style={styles.newToParent}>
          <Text style={[styles.newTo, styles.newToTypo]}>{`New to `}</Text>
          <Text style={[styles.profm, styles.profmTypo]}>PROFM</Text>
        </View>
        <Text style={[styles.registerANew, styles.pleaseLogInTypo]}>
          Register a new user
        </Text>
      </Pressable>
      <View style={styles.byLoggingIntoTheAccountYoParent}>
        <Text style={[styles.byLoggingInto, styles.byLoggingIntoTypo]}>
          By logging into the account you agree to
        </Text>
        <Text style={[styles.termsAndConditions, styles.byLoggingIntoTypo]}>
          Terms and conditions
        </Text>
        <View style={styles.groupItem} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={styles.frameView}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame6.png")}
          />
          <Text style={[styles.en, styles.enClr]}>EN</Text>
        </View>
      </View>
      <View style={[styles.loginItem, styles.loginItemPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <View style={styles.httpslottiefilescomanimatParent}>
          <Image
            style={styles.httpslottiefilescomanimatIcon}
            resizeMode="cover"
            source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua.png")}
          />
          <View style={styles.passwordHasBeenSetNewSuccParent}>
            <Text style={[styles.passwordHasBeen, styles.profmTypo]}>
              Password has been set New successfully
            </Text>
            <Text style={[styles.pleaseLogIn, styles.pleaseLogInTypo]}>
              Please log in again using your new password.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 292,
    width: 375,
    top: 0,
    position: "absolute",
  },
  loginChildBg: {
    backgroundColor: Color.colorGray_100,
    width: 375,
    position: "absolute",
  },
  loginItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  passwordFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  parentPosition1: {
    zIndex: 1,
    top: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordSpaceBlock: {
    marginTop: 24,
    alignItems: "flex-end",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  newToTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  enClr: {
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  faceIdPosition: {
    marginLeft: -171.5,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  profmTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  pleaseLogInTypo: {
    marginTop: 8,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  byLoggingIntoTypo: {
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 30,
    width: 67,
    position: "absolute",
  },
  manWorkerCleaningFloorWithIcon: {
    height: 263,
    width: 375,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    left: "50%",
    marginLeft: -187.5,
  },
  manWorkerCleaningFloorWithParent: {
    right: 0,
  },
  loginChild: {
    top: 266,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 546,
    right: 0,
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
    justifyContent: "flex-end",
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    left: "50%",
    marginLeft: -187.5,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
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
    height: 11,
    width: 67,
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
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  mobileNumberemail: {
    width: 166,
    height: 16,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    lineHeight: 30,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    height: 56,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  pleaseTypo: {
    opacity: 0.5,
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  iconLayout: {
    marginLeft: 8,
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterYourEmailParent: {
    left: 177,
    justifyContent: "center",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    width: 343,
    backgroundColor: Color.whait,
  },
  mobileNumberemailParent: {
    alignItems: "flex-end",
    width: 343,
  },
  password: {
    width: 77,
    height: 16,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashIcon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterYourPasswordParent: {
    marginLeft: 117,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eyeSlashParent: {
    width: 311,
    zIndex: 1,
    top: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  passwordParent: {
    width: 343,
    marginTop: 24,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgotYourPassword: {
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
  },
  forgotYourPasswordWrapper: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameParent: {
    marginTop: -106,
    marginLeft: 171.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  welcomeBack: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
  },
  logInTo: {
    fontSize: FontSize.size_lg,
    marginTop: 12,
    textAlign: "left",
    fontWeight: "300",
    color: Color.whait,
  },
  welcomeBackParent: {
    top: 166,
    justifyContent: "center",
  },
  logIn: {
    fontSize: FontSize.size_base,
    color: Color.whait,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  logInWrapper: {
    top: 558,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    marginLeft: -171.5,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  newTo: {
    color: Color.ternary,
    textAlign: "left",
    lineHeight: 30,
  },
  profm: {
    marginLeft: 4,
    color: Color.ternary,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  newToParent: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  registerANew: {
    fontWeight: "700",
    color: Color.praimary,
  },
  frameContainer: {
    marginLeft: -72.5,
    top: 662,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  byLoggingInto: {
    right: 99,
    width: 179,
    color: Color.ternary,
  },
  termsAndConditions: {
    width: 99,
    color: Color.praimary,
    right: 0,
  },
  groupItem: {
    top: 16,
    right: 3,
    borderColor: Color.praimary,
    borderTopWidth: 1,
    width: 97,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  byLoggingIntoTheAccountYoParent: {
    top: 751,
    right: 48,
    width: 278,
    height: 16,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_500,
    right: 0,
    top: 0,
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  en: {
    fontSize: FontSize.size_2xs_5,
    fontWeight: "600",
    marginLeft: 3.5,
    textAlign: "right",
  },
  frameView: {
    top: 6,
    width: 36,
    height: 18,
    right: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  rectangleContainer: {
    top: 48,
    right: 16,
  },
  loginItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "88.34%",
    top: "5.99%",
    right: "5.83%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  passwordHasBeen: {
    fontSize: FontSize.size_2xl,
    textTransform: "capitalize",
    color: Color.colorMediumseagreen,
    width: 294,
    height: 57,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pleaseLogIn: {
    width: 292,
    height: 58,
    color: Color.colorLightsteelblue_100,
    lineHeight: 30,
  },
  passwordHasBeenSetNewSuccParent: {
    marginTop: 16,
    alignItems: "center",
  },
  httpslottiefilescomanimatParent: {
    top: 33,
    right: 25,
    alignItems: "center",
    position: "absolute",
  },
  faceId: {
    marginTop: -167,
    borderRadius: Border.br_mini,
    height: 334,
    marginLeft: -171.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: "50%",
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
  login: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whait,
    width: "100%",
  },
});

export default Login1;
