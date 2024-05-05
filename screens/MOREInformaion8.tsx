import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const MOREInformaion8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={[styles.moreInformaionChild, styles.childLayout]} />
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("MOREInformaion4")}
      >
        <Text style={styles.text}>Request the service</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View style={styles.nameOfTheApplicantParent}>
          <Text style={[styles.nameOfThe, styles.nameOfTheLayout]}>
            Name of the applicant
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.frameShadowBox} />
            <View
              style={[styles.assemAlMohammadiWrapper, styles.wrapperPosition]}
            >
              <Text
                style={[styles.assemAlMohammadi, styles.text1Clr]}
              >{`Assem Al-Mohammadi
`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.nameOfTheLayout]}>
            Mobile number
          </Text>
          <View style={styles.rectangleLayout}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text1, styles.text1Clr]}>0500009000</Text>
            </View>
          </View>
        </View>
        <View style={styles.filterProjectName}>
          <Text style={styles.projectName}>Project Name</Text>
          <View
            style={[styles.filterProjectNameChild, styles.groupChildBorder]}
          />
          <Image
            style={[styles.filterProjectNameItem, styles.arrow21Position]}
            resizeMode="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
        <View style={styles.filterProjectName}>
          <Text style={styles.projectName}>Service Type</Text>
          <Image
            style={[styles.serviceTypeChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-153.png")}
          />
        </View>
        <View style={[styles.otherServicesParent, styles.buttonFlexBox]}>
          <Text style={[styles.otherServices, styles.nameOfTheLayout]}>
            Other services
          </Text>
          <View style={styles.rectangleContainer}>
            <View style={[styles.instanceChild, styles.iconLayout]} />
            <Image
              style={[styles.instanceItem, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/ellipse-186.png")}
            />
            <Text style={[styles.yes, styles.requestFlexBox]}>Yes</Text>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text style={[styles.problemOrRequest, styles.nameOfTheLayout]}>
            Problem or request
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <Text style={styles.pleaseTypo}>
                Please write whatever you want about the problem or request.....
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text style={[styles.problemOrRequest, styles.nameOfTheLayout]}>
            Description of the problem
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
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
        <View style={styles.menuList}>
          <Pressable
            style={[styles.menu1, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame72.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.menu5, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame64.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Requests</Text>
          </Pressable>
          <View style={[styles.menu5, styles.menuFlexBox]}>
            <View style={styles.menu31}>
              <View style={styles.container}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.menu5, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/liuser3.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>My Account</Text>
          </Pressable>
          <Pressable
            style={[styles.menu5, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame65.png")}
            />
            <Text style={[styles.home, styles.homeClr]}>Reports</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("Home9")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21Position]}>
          Service Request
        </Text>
      </View>
      <Pressable
        style={[styles.moreInformaionItem, styles.loginWithFaceIdPosition]}
        onPress={() => navigation.navigate("Requests5")}
      />
      <View style={[styles.loginWithFaceId, styles.loginWithFaceIdPosition]}>
        <View style={[styles.faceId, styles.faceIdShadowBox]}>
          <View
            style={[
              styles.attendanceSuccessful,
              styles.loginWithFaceIdPosition,
            ]}
          >
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationsdocumentscannerkc4xkyzgxh.png")}
            />
            <View style={styles.anOutOfScopeServiceWasUsParent}>
              <Text style={[styles.anOutOf, styles.requestFlexBox]}>
                An out of scope service was used
              </Text>
              <Text style={[styles.theRequestedService, styles.homeClr]}>
                The requested service is identified as out of scope and an
                approval request will be sent shortly by email
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector17.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
        <View style={styles.line} />
      </View>
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.groupPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 56,
    position: "absolute",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameOfTheLayout: {
    height: 16,
    textAlign: "left",
  },
  rectangleLayout: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  wrapperPosition: {
    zIndex: 1,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text1Clr: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  arrow21Position: {
    top: 47,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  requestFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupLayout: {
    height: 143,
    width: 342,
  },
  groupPosition: {
    top: 0,
    right: 0,
    position: "absolute",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  pleaseTypo: {
    opacity: 0.5,
    fontSize: FontSize.size_3xs,
    top: 16,
    marginLeft: -155,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  menuFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  homeClr: {
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    height: 88,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  loginWithFaceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  faceIdShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1106,
    right: 16,
    overflow: "hidden",
    width: 343,
  },
  text: {
    color: Color.whait,
    width: 291,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 996,
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
    position: "absolute",
  },
  nameOfThe: {
    width: 169,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    height: 16,
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
  assemAlMohammadi: {
    width: 240,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  assemAlMohammadiWrapper: {
    left: 86,
    height: 14,
  },
  rectangleParent: {
    alignItems: "flex-end",
  },
  nameOfTheApplicantParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    width: 343,
  },
  mobileNumber: {
    width: 103,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    height: 16,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text1: {
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  wrapper: {
    left: 252,
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
  projectName: {
    height: "19.51%",
    width: "52.19%",
    left: "0%",
    top: "0%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  filterProjectNameChild: {
    top: 26,
    left: 343,
    borderColor: Color.gray,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 56,
    position: "absolute",
  },
  filterProjectNameItem: {
    left: 16,
    width: 311,
    height: 14,
  },
  filterProjectName: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    width: "100%",
  },
  otherServices: {
    color: Color.color,
    width: 93,
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    height: 16,
  },
  instanceChild: {
    borderRadius: 26,
    backgroundColor: Color.colorLightgray_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  instanceItem: {
    height: "76.33%",
    width: "34.59%",
    top: "11.67%",
    right: "60.12%",
    bottom: "12%",
    left: "5.29%",
    position: "absolute",
  },
  yes: {
    height: "46.67%",
    width: "33.23%",
    top: "26.67%",
    left: "55.89%",
    fontSize: FontSize.size_smi_4,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.black,
    display: "flex",
    position: "absolute",
  },
  rectangleContainer: {
    width: 66,
    marginLeft: 16,
    height: 30,
  },
  otherServicesParent: {
    marginTop: 24,
    alignItems: "center",
  },
  problemOrRequest: {
    width: 225,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    height: 16,
  },
  groupChild: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  groupView: {
    right: 0,
    height: 143,
    width: 342,
  },
  encapsulatedGroup: {
    marginTop: 16,
    overflow: "hidden",
  },
  problemOrRequestParent: {
    marginTop: 24,
    justifyContent: "center",
  },
  groupItem: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  pleaseWriteA: {
    lineHeight: 20,
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  frameParent: {
    top: 112,
    height: 700,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    lineHeight: 16,
    textAlign: "right",
    marginTop: 6,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  menu1: {
    alignItems: "center",
  },
  menu5: {
    marginLeft: 16,
    alignItems: "center",
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
    flexDirection: "row",
    position: "absolute",
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    height: 24,
    width: 24,
  },
  serviceRequest: {
    marginLeft: -74.5,
    width: 150,
    height: 24,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    alignItems: "center",
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  moreInformaionItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 116,
    height: 130,
  },
  anOutOf: {
    fontSize: FontSize.size_2xl,
    color: Color.binary,
    width: 313,
    height: 53,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
  },
  theRequestedService: {
    width: 315,
    height: 83,
    marginTop: 8,
    lineHeight: 30,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  anOutOfScopeServiceWasUsParent: {
    height: 142,
    marginTop: 16,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -149,
    marginLeft: -157.5,
    height: 299,
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    overflow: "hidden",
  },
  loginWithFaceId: {
    marginTop: -184,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -171.5,
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
    width: 375,
    right: 0,
    height: 30,
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
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    top: -1,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MOREInformaion8;
