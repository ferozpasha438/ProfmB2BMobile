import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

type VerificationCode1Type = {
  onClose?: () => void;
};

const VerificationCode1 = ({ onClose }: VerificationCode1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <View style={[styles.groupChild, styles.faceIdShadowBox]} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.incomplete, styles.completedTypo]}>
            Incomplete
          </Text>
        </View>
        <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
      </View>
      <Text style={[styles.thereAre3Container, styles.deleteTicketFlexBox]}>
        <Text style={styles.thereAre3Container1}>
          <Text style={styles.thereAre}>{`There are `}</Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.thereAre}> incomplete services</Text>
        </Text>
      </Text>
      <View style={[styles.verificationCodeChild, styles.groupLayout]} />
      <View style={styles.verificationCodeItem} />
      <View style={styles.groupParent}>
        <View style={styles.groupViewLayout}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text1, styles.textTypo]}>23655</Text>
          <Text style={[styles.orderNumber, styles.text1Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text2Typo]}>
            Maintenance type :
          </Text>
          <Text style={[styles.routine, styles.text2Typo]}>Routine</Text>
          <Text style={[styles.projectName, styles.text1Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text2, styles.text2Typo]}>01/11/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text2Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumFlexBox]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text3, styles.text3Typo]}>
              Request details
            </Text>
            <Image
              style={styles.frameIcon}
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
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChild4Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.completed1FlexBox]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressClr]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumFlexBox]}>
            <Text style={[styles.deleteTicket, styles.text3Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text1, styles.textTypo]}>25416</Text>
          <Text style={[styles.orderNumber, styles.text1Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text2Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.routine, styles.text2Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.text1Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text2, styles.text2Typo]}>10/31/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text2Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumFlexBox]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text3, styles.text3Typo]}>
              Request details
            </Text>
            <Image
              style={styles.frameIcon}
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
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChild4Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Text
              style={[styles.incomplete1, styles.completed1FlexBox]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress1, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressClr]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumFlexBox]}>
            <Text style={[styles.deleteTicket, styles.text3Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text1, styles.textTypo]}>26890</Text>
          <Text style={[styles.orderNumber, styles.text1Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text2Typo]}>
            Maintenance type :
          </Text>
          <Text style={[styles.routine, styles.text2Typo]}>{`Routine `}</Text>
          <Text style={[styles.projectName, styles.text1Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text2, styles.text2Typo]}>10/15/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text2Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumFlexBox]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text3, styles.text3Typo]}>
              Request details
            </Text>
            <Image
              style={styles.frameIcon}
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
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChild4Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.completed1FlexBox]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressClr]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumFlexBox]}>
            <Text style={[styles.deleteTicket, styles.text3Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupChild18Position}>
        <View style={[styles.groupChild18, styles.groupChild18Position]} />
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("Home9")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.servicesProvided, styles.yourTicketHasTypo]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.verificationCodeInner, styles.faceIdPosition]} />
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
      <View style={[styles.webViewbottom, styles.webViewbottomSpaceBlock]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={styles.yourTicketHasBeenSuccessfuParent}>
          <Text style={[styles.yourTicketHas, styles.yourTicketHasTypo]}>
            Your Ticket has been successfully Closed
          </Text>
          <Text style={[styles.yourTicketHas1, styles.yourTicketHas1Layout]}>
            Your Ticket has been Closed and you can submit a new ticket at any
            time
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={styles.httpslottiefilescomanimatIcon}
          resizeMode="cover"
          source={require("../assets/httpslottiefilescomanimationsdelete8rw2zud6fg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout2: {
    height: 48,
    position: "absolute",
  },
  faceIdShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
  },
  groupLayout: {
    height: 38,
    position: "absolute",
  },
  completedTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  deleteTicketFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "300",
    color: Color.praimary,
  },
  text1Typo: {
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text2Typo: {
    top: 48,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  mediumFlexBox: {
    flexDirection: "row",
    top: 142,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    position: "absolute",
  },
  text3Typo: {
    fontWeight: "600",
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  groupChildLayout1: {
    width: 91,
    borderTopWidth: 1,
    height: 1,
    borderColor: Color.gray,
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
  completed1FlexBox: {
    width: 53,
    justifyContent: "center",
    top: 14,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  progressPosition: {
    width: 52,
    right: 99,
    justifyContent: "center",
    top: 14,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  inProgressClr: {
    color: Color.gray,
    fontWeight: "300",
  },
  groupViewLayout: {
    height: 190,
    width: 343,
  },
  groupChild18Position: {
    height: 87,
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    position: "absolute",
    width: 375,
  },
  arrow21Position: {
    height: 24,
    top: 48,
    position: "absolute",
  },
  yourTicketHasTypo: {
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  webViewbottomSpaceBlock: {
    marginLeft: -187.5,
    width: 375,
  },
  yourTicketHas1Layout: {
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    shadowRadius: 4,
    elevation: 4,
    right: 0,
    top: 0,
    height: 48,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary,
    width: 157,
    height: 38,
    right: 0,
    top: 0,
  },
  incomplete: {
    top: 10,
    right: 42,
    textAlign: "center",
    color: Color.whait,
  },
  rectangleGroup: {
    right: 5,
    width: 157,
    height: 38,
    top: 5,
  },
  completed: {
    top: 15,
    right: 224,
    color: Color.praimary,
    textAlign: "center",
  },
  rectangleParent: {
    top: 111,
    width: 343,
    height: 48,
    right: 16,
  },
  thereAre: {
    color: Color.colorLightsteelblue_100,
  },
  text: {
    color: Color.praimary,
  },
  thereAre3Container1: {
    width: "100%",
  },
  thereAre3Container: {
    top: 183,
    right: 206,
    width: 153,
    height: 16,
    alignItems: "center",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  verificationCodeChild: {
    top: 116,
    right: 216,
    backgroundColor: Color.colorGainsboro_200,
    width: 125,
  },
  verificationCodeItem: {
    marginLeft: -169.5,
    top: 857,
    width: 339,
    height: 49,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
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
  text1: {
    right: 52,
    width: 31,
    lineHeight: 25,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  routine: {
    width: 48,
    fontWeight: "300",
    color: Color.praimary,
    right: 16,
    top: 48,
  },
  projectName: {
    right: 261,
    width: 66,
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text2: {
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
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text3: {
    textAlign: "right",
    color: Color.whait,
  },
  frameIcon: {
    width: 16,
    marginLeft: 6,
    height: 16,
    overflow: "hidden",
  },
  mediumButton: {
    left: 16,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
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
    color: Color.black,
    fontWeight: "700",
  },
  inProgress: {
    color: Color.gray,
    fontWeight: "300",
  },
  completed1: {
    width: 53,
    justifyContent: "center",
    top: 14,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
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
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    borderStyle: "solid",
    flexDirection: "row",
    top: 142,
  },
  inProgress1: {
    color: Color.black,
    fontWeight: "700",
  },
  groupView: {
    marginTop: 24,
  },
  groupParent: {
    top: 215,
    height: 597,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  groupChild18: {
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
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  servicesProvided: {
    marginLeft: -67.5,
    width: 135,
    fontSize: FontSize.size_base,
    height: 24,
    top: 48,
    position: "absolute",
    left: "50%",
    color: Color.praimary,
  },
  verificationCodeInner: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    width: 375,
    height: 812,
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
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    top: 0,
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
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    backgroundColor: Color.colorDimgray_100,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  yourTicketHas: {
    fontSize: FontSize.size_2xl,
    width: 314,
    height: 53,
    color: Color.black,
  },
  yourTicketHas1: {
    width: 315,
    height: 56,
    marginTop: 8,
    fontSize: FontSize.size_base,
    color: Color.colorLightsteelblue_100,
    textAlign: "center",
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
    shadowRadius: 10,
    elevation: 10,
    height: 335,
    marginLeft: -171.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
    overflow: "hidden",
  },
  verificationCode: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
    maxWidth: "100%",
  },
});

export default VerificationCode1;
