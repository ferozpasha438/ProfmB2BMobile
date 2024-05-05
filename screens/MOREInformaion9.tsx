import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const MOREInformaion9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={styles.moreInformaionChild} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MOREInformaion8")}
      >
        <Text style={[styles.text, styles.textTypo]}>Request the service</Text>
      </Pressable>
      <View style={[styles.frameParent, styles.linePosition]}>
        <View style={styles.nameOfTheApplicantParent}>
          <Text style={[styles.nameOfThe, styles.requestFlexBox]}>
            Name of the applicant
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleSpaceBlock]}>
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
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Mobile number
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
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
            style={styles.filterProjectNameItem}
            resizeMode="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
        <View style={styles.filterProjectName}>
          <Text style={styles.projectName}>Service Type</Text>
          <Image
            style={[styles.serviceTypeChild, styles.notchIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-153.png")}
          />
        </View>
        <View style={styles.otherServicesParent}>
          <Text style={[styles.otherServices, styles.requestFlexBox]}>
            Other services
          </Text>
          <View style={styles.rectangleContainer}>
            <View style={[styles.instanceChild, styles.iconLayout]} />
            <Image
              style={[styles.instanceItem, styles.notchIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1861.png")}
            />
            <Text style={[styles.no, styles.requestFlexBox]}>No</Text>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text style={[styles.problemOrRequest, styles.requestFlexBox]}>
            Problem or request
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <Text style={styles.pleaseTypo}>
                Please write whatever you want about the problem or request.....
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.problemOrRequestParent}>
          <Text style={[styles.problemOrRequest, styles.requestFlexBox]}>
            Description of the problem
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
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
        <View style={styles.addPhotosParent}>
          <Text style={[styles.addPhotos, styles.requestFlexBox]}>
            Add Photos
          </Text>
          <Image
            style={[styles.frameInner, styles.rectangleSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/group-238655.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomNav, styles.tapLayout]}>
        <View style={[styles.menuList, styles.tapLayout]}>
          <Pressable
            style={styles.menu1}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame72.png")}
            />
            <Text style={styles.home}>Home</Text>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame64.png")}
            />
            <Text style={styles.home}>Requests</Text>
          </Pressable>
          <View style={styles.menu5}>
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
            style={styles.menu5}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/liuser3.png")}
            />
            <Text style={styles.home}>My Account</Text>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame65.png")}
            />
            <Text style={styles.home}>Reports</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.tapLayout]}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
      </View>
      <View style={[styles.tap, styles.tapLayout]}>
        <View style={[styles.tapChild, styles.tapLayout]} />
        <View style={[styles.iphoneXOrNewer, styles.linePosition]}>
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21Position]}>
          Service Request
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  linePosition: {
    left: "50%",
    position: "absolute",
  },
  requestFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  rectangleSpaceBlock: {
    marginTop: 10,
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
    position: "absolute",
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
    height: 143,
    width: 342,
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
  tapLayout: {
    width: 375,
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
  moreInformaionChild: {
    top: 1266,
    right: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
  },
  text: {
    color: Color.whait,
    width: 291,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 1156,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  nameOfThe: {
    width: 169,
    height: 16,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
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
    color: Color.praimary,
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 16,
  },
  assemAlMohammadiWrapper: {
    left: 86,
    height: 14,
  },
  rectangleParent: {
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
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
    height: 16,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text1: {
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
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
  rectangleGroup: {
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
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
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 56,
    width: 343,
  },
  filterProjectNameItem: {
    top: 47,
    left: 16,
    width: 311,
    height: 14,
    position: "absolute",
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
    width: "100%",
  },
  otherServices: {
    color: Color.color,
    width: 93,
    height: 16,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
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
    right: "5.74%",
    bottom: "12%",
    left: "59.67%",
    position: "absolute",
  },
  no: {
    height: "46.67%",
    width: "33.23%",
    top: "26.67%",
    left: "10.57%",
    fontSize: FontSize.size_smi_4,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    display: "flex",
    color: Color.black,
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
    flexDirection: "row",
  },
  problemOrRequest: {
    width: 225,
    height: 16,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    right: 0,
    top: 0,
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  groupView: {
    right: 0,
    top: 0,
    position: "absolute",
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
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  addPhotos: {
    width: 179,
    height: 16,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  frameInner: {
    height: 110,
  },
  addPhotosParent: {
    marginTop: 24,
  },
  frameParent: {
    top: 112,
    height: 700,
    marginLeft: -171.5,
    left: "50%",
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
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  menu5: {
    marginLeft: 16,
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
    right: 0,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
  },
  iphoneIndicator: {
    bottom: 0,
    width: 375,
    right: 0,
    height: 30,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
    marginLeft: -187.5,
    left: "50%",
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
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  serviceRequest: {
    marginLeft: -74.5,
    width: 150,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    alignItems: "center",
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 48,
    justifyContent: "center",
    left: "50%",
  },
  tap: {
    height: 89,
    marginLeft: -187.5,
    left: "50%",
    top: 0,
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MOREInformaion9;
