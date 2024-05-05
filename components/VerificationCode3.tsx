import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "./Home6";
// import Home from "./Home";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

type VerificationCode3Type = {
  onClose?: () => void;
};

const VerificationCode3 = ({ onClose }: VerificationCode3Type) => {
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [frameIcon2Visible, setFrameIcon2Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(true);
  }, []);

  const closeMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(false);
  }, []);

  const openFrameIcon2 = useCallback(() => {
    setFrameIcon2Visible(true);
  }, []);

  const closeFrameIcon2 = useCallback(() => {
    setFrameIcon2Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.verificationCode, styles.iconLayout1]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.incomplete, styles.text2Typo]}>Incomplete</Text>
          <Text style={[styles.completed, styles.text2Typo]}>Completed</Text>
        </View>
        <View style={[styles.verificationCodeChild, styles.groupItemLayout]} />
        <View style={styles.rectangleGroup}>
          <View style={styles.groupInner} />
          <Text style={[styles.text, styles.textTypo]}>21584</Text>
          <Text style={[styles.orderNumber, styles.textTypo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.textTypo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.textTypo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.textTypo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.textTypo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild1, styles.groupChildLayout1]} />
            <View style={[styles.groupChild2, styles.groupChildLayout1]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChild4Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete1, styles.completed1Typo]}
            >{`Incomplete `}</Text>
            <Text style={styles.inProgress}>In progress</Text>
            <Text style={[styles.completed1, styles.completed1Typo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumSpaceBlock]}
            onPress={openMediumButtonContainer1}
          >
            <Text style={[styles.review, styles.reviewTransform]}>review</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            />
          </Pressable>
        </View>
        <View style={styles.thereIs1CompletedServiceParent}>
          <Text style={[styles.thereIs1Container, styles.servicesProvidedTypo]}>
            <Text style={styles.thereIs1Container1}>
              <Text style={styles.thereIs}>{`There is `}</Text>
              <Text style={styles.text3}>1</Text>
              <Text style={styles.thereIs}> completed service</Text>
            </Text>
          </Text>
          <Pressable
            style={[styles.frame, styles.frameIconLayout]}
            onPress={openFrameIcon2}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
          </Pressable>
        </View>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Pressable
            style={[styles.arrow21, styles.arrow21Layout]}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.servicesProvided, styles.linePosition]}>
            Services provided
          </Text>
        </View>
        <Pressable
          style={[styles.verificationCodeItem, styles.iphonePosition]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={[styles.iphoneIndicator, styles.iphonePosition]}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
        <View style={[styles.iphoneXOrNewer, styles.iphonePosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.arrow21Layout]}
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
              style={[styles.recordingIndicatorIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={[styles.leftSideIcon, styles.groupChild4Position]}
            resizeMode="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
        <View style={[styles.vectorParent, styles.iphonePosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector12.png")}
          />
          <View style={styles.button}>
            <View style={[styles.buttonChild, styles.iconLayout]} />
            <Text style={[styles.logIn, styles.logInTypo]}>Finish</Text>
          </View>
          <View style={styles.httpslottiefilescomanimatParent}>
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationslovereactanimationgsaij6qvb9.png")}
            />
            <View style={styles.thankYouParent}>
              <Text style={styles.thankYou}>Thank you</Text>
              <Text
                style={[styles.yourRatingHas, styles.logInTypo]}
              >{`Your rating has been sent successfully
`}</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer1Visible}
      >
        <View style={styles.mediumButtonContainer1Overlay}>
          <Pressable
            style={styles.mediumButtonContainer1Bg}
            onPress={closeMediumButtonContainer1}
          />
          <Home6 onClose={closeMediumButtonContainer1} />
        </View>
      </Modal>

      {/* <Modal animationType="fade" transparent visible={frameIcon2Visible}>
        <View style={styles.frameIcon2Overlay}>
          <Pressable style={styles.frameIcon2Bg} onPress={closeFrameIcon2} />
          <Home onClose={closeFrameIcon2} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  groupItemLayout: {
    height: 38,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameIconLayout: {
    width: 16,
    height: 16,
  },
  groupChildLayout1: {
    width: 91,
    borderTopWidth: 1,
    borderColor: Color.colorMediumseagreen,
    height: 1,
    borderStyle: "solid",
    top: 5,
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 10,
    top: 0,
  },
  groupChild4Position: {
    left: 21,
    position: "absolute",
  },
  completed1Typo: {
    width: 53,
    justifyContent: "center",
    top: 14,
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  reviewTransform: {
    textTransform: "capitalize",
    color: Color.praimary,
  },
  servicesProvidedTypo: {
    lineHeight: 30,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rectanglePosition: {
    height: 87,
    left: "50%",
    marginLeft: -187.5,
    top: 0,
    position: "absolute",
    width: 375,
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  linePosition: {
    width: 135,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  iphonePosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  logInTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    shadowRadius: 4,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    height: 48,
    width: 343,
    position: "absolute",
  },
  groupItem: {
    right: 181,
    borderRadius: Border.br_8xs,
    width: 157,
    backgroundColor: Color.praimary,
    top: 5,
    height: 38,
  },
  incomplete: {
    right: 47,
    textAlign: "center",
    color: Color.praimary,
    fontWeight: "700",
    position: "absolute",
    top: 15,
    fontSize: FontSize.size_sm,
  },
  completed: {
    right: 224,
    color: Color.whait,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    top: 15,
    fontSize: FontSize.size_sm,
  },
  rectangleParent: {
    top: 111,
    height: 48,
    width: 343,
    right: 16,
    position: "absolute",
  },
  verificationCodeChild: {
    top: 116,
    right: 40,
    backgroundColor: Color.colorGainsboro_200,
    width: 125,
  },
  groupInner: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    borderRadius: Border.br_3xs,
    height: 190,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    width: 343,
    position: "absolute",
  },
  text: {
    right: 52,
    width: 31,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    position: "absolute",
    lineHeight: 25,
    top: 16,
  },
  orderNumber: {
    right: 85,
    width: 70,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    height: 16,
    top: 16,
    fontWeight: "700",
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    top: 48,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    height: 16,
    fontWeight: "700",
    position: "absolute",
  },
  preventive: {
    width: 48,
    top: 48,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    position: "absolute",
    right: 16,
  },
  projectName: {
    right: 261,
    width: 66,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    height: 16,
    top: 16,
    fontWeight: "700",
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    position: "absolute",
    top: 16,
  },
  text1: {
    right: 197,
    width: 51,
    top: 48,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    position: "absolute",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    top: 48,
    color: Color.black,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    height: 16,
    fontWeight: "700",
    position: "absolute",
  },
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text2: {
    textAlign: "right",
    fontWeight: "600",
    lineHeight: 25,
    color: Color.whait,
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    left: 16,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    backgroundColor: Color.praimary,
  },
  groupChild1: {
    left: 127,
  },
  groupChild2: {
    left: 29,
  },
  ellipseIcon: {
    left: 216,
    position: "absolute",
  },
  groupChild3: {
    left: 118,
    position: "absolute",
  },
  groupChild4: {
    height: 10,
    width: 10,
    top: 0,
  },
  incomplete1: {
    right: 195,
  },
  inProgress: {
    right: 99,
    width: 52,
    justifyContent: "center",
    top: 14,
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  completed1: {
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  mediumButtonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  review: {
    width: 47,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 25,
    fontSize: FontSize.size_sm,
  },
  frameIcon1: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton1: {
    left: 178,
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 149,
    justifyContent: "center",
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    borderStyle: "solid",
  },
  rectangleGroup: {
    top: 215,
    height: 190,
    width: 343,
    right: 16,
    position: "absolute",
  },
  thereIs: {
    color: Color.colorLightsteelblue_100,
  },
  text3: {
    color: Color.praimary,
  },
  thereIs1Container1: {
    width: "100%",
  },
  thereIs1Container: {
    width: 133,
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  frameIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    overflow: "hidden",
  },
  frame: {
    marginLeft: 194,
  },
  thereIs1CompletedServiceParent: {
    top: 183,
    flexDirection: "row",
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  rectangleView: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    height: 87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  arrow21: {
    right: 335,
    height: 24,
    top: 48,
  },
  servicesProvided: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    height: 24,
    lineHeight: 30,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    color: Color.praimary,
    justifyContent: "center",
    top: 48,
  },
  verificationCodeItem: {
    backgroundColor: Color.colorGray_600,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    top: 0,
    height: 812,
  },
  line: {
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    height: 5,
  },
  iphoneIndicator: {
    bottom: 0,
    backgroundColor: "#c8cacc",
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    height: 30,
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    height: 11,
    right: 0,
    top: 0,
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
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "5.67%",
    width: "6.08%",
    top: "4.53%",
    right: "4.86%",
    bottom: "89.8%",
    left: "89.06%",
    position: "absolute",
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    height: "100%",
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  logIn: {
    height: "50%",
    marginLeft: -143.5,
    top: "25%",
    letterSpacing: 0.6,
    lineHeight: 44,
    width: 288,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    color: Color.whait,
  },
  button: {
    top: 290,
    left: 14,
    width: 301,
    height: 48,
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  thankYou: {
    fontSize: FontSize.size_5xl,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 136,
    height: 24,
    fontWeight: "600",
    color: Color.black,
    textAlign: "center",
  },
  yourRatingHas: {
    letterSpacing: 0.3,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.color,
    width: 220,
    marginTop: 8,
    height: 48,
  },
  thankYouParent: {
    marginTop: 16,
    alignItems: "center",
  },
  httpslottiefilescomanimatParent: {
    top: 32,
    left: 55,
    alignItems: "center",
    position: "absolute",
  },
  vectorParent: {
    marginTop: -179,
    marginLeft: -164.5,
    top: "50%",
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 2.2,
    elevation: 2.2,
    width: 329,
    height: 358,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    left: "50%",
    overflow: "hidden",
  },
  verificationCode: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
    maxWidth: "100%",
  },
});

export default VerificationCode3;
