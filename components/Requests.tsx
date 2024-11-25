import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

type RequestsType = {
  onClose?: () => void;
};

const Requests = ({ onClose }: RequestsType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.requests, styles.iconLayout1]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childGroupBorder]} />
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
      <View style={styles.requestsChild} />
      <View style={styles.groupParent}>
        <View style={styles.groupChildLayout1}>
          <View style={[styles.groupChild, styles.childGroupShadowBox]} />
          <Text style={[styles.text, styles.textTypo]}>21584</Text>
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
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedFlexBox]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
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
          <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Position]}>
            Maintenance type :
          </Text>
          <Text style={[styles.preventive, styles.text1Position]}>Routine</Text>
          <Text style={[styles.projectName, styles.orderNumberTypo]}>
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
            <Text style={[styles.inProgress1, styles.completed1Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.completed1Typo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
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
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.completed1Typo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
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
            <Text style={[styles.inProgress1, styles.completed1Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.completed1Typo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
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
        <Text style={[styles.requests2, styles.requests2Typo]}>Requests</Text>
      </View>
      <View style={[styles.requestsItem, styles.faceIdPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={styles.yourTicketHasBeenSuccessfuParent}>
          <Text style={[styles.yourTicketHas, styles.completedFlexBox]}>
            Your Ticket has been successfully Closed
          </Text>
          <Text style={[styles.yourTicketHas1, styles.requests2Typo]}>
            Your Ticket has been Closed and you can submit a new ticket at any
            time
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={styles.httpslottiefilescomanimatIcon}
          resizeMode="cover"
          source={require("../assets/httpslottiefilescomanimationsdelete8rw2zud6fg.png")}
        />
      </View>
      <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
        <View style={styles.line} />
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
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  childGroupBorder: {
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
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
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    justifyContent: "center",
  },
  progressLayout: {
    width: 52,
    right: 99,
  },
  mediumPosition: {
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  tapPosition: {
    height: 88,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
    width: 375,
  },
  requests2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  faceIdPosition: {
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
    height: 48,
    zIndex: 0,
    width: 343,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
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
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    lineHeight: 30,
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
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text: {
    right: 52,
    width: 31,
    lineHeight: 25,
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    top: 16,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 100,
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
    fontSize: FontSize.size_3xs,
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
    color: Color.whait,
    textAlign: "right",
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
    width: 53,
    top: 14,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  inProgress: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    justifyContent: "center",
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  completed: {
    width: 53,
    top: 14,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    height: 16,
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
  deleteTicket: {
    color: Color.colorRed_100,
    width: 85,
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
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    width: 140,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    flexDirection: "row",
    borderStyle: "solid",
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
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
    width: 52,
    right: 99,
  },
  completed1: {
    width: 53,
    right: 0,
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
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  groupChild16: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
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
    fontWeight: "300",
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
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
  requestsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    height: 812,
    width: 375,
  },
  yourTicketHas: {
    fontSize: FontSize.size_2xl,
    textTransform: "capitalize",
    width: 314,
    height: 53,
    textAlign: "center",
    lineHeight: 30,
  },
  yourTicketHas1: {
    width: 315,
    height: 56,
    marginTop: 8,
    color: Color.colorLightsteelblue_100,
  },
  yourTicketHasBeenSuccessfuParent: {
    top: 186,
    right: 14,
    height: 117,
    alignItems: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "5.97%",
    width: "5.83%",
    top: "5.97%",
    right: "5.83%",
    bottom: "88.06%",
    left: "88.34%",
    overflow: "hidden",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    top: 32,
    right: 107,
    width: 130,
    height: 130,
    position: "absolute",
  },
  faceId: {
    marginTop: -168,
    borderRadius: Border.br_mini,
    height: 335,
    marginLeft: -171.5,
    overflow: "hidden",
    width: 343,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: "50%",
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
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default Requests;
