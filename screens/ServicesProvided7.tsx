import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ServicesProvided7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.servicesProvided7}>
      <View
        style={[
          styles.thereAre1ServicesOutOfScParent,
          styles.mediumButtonFlexBox,
        ]}
      >
        <Text style={[styles.thereAre1Container, styles.textFlexBox]}>
          <Text style={styles.thereAre1Container1}>
            <Text style={styles.thereAre}>{`There are `}</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.thereAre}> services out of scope</Text>
          </Text>
        </Text>
        <Pressable
          style={styles.frameLayout}
          onPress={() => navigation.navigate("FilterOutOfScope")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.servicesProvided7Child, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided6")}
      />
      <Pressable
        style={[styles.servicesProvided7Item, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided4")}
      />
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.completedParent, styles.parentPosition1]}>
            <Text style={styles.completed}>Completed</Text>
            <Text style={[styles.text1, styles.textTypo]}>( 35 )</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.incompleteParent, styles.parentPosition1]}>
            <Text style={[styles.incomplete, styles.textText]}>Incomplete</Text>
            <Text style={[styles.text2, styles.textText]}>{`( 63 ) `}</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <View style={[styles.outOfScopeParent, styles.parentPosition1]}>
            <Text style={[styles.outOfScope, styles.textText]}>
              out of scope
            </Text>
            <Text style={[styles.text3, styles.textText]}>( 2 )</Text>
          </View>
        </View>
        <View style={styles.groupLayout}>
          <View style={[styles.rectangleView, styles.viewBorder]} />
          <View style={[styles.inTransitParent, styles.parentPosition1]}>
            <Text style={[styles.inTransit, styles.textText]}>in transit</Text>
            <Text style={[styles.text4, styles.textText]}>( 1 )</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.parentLayout]}>
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <Text style={[styles.text5, styles.textLayout]}>21584</Text>
        <Text style={[styles.orderNumber, styles.textLayout]}>
          Order number :
        </Text>
        <Text style={[styles.maintenanceType, styles.parentPosition]}>
          Maintenance type :
        </Text>
        <Text
          style={[styles.preventive, styles.parentPosition]}
        >{`Preventive `}</Text>
        <Text style={[styles.projectName, styles.textLayout]}>
          Project name :
        </Text>
        <Text style={[styles.jeddahYachtClub, styles.text5Position]}>
          Jeddah Yacht Club
        </Text>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.text6, styles.iconPosition1]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.iconPosition1]}>
            Date of request :
          </Text>
        </View>
        <Text style={[styles.within12Days, styles.textLayout]}>
          Within 12 days it will arrive
        </Text>
        <View style={[styles.lineView, styles.viewBorder]} />
        <Pressable
          style={[styles.mediumButton, styles.groupChild1Layout]}
          onPress={() => navigation.navigate("Reports11")}
        >
          <Text style={[styles.text7, styles.textLayout]}>Ticket Details</Text>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </Pressable>
        <View style={styles.groupContainer}>
          <Image
            style={[styles.groupIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/group-238695.png")}
          />
          <Text style={[styles.ticketReceived, styles.poIssuedTypo]}>
            Ticket received
          </Text>
          <Text style={[styles.quotationSubmitted, styles.poIssuedTypo]}>
            quotation submitted
          </Text>
          <Text style={[styles.poIssued, styles.poIssuedTypo]}>
            P.O. Issued
          </Text>
          <Text style={[styles.workInProgress, styles.ticketClosedTypo]}>
            Work in progress
          </Text>
          <Text
            style={[styles.ticketClosed, styles.ticketClosedTypo]}
          >{`ticket Closed `}</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChild2Layout]}>
          <View style={[styles.groupChild2, styles.groupChild2Layout]} />
          <Text style={[styles.outOfScope1, styles.outOfScope1FlexBox]}>
            out of scope
          </Text>
        </View>
      </View>
      <View style={styles.groupChild3Position}>
        <View style={[styles.groupChild3, styles.groupChild3Position]} />
        <View style={[styles.iphoneXOrNewer, styles.iconPosition1]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.iconPosition1]}
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
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side.png")}
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
      <View style={styles.webViewbottom}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumButtonFlexBox: {
    flexDirection: "row",
    left: 16,
    alignItems: "center",
  },
  textFlexBox: {
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  servicesLayout: {
    height: 38,
    width: 88,
    backgroundColor: Color.colorGainsboro_200,
    top: 116,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    height: "100%",
    width: "100%",
  },
  parentPosition1: {
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  groupLayout: {
    marginLeft: 16,
    height: 32,
    width: 150,
  },
  textText: {
    textTransform: "capitalize",
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  viewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  parentLayout: {
    width: 343,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorBlueviolet,
    borderStyle: "solid",
    backgroundColor: Color.whait,
  },
  textLayout: {
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
  },
  parentPosition: {
    top: 57,
    height: 16,
    position: "absolute",
  },
  text5Position: {
    top: 25,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  iconPosition1: {
    top: 0,
    position: "absolute",
  },
  groupChild1Layout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameLayout: {
    width: 16,
    height: 16,
  },
  poIssuedTypo: {
    height: 29,
    fontSize: FontSize.size_4xs,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  ticketClosedTypo: {
    color: Color.gray,
    height: 29,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_4xs,
    top: 14,
    textTransform: "capitalize",
    fontWeight: "300",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  groupChild2Layout: {
    height: 19,
    top: 0,
    width: 63,
    position: "absolute",
  },
  outOfScope1FlexBox: {
    justifyContent: "center",
    textAlign: "center",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  groupChild3Position: {
    height: 87,
    width: 375,
    top: 0,
    left: "50%",
    marginLeft: -187.5,
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
  thereAre: {
    color: Color.colorLightsteelblue_100,
  },
  text: {
    color: Color.praimary,
  },
  thereAre1Container1: {
    width: "100%",
  },
  thereAre1Container: {
    width: 158,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thereAre1ServicesOutOfScParent: {
    top: 183,
    justifyContent: "space-between",
    alignItems: "center",
    width: 343,
    position: "absolute",
  },
  servicesProvided7Child: {
    right: 32,
  },
  servicesProvided7Item: {
    right: 144,
  },
  groupChild: {
    position: "absolute",
  },
  completed: {
    width: 63,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  text1: {
    width: 30,
    marginLeft: 2,
    color: Color.color,
    fontWeight: "300",
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  completedParent: {
    left: 31,
  },
  rectangleParent: {
    opacity: 0.5,
    height: 32,
    width: 150,
  },
  groupItem: {
    position: "absolute",
  },
  incomplete: {
    width: 65,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  text2: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    width: 30,
    fontWeight: "300",
  },
  incompleteParent: {
    left: 27,
  },
  rectangleGroup: {
    opacity: 0.5,
  },
  groupInner: {
    position: "absolute",
  },
  outOfScope: {
    width: 75,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  text3: {
    width: 21,
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  outOfScopeParent: {
    left: 26,
  },
  rectangleView: {
    borderColor: Color.praimary,
    borderWidth: 1.5,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    height: "100%",
    width: "100%",
  },
  inTransit: {
    width: 54,
    color: Color.black,
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  text4: {
    width: 23,
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  inTransitParent: {
    left: 36,
  },
  groupParent: {
    top: 111,
    width: 359,
    justifyContent: "flex-end",
    left: "50%",
    marginLeft: -187.5,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild1: {
    top: 9,
    borderWidth: 1,
    height: 234,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
    right: 0,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.colorBlueviolet,
    width: 343,
  },
  text5: {
    right: 52,
    width: 31,
    top: 25,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
    fontWeight: "300",
    color: Color.praimary,
  },
  orderNumber: {
    right: 85,
    width: 70,
    top: 25,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
    color: Color.black,
    fontWeight: "700",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    display: "flex",
    textAlign: "left",
    top: 57,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    fontWeight: "700",
  },
  preventive: {
    width: 48,
    right: 16,
    fontWeight: "300",
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    top: 57,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  projectName: {
    right: 261,
    width: 66,
    top: 25,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
    color: Color.black,
    fontWeight: "700",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    fontWeight: "300",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  text6: {
    width: 51,
    right: 0,
    fontWeight: "300",
    color: Color.praimary,
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  dateOfRequest: {
    right: 53,
    width: 77,
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  parent: {
    right: 197,
    width: 130,
  },
  within12Days: {
    top: 89,
    right: 200,
    color: Color.colorRed_100,
    width: 127,
    textTransform: "capitalize",
    height: 16,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  lineView: {
    top: 121,
    borderColor: Color.gray,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    right: 0,
  },
  text7: {
    fontSize: FontSize.size_sm,
    color: Color.whait,
    textAlign: "right",
    fontWeight: "600",
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    top: 195,
    backgroundColor: Color.praimary,
    paddingHorizontal: 101,
    paddingVertical: Padding.p_7xs_5,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
  },
  groupIcon: {
    left: 15,
    width: 274,
    height: 10,
  },
  ticketReceived: {
    width: 40,
    left: 0,
  },
  quotationSubmitted: {
    left: 65,
    width: 44,
  },
  poIssued: {
    left: 128,
    width: 49,
  },
  workInProgress: {
    left: 194,
    width: 49,
  },
  ticketClosed: {
    left: 270,
    width: 29,
  },
  groupContainer: {
    top: 136,
    left: 19,
    width: 299,
    height: 43,
    position: "absolute",
  },
  groupChild2: {
    borderRadius: 4,
    left: 0,
    borderColor: Color.colorBlueviolet,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderWidth: 1.5,
  },
  outOfScope1: {
    top: 3,
    left: 3,
    fontSize: 9,
    lineHeight: 19,
    width: 57,
    height: 13,
    fontWeight: "600",
    color: Color.black,
    position: "absolute",
  },
  rectangleParent2: {
    left: 280,
  },
  rectangleParent1: {
    top: 206,
    height: 243,
    right: 16,
  },
  groupChild3: {
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
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  servicesProvided: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    width: 135,
    justifyContent: "center",
    textAlign: "center",
    textTransform: "capitalize",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    left: "50%",
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 30,
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  servicesProvided7: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ServicesProvided7;
