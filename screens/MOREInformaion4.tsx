import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const MOREInformaion4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={styles.moreInformaionChild} />
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.text, styles.textTypo2]}>{`Save `}</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.nameOfApplicantParent}>
          <Text
            style={[styles.nameOfApplicant, styles.mobileNumberTypo]}
          >{` Name of applicant `}</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View
              style={[
                styles.abdulRahmanAlGhamdiWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[styles.abdulRahmanAlGhamdi, styles.textClr]}
              >{` Abdul Rahman Al-Ghamdi `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileNumberParent}>
          <Text
            style={[styles.mobileNumber, styles.mobileNumberTypo]}
          >{` Mobile number `}</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text1, styles.textClr]}>05629871269</Text>
            </View>
          </View>
        </View>
        <View style={styles.projectName}>
          <Image
            style={[styles.projectNameChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1532.png")}
          />
          <Text
            style={[styles.text2, styles.homeTypo]}
          >{` Project name `}</Text>
        </View>
        <View
          style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}
        >
          <View style={[styles.maintenanceTypeParent, styles.parentPosition]}>
            <Text
              style={[styles.maintenanceType, styles.maintenanceTypeTypo]}
            >{` Maintenance type `}</Text>
            <View style={[styles.maintenanceType1, styles.maintenanceLayout]}>
              <Text
                style={[styles.text3, styles.textTypo]}
              >{` Routine maintenance `}</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame28.png")}
              />
            </View>
            <View style={[styles.maintenanceType2, styles.maintenanceLayout]}>
              <Text
                style={[styles.text4, styles.textTypo1]}
              >{` Corrective maintenance `}</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.maintenanceType3, styles.maintenanceLayout]}>
              <Text
                style={[styles.text5, styles.textTypo1]}
              >{` Preventive maintenance `}</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.projectName}>
          <Image
            style={[styles.projectNameChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1533.png")}
          />
          <Text
            style={[styles.text2, styles.homeTypo]}
          >{` Service type `}</Text>
        </View>
        <View
          style={[styles.encapsulatedGroup1, styles.encapsulatedGroup1Layout]}
        >
          <View
            style={[
              styles.serviceCategoryParent,
              styles.encapsulatedGroup1Layout,
            ]}
          >
            <Text
              style={[styles.serviceCategory, styles.maintenanceTypeTypo]}
            >{` Service category `}</Text>
            <View style={styles.serviceClassParent}>
              <View style={[styles.serviceClass, styles.parentPosition]}>
                <Text
                  style={[styles.text7, styles.textTypo]}
                >{` Planned service `}</Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame3.png")}
                />
              </View>
              <View style={[styles.parent, styles.parentPosition]}>
                <Text
                  style={[styles.text8, styles.textTypo1]}
                >{` Service request `}</Text>
                <Image
                  style={[styles.frameIcon4, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequest, styles.mobileNumberTypo]}
          >{` Problem or request `}</Text>
          <View style={[styles.encapsulatedGroup2, styles.groupLayout]}>
            <View style={[styles.rectangleContainer, styles.parentPosition]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <Text style={[styles.pleaseWriteWhatever, styles.pleaseTypo]}>
                Please write whatever you want about the problem or request.....
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text style={[styles.problemOrRequest, styles.mobileNumberTypo]}>
            Description of the problem
          </Text>
          <View style={[styles.encapsulatedGroup2, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.childGroupShadowBox]} />
              <Text style={[styles.pleaseWriteA, styles.pleaseTypo]}>
                Please write a detailed description of the problem, such as:
                description, scope of the problem, and some indicators of the
                problem.....
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.buttonFlexBox]}>
          <View style={styles.menu1}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame29.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Home</Text>
          </View>
          <View style={styles.menu1}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame30.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Requests</Text>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menu31}>
              <View style={styles.container}>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.menu1}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame31.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Record</Text>
          </View>
          <View style={styles.menu1}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame32.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Reports</Text>
          </View>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.parentPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.parentPosition]}
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
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
        <Image
          style={[styles.arrow21, styles.arrow21Position]}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
        <Text style={[styles.modifyRequest, styles.arrow21Position]}>
          Modify request
        </Text>
      </View>
      <View
        style={[styles.moreInformaionItem, styles.loginWithFaceIdPosition]}
      />
      <View style={[styles.loginWithFaceId, styles.loginWithFaceIdPosition]}>
        <View style={styles.faceId}>
          <View
            style={[
              styles.attendanceSuccessful,
              styles.loginWithFaceIdPosition,
            ]}
          >
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua1.png")}
            />
            <View style={styles.yourRequestHasBeenSentSucParent}>
              <Text style={[styles.yourRequestHas, styles.requestFlexBox]}>
                Your request has been sent successfully
              </Text>
              <Text style={[styles.yourRequestHas1, styles.homeClr]}>
                Your request has been received and is being reviewed now and you
                will be answered as soon as possible
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("MOREInformaion11")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    fontWeight: "700",
  },
  mobileNumberTypo: {
    height: 16,
    textAlign: "left",
    fontWeight: "300",
  },
  wrapperPosition: {
    zIndex: 1,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textClr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  homeTypo: {
    textAlign: "right",
    fontWeight: "300",
  },
  encapsulatedGroupLayout: {
    height: 64,
    width: 337,
  },
  parentPosition: {
    top: 0,
    position: "absolute",
  },
  maintenanceTypeTypo: {
    width: 70,
    top: 0,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  maintenanceLayout: {
    width: 100,
    height: 24,
    top: 40,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    textAlign: "right",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  frameIconPosition: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    textAlign: "right",
    color: Color.black,
    display: "flex",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  encapsulatedGroup1Layout: {
    width: 333,
    height: 64,
  },
  groupLayout: {
    width: 342,
    height: 143,
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  pleaseTypo: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  homeClr: {
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    height: 88,
    width: 373,
    marginLeft: -186.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  loginWithFaceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  requestFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  moreInformaionChild: {
    top: 1227,
    right: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
  },
  text: {
    color: Color.whait,
    width: 291,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 1117,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.praimary,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
  },
  nameOfApplicant: {
    width: 169,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    height: 56,
    width: 343,
  },
  abdulRahmanAlGhamdi: {
    width: 240,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  abdulRahmanAlGhamdiWrapper: {
    left: 86,
    height: 14,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  nameOfApplicantParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    width: 343,
  },
  mobileNumber: {
    width: 94,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "300",
    color: Color.black,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  wrapper: {
    left: 249,
  },
  mobileNumberParent: {
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    width: 343,
  },
  projectNameChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  text2: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    left: "47.81%",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  projectName: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  maintenanceType: {
    right: 267,
  },
  text3: {
    width: "78%",
    left: "-4%",
  },
  frameIcon: {
    width: "20%",
    left: "80%",
  },
  maintenanceType1: {
    right: 232,
    height: 24,
  },
  text4: {
    width: "75%",
    left: "-1%",
  },
  maintenanceType2: {
    right: 116,
    height: 24,
  },
  text5: {
    width: "70%",
    left: "4%",
  },
  maintenanceType3: {
    height: 24,
    right: 0,
  },
  maintenanceTypeParent: {
    right: 0,
    height: 64,
    width: 337,
  },
  encapsulatedGroup: {
    marginTop: 24,
    overflow: "hidden",
  },
  serviceCategory: {
    right: 263,
  },
  text7: {
    width: "74.29%",
    left: "0.95%",
  },
  frameIcon3: {
    width: "19.05%",
    left: "80.95%",
  },
  serviceClass: {
    right: 223,
    width: 105,
    height: 24,
  },
  text8: {
    width: "78.95%",
    left: "-6.32%",
  },
  frameIcon4: {
    width: "21.05%",
    left: "78.95%",
  },
  parent: {
    width: 95,
    height: 24,
    right: 0,
  },
  serviceClassParent: {
    width: 328,
    height: 24,
    top: 40,
    right: 0,
    position: "absolute",
  },
  serviceCategoryParent: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  encapsulatedGroup1: {
    marginTop: 24,
    overflow: "hidden",
  },
  problemOrRequest: {
    width: 225,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  groupChild: {
    right: 12,
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pleaseWriteWhatever: {
    marginLeft: -161,
    top: 16,
  },
  rectangleContainer: {
    right: -12,
    width: 354,
    height: 143,
  },
  encapsulatedGroup2: {
    marginTop: 16,
    height: 143,
    overflow: "hidden",
  },
  problemOrRequestParent: {
    marginTop: 24,
    justifyContent: "center",
  },
  groupItem: {
    height: 143,
    width: 342,
    right: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pleaseWriteA: {
    marginLeft: -155,
    top: 6,
    lineHeight: 20,
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  groupView: {
    height: 143,
    right: 0,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 111,
    height: 701,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  frameIcon5: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    lineHeight: 16,
    marginTop: 6,
    textAlign: "right",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    justifyContent: "flex-end",
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
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
    width: 375,
    right: 0,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
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
    height: 30,
    width: 375,
    right: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
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
    width: 67,
    height: 11,
    right: 15,
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
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    right: 15,
    width: 24,
    overflow: "hidden",
  },
  modifyRequest: {
    marginLeft: -75.5,
    width: 150,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    top: 48,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    left: "50%",
  },
  tap: {
    top: -1,
  },
  moreInformaionItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  yourRequestHas: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: 256,
    height: 48,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
  },
  yourRequestHas1: {
    width: 315,
    marginTop: 16,
    lineHeight: 30,
    textAlign: "center",
    fontSize: FontSize.size_base,
    height: 56,
  },
  yourRequestHasBeenSentSucParent: {
    height: 151,
    marginTop: 16,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -149,
    marginLeft: -157.5,
    height: 298,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.34%",
    top: "5.57%",
    right: "5.83%",
    bottom: "88.99%",
    width: "5.83%",
    height: "5.43%",
    position: "absolute",
  },
  faceId: {
    borderRadius: Border.br_mini,
    height: 368,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    overflow: "hidden",
    width: 343,
  },
  loginWithFaceId: {
    marginTop: -183.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -171.5,
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MOREInformaion4;
