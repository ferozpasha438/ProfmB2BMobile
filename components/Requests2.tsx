import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Requests1 from "./Requests1";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

type Requests2Type = {
  onClose?: () => void;
};

const Requests2 = ({ onClose }: Requests2Type) => {
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [mediumButtonContainer3Visible, setMediumButtonContainer3Visible] =
    useState(false);
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =
    useState(false);
  const [mediumButtonContainer7Visible, setMediumButtonContainer7Visible] =
    useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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

  return (
    <>
      <View style={[styles.requests, styles.requestsLayout]}>
        <View style={[styles.rectangleParent, styles.menuListFlexBox]}>
          <View style={[styles.frameChild, styles.childGroupBorder]} />
          <View style={styles.frameParent}>
            <View
              style={[styles.fiRrZoomOutParent, styles.homeIndicatorFlexBox]}
            >
              <Image
                style={[styles.fiRrZoomOutIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/firrzoomout1.png")}
              />
              <Text style={[styles.searchForThe, styles.text1Typo]}>
                Search for the order number, project name, company name...
              </Text>
            </View>
            <Image
              style={[styles.fiRrZoomOutIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame24.png")}
            />
          </View>
        </View>
        <View style={styles.requestsChild} />
        <View style={styles.groupParent}>
          <View style={styles.groupChildLayout1}>
            <View style={[styles.groupChild, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textLayout]}>21584</Text>
            <Text style={[styles.orderNumber, styles.textLayout]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.textLayout]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textPosition]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupPosition2]} />
            <Pressable
              style={[styles.mediumButton, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupInner, styles.groupPosition1]} />
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
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed, styles.completedTypo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={styles.mediumButton1}
              onPress={openMediumButtonContainer1}
            >
              <Text style={styles.closeTicket}>Close Ticket</Text>
              <Image
                style={[styles.frameIcon2, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.rectangleView, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textLayout]}>23655</Text>
            <Text style={[styles.orderNumber, styles.textLayout]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.text1Position]}>
              Routine
            </Text>
            <Text style={[styles.projectName, styles.textLayout]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textPosition]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupPosition2]} />
            <Pressable
              style={[styles.mediumButton, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition1]} />
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
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={styles.mediumButton1}
              onPress={openMediumButtonContainer3}
            >
              <Text style={styles.closeTicket}>Close Ticket</Text>
              <Image
                style={[styles.frameIcon2, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild9, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textLayout]}>25416</Text>
            <Text style={[styles.orderNumber, styles.textLayout]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.textLayout]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textPosition]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupPosition2]} />
            <Pressable
              style={[styles.mediumButton, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition1]} />
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
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={styles.mediumButton1}
              onPress={openMediumButtonContainer5}
            >
              <Text style={styles.closeTicket}>Close Ticket</Text>
              <Image
                style={[styles.frameIcon2, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild16, styles.childGroupShadowBox]} />
            <Text style={[styles.text, styles.textLayout]}>26890</Text>
            <Text style={[styles.orderNumber, styles.textLayout]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.textLayout]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textPosition]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={[styles.groupItem, styles.groupPosition2]} />
            <Pressable
              style={[styles.mediumButton, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition1]} />
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
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={styles.mediumButton1}
              onPress={openMediumButtonContainer7}
            >
              <Text style={styles.closeTicket}>Close Ticket</Text>
              <Image
                style={[styles.frameIcon2, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.bottomNav, styles.bottomNavPosition]}>
          <View style={[styles.menuList, styles.menuListFlexBox]}>
            <Pressable
              style={styles.menuFlexBox}
              onPress={() => navigation.navigate("Home9")}
            >
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame25.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </Pressable>
            <View style={[styles.menu5, styles.menuFlexBox]}>
              <Image
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame74.png")}
              />
              <Text style={[styles.requests1, styles.homeTypo]}>Requests</Text>
            </View>
            <Pressable
              style={[styles.menu5, styles.menuFlexBox]}
              onPress={() => navigation.navigate("MOREInformaion11")}
            >
              <View style={styles.menu31}>
                <View style={styles.container}>
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
                source={require("../assets/liuser4.png")}
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
          <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
            <View style={[styles.line, styles.lineLayout]} />
          </View>
        </View>
        <View style={styles.tapPosition}>
          <View style={[styles.tapChild, styles.tapPosition]} />
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
          <Text style={[styles.requests2, styles.filterTypo]}>Requests</Text>
        </View>
        <Pressable
          style={[styles.requestsItem, styles.bottomNavPosition1]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={[styles.groupContainer, styles.bottomNavPosition1]}>
          <View style={styles.groupPosition}>
            <View style={styles.groupPosition}>
              <View style={[styles.groupChild23, styles.groupPosition]} />
              <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameIcon12}
                    resizeMode="cover"
                    source={require("../assets/frame15.png")}
                  />
                  <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
                </View>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector9.png")}
                />
              </View>
              <Text style={[styles.status, styles.filterTypo]}>Status</Text>
              <View style={[styles.groupChild24, styles.groupPosition2]} />
              <View style={[styles.filterParent, styles.frameGroupPosition]}>
                <View style={styles.filter1}>
                  <Text style={[styles.allRequests, styles.requestTypo]}>
                    All Ticket
                  </Text>
                  <Image
                    style={[styles.frameIcon13, styles.frameIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/frame3.png")}
                  />
                </View>
                <View style={[styles.filter2, styles.filterSpaceBlock]}>
                  <Text style={[styles.completedRequest, styles.requestTypo]}>
                    Completed Ticket
                  </Text>
                  <Image
                    style={[styles.frameIcon14, styles.frameIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/frame4.png")}
                  />
                </View>
                <View style={[styles.filter2, styles.filterSpaceBlock]}>
                  <Text style={[styles.completedRequest, styles.requestTypo]}>
                    Ticket in progress
                  </Text>
                  <Image
                    style={[styles.frameIcon14, styles.frameIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/frame4.png")}
                  />
                </View>
                <View style={[styles.filter4, styles.filterSpaceBlock]}>
                  <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                    Incomplete Ticket
                  </Text>
                  <Image
                    style={[styles.frameIcon16, styles.frameIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/frame4.png")}
                  />
                </View>
                <View style={[styles.filter4, styles.filterSpaceBlock]}>
                  <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                    Tickets are out of scope
                  </Text>
                  <Image
                    style={[styles.frameIcon16, styles.frameIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/frame4.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Requests5")}
            >
              <Text style={[styles.text12, styles.requestTypo]}>
                Apply filter
              </Text>
            </Pressable>
          </View>



          
          <View style={[styles.webViewbottom, styles.bottomNavPosition]}>
            <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
              <View style={[styles.homeIndicator1, styles.lineLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.iphoneXOrNewer, styles.groupChildPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.groupChildPosition]}
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
          <Requests1 onClose={closeMediumButtonContainer1} />
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
    </>
  );
};

const styles = StyleSheet.create({
  requestsLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  childGroupBorder: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameIconLayout: {
    width: 16,
    overflow: "hidden",
    height: 16,
  },
  text1Typo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  textLayout: {
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  text1Position: {
    top: 48,
    position: "absolute",
  },
  textPosition: {
    top: 16,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupPosition2: {
    height: 1,
    borderTopWidth: 0.5,
    right: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  buttonFlexBox: {
    backgroundColor: Color.praimary,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupPosition1: {
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
  completedTypo: {
    top: 14,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  progressLayout: {
    width: 52,
    right: 99,
  },
  groupChildLayout1: {
    height: 190,
    width: 343,
  },
  completed1Typo: {
    color: Color.gray,
    textAlign: "center",
    top: 14,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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
  lineLayout: {
    height: 5,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
  },
  tapPosition: {
    height: 88,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  filterTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  bottomNavPosition1: {
    marginLeft: -187.5,
    left: "50%",
  },
  groupPosition: {
    height: 389,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  frameGroupPosition: {
    left: 24,
    position: "absolute",
  },
  requestTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconPosition: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  filterSpaceBlock: {
    marginTop: 16,
    height: 24,
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    height: 48,
    zIndex: 0,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
  },
  fiRrZoomOutIcon: {
    overflow: "hidden",
    height: 16,
  },
  searchForThe: {
    fontSize: FontSize.size_4xs,
    width: 242,
    marginLeft: 8,
    height: 24,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    color: Color.colorLightsteelblue_100,
    lineHeight: 30,
  },
  fiRrZoomOutParent: {
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
    right: 16,
  },
  requestsChild: {
    top: 1068,
    height: 54,
    overflow: "hidden",
    width: 343,
    right: 16,
    position: "absolute",
  },
  groupChild: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
  },
  text: {
    right: 52,
    width: 31,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    top: 16,
    position: "absolute",
    fontWeight: "300",
  },
  orderNumber: {
    right: 85,
    width: 70,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    top: 16,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
  },
  preventive: {
    width: 48,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    height: 16,
    right: 16,
  },
  projectName: {
    right: 261,
    width: 66,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    height: 16,
  },
  text1: {
    right: 197,
    width: 51,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    height: 16,
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
  },
  groupItem: {
    top: 80,
    width: 344,
    borderColor: Color.gray,
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
    height: 16,
  },
  mediumButton: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
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
    width: 53,
    textAlign: "center",
  },
  inProgress: {
    textAlign: "center",
    top: 14,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  completed: {
    width: 53,
    textAlign: "center",
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
  closeTicket: {
    color: Color.colorRed_100,
    width: 79,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  frameIcon2: {
    marginLeft: 4,
    overflow: "hidden",
    height: 16,
  },
  mediumButton1: {
    left: 187,
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    width: 140,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
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
  },
  completed1: {
    width: 53,
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
  rectangleContainer: {
    marginTop: 24,
  },
  groupChild9: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
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
  groupChild16: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowRadius: 20,
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
    marginLeft: -171.5,
    top: 176,
    height: 636,
    left: "50%",
    position: "absolute",
  },
  frameIcon9: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
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
    backgroundColor: Color.praimary,
    justifyContent: "flex-end",
    flexDirection: "row",
    borderStyle: "solid",
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
    width: 375,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    width: 135,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    height: 30,
    right: 0,
    backgroundColor: Color.whait,
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
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  icon: {
    width: "100%",
    height: "100%",
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
    textAlign: "center",
    top: 48,
    position: "absolute",
    color: Color.praimary,
    left: "50%",
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    fontSize: FontSize.size_base,
    lineHeight: 30,
    justifyContent: "center",
  },
  requestsItem: {
    marginTop: -406,
    top: "50%",
    backgroundColor: Color.colorGray_400,
    position: "absolute",
    height: 812,
    width: 375,
  },
  groupChild23: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.whait,
  },
  frameIcon12: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  filter: {
    width: 43,
    color: Color.praimary,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    marginLeft: 8,
  },
  frameContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 20,
    height: 20,
    marginLeft: 238,
  },
  frameGroup: {
    top: 24,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  status: {
    top: 76,
    right: 287,
    width: 64,
    color: Color.black,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  groupChild24: {
    top: 60,
    borderColor: Color.colorLightsteelblue_100,
    width: 376,
  },
  allRequests: {
    width: "79.28%",
    left: "22.52%",
    top: "16.67%",
    height: "66.67%",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    fontWeight: "600",
    color: Color.praimary,
  },
  frameIcon13: {
    width: "18.02%",
    right: "82.88%",
    left: "-0.9%",
  },
  filter1: {
    width: 111,
    height: 24,
  },
  completedRequest: {
    width: "83.55%",
    left: "16.45%",
    top: "16.67%",
    height: "66.67%",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon14: {
    width: "13.16%",
    right: "87.5%",
    left: "-0.66%",
  },
  filter2: {
    width: 152,
  },
  incompleteRequest: {
    width: "93.1%",
    left: "17.24%",
    top: "16.67%",
    height: "66.67%",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon16: {
    width: "13.79%",
    right: "86.9%",
    left: "-0.69%",
  },
  filter4: {
    width: 145,
  },
  filterParent: {
    top: 108,
    width: 162,
  },
  text12: {
    width: 291,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.whait,
  },
  button: {
    top: 317,
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    width: 343,
    justifyContent: "center",
    right: 16,
  },
  homeIndicator1: {
    width: 134,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    height: 34,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
  },
  groupContainer: {
    top: 390,
    height: 422,
    position: "absolute",
    width: 375,
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
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  requests: {
    height: 812,
    width: 375,
    backgroundColor: Color.colorGray_100,
  },
});

export default Requests2;
