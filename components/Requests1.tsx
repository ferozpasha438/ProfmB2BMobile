import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Requests from "./Requests";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

type Requests1Type = {
  onClose?: () => void;
};

const Requests1 = ({ onClose }: Requests1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.requests, styles.iconLayout1]}>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <View style={styles.frameParent}>
            <View style={styles.fiRrZoomOutParent}>
              <Image
                style={[styles.fiRrZoomOutIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/firrzoomout.png")}
              />
              <Text style={[styles.searchForThe, styles.requests2Layout]}>
                Search for the order number, project name, company name...
              </Text>
            </View>
            <Image
              style={[styles.fiRrZoomOutIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame24.png")}
            />
          </View>
        </View>
        <View style={[styles.requestsChild, styles.faceIdLayout]} />
        <View style={styles.groupParent}>
          <View style={styles.groupChildLayout1}>
            <View style={[styles.groupChild, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textTypo]}>21584</Text>
            <Text style={[styles.orderNumber, styles.completedClr]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.completedClr]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton, styles.containerBg]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
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
                style={[styles.incomplete, styles.completedFlexBox]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressPosition]}>
                In progress
              </Text>
              <Text style={[styles.completed, styles.completedFlexBox]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.buttonBorder]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={styles.deleteTicket}>Delete Ticket</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.rectangleView, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textTypo]}>23655</Text>
            <Text style={[styles.orderNumber, styles.completedClr]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.text1Position]}>
              Routine
            </Text>
            <Text style={[styles.projectName, styles.completedClr]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton, styles.containerBg]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
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
                style={[styles.incomplete, styles.completedFlexBox]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.progressPosition]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completedFlexBox]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.buttonBorder]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={styles.deleteTicket}>Delete Ticket</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild9, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textTypo]}>25416</Text>
            <Text style={[styles.orderNumber, styles.completedClr]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.completedClr]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton, styles.containerBg]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
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
                style={[styles.incomplete, styles.completedFlexBox]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressPosition]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completedFlexBox]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.buttonBorder]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={styles.deleteTicket}>Delete Ticket</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild16, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textTypo]}>26890</Text>
            <Text style={[styles.orderNumber, styles.completedClr]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.completedClr]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton, styles.containerBg]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
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
                style={[styles.incomplete, styles.completedFlexBox]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.progressPosition]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completedFlexBox]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.buttonBorder]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={styles.deleteTicket}>Delete Ticket</Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.bottomNav, styles.bottomNavPosition]}>
          <View style={styles.menuList}>
            <Pressable
              style={styles.menuFlexBox}
              onPress={() => navigation.navigate("Home9")}
            >
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame72.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </Pressable>
            <View style={[styles.menu5, styles.menuFlexBox]}>
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame73.png")}
              />
              <Text style={[styles.requests1, styles.homeTypo]}>Requests</Text>
            </View>
            <Pressable
              style={[styles.menu5, styles.menuFlexBox]}
              onPress={() => navigation.navigate("MOREInformaion11")}
            >
              <View style={styles.menu31}>
                <View style={[styles.container, styles.containerBg]}>
                  <Image
                    style={styles.frameIcon9}
                    resizeMode="cover"
                    source={require("../assets/svgexport17-15-1.png")}
                  />
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.menu5, styles.menuFlexBox]}
              onPress={() => navigation.navigate("Profile1")}
            >
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/liuser3.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>My Account</Text>
            </Pressable>
            <Pressable
              style={[styles.menu5, styles.menuFlexBox]}
              onPress={() => navigation.navigate("Reports")}
            >
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame65.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Reports</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.tap, styles.tapPosition]}>
          <View style={[styles.tapChild, styles.childGroupShadowBox]} />
          <Pressable
            style={[styles.arrow21, styles.text1Position]}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.requests2, styles.requests2Typo]}>Requests</Text>
        </View>
        <View style={[styles.requestsItem, styles.requestsItemPosition]} />
        <View style={[styles.loginWithFaceId, styles.requestsItemPosition]}>
          <View style={[styles.faceId, styles.faceIdLayout]}>
            <View style={styles.areYouSureYouWantToCloseParent}>
              <Text style={styles.areYouSure}>
                Are you sure you want to Close the Ticket
              </Text>
              <Text style={[styles.closingTheTicket, styles.requests2Typo]}>
                Closing the ticket will lead to cancellation of the service and
                you will need to submit a new ticket
              </Text>
            </View>
            <View style={[styles.button, styles.buttonPosition1]}>
              <View style={[styles.buttonChild, styles.buttonPosition]} />
              <Text style={[styles.cancel, styles.closePosition]}>Cancel</Text>
            </View>
            <Pressable
              style={[styles.button1, styles.buttonPosition1]}
              onPress={openButtonContainer1}
            >
              <View style={[styles.buttonItem, styles.buttonPosition]} />
              <Text style={[styles.close, styles.closePosition]}>Close</Text>
            </Pressable>
            <Image
              style={[
                styles.httpslottiefilescomanimatIcon,
                styles.rightSidePosition,
              ]}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationsquestionmark9mvpaoclgq.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
        <View style={[styles.iphoneXOrNewer, styles.tapPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.rightSide, styles.rightSidePosition]}>
            <Image
              style={[styles.batteryIcon, styles.tapPosition]}
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
      </View>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <Requests onClose={closeButtonContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  requests2Layout: {
    display: "flex",
    height: 24,
    alignItems: "center",
  },
  faceIdLayout: {
    width: 343,
    overflow: "hidden",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
  },
  textTypo: {
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
  },
  completedClr: {
    color: Color.black,
    fontWeight: "700",
  },
  text1Position: {
    top: 48,
    position: "absolute",
  },
  containerBg: {
    backgroundColor: Color.praimary,
    flexDirection: "row",
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
  completedFlexBox: {
    width: 53,
    top: 14,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  progressPosition: {
    width: 52,
    right: 99,
    textAlign: "center",
    top: 14,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  buttonBorder: {
    borderWidth: 2,
    borderColor: Color.colorRed_100,
    borderStyle: "solid",
  },
  groupChildLayout1: {
    height: 190,
    width: 343,
  },
  bottomNavPosition: {
    bottom: 0,
    position: "absolute",
    width: 375,
  },
  homeTypo: {
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  menuFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  tapPosition: {
    top: 0,
    position: "absolute",
  },
  requests2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  requestsItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonPosition1: {
    width: 301,
    marginLeft: -150.5,
    left: "50%",
    height: 48,
    position: "absolute",
  },
  buttonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  closePosition: {
    width: 288,
    top: "22.92%",
    marginLeft: -144.5,
    height: "50%",
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
  rightSidePosition: {
    top: 17,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 48,
    width: 343,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  fiRrZoomOutIcon: {
    overflow: "hidden",
  },
  searchForThe: {
    fontSize: FontSize.size_4xs,
    width: 242,
    marginLeft: 8,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
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
    justifyContent: "center",
    alignItems: "flex-end",
    right: 16,
    position: "absolute",
  },
  requestsChild: {
    top: 1068,
    height: 54,
    overflow: "hidden",
    right: 16,
    position: "absolute",
  },
  groupChild: {
    right: 0,
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text: {
    right: 52,
    width: 31,
    lineHeight: 25,
    top: 16,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    top: 16,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  preventive: {
    width: 48,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    right: 16,
  },
  projectName: {
    right: 261,
    width: 66,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    top: 16,
    position: "absolute",
  },
  text1: {
    right: 197,
    width: 51,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    right: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  text2: {
    textAlign: "right",
    color: Color.whait,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon1: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: 16,
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
  },
  inProgress: {
    color: Color.black,
    fontWeight: "700",
  },
  completed: {
    color: Color.black,
    fontWeight: "700",
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  deleteTicket: {
    width: 85,
    color: Color.colorRed_100,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  mediumButton1: {
    left: 187,
    width: 140,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
    flexDirection: "row",
  },
  rectangleView: {
    right: 0,
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  groupChild4: {
    borderColor: Color.gray,
  },
  groupChild5: {
    borderColor: Color.gray,
  },
  inProgress1: {
    color: Color.gray,
    fontWeight: "300",
  },
  completed1: {
    color: Color.gray,
    right: 0,
    fontWeight: "300",
  },
  rectangleContainer: {
    marginTop: 24,
  },
  groupChild9: {
    right: 0,
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  groupChild16: {
    right: 0,
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  groupParent: {
    top: 176,
    height: 636,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  frameIcon9: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  requests1: {
    fontWeight: "700",
    color: Color.praimary,
  },
  menu5: {
    marginLeft: 16,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    justifyContent: "flex-end",
    borderStyle: "solid",
    backgroundColor: Color.praimary,
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    right: 0,
    flexDirection: "row",
    backgroundColor: Color.whait,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    width: 375,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 88,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
    height: 24,
  },
  requests2: {
    marginLeft: -74.5,
    width: 150,
    top: 48,
    position: "absolute",
    fontWeight: "700",
    color: Color.praimary,
    left: "50%",
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tap: {
    height: 88,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
  },
  requestsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    height: 812,
    width: 375,
  },
  areYouSure: {
    fontSize: FontSize.size_2xl,
    textTransform: "capitalize",
    width: 314,
    height: 59,
    color: Color.colorRed_100,
    textAlign: "center",
    fontWeight: "700",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  closingTheTicket: {
    width: 323,
    marginTop: 8,
    height: 88,
    color: Color.gray,
  },
  areYouSureYouWantToCloseParent: {
    marginLeft: -161.5,
    top: 202,
    height: 155,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    borderWidth: 2,
    borderColor: Color.colorRed_100,
    borderStyle: "solid",
  },
  cancel: {
    lineHeight: 22,
    color: Color.colorRed_100,
  },
  button: {
    top: 430,
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonItem: {
    backgroundColor: Color.colorRed_100,
  },
  close: {
    color: Color.whait,
    top: "22.92%",
    marginLeft: -144.5,
    height: "50%",
    lineHeight: 30,
  },
  button1: {
    top: 373,
  },
  httpslottiefilescomanimatIcon: {
    right: 82,
    width: 180,
    height: 180,
  },
  vectorIcon: {
    height: "4.02%",
    width: "5.83%",
    top: "4.02%",
    right: "5.83%",
    bottom: "91.97%",
    left: "88.34%",
    overflow: "hidden",
    position: "absolute",
  },
  faceId: {
    borderRadius: Border.br_mini,
    height: 498,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 343,
    backgroundColor: Color.whait,
  },
  loginWithFaceId: {
    marginTop: -249,
    marginLeft: -171.5,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    backgroundColor: Color.colorDimgray_100,
    height: 30,
    right: 0,
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  batteryIcon: {
    height: 11,
    width: 24,
    right: 0,
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
    right: 15,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    width: 54,
    height: 21,
    top: 12,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  requests: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default Requests1;
