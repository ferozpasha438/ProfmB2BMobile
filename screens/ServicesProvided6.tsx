import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const ServicesProvided6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.servicesProvided6}>
      <Pressable
        style={styles.servicesProvided6Child}
        onPress={() => navigation.navigate("ServicesProvided5")}
      />
      <View style={styles.servicesProvided6Item} />
      <View style={styles.groupParent}>
        <View style={styles.rectangleLayout}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo2]}>23655</Text>
          <Text style={[styles.orderNumber, styles.incompleteClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text style={[styles.routine, styles.text1Typo]}>Routine</Text>
          <Text style={[styles.projectName, styles.incompleteClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo2]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>01/11/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <Pressable
            style={styles.mediumButton}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>Ticket Details</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
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
            <Text style={[styles.inProgress, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedClr]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("CloseTicket")}
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
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo2]}>25416</Text>
          <Text style={[styles.orderNumber, styles.incompleteClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.routine, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.incompleteClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo2]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/31/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <Pressable
            style={styles.mediumButton}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>Ticket Details</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
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
            <Text style={[styles.inProgress1, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedClr]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("CloseTicket")}
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
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo2]}>26890</Text>
          <Text style={[styles.orderNumber, styles.incompleteClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text style={[styles.routine, styles.text1Typo]}>{`Routine `}</Text>
          <Text style={[styles.projectName, styles.incompleteClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo2]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/15/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <Pressable
            style={[styles.mediumButton4, styles.mediumSpaceBlock]}
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
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
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
            <Text style={[styles.inProgress, styles.progressPosition]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedClr]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("CloseTicket")}
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
      <View style={styles.thereAre63IncompleteServicParent}>
        <Text
          style={[styles.thereAre63Container, styles.servicesProvidedLayout]}
        >
          <Text style={styles.thereAre63Container1}>
            <Text style={styles.thereAre}>{`There are `}</Text>
            <Text style={styles.text9}>63</Text>
            <Text style={styles.thereAre}> incomplete services</Text>
          </Text>
        </Text>
        <Pressable
          style={styles.frameIconLayout}
          onPress={() => navigation.navigate("FilterIncomplete")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.servicesProvided6Inner, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("ServicesProvided4")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("ServicesProvided5")}
      />
      <View style={[styles.groupContainer, styles.webViewbottomPosition]}>
        <View style={styles.groupView}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.completedParent, styles.parentPosition]}>
            <Text style={[styles.completed3, styles.inTransitTypo]}>
              Completed
            </Text>
            <Text style={[styles.text10, styles.textTypo1]}>( 35 )</Text>
          </View>
        </View>
        <View style={styles.rectangleParentLayout}>
          <View style={[styles.groupChild17, styles.groupChildShadowBox]} />
          <View style={[styles.incompleteParent, styles.parentPosition]}>
            <Text style={[styles.incomplete3, styles.textTypo]}>
              Incomplete
            </Text>
            <Text style={[styles.text11, styles.textTypo]}>{`( 63 ) `}</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.outOfScopeParent, styles.parentPosition]}>
            <Text style={[styles.outOfScope, styles.textTypo]}>
              out of scope
            </Text>
            <Text style={[styles.text12, styles.textTypo]}>( 2 )</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.inTransitParent, styles.parentPosition]}>
            <Text style={[styles.inTransit, styles.textTypo]}>in transit</Text>
            <Text style={[styles.text12, styles.textTypo]}>( 1 )</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupChild20Position}>
        <View style={[styles.groupChild20, styles.groupChild20Position]} />
        <View style={[styles.iphoneXOrNewer, styles.batteryIconPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
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
            source={require("../assets/left-side1.png")}
          />
        </View>
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
        <Text style={[styles.servicesProvided, styles.arrow21Position]}>
          Services provided
        </Text>
      </View>
      <View style={[styles.webViewbottom, styles.webViewbottomPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    height: 16,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  incompleteClr: {
    color: Color.black,
    fontWeight: "700",
  },
  text1Typo: {
    top: 48,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text2Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
  },
  lineViewLayout: {
    width: 91,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderColor: Color.gray,
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
    justifyContent: "center",
    textAlign: "center",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  progressPosition: {
    width: 52,
    right: 99,
    justifyContent: "center",
    textAlign: "center",
    top: 14,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  completedClr: {
    color: Color.gray,
    fontWeight: "300",
  },
  mediumSpaceBlock: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    flexDirection: "row",
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleLayout: {
    height: 190,
    width: 343,
  },
  servicesProvidedLayout: {
    lineHeight: 30,
    fontWeight: "700",
  },
  rectanglePressableLayout: {
    width: 88,
    height: 38,
    backgroundColor: Color.colorGainsboro_200,
    top: 116,
    position: "absolute",
  },
  webViewbottomPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  inTransitTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    textAlign: "left",
  },
  textTypo1: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
  },
  groupChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleParentLayout: {
    marginLeft: 16,
    height: 32,
    width: 150,
  },
  groupChild20Position: {
    height: 87,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  batteryIconPosition: {
    top: 0,
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
  servicesProvided6Child: {
    right: 216,
    width: 125,
    height: 38,
    backgroundColor: Color.colorGainsboro_200,
    top: 116,
    position: "absolute",
  },
  servicesProvided6Item: {
    marginLeft: -169.5,
    top: 857,
    width: 339,
    height: 49,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChildShadowBox1: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  text: {
    right: 52,
    width: 31,
    color: Color.praimary,
    fontWeight: "300",
    lineHeight: 25,
    top: 16,
    height: 16,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    height: 16,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    top: 16,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  routine: {
    right: 16,
    width: 48,
    color: Color.praimary,
    fontWeight: "300",
  },
  projectName: {
    right: 261,
    width: 66,
    height: 16,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    color: Color.praimary,
    fontWeight: "300",
    top: 16,
    height: 16,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text1: {
    right: 197,
    width: 51,
    color: Color.praimary,
    fontWeight: "300",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupItem: {
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
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    flexDirection: "row",
    backgroundColor: Color.praimary,
    left: 16,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupInner: {
    left: 127,
  },
  lineView: {
    left: 29,
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
    color: Color.gray,
    fontWeight: "300",
  },
  completed: {
    width: 53,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
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
  closeTicket: {
    color: Color.colorRed_100,
    width: 79,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  frameIcon1: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton1: {
    left: 178,
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    width: 149,
    justifyContent: "center",
    borderStyle: "solid",
  },
  inProgress1: {
    color: Color.black,
    fontWeight: "700",
  },
  rectangleGroup: {
    marginTop: 24,
  },
  mediumButton4: {
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_sm,
    left: 16,
  },
  groupParent: {
    marginLeft: -171.5,
    top: 199,
    height: 597,
    left: "50%",
    position: "absolute",
  },
  thereAre: {
    color: Color.colorLightsteelblue_100,
  },
  text9: {
    color: Color.praimary,
  },
  thereAre63Container1: {
    width: "100%",
  },
  thereAre63Container: {
    width: 163,
    height: 16,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thereAre63IncompleteServicParent: {
    top: 167,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 16,
    alignItems: "center",
    width: 343,
    position: "absolute",
  },
  servicesProvided6Inner: {
    right: 142,
  },
  rectanglePressable: {
    right: 255,
  },
  completed3: {
    width: 63,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text10: {
    width: 30,
    marginLeft: 2,
    color: Color.color,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  completedParent: {
    left: 31,
  },
  groupView: {
    opacity: 0.5,
    height: 32,
    width: 150,
  },
  groupChild17: {
    borderColor: Color.praimary,
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  incomplete3: {
    width: 65,
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontWeight: "700",
    textTransform: "capitalize",
  },
  text11: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    width: 30,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  incompleteParent: {
    left: 27,
  },
  outOfScope: {
    width: 74,
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontWeight: "300",
  },
  text12: {
    width: 23,
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    textTransform: "capitalize",
    fontWeight: "300",
  },
  outOfScopeParent: {
    left: 26,
  },
  rectangleParent2: {
    opacity: 0.5,
  },
  inTransit: {
    width: 54,
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    textAlign: "left",
    fontWeight: "300",
  },
  inTransitParent: {
    left: 36,
  },
  groupContainer: {
    top: 111,
    flexDirection: "row",
  },
  groupChild20: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.whait,
    height: 87,
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
    width: 24,
    height: 11,
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
    top: 12,
    height: 21,
    width: 54,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    overflow: "hidden",
    left: "50%",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  servicesProvided: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    width: 135,
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    height: 24,
    color: Color.praimary,
    left: "50%",
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
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  servicesProvided6: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ServicesProvided6;
