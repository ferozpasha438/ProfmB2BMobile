import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import Requests2 from "../components/Requests2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "../components/Home6";
import Requests1 from "../components/Requests1";
import Requests3 from "../components/Requests3";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Requests4 = () => {
  const [frameIconVisible, setFrameIconVisible] = useState(false);
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [mediumButtonContainer3Visible, setMediumButtonContainer3Visible] =
    useState(false);
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =
    useState(false);
  const [mediumButtonContainer7Visible, setMediumButtonContainer7Visible] =
    useState(false);
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openFrameIcon = useCallback(() => {
    setFrameIconVisible(true);
  }, []);

  const closeFrameIcon = useCallback(() => {
    setFrameIconVisible(false);
  }, []);

  const openMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(true);
  }, []);

  const closeMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(false);
  }, []);

  const openMediumButtonContainer3 = useCallback(() => {
    setMediumButtonContainer3Visible(true);
  }, []);

  const closeMediumButtonContainer3 = useCallback(() => {
    setMediumButtonContainer3Visible(false);
  }, []);

  const openMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(true);
  }, []);

  const closeMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(false);
  }, []);

  const openMediumButtonContainer7 = useCallback(() => {
    setMediumButtonContainer7Visible(true);
  }, []);

  const closeMediumButtonContainer7 = useCallback(() => {
    setMediumButtonContainer7Visible(false);
  }, []);

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.requests}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.buttonLayout]} />
          <View style={styles.frameParent}>
            <View style={styles.fiRrZoomOutParent}>
              <Image
                style={[styles.fiRrZoomOutIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/firrzoomout.png")}
              />
              <Text style={[styles.searchForThe, styles.closeTicketFlexBox]}>
                Search for the order number, project name, company name...
              </Text>
            </View>
            <Pressable
              style={[styles.frame, styles.frameIconLayout]}
              onPress={openFrameIcon}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/frame24.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.requestsChild} />
        <View style={[styles.groupParent, styles.groupPosition1]}>
          <View style={styles.rectangleLayout}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text, styles.textLayout]}>21584</Text>
            <Text style={[styles.orderNumber, styles.completedTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.completedTypo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.textTypo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.completedTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.completedTypo]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Pressable
              style={styles.mediumButton}
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
            <View style={[styles.lineParent, styles.lineParentLayout]}>
              <View style={[styles.groupInner, styles.groupPosition]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChild2Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed, styles.completedLayout]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.mediumLayout]}
              onPress={openMediumButtonContainer1}
            >
              <Text style={[styles.review, styles.reviewTypo]}>review</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text, styles.textLayout]}>23655</Text>
            <Text style={[styles.orderNumber, styles.completedTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.completedTypo]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.textTypo]}>Routine</Text>
            <Text style={[styles.projectName, styles.completedTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.completedTypo]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Pressable
              style={styles.mediumButton}
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
            <View style={[styles.lineParent, styles.lineParentLayout]}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChild2Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer3}
            >
              <Text style={[styles.closeTicket, styles.text2Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text, styles.textLayout]}>25416</Text>
            <Text style={[styles.orderNumber, styles.completedTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.completedTypo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.textTypo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.completedTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.completedTypo]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Pressable
              style={styles.mediumButton}
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
            <View style={[styles.lineParent, styles.lineParentLayout]}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChild2Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer5}
            >
              <Text style={[styles.closeTicket, styles.text2Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text, styles.textLayout]}>26890</Text>
            <Text style={[styles.orderNumber, styles.completedTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.completedTypo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.textTypo]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.completedTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.completedTypo]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupItemBorder]} />
            <Pressable
              style={styles.mediumButton}
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
            <View style={[styles.lineParent, styles.lineParentLayout]}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChild2Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer7}
            >
              <Text style={[styles.closeTicket, styles.text2Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.tap, styles.tapPosition]}>
          <View style={[styles.tapChild, styles.childShadowBox]} />
          <View style={styles.iphoneXOrNewer}>
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
              style={[styles.leftSideIcon, styles.groupChild2Position]}
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
          <Text style={[styles.requests1, styles.requests1Typo]}>Requests</Text>
        </View>
        <Pressable
          style={[styles.requestsItem, styles.faceIdPosition]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={styles.iphoneIndicator}>
          <View style={styles.line} />
        </View>
        <View style={[styles.faceId, styles.faceIdPosition]}>
          <View style={styles.customerFeedbackWrapper}>
            <Text style={[styles.customerFeedback, styles.reviewTypo]}>
              {" "}
              Customer feedback
            </Text>
          </View>
          <View style={[styles.faceIdChild, styles.childPosition]} />
          <View style={styles.frameGroup}>
            <View style={styles.groupContainer}>
              <View style={styles.groupChild23Layout}>
                <Image
                  style={[styles.groupChild23, styles.groupChild23Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.lineParentLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRateParent}>
                <Text style={[styles.teamworkRate, styles.rateTypo]}>
                  teamwork rate
                </Text>
                <Text style={styles.team2Layout}>
                  <Text style={styles.team}>Team</Text>
                  <Text style={styles.text12}>{` `}</Text>
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
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={styles.groupChild23Layout}>
                <Image
                  style={[styles.groupChild23, styles.groupChild23Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.lineParentLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRateParent}>
                <Text style={[styles.companyRate, styles.rateTypo]}>
                  Company rate
                </Text>
                <Text style={[styles.profm, styles.team2Layout]}>PROFM</Text>
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
            <View style={[styles.rectangleParent2, styles.groupLayout]}>
              <View style={[styles.groupChild25, styles.groupLayout]} />
              <Text style={[styles.youCanWrite, styles.completed1Typo]}>
                You can write additional comments here
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.groupPosition1]}
            onPress={openButtonContainer}
          >
            <View style={styles.buttonChild} />
            <Text style={[styles.submitFeedback, styles.requests1Typo]}>
              Submit Feedback
            </Text>
          </Pressable>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameIconVisible}>
        <View style={styles.frameIconOverlay}>
          <Pressable style={styles.frameIconBg} onPress={closeFrameIcon} />
          <Requests2 onClose={closeFrameIcon} />
        </View>
      </Modal>

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

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer3Visible}
      >
        <View style={styles.mediumButtonContainer3Overlay}>
          <Pressable
            style={styles.mediumButtonContainer3Bg}
            onPress={closeMediumButtonContainer3}
          />
          <Requests1 onClose={closeMediumButtonContainer3} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer5Visible}
      >
        <View style={styles.mediumButtonContainer5Overlay}>
          <Pressable
            style={styles.mediumButtonContainer5Bg}
            onPress={closeMediumButtonContainer5}
          />
          <Requests1 onClose={closeMediumButtonContainer5} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer7Visible}
      >
        <View style={styles.mediumButtonContainer7Overlay}>
          <Pressable
            style={styles.mediumButtonContainer7Bg}
            onPress={closeMediumButtonContainer7}
          />
          <Requests1 onClose={closeMediumButtonContainer7} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <Requests3 onClose={closeButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 48,
    width: 343,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
  },
  closeTicketFlexBox: {
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupPosition1: {
    marginLeft: -171.5,
    left: "50%",
  },
  textLayout: {
    lineHeight: 25,
    textAlign: "left",
    height: 16,
  },
  completedTypo: {
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
    position: "absolute",
  },
  groupItemBorder: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  text2Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
  },
  lineParentLayout: {
    height: 30,
    position: "absolute",
  },
  groupPosition: {
    width: 91,
    borderTopWidth: 1,
    left: 127,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
    left: 29,
    width: 91,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 10,
    top: 0,
  },
  groupChild2Position: {
    left: 21,
    position: "absolute",
  },
  completedLayout: {
    width: 53,
    top: 14,
    textAlign: "center",
    height: 16,
    justifyContent: "center",
  },
  progressLayout: {
    width: 52,
    right: 99,
    textAlign: "center",
    top: 14,
    height: 16,
    justifyContent: "center",
  },
  mediumLayout: {
    width: 149,
    borderWidth: 2,
    left: 178,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  reviewTypo: {
    textTransform: "capitalize",
    color: Color.praimary,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  rectangleLayout: {
    height: 190,
    width: 343,
  },
  completed1Typo: {
    color: Color.gray,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
    position: "absolute",
  },
  tapPosition: {
    height: 88,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  childShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  requests1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  faceIdPosition: {
    top: "50%",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  groupChild23Layout: {
    height: 60,
    width: 60,
  },
  rateTypo: {
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
  },
  vectorIconLayout: {
    width: 23,
    height: 21,
  },
  team2Layout: {
    width: 72,
    color: Color.color,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    marginTop: 8,
    textAlign: "center",
    height: 16,
  },
  groupLayout: {
    height: 143,
    width: 343,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    zIndex: 0,
    borderWidth: 0.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 48,
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  fiRrZoomOutIcon: {
    height: 16,
    overflow: "hidden",
  },
  searchForThe: {
    fontSize: FontSize.size_4xs,
    color: Color.colorLightsteelblue_100,
    width: 242,
    marginLeft: 8,
    height: 24,
    fontWeight: "300",
    display: "flex",
    lineHeight: 30,
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIconBg: {
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
    height: 16,
  },
  frameParent: {
    width: 311,
    justifyContent: "space-between",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    top: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 112,
    alignItems: "flex-end",
    justifyContent: "center",
    right: 16,
    position: "absolute",
  },
  requestsChild: {
    top: 1068,
    height: 54,
    width: 343,
    right: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    right: 0,
    top: 0,
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    right: 52,
    width: 31,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
    position: "absolute",
    top: 16,
  },
  orderNumber: {
    right: 85,
    width: 70,
    lineHeight: 25,
    textAlign: "left",
    height: 16,
    top: 16,
  },
  maintenanceType: {
    right: 66,
    width: 89,
    top: 48,
    lineHeight: 25,
    textAlign: "left",
    height: 16,
  },
  preventive: {
    width: 48,
    top: 48,
    color: Color.praimary,
    textAlign: "left",
    height: 16,
    right: 16,
  },
  projectName: {
    right: 261,
    width: 66,
    lineHeight: 25,
    textAlign: "left",
    height: 16,
    top: 16,
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    color: Color.praimary,
    top: 16,
    textAlign: "left",
    height: 16,
  },
  text1: {
    right: 197,
    width: 51,
    top: 48,
    color: Color.praimary,
    textAlign: "left",
    height: 16,
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    top: 48,
    lineHeight: 25,
    textAlign: "left",
    height: 16,
  },
  groupItem: {
    top: 80,
    width: 344,
    right: 0,
    position: "absolute",
  },
  text2: {
    textAlign: "right",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon: {
    marginLeft: 6,
    height: 16,
    overflow: "hidden",
  },
  mediumButton: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    backgroundColor: Color.praimary,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorMediumseagreen,
  },
  lineView: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 216,
    position: "absolute",
  },
  groupChild1: {
    left: 118,
    position: "absolute",
  },
  groupChild2: {
    height: 10,
    width: 10,
    top: 0,
  },
  incomplete: {
    right: 195,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  inProgress: {
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  completed: {
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
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
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    textAlign: "left",
  },
  frameIcon1: {
    marginLeft: 4,
    height: 16,
    overflow: "hidden",
  },
  mediumButton1: {
    borderColor: Color.praimary,
  },
  groupChild4: {
    borderColor: Color.gray,
  },
  groupChild5: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: 52,
    right: 99,
    textAlign: "center",
    top: 14,
    height: 16,
    justifyContent: "center",
  },
  completed1: {
    width: 53,
    top: 14,
    textAlign: "center",
    height: 16,
    justifyContent: "center",
    right: 0,
  },
  mediumButtonContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  closeTicket: {
    color: Color.colorRed_100,
    width: 79,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
  },
  rectangleContainer: {
    marginTop: 24,
  },
  mediumButtonContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButtonContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 176,
    height: 636,
    left: "50%",
    position: "absolute",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
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
    width: 54,
    height: 21,
    top: 12,
    left: 21,
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
  arrow21: {
    right: 335,
    top: 48,
    height: 24,
  },
  requests1: {
    width: 150,
    marginLeft: -74.5,
    top: 48,
    color: Color.praimary,
    height: 24,
    lineHeight: 30,
    fontSize: FontSize.size_base,
  },
  tap: {
    top: 0,
  },
  requestsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_600,
    height: 812,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    height: 30,
    left: "50%",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  customerFeedback: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    textAlign: "center",
    textTransform: "capitalize",
    height: 30,
    fontWeight: "700",
    justifyContent: "center",
  },
  customerFeedbackWrapper: {
    marginLeft: -128.5,
    top: 16,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  faceIdChild: {
    top: 62,
    width: 376,
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  groupChild23: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  httpslottiefilescomanimatIcon: {
    top: 15,
    left: 15,
    width: 31,
  },
  teamworkRate: {
    width: 100,
  },
  team: {
    fontFamily: FontFamily.dGBaysan,
  },
  text12: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  teamworkRateParent: {
    marginTop: 8,
    alignItems: "center",
  },
  groupContainer: {
    alignItems: "center",
  },
  vectorIcon1: {
    marginLeft: 9.09,
  },
  vectorParent: {
    marginTop: 16,
    width: 150,
    height: 21,
    flexDirection: "row",
  },
  frameGroup: {
    top: 78,
    marginLeft: -74.5,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  companyRate: {
    width: 94,
  },
  profm: {
    fontFamily: FontFamily.dGBaysan,
  },
  frameView: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameContainer: {
    top: 255,
    marginLeft: -74.5,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  groupChild25: {
    borderColor: Color.color,
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    right: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 143,
  },
  youCanWrite: {
    marginLeft: -155.4,
    width: 177,
    top: 16,
    left: "50%",
    textAlign: "left",
  },
  rectangleParent2: {
    right: 0,
    top: 0,
  },
  encapsulatedGroup: {
    top: 424,
    left: "50%",
    marginLeft: -171.5,
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
    backgroundColor: Color.praimary,
    height: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  submitFeedback: {
    height: "50%",
    marginLeft: -69.5,
    top: "25%",
    letterSpacing: 0.6,
    lineHeight: 44,
    width: 139,
    color: Color.whait,
  },
  button: {
    top: 591,
    left: "50%",
    height: 48,
    width: 343,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "89.33%",
    top: "3.02%",
    right: "5.33%",
    bottom: "93.92%",
    width: "5.33%",
    height: "3.06%",
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
  requests: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Requests4;
