import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SIGNUP = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox}>
          <Text
            style={[styles.mobileNumber, styles.passwordTypo]}
          >{`Mobile number `}</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.pleaseEnterTheRegisteredMoWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text style={styles.pleaseTypo1}>
                Please enter the registered mobile number
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.registeredEmail, styles.passwordTypo]}>
            Registered email
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[styles.examplegmailcomWrapper, styles.wrapperPosition]}
            >
              <Text style={styles.pleaseTypo1}>example@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.eyeSlashParent, styles.eyePosition]}>
              <Image
                style={styles.eyeIconLayout}
                resizeMode="cover"
                source={require("../assets/eyeslash.png")}
              />
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo}>Please enter the password</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.confirmPassword, styles.passwordTypo]}>
            {" "}
            Confirm password
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.eyeSlashGroup, styles.frameWrapperFlexBox]}>
              <Image
                style={styles.eyeIconLayout}
                resizeMode="cover"
                source={require("../assets/eyeslash.png")}
              />
              <View
                style={[
                  styles.pleaseEnterThePasswordAgaiWrapper,
                  styles.pleaseWrapperFlexBox,
                ]}
              >
                <Text style={styles.pleaseTypo}>
                  Please enter the password again
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.customerName, styles.passwordTypo]}>
            Customer name
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo}>
                  Please enter your name in Arabic
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.customerShortName, styles.passwordTypo]}>
            Customer short name
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo}>
                  From Please enter your name in Arabic
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.country, styles.cityTypo]}>Country</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo}>Please enter country name</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={styles.cityTypo}>City</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo}>Please enter city name</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.cityArea, styles.cityTypo]}>City area</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo1}>
                  Like the western region,...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={styles.cityTypo}>Address</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo1}>
                  Please enter detailed address
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.registeredEmailParent, styles.parentFlexBox]}>
          <Text style={[styles.personToContact, styles.passwordTypo]}>
            Person to contact
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.pleaseWrapperFlexBox}>
                <Text style={styles.pleaseTypo1}>
                  Please enter mobile number
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonSpaceBlock]}>
        <Text style={[styles.text, styles.textTypo]}>Save</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.buttonSpaceBlock]}
        onPress={() => navigation.navigate("MOREInformaion12")}
      >
        <Text style={[styles.text1, styles.textTypo]}>
          Register More Information
        </Text>
      </Pressable>
      <View style={styles.signUpChild} />
      <View style={[styles.groupView, styles.groupPosition]}>
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
        <Text style={[styles.registerANew, styles.arrow21Position]}>
          Register a New User
        </Text>
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
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
        <View style={[styles.homeIndicator, styles.frameWrapperFlexBox]}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  wrapperPosition: {
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    top: 21,
    alignItems: "center",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "flex-end",
    width: 343,
  },
  eyePosition: {
    width: 311,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  frameWrapperFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pleaseWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cityTypo: {
    width: 125,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    marginLeft: -171.5,
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    width: 291,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
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
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  mobileNumber: {
    width: 116,
    textTransform: "capitalize",
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    width: 343,
  },
  pleaseTypo1: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterTheRegisteredMoWrapper: {
    left: 104,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    width: 343,
  },
  registeredEmail: {
    width: 147,
    textTransform: "capitalize",
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  examplegmailcomWrapper: {
    left: 217,
  },
  registeredEmailParent: {
    marginTop: 16,
  },
  password: {
    width: 77,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  eyeIconLayout: {
    height: 20,
    width: 20,
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseTypo: {
    textAlign: "right",
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashParent: {
    justifyContent: "space-between",
    top: 18,
    width: 311,
    alignItems: "center",
  },
  confirmPassword: {
    width: 154,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  pleaseEnterThePasswordAgaiWrapper: {
    marginLeft: 106,
  },
  eyeSlashGroup: {
    width: 311,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 18,
  },
  customerName: {
    width: 104,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  frameWrapper: {
    width: 311,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 21,
    justifyContent: "flex-end",
  },
  customerShortName: {
    width: 170,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  country: {
    textTransform: "capitalize",
  },
  cityArea: {
    textTransform: "capitalize",
  },
  personToContact: {
    width: 179,
    textTransform: "capitalize",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    marginLeft: 171.5,
    top: 158,
    height: 654,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.whait,
  },
  button: {
    top: 1260,
    backgroundColor: Color.praimary,
  },
  text1: {
    color: Color.praimary,
    width: 291,
    lineHeight: 30,
  },
  button1: {
    top: 1332,
    borderColor: Color.praimary,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    marginLeft: -171.5,
  },
  signUpChild: {
    top: 1410,
    right: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
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
    width: 375,
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
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  registerANew: {
    marginLeft: -75.5,
    width: 152,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 48,
    justifyContent: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    top: 48,
    left: 16,
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
  groupView: {
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
    bottom: -5,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  signUp: {
    flex: 1,
    height: 807,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default SIGNUP;
