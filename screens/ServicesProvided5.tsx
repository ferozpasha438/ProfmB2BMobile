import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ServicesProvided5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.servicesProvided5}>
      <View style={styles.thereAre2ServicesOutOfScParent}>
        <Text style={styles.thereAre2Container}>
          <Text style={styles.thereAre2Container1}>
            <Text style={styles.thereAre}>{`There are `}</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.thereAre}> services out of scope</Text>
          </Text>
        </Text>
        <Pressable
          style={styles.frameIconLayout}
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
        style={[styles.servicesProvided5Child, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided6")}
      />
      <Pressable
        style={[styles.servicesProvided5Item, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided4")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={styles.text1}>21584</Text>
        <Text style={[styles.orderNumber, styles.orderNumberClr]}>
          Order number :
        </Text>
        <Text style={[styles.maintenanceType, styles.text2Typo]}>
          Maintenance type :
        </Text>
        <Text
          style={[styles.preventive, styles.text2Typo]}
        >{`Preventive `}</Text>
        <Text style={[styles.projectName, styles.orderNumberClr]}>
          Project name :
        </Text>
        <Text style={[styles.jeddahYachtClub, styles.orderNumberTypo]}>
          Jeddah Yacht Club
        </Text>
        <Text style={[styles.text2, styles.text2Typo]}>10/10/2023</Text>
        <Text style={[styles.dateOfRequest, styles.text2Typo]}>
          Date of request :
        </Text>
        <View style={styles.groupItem} />
        <Pressable
          style={styles.mediumButton}
          onPress={() => navigation.navigate("VerificationCode4")}
        >
          <Text style={[styles.text3, styles.text3Typo]}>Ticket Details</Text>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </Pressable>
        <Pressable
          style={styles.mediumButton1}
          onPress={() => navigation.navigate("CloseTicket")}
        >
          <Text style={[styles.cancelTicket, styles.text3Typo]}>
            cancel ticket
          </Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame34.png")}
          />
        </Pressable>
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            resizeMode="cover"
            source={require("../assets/group-238695.png")}
          />
          <Text style={[styles.ticketReceived, styles.poIssuedTypo]}>
            Ticket received
          </Text>
          <Text style={[styles.quotationSubmitted, styles.poIssuedTypo]}>
            quotation submitted
          </Text>
          <Text style={[styles.poIssued, styles.issuedPosition]}>
            P.O. Issued
          </Text>
          <Text style={[styles.workInProgress, styles.poIssued1Typo]}>
            Work in progress
          </Text>
          <Text
            style={[styles.ticketClosed, styles.poIssued1Typo]}
          >{`ticket Closed `}</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            resizeMode="cover"
            source={require("../assets/group-2386951.png")}
          />
          <Text style={[styles.ticketReceived, styles.poIssuedTypo]}>
            Ticket received
          </Text>
          <Text style={[styles.quotationSubmitted, styles.poIssuedTypo]}>
            quotation submitted
          </Text>
          <Text style={[styles.poIssued1, styles.poIssued1Typo]}>
            P.O. Issued
          </Text>
          <Text style={[styles.workInProgress, styles.poIssued1Typo]}>
            Work in progress
          </Text>
          <Text
            style={[styles.ticketClosed, styles.poIssued1Typo]}
          >{`ticket Closed `}</Text>
        </View>
        <Text style={styles.text1}>21584</Text>
        <Text style={[styles.orderNumber, styles.orderNumberClr]}>
          Order number :
        </Text>
        <Text style={[styles.maintenanceType, styles.text2Typo]}>
          Maintenance type :
        </Text>
        <Text
          style={[styles.preventive, styles.text2Typo]}
        >{`Preventive `}</Text>
        <Text style={[styles.projectName, styles.orderNumberClr]}>
          Project name :
        </Text>
        <Text style={[styles.jeddahYachtClub, styles.orderNumberTypo]}>
          Jeddah Yacht Club
        </Text>
        <Text style={[styles.text2, styles.text2Typo]}>10/10/2023</Text>
        <Text style={[styles.dateOfRequest, styles.text2Typo]}>
          Date of request :
        </Text>
        <View style={styles.groupItem} />
        <Pressable
          style={styles.mediumButton}
          onPress={() => navigation.navigate("VerificationCode4")}
        >
          <Text style={[styles.text3, styles.text3Typo]}>Ticket Details</Text>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </Pressable>
        <Pressable
          style={styles.mediumButton1}
          onPress={() => navigation.navigate("CloseTicket")}
        >
          <Text style={[styles.cancelTicket, styles.text3Typo]}>
            cancel ticket
          </Text>
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame34.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frameView}>
        <View style={styles.rectangleContainer}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.completedParent, styles.parentPosition]}>
            <Text style={[styles.completed, styles.completedTypo]}>
              Completed
            </Text>
            <Text style={[styles.text7, styles.textTypo]}>( 35 )</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.incompleteParent, styles.parentPosition]}>
            <Text style={[styles.incomplete, styles.completedTypo]}>
              Incomplete
            </Text>
            <Text style={[styles.text8, styles.textTypo]}>{`( 63 ) `}</Text>
          </View>
        </View>
        <View style={styles.groupViewLayout}>
          <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
          <View style={[styles.outOfScopeParent, styles.parentPosition]}>
            <Text style={[styles.outOfScope, styles.completedTypo]}>
              out of scope
            </Text>
            <Text style={[styles.text9, styles.textTypo]}>( 2 )</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.inTransitParent, styles.parentPosition]}>
            <Text style={[styles.inTransit, styles.completedTypo]}>
              in transit
            </Text>
            <Text style={[styles.text10, styles.textTypo]}>( 1 )</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupChild5Position}>
        <View style={[styles.groupChild5, styles.groupChild5Position]} />
        <View style={[styles.iphoneXOrNewer, styles.groupInnerPosition]}>
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
  servicesLayout: {
    height: 38,
    backgroundColor: Color.colorGainsboro_200,
    top: 116,
    width: 88,
    position: "absolute",
  },
  rectangleLayout: {
    height: 202,
    right: 16,
    width: 343,
    position: "absolute",
  },
  orderNumberClr: {
    color: Color.black,
    lineHeight: 25,
    fontWeight: "700",
  },
  text2Typo: {
    top: 48,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  orderNumberTypo: {
    top: 16,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  text3Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
  },
  groupInnerPosition: {
    top: 0,
    position: "absolute",
  },
  poIssuedTypo: {
    height: 29,
    fontSize: FontSize.size_4xs,
    top: 14,
    textAlign: "center",
    textTransform: "capitalize",
    justifyContent: "center",
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  issuedPosition: {
    left: 128,
    width: 49,
  },
  poIssued1Typo: {
    color: Color.gray,
    height: 29,
    textAlign: "center",
    fontSize: FontSize.size_4xs,
    top: 14,
    textTransform: "capitalize",
    justifyContent: "center",
    fontWeight: "300",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  parentPosition: {
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  completedTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  textTypo: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  groupViewLayout: {
    marginLeft: 16,
    height: 32,
    width: 150,
  },
  groupChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChild5Position: {
    height: 87,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
  thereAre: {
    color: Color.colorLightsteelblue_100,
  },
  text: {
    color: Color.praimary,
  },
  thereAre2Container1: {
    width: "100%",
  },
  thereAre2Container: {
    width: 158,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thereAre2ServicesOutOfScParent: {
    top: 183,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  servicesProvided5Child: {
    right: 32,
  },
  servicesProvided5Item: {
    right: 144,
  },
  groupChildShadowBox1: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
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
    height: 202,
    width: 343,
    position: "absolute",
  },
  text1: {
    right: 52,
    width: 31,
    fontWeight: "300",
    lineHeight: 25,
    top: 16,
    color: Color.praimary,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    top: 16,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
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
    right: 16,
    top: 48,
    color: Color.praimary,
  },
  projectName: {
    right: 261,
    width: 66,
    top: 16,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    fontWeight: "300",
    color: Color.praimary,
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
  text3: {
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xs_5,
    top: 154,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  cancelTicket: {
    color: Color.colorRed_100,
    textTransform: "capitalize",
    width: 88,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
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
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    paddingVertical: Padding.p_7xs_5,
    top: 154,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupInner: {
    left: 15,
    width: 274,
    height: 10,
  },
  ticketReceived: {
    left: 0,
    width: 40,
  },
  quotationSubmitted: {
    left: 65,
    width: 44,
  },
  poIssued: {
    width: 49,
    height: 29,
    fontSize: FontSize.size_4xs,
    top: 14,
    textAlign: "center",
    textTransform: "capitalize",
    justifyContent: "center",
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  workInProgress: {
    left: 194,
    width: 49,
  },
  ticketClosed: {
    left: 270,
    width: 29,
  },
  groupParent: {
    top: 96,
    left: 22,
    width: 299,
    height: 43,
    position: "absolute",
  },
  rectangleParent: {
    top: 215,
  },
  poIssued1: {
    width: 49,
    left: 128,
  },
  rectangleGroup: {
    top: 433,
  },
  completed: {
    width: 63,
    fontWeight: "300",
  },
  text7: {
    width: 30,
    marginLeft: 2,
    color: Color.color,
    fontWeight: "300",
  },
  completedParent: {
    left: 31,
  },
  rectangleContainer: {
    opacity: 0.5,
    height: 32,
    width: 150,
  },
  incomplete: {
    width: 65,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  text8: {
    width: 30,
    marginLeft: 2,
    color: Color.color,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  incompleteParent: {
    left: 27,
  },
  groupView: {
    opacity: 0.5,
  },
  groupChild3: {
    borderColor: Color.praimary,
    borderWidth: 1.5,
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  outOfScope: {
    width: 75,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  text9: {
    width: 22,
    marginLeft: 2,
    color: Color.color,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  outOfScopeParent: {
    left: 26,
  },
  inTransit: {
    width: 54,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  text10: {
    width: 23,
    marginLeft: 2,
    color: Color.color,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  inTransitParent: {
    left: 36,
  },
  frameView: {
    top: 111,
    width: 359,
    justifyContent: "flex-end",
    left: "50%",
    marginLeft: -187.5,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild5: {
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
    left: "50%",
    textAlign: "center",
    height: 24,
    textTransform: "capitalize",
    justifyContent: "center",
    color: Color.praimary,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    alignItems: "center",
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
  servicesProvided5: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ServicesProvided5;
