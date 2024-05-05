import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const VerificationCode4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.abdulRahmanAlGhamdiParent, styles.parentPosition]}>
          <Text style={[styles.abdulRahmanAlGhamdi, styles.makeSureAllTypo]}>
            Abdul Rahman Al-Ghamdi
          </Text>
          <Text style={[styles.text, styles.textLayout]}>05629871269</Text>
          <Text
            style={[styles.text, styles.textLayout]}
          >{`Jeddah Yacht Club `}</Text>
          <Text style={[styles.text, styles.textLayout]}>01/11/2023</Text>
          <Text style={[styles.text2, styles.text2Typo]}>23655</Text>
          <Text style={[styles.incomplete, styles.text2Typo]}>Incomplete</Text>
        </View>
        <View style={[styles.requesterParent, styles.parentPosition]}>
          <Text style={[styles.requester, styles.requesterLayout]}>
            Requester
          </Text>
          <Text style={[styles.mobileNumber, styles.requesterClr]}>
            Mobile number
          </Text>
          <Text style={[styles.projectName, styles.requesterLayout]}>
            Project name
          </Text>
          <Text style={[styles.requestDate, styles.requesterClr]}>
            Request date
          </Text>
          <Text
            style={[styles.requestDate, styles.requesterClr]}
          >{`Request number `}</Text>
          <Text style={[styles.requestDate, styles.requesterClr]}>
            Request status
          </Text>
        </View>
      </View>
      <Text style={styles.requestDetails}>Request details</Text>
      <Text style={[styles.maintenanceDetails, styles.photosFromTheTypo]}>
        Maintenance details
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View>
            <Text style={styles.problemrequestTypo}>{`Maintenance type `}</Text>
            <Text style={[styles.projectName, styles.requesterLayout]}>
              Service type
            </Text>
            <Text style={[styles.serviceCategory, styles.requesterClr]}>
              Service category
            </Text>
            <Text style={[styles.problemrequest, styles.problemrequestTypo]}>
              Problem/request
            </Text>
            <Text style={[styles.problemDescription, styles.requesterClr]}>
              Problem description
            </Text>
          </View>
          <View style={styles.routineMaintenanceParent}>
            <Text style={[styles.abdulRahmanAlGhamdi, styles.makeSureAllTypo]}>
              Routine maintenance
            </Text>
            <Text style={[styles.electrical, styles.requesterLayout]}>
              Electrical
            </Text>
            <Text style={[styles.electrical, styles.requesterLayout]}>
              Planned
            </Text>
            <Text style={[styles.makeSureAll, styles.makeSureAllTypo]}>
              Make sure all wires are...
            </Text>
            <Text style={[styles.highVoltage, styles.makeSureAllTypo]}>
              High voltage...
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.photosFromTheProjectParent}>
        <Text style={styles.photosFromTheTypo}>Photos from the project</Text>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.wrapperRectangle4315, styles.wrapperFlexBox]}>
            <Image
              style={styles.wrapperChildPosition}
              resizeMode="cover"
              source={require("../assets/rectangle-43151.png")}
            />
          </View>
          <View style={[styles.wrapperRectangle4316, styles.wrapperFlexBox]}>
            <Image
              style={styles.wrapperChildPosition}
              resizeMode="cover"
              source={require("../assets/rectangle-43161.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.verificationCodeChild} />
      <View style={styles.viewPosition}>
        <View style={[styles.rectangleView, styles.viewPosition]} />
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
        <Text style={[styles.requestDetails1, styles.arrow21Position]}>
          Request details
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
  groupChildLayout: {
    height: 248,
    width: 343,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 16,
    position: "absolute",
  },
  makeSureAllTypo: {
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    lineHeight: 30,
  },
  textLayout: {
    width: 102,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  text2Typo: {
    width: 93,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  requesterLayout: {
    width: 74,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  requesterClr: {
    color: Color.praimary,
    fontWeight: "700",
  },
  photosFromTheTypo: {
    width: 159,
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  groupLayout: {
    height: 208,
    width: 343,
  },
  problemrequestTypo: {
    width: 105,
    color: Color.praimary,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  viewPosition: {
    height: 87,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
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
  groupChild: {
    height: 248,
    width: 343,
  },
  abdulRahmanAlGhamdi: {
    color: Color.color,
    width: 142,
  },
  text: {
    marginTop: 24,
    color: Color.color,
  },
  text2: {
    lineHeight: 25,
    color: Color.color,
  },
  incomplete: {
    color: Color.color,
    lineHeight: 30,
    width: 93,
  },
  abdulRahmanAlGhamdiParent: {
    width: 142,
    right: 16,
  },
  requester: {
    color: Color.praimary,
    fontWeight: "700",
  },
  mobileNumber: {
    width: 94,
    marginTop: 24,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    lineHeight: 30,
  },
  projectName: {
    color: Color.praimary,
    fontWeight: "700",
    marginTop: 24,
  },
  requestDate: {
    width: 93,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
  },
  requesterParent: {
    right: 234,
    height: 216,
  },
  rectangleParent: {
    top: 144,
    right: 16,
    position: "absolute",
  },
  requestDetails: {
    top: 112,
    width: 138,
    color: Color.black,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    left: 16,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    position: "absolute",
  },
  maintenanceDetails: {
    top: 416,
    left: 16,
    position: "absolute",
  },
  groupItem: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  serviceCategory: {
    marginTop: 24,
    width: 102,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  problemrequest: {
    marginTop: 24,
  },
  problemDescription: {
    width: 117,
    marginTop: 24,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    lineHeight: 30,
  },
  electrical: {
    marginTop: 24,
    color: Color.color,
  },
  makeSureAll: {
    width: 143,
    marginTop: 24,
    color: Color.color,
  },
  highVoltage: {
    marginTop: 24,
    color: Color.color,
    width: 142,
  },
  routineMaintenanceParent: {
    marginLeft: 52,
    width: 142,
  },
  frameParent: {
    flexDirection: "row",
    left: 16,
  },
  rectangleGroup: {
    top: 448,
    right: 16,
    position: "absolute",
  },
  groupInner: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.326,
      },
    ],
    left: 0,
    objectFit: "contain",
    height: "100%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperRectangle4315: {
    height: 159,
    width: 135,
    borderRadius: Border.br_8xs,
    top: 25,
    justifyContent: "center",
    position: "absolute",
    left: 16,
  },
  wrapperRectangle4316: {
    left: 192,
    height: 159,
    width: 135,
    borderRadius: Border.br_8xs,
    top: 25,
    justifyContent: "center",
    position: "absolute",
  },
  rectangleContainer: {
    marginTop: 16,
  },
  photosFromTheProjectParent: {
    marginLeft: -171.5,
    top: 680,
    left: "50%",
    position: "absolute",
  },
  verificationCodeChild: {
    top: 950,
    height: 54,
    overflow: "hidden",
    left: 16,
    width: 343,
    position: "absolute",
  },
  rectangleView: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
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
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    overflow: "hidden",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  requestDetails1: {
    marginLeft: -60.5,
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    textTransform: "capitalize",
    height: 24,
    top: 48,
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
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
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  verificationCode: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default VerificationCode4;
