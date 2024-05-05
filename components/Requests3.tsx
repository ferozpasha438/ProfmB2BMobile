import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Text, Pressable, Modal } from "react-native";
import Requests2 from "./Requests2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "./Home6";
import Requests1 from "./Requests1";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

type Requests3Type = {
  onClose?: () => void;
};

const Requests3 = ({ onClose }: Requests3Type) => {
  const [frameIconVisible, setFrameIconVisible] = useState(false);
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [mediumButtonContainer3Visible, setMediumButtonContainer3Visible] =
    useState(false);
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =
    useState(false);
  const [mediumButtonContainer7Visible, setMediumButtonContainer7Visible] =
    useState(false);
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

  return (
    <>
      <View style={[styles.requests, styles.iconLayout1]}>
        <View style={[styles.rectangleParent, styles.menuListFlexBox1]}>
          <View style={[styles.frameChild, styles.childGroupBorder]} />
          <View style={[styles.frameParent, styles.menuListFlexBox]}>
            <View style={[styles.fiRrZoomOutParent, styles.containerFlexBox]}>
              <Image
                style={[styles.fiRrZoomOutIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/firrzoomout.png")}
              />
              <Text style={[styles.searchForThe, styles.requests1Layout]}>
                Search for the order number, project name, company name...
              </Text>
            </View>
            <Pressable style={styles.frameIconLayout} onPress={openFrameIcon}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame24.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.requestsChild} />
        <View style={styles.groupParent}>
          <View style={styles.groupChildLayout1}>
            <View style={[styles.groupChild, styles.childGroupShadowBox]} />
            <Text style={styles.text}>21584</Text>
            <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.orderNumberTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.text1Typo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
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
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.rectangleView, styles.childGroupShadowBox]} />
            <Text style={styles.text}>23655</Text>
            <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.text1Position]}>
              Routine
            </Text>
            <Text style={[styles.projectName, styles.orderNumberTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.text1Typo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
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
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer3}
            >
              <Text style={[styles.closeTicket, styles.reviewTypo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild9, styles.childGroupShadowBox]} />
            <Text style={styles.text}>25416</Text>
            <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.orderNumberTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.text1Typo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
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
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer5}
            >
              <Text style={[styles.closeTicket, styles.reviewTypo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
            <View style={[styles.groupChild16, styles.childGroupShadowBox]} />
            <Text style={styles.text}>26890</Text>
            <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Position]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Position]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.orderNumberTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.text1Typo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Position]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Position]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.text2}>Request details</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
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
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer7}
            >
              <Text style={[styles.closeTicket, styles.reviewTypo]}>
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
        <View style={styles.tapPosition}>
          <View style={[styles.tapChild, styles.tapPosition]} />
          <Pressable
            style={[styles.arrow21, styles.text1Position]}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.requests1, styles.logInTypo]}>Requests</Text>
        </View>
        <View style={[styles.bottomNav, styles.bottomNavPosition]}>
          <View style={[styles.menuList, styles.menuListFlexBox]}>
            <Pressable
              style={styles.menuFlexBox}
              onPress={() => navigation.navigate("Home9")}
            >
              <Image
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame72.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </Pressable>
            <View style={[styles.menu5, styles.menuFlexBox]}>
              <Image
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame73.png")}
              />
              <Text style={[styles.requests2, styles.homeTypo]}>Requests</Text>
            </View>
            <Pressable
              style={[styles.menu5, styles.menuFlexBox]}
              onPress={() => navigation.navigate("MOREInformaion11")}
            >
              <View style={styles.menu31}>
                <View style={[styles.container, styles.containerFlexBox]}>
                  <Image
                    style={styles.frameIcon8}
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
                style={styles.frameIcon8}
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
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame65.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Reports</Text>
            </Pressable>
          </View>
          <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
            <View style={styles.line} />
          </View>
        </View>
        <Pressable
          style={[styles.requestsItem, styles.requestsItemPosition]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={[styles.vectorParent, styles.requestsItemPosition]}>
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
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuListFlexBox1: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  childGroupBorder: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  menuListFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameIconLayout: {
    height: 16,
    width: 16,
  },
  requests1Layout: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    height: 24,
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  orderNumberTypo: {
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
  text1Position: {
    top: 48,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
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
  completedTypo: {
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
  progressLayout: {
    width: 52,
    right: 99,
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
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
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
  tapPosition: {
    height: 88,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  logInTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  bottomNavPosition: {
    bottom: 0,
    position: "absolute",
    width: 375,
  },
  homeTypo: {
    marginTop: 6,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  menuFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  requestsItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
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
    zIndex: 0,
    height: 48,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
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
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
  },
  fiRrZoomOutParent: {
    alignItems: "center",
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
  frameParent: {
    width: 311,
    justifyContent: "space-between",
    zIndex: 1,
    alignItems: "center",
    left: 16,
    flexDirection: "row",
    top: 12,
  },
  rectangleParent: {
    top: 112,
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
  },
  text: {
    right: 52,
    width: 31,
    color: Color.praimary,
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    top: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
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
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    color: Color.praimary,
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
  frameIcon: {
    marginLeft: 6,
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
    width: 53,
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
    textTransform: "capitalize",
    width: 47,
    color: Color.praimary,
  },
  frameIcon1: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton1: {
    borderColor: Color.praimary,
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
  closeTicket: {
    color: Color.colorRed_100,
    width: 79,
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
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
  arrow21: {
    right: 335,
    width: 24,
    height: 24,
  },
  requests1: {
    marginLeft: -74.5,
    width: 150,
    top: 48,
    position: "absolute",
    fontWeight: "700",
    color: Color.praimary,
    left: "50%",
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    fontSize: FontSize.size_base,
    justifyContent: "center",
  },
  frameIcon8: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    marginTop: 6,
    fontSize: FontSize.size_xs,
  },
  requests2: {
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
    borderStyle: "solid",
    justifyContent: "flex-end",
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
    backgroundColor: Color.whait,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 375,
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
  requestsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_600,
    marginLeft: -187.5,
    height: 812,
    width: 375,
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
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  logIn: {
    height: "50%",
    marginLeft: -143.5,
    top: "25%",
    letterSpacing: 0.6,
    lineHeight: 44,
    width: 288,
    color: Color.whait,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    left: "50%",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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
    fontFamily: FontFamily.poppinsSemiBold,
    width: 136,
    lineHeight: 16,
    textAlign: "center",
    fontWeight: "600",
    color: Color.black,
    height: 24,
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
    overflow: "hidden",
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
    left: 21,
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

export default Requests3;
