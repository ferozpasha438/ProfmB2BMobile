import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.changePassword}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-3.png")}
      />
      <View style={[styles.navBar, styles.tapPosition1]}>
        <View style={[styles.webViewbottom, styles.tapPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.changePasswordChild, styles.eyeIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-2-11.png")}
      />
      <Text style={styles.changePassword1}>Change password</Text>
      <Text style={styles.pleaseEnterThe}>
        Please enter the old password and then enter the new password
      </Text>
      <View style={styles.inputFild}>
        <Text style={styles.password}>Password</Text>
        <Image
          style={[styles.inputFildChild, styles.eyeIconTransform]}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.eyeSlashIcon, styles.eyeSlashIconPosition]}
          resizeMode="cover"
          source={require("../assets/eyeslash1.png")}
        />
        <View style={[styles.ellipseParent, styles.eyeSlashIconPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-178.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-177.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-176.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-175.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-174.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-173.png")}
          />
        </View>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={styles.tapChild} />
        <View style={[styles.iphoneXOrNewer, styles.tapPosition]}>
          <Image
            style={[styles.notchIcon, styles.notchIconLayout]}
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
              source={require("../assets/wifi6.png")}
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
        <Image
          style={styles.arrow21}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
        <Text style={[styles.modifyTheRequest, styles.theWrapperFlexBox]}>
          Modify the request
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={[styles.text, styles.textTypo]}>Change the password</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.oldPasswordParent, styles.rectangleParentLayout]}>
          <Text style={[styles.oldPassword, styles.passwordTypo]}>
            Old password
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.eyeSlashParent, styles.eyePosition]}>
              <Image
                style={[styles.eyeSlashIcon1, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash2.png")}
              />
              <View
                style={[
                  styles.pleaseEnterTheOldPasswordWrapper,
                  styles.theWrapperFlexBox,
                ]}
              >
                <Text style={[styles.pleaseEnterThe1, styles.pleaseTypo]}>
                  Please enter the old password
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapperSpaceBlock}>
          <Text style={[styles.newPassword, styles.passwordTypo]}>
            New password
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.eyeSlashParent, styles.eyePosition]}>
              <Image
                style={[styles.eyeSlashIcon2, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash2.png")}
              />
              <View
                style={[
                  styles.pleaseEnterTheOldPasswordWrapper,
                  styles.theWrapperFlexBox,
                ]}
              >
                <Text style={[styles.pleaseEnterThe2, styles.pleaseTypo]}>
                  Please enter the new password
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapperSpaceBlock}>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentLayout]}
          >
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.eyeSlashContainer, styles.eyePosition]}>
              <Image
                style={[styles.eyeSlashIcon3, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash2.png")}
              />
              <View
                style={[
                  styles.pleaseEnterThePasswordAgaiWrapper,
                  styles.theWrapperFlexBox,
                ]}
              >
                <Text style={[styles.pleaseEnterThe3, styles.pleaseTypo]}>
                  Please enter the password again
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.minimum8Characters, styles.passwordTypo]}>
        Minimum 8 characters
      </Text>
      <Text style={[styles.atLeastOne, styles.passwordTypo]}>
        At least one uppercase and lowercase letter
      </Text>
      <View style={[styles.changePasswordItem, styles.eyeSlashIconPosition]} />
      <View style={styles.faceId}>
        <Image
          style={[styles.httpsapplottiefilescomanIcon, styles.tapPosition]}
          resizeMode="cover"
          source={require("../assets/httpsapplottiefilescomanimationda65a2f79fe04f8cb69c27e6819678af.png")}
        />
        <View style={styles.thePasswordWasChangedSucceWrapper}>
          <Text style={[styles.thePasswordWas, styles.theTypo]}>
            The password was changed successfully
          </Text>
        </View>
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("Profile1")}
        >
          <View style={styles.buttonChild} />
          <Text style={[styles.logIn, styles.textTypo]}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tapPosition1: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  tapPosition: {
    top: 0,
    position: "absolute",
  },
  eyeIconLayout: {
    height: 20,
    width: 20,
  },
  eyeIconTransform: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashIconPosition: {
    top: "50%",
    position: "absolute",
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  theWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    color: Color.whait,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleParentLayout: {
    width: 343,
    alignItems: "flex-end",
  },
  passwordTypo: {
    height: 16,
    fontWeight: "300",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  eyePosition: {
    zIndex: 1,
    width: 311,
    left: 16,
    top: 18,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  pleaseTypo: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  theTypo: {
    textAlign: "center",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
  },
  map3Icon: {
    top: -229,
    right: 90,
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
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
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  changePasswordChild: {
    top: 47,
    right: 16,
    width: 20,
    position: "absolute",
  },
  changePassword1: {
    top: 116,
    width: 175,
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    textAlign: "left",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_2xl,
    marginLeft: -171.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  pleaseEnterThe: {
    top: 156,
    width: 266,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    height: 24,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    marginLeft: -171.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  password: {
    top: "-1.72%",
    left: "90.38%",
    letterSpacing: 0.5,
    fontFamily: FontFamily.dubai,
    color: Color.primary3,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  inputFildChild: {
    height: "82.76%",
    top: "17.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    opacity: 0.5,
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    right: 309,
    width: 18,
    height: 18,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChild: {
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    right: 17,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    display: "none",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  tapChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    display: "none",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
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
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    top: 48,
    width: 24,
    height: 24,
    right: 16,
    position: "absolute",
    overflow: "hidden",
  },
  modifyTheRequest: {
    marginLeft: -75.5,
    width: 150,
    textAlign: "center",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    top: 48,
    height: 24,
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  tap: {
    height: 89,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  text: {
    width: 291,
  },
  button: {
    top: 714,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    width: 343,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: -171.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  oldPassword: {
    width: 120,
    fontSize: FontSize.size_sm,
    height: 16,
    fontWeight: "300",
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  eyeSlashIcon1: {
    height: 20,
    width: 20,
  },
  pleaseEnterThe1: {
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
  },
  pleaseEnterTheOldPasswordWrapper: {
    flexDirection: "row",
  },
  eyeSlashParent: {
    justifyContent: "space-between",
  },
  rectangleParent: {
    marginTop: 10,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
    width: 343,
    backgroundColor: Color.whait,
  },
  oldPasswordParent: {
    alignItems: "flex-end",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  newPassword: {
    width: 120,
    fontSize: FontSize.size_sm,
    height: 16,
    fontWeight: "300",
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashIcon2: {
    height: 20,
    width: 20,
  },
  pleaseEnterThe2: {
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
  },
  frameWrapperSpaceBlock: {
    marginTop: 16,
    alignItems: "flex-end",
    width: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashIcon3: {
    height: 20,
    width: 20,
  },
  pleaseEnterThe3: {
    textAlign: "right",
  },
  pleaseEnterThePasswordAgaiWrapper: {
    marginLeft: 106,
    flexDirection: "row",
  },
  eyeSlashContainer: {
    justifyContent: "flex-end",
  },
  rectangleContainer: {
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
    width: 343,
    backgroundColor: Color.whait,
  },
  frameParent: {
    top: 212,
    alignItems: "flex-end",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  minimum8Characters: {
    top: 506,
    right: 229,
    width: 130,
    fontWeight: "300",
    height: 16,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  atLeastOne: {
    top: 527,
    right: 149,
    width: 210,
    fontWeight: "300",
    height: 16,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  changePasswordItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    height: 812,
  },
  httpsapplottiefilescomanIcon: {
    left: 71,
    width: 200,
    height: 200,
  },
  thePasswordWas: {
    letterSpacing: 0.4,
    textTransform: "capitalize",
    width: 256,
    height: 59,
    textAlign: "center",
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_2xl,
  },
  thePasswordWasChangedSucceWrapper: {
    top: 165,
    right: 44,
    height: 59,
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn: {
    height: "50%",
    marginLeft: -143.5,
    top: "25%",
    width: 288,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 30,
    color: Color.whait,
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  button1: {
    marginLeft: -150.5,
    top: 264,
    width: 301,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  faceId: {
    marginTop: -162,
    borderRadius: Border.br_mini,
    height: 333,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: "50%",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  changePassword: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ChangePassword;
