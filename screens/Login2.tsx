import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View
        style={[styles.manWorkerCleaningFloorWithParent, styles.manPosition]}
      >
        <Image
          style={[styles.manWorkerCleaningFloorWithIcon, styles.manPosition]}
          resizeMode="cover"
          source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-1.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
          useAngle={true}
          angle={180.13}
        />
      </View>
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <Image
        style={[styles.icon, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/3-1-42.png")}
      />
      <View style={[styles.webViewbottom, styles.webPosition]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.iphoneXOrNewer, styles.framePosition]}>
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
            source={require("../assets/wifi4.png")}
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
          source={require("../assets/left-side1.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.mobileNumberemailParent}>
            <Text style={[styles.mobileNumberemail, styles.passwordTypo]}>
              Mobile number/email
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View
                style={[
                  styles.pleaseEnterYourEmailParent,
                  styles.parentPosition,
                ]}
              >
                <Text style={[styles.pleaseEnterYour, styles.pleaseTransform]}>
                  Please enter your email
                </Text>
                <Image
                  style={[styles.smsIcon, styles.iconFrameLayout]}
                  resizeMode="cover"
                  source={require("../assets/sms.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.passwordParent, styles.passwordSpaceBlock]}>
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.eyeSlashParent, styles.frameParentPosition]}>
                <Image
                  style={[styles.eyeSlashIcon, styles.iconFrameLayout]}
                  resizeMode="cover"
                  source={require("../assets/eyeslash.png")}
                />
                <View style={styles.pleaseEnterYourPasswordParent}>
                  <Text
                    style={[styles.pleaseEnterYour1, styles.pleaseTransform]}
                  >
                    Please enter your password
                  </Text>
                  <Image
                    style={[styles.lockIcon, styles.iconFrameLayout]}
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
          <Text style={[styles.forgotYourPassword, styles.pleaseTypo]}>
            Forgot your password?
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.logInWrapper}
        onPress={() => navigation.navigate("Home1")}
      >
        <Text style={[styles.logIn, styles.logClr]}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.frameContainer, styles.framePosition]}
        onPress={() => navigation.navigate("SIGNUP")}
      >
        <View style={styles.newToParent}>
          <Text style={styles.newTo}>{`New to `}</Text>
          <Text style={[styles.profm, styles.profmTypo]}>PROFM</Text>
        </View>
        <Text style={[styles.registerANew, styles.profmTypo]}>
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
          <Text style={styles.en}>EN</Text>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={styles.welcomeBackParent}>
          <Text
            style={[styles.welcomeBack, styles.logClr]}
          >{`Welcome Back `}</Text>
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame76.png")}
          />
        </View>
        <Text style={[styles.logInTo, styles.logClr]}> Log in to continue</Text>
      </View>
      <Pressable
        style={[styles.loginItem, styles.framePosition]}
        onPress={() => navigation.navigate("Login")}
      />
      <View style={[styles.webViewbottomParent, styles.webPosition]}>
        <View style={[styles.webViewbottom1, styles.webPosition]}>
          <View style={styles.homeIndicator}>
            <View style={[styles.homeIndicator1, styles.homeLayout]} />
          </View>
        </View>
        <View style={styles.viewPosition}>
          <View style={[styles.rectangleView, styles.viewPosition]} />
          <View style={[styles.frameParent2, styles.frameParentPosition]}>
            <Image
              style={[styles.frameIcon2, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/frame47.png")}
            />
            <View style={styles.parent}>
              <Pressable onPress={() => navigation.navigate("Login3")}>
                <Text style={styles.textTypo}>العربية</Text>
              </Pressable>
              <Image
                style={[styles.frameIcon3, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/frame77.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.framePressable, styles.frameParentPosition]}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              style={[styles.frameIcon2, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/frame78.png")}
            />
            <View style={styles.englishParent}>
              <Text style={styles.textTypo}>English</Text>
              <Image
                style={[styles.frameIcon3, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/frame48.png")}
              />
            </View>
          </Pressable>
          <View style={[styles.homeIndicator4, styles.homeLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manPosition: {
    width: 375,
    right: 0,
    position: "absolute",
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  loginChildPosition: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
  },
  webPosition: {
    bottom: 0,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    borderRadius: Border.br_81xl,
  },
  passwordTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    textAlign: "left",
    color: Color.praimary,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  parentPosition: {
    zIndex: 1,
    top: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  pleaseTransform: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  iconFrameLayout: {
    height: 20,
    width: 20,
  },
  passwordSpaceBlock: {
    marginTop: 24,
    alignItems: "flex-end",
  },
  frameParentPosition: {
    left: 16,
    position: "absolute",
  },
  pleaseTypo: {
    color: Color.colorLightsteelblue_100,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  logClr: {
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  profmTypo: {
    textAlign: "center",
    fontWeight: "700",
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
  viewPosition: {
    height: 153,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    top: 0,
    position: "absolute",
  },
  manWorkerCleaningFloorWithIcon: {
    height: 263,
    top: 0,
  },
  groupChild: {
    backgroundColor: "transparent",
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    top: 0,
    height: 292,
  },
  manWorkerCleaningFloorWithParent: {
    height: 292,
    top: 0,
  },
  loginChild: {
    top: 266,
    height: 546,
    backgroundColor: Color.colorGray_100,
    width: 375,
    right: 0,
    position: "absolute",
  },
  icon: {
    marginLeft: -149.5,
    top: 62,
    width: 300,
    height: 95,
  },
  homeIndicator1: {
    backgroundColor: Color.colorGray_200,
    width: 134,
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
    height: 34,
    backgroundColor: Color.colorGray_100,
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
    top: 0,
    overflow: "hidden",
  },
  mobileNumberemail: {
    width: 166,
    height: 16,
    lineHeight: 30,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  pleaseEnterYour: {
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  smsIcon: {
    marginLeft: 8,
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
  },
  eyeSlashIcon: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterYour1: {
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  lockIcon: {
    marginLeft: 8,
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
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  logIn: {
    fontWeight: "700",
    color: Color.whait,
    fontSize: FontSize.size_base,
    textAlign: "right",
  },
  logInWrapper: {
    marginLeft: -171.5,
    top: 558,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  newTo: {
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
  },
  profm: {
    marginLeft: 4,
    color: Color.ternary,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  newToParent: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  registerANew: {
    marginTop: 8,
    fontSize: FontSize.size_base,
    color: Color.praimary,
  },
  frameContainer: {
    marginLeft: -72.5,
    top: 662,
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 3.5,
    fontWeight: "600",
    color: Color.whait,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
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
    right: 16,
    top: 48,
  },
  welcomeBack: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.whait,
    textAlign: "left",
  },
  frameIcon1: {
    height: 24,
    marginLeft: 8,
    width: 24,
    overflow: "hidden",
  },
  welcomeBackParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logInTo: {
    fontSize: FontSize.size_lg,
    marginTop: 12,
    textAlign: "left",
    color: Color.whait,
    fontWeight: "300",
  },
  frameParent1: {
    top: 166,
  },
  loginItem: {
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    top: 0,
    height: 812,
  },
  webViewbottom1: {
    height: 34,
    backgroundColor: Color.whait,
  },
  rectangleView: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    backgroundColor: Color.whait,
  },
  frameIcon2: {
    overflow: "hidden",
  },
  textTypo: {
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon3: {
    marginLeft: 12,
    overflow: "hidden",
  },
  parent: {
    marginLeft: 242,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent2: {
    top: 48,
    flexDirection: "row",
  },
  englishParent: {
    marginLeft: 237,
    flexDirection: "row",
    alignItems: "center",
  },
  framePressable: {
    top: 100,
    flexDirection: "row",
  },
  homeIndicator4: {
    marginLeft: -23.5,
    bottom: 140,
    backgroundColor: Color.colorGray_300,
    width: 47,
    left: "50%",
    position: "absolute",
  },
  webViewbottomParent: {
    height: 186,
  },
  login: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whait,
  },
});

export default Login2;
