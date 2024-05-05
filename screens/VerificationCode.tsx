import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "../components/Home6";
// import Home from "../components/Home";
import VerificationCode3 from "../components/VerificationCode3";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const VerificationCode = () => {
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [frameIcon2Visible, setFrameIcon2Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);

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

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.verificationCode}>
        <View style={[styles.rectangleParent, styles.buttonLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupItemLayout]} />
          <Text style={[styles.incomplete, styles.completedTypo]}>
            Incomplete
          </Text>
          <Text style={[styles.completed, styles.completedTypo]}>
            Completed
          </Text>
        </View>
        <View style={[styles.verificationCodeChild, styles.groupItemLayout]} />
        <View style={styles.rectangleGroup}>
          <View style={styles.groupInner} />
          <Text style={[styles.text, styles.textTypo]}>21584</Text>
          <Text style={[styles.orderNumber, styles.orderNumberClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.orderNumberClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={[styles.lineView, styles.lineViewBorder]} />
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
              style={[styles.incomplete1, styles.inProgressFlexBox]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.inProgressFlexBox]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressFlexBox]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.inProgressFlexBox]}
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
        <View
          style={[
            styles.thereIs1CompletedServiceParent,
            styles.mediumButtonPosition,
          ]}
        >
          <Text style={[styles.thereIs1Container, styles.textTypo]}>
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
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.rectangleView, styles.groupChild7ShadowBox]} />
          <View style={[styles.iphoneXOrNewer, styles.feedbackPosition]}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.arrow21Layout1]}
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
          <Pressable
            style={[styles.arrow21, styles.arrow21Layout]}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.servicesProvided, styles.linePosition]}>
            Services provided
          </Text>
        </View>
        <Pressable
          style={[styles.verificationCodeItem, styles.faceIdPosition]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={styles.iphoneIndicator}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
        <View style={[styles.faceId, styles.faceIdPosition]}>
          <View
            style={[styles.customerFeedbackWrapper, styles.feedbackPosition]}
          >
            <Text style={[styles.customerFeedback, styles.reviewTransform]}>
              {" "}
              Customer feedback
            </Text>
          </View>
          <View style={[styles.faceIdChild, styles.childPosition]} />
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.groupParent}>
              <View style={styles.groupChild5Layout}>
                <Image
                  style={[styles.groupChild5, styles.groupChild5Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.textLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRatingParent}>
                <Text style={[styles.teamworkRating, styles.ratingTypo]}>
                  teamwork rating
                </Text>
                <Text style={[styles.team2, styles.team2Typo]}>
                  <Text style={styles.team}>Team</Text>
                  <Text style={styles.text4}>{` `}</Text>
                  <Text style={styles.team}>2</Text>
                </Text>
              </View>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
          <View style={[styles.frameGroup, styles.framePosition]}>
            <View style={styles.inProgressFlexBox}>
              <View style={styles.groupChild5Layout}>
                <Image
                  style={[styles.groupChild5, styles.groupChild5Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.textLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRatingParent}>
                <Text style={[styles.companyRating, styles.ratingTypo]}>
                  Company rating
                </Text>
                <Text style={[styles.profm, styles.team2Typo]}>PROFM</Text>
              </View>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
            </View>
          </View>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupChild7, styles.groupLayout]} />
              <Text style={[styles.youCanWrite, styles.feedbackPosition]}>
                You can write additional comments here
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.buttonPosition]}
            onPress={openButtonContainer}
          >
            <View style={[styles.buttonChild, styles.iconLayout1]} />
            <Text style={[styles.submitFeedback, styles.submitFeedbackTypo]}>
              Submit Feedback
            </Text>
          </Pressable>
          <Image
            style={[styles.vectorIcon10, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
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

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <VerificationCode3 onClose={closeButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 48,
    width: 343,
    position: "absolute",
  },
  groupItemLayout: {
    height: 38,
    position: "absolute",
  },
  completedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  textTypo: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
  },
  orderNumberClr: {
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  text1Typo: {
    top: 48,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text2Typo: {
    fontWeight: "600",
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
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
  inProgressFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  reviewTransform: {
    textTransform: "capitalize",
    color: Color.praimary,
  },
  mediumButtonPosition: {
    left: 16,
    alignItems: "center",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  rectanglePosition: {
    height: 87,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  groupChild7ShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
  },
  feedbackPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Layout1: {
    width: 24,
    position: "absolute",
  },
  arrow21Layout: {
    height: 24,
    top: 48,
  },
  linePosition: {
    width: 135,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  faceIdPosition: {
    top: "50%",
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  framePosition: {
    marginLeft: -74.5,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  groupChild5Layout: {
    height: 60,
    width: 60,
  },
  textLayout: {
    width: 31,
    position: "absolute",
  },
  ratingTypo: {
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  team2Typo: {
    color: Color.color,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    marginTop: 8,
    height: 16,
    textAlign: "center",
  },
  vectorIconLayout: {
    width: 23,
    height: 21,
  },
  groupLayout: {
    height: 143,
    width: 343,
    position: "absolute",
  },
  buttonPosition: {
    marginLeft: -171.5,
    left: "50%",
  },
  submitFeedbackTypo: {
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
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
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 15,
    position: "absolute",
  },
  completed: {
    right: 224,
    color: Color.whait,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 111,
    right: 16,
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
    elevation: 20,
    shadowRadius: 20,
    borderStyle: "solid",
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
    position: "absolute",
    fontWeight: "300",
    lineHeight: 25,
    height: 16,
    top: 16,
    color: Color.praimary,
  },
  orderNumber: {
    right: 85,
    width: 70,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  preventive: {
    width: 48,
    fontWeight: "300",
    color: Color.praimary,
    right: 16,
  },
  projectName: {
    right: 261,
    width: 66,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    fontWeight: "300",
    top: 16,
    color: Color.praimary,
    position: "absolute",
  },
  text1: {
    right: 197,
    width: 51,
    fontWeight: "300",
    color: Color.praimary,
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  lineView: {
    top: 80,
    width: 344,
    right: 0,
    position: "absolute",
  },
  text2: {
    textAlign: "right",
    color: Color.whait,
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    left: 16,
    alignItems: "center",
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
    width: 53,
    top: 14,
    justifyContent: "center",
    color: Color.black,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  inProgress: {
    right: 99,
    width: 52,
    top: 14,
    justifyContent: "center",
    color: Color.black,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  completed1: {
    width: 53,
    top: 14,
    justifyContent: "center",
    color: Color.black,
    height: 16,
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
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
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
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
    lineHeight: 30,
    fontWeight: "700",
    height: 16,
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
    position: "absolute",
  },
  rectangleView: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 87,
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
  arrow21: {
    right: 335,
    width: 24,
    position: "absolute",
  },
  servicesProvided: {
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    height: 24,
    top: 48,
    lineHeight: 30,
    textTransform: "capitalize",
    color: Color.praimary,
  },
  rectangleContainer: {
    top: 0,
  },
  verificationCodeItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_600,
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
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    height: 30,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  customerFeedback: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  customerFeedbackWrapper: {
    marginLeft: -128.5,
    alignItems: "center",
    top: 16,
  },
  faceIdChild: {
    top: 62,
    width: 376,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  groupChild5: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  httpslottiefilescomanimatIcon: {
    left: 15,
    height: 30,
    width: 31,
    top: 15,
  },
  teamworkRating: {
    width: 112,
  },
  team: {
    fontFamily: FontFamily.dGBaysan,
  },
  text4: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  team2: {
    width: 53,
  },
  teamworkRatingParent: {
    marginTop: 8,
    alignItems: "center",
  },
  groupParent: {
    alignItems: "center",
  },
  vectorIcon1: {
    marginLeft: 9.09,
  },
  vectorParent: {
    width: 150,
    marginTop: 16,
    height: 21,
    flexDirection: "row",
  },
  frameParent: {
    top: 78,
  },
  companyRating: {
    width: 106,
  },
  profm: {
    width: 72,
    fontFamily: FontFamily.dGBaysan,
  },
  frameGroup: {
    top: 255,
  },
  groupChild7: {
    borderColor: Color.color,
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    right: 0,
  },
  youCanWrite: {
    marginLeft: -155.4,
    color: Color.gray,
    width: 177,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  groupView: {
    right: 0,
    top: 0,
  },
  encapsulatedGroup: {
    top: 424,
    marginLeft: -171.5,
    left: "50%",
    overflow: "hidden",
  },
  buttonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  submitFeedback: {
    height: "50%",
    marginLeft: -69.5,
    top: "25%",
    letterSpacing: 0.6,
    lineHeight: 44,
    width: 139,
    left: "50%",
    position: "absolute",
    color: Color.whait,
  },
  button: {
    top: 591,
    height: 48,
    width: 343,
    position: "absolute",
  },
  vectorIcon10: {
    height: "3.06%",
    width: "5.33%",
    top: "3.02%",
    right: "5.33%",
    bottom: "93.92%",
    left: "89.33%",
    position: "absolute",
  },
  faceId: {
    marginTop: -287,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 663,
    backgroundColor: Color.whait,
    top: "50%",
    overflow: "hidden",
  },
  verificationCode: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default VerificationCode;
