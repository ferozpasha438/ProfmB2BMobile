import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import MOREInformaion1 from "../components/MOREInformaion1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MOREInformaion6 = () => {
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.moreInformaion}>
        <View style={styles.moreInformaionChild} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("MOREInformaion5")}
        >
          <Text style={[styles.text, styles.textTypo]}>Save changes</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={openButtonContainer1}>
          <Text style={[styles.text1, styles.textTypo]}>
            Delete the request
          </Text>
        </Pressable>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={[styles.nameOfApplicantParent, styles.parentFlexBox]}>
            <Text style={[styles.nameOfApplicant, styles.nameFlexBox]}>
              Name of applicant
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View
                style={[styles.assemAlMohammadiWrapper, styles.wrapperPosition]}
              >
                <Text style={[styles.assemAlMohammadi, styles.text2Typo]}>
                  Assem Al-Mohammadi
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.mobileNumberParent, styles.parentFlexBox]}>
            <Text style={[styles.mobileNumber, styles.nameFlexBox]}>
              {" "}
              Mobile number
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperPosition]}>
                <Text style={[styles.text2, styles.text2Typo]}>
                  05629871269
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.filterProjectName}>
            <Text style={[styles.projectName, styles.projectNamePosition]}>
              Project Name
            </Text>
            <View
              style={[styles.filterProjectNameChild, styles.groupChildBorder]}
            />
            <Image
              style={styles.filterProjectNameItem}
              resizeMode="cover"
              source={require("../assets/frame-91.png")}
            />
          </View>
          <View style={styles.encapsulatedGroup}>
            <View style={styles.maintenanceTypeParent}>
              <Text style={[styles.maintenanceType, styles.nameFlexBox]}>
                Maintenance type
              </Text>
              <View style={[styles.ticketStatus, styles.ticketLayout]}>
                <Text
                  style={[styles.jobDone, styles.jobDoneTypo]}
                >{`Job Done `}</Text>
                <Image
                  style={[styles.frameIcon, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame3.png")}
                />
              </View>
              <View style={[styles.ticketStatus1, styles.ticketStatus1Layout]}>
                <Text style={[styles.changeTheStatus, styles.jobDoneTypo]}>
                  change the status
                </Text>
                <Image
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
              <View style={[styles.ticketStatus2, styles.ticketLayout]}>
                <Text style={[styles.reschedule, styles.jobDoneTypo]}>
                  reschedule
                </Text>
                <Image
                  style={[styles.frameIcon, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.filterProjectName}>
            <Text style={[styles.projectName, styles.projectNamePosition]}>
              Service Type
            </Text>
            <Image
              style={[styles.serviceTypeChild, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-1534.png")}
            />
          </View>
          <View style={styles.encapsulatedGroup}>
            <View
              style={[
                styles.serviceCategoryParent,
                styles.rectangleContainerPosition,
              ]}
            >
              <Text
                style={[styles.serviceCategory, styles.ticketStatus1Layout]}
              >
                Service category
              </Text>
              <View style={[styles.serviceClass, styles.serviceLayout]}>
                <Text style={[styles.plannedService, styles.jobDoneTypo]}>
                  Planned service
                </Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
              <View style={[styles.serviceClass1, styles.serviceLayout]}>
                <Text style={[styles.plannedService, styles.jobDoneTypo]}>
                  Planned service
                </Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.problemOrRequestParent}>
            <Text style={[styles.problemOrRequest, styles.nameFlexBox]}>
              {" "}
              Problem or request
            </Text>
            <View style={[styles.encapsulatedGroup2, styles.groupLayout]}>
              <View
                style={[
                  styles.rectangleContainer,
                  styles.rectangleContainerPosition,
                ]}
              >
                <View style={[styles.groupChild, styles.childGroupShadowBox]} />
                <Text style={[styles.pleaseWriteWhatever, styles.pleaseTypo]}>
                  Please write whatever you want about the problem or
                  request.....
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.problemOrRequestParent}>
            <Text style={[styles.problemOrRequest, styles.nameFlexBox]}>
              {" "}
              Description the problem
            </Text>
            <View style={[styles.encapsulatedGroup2, styles.groupLayout]}>
              <View style={[styles.groupView, styles.groupPosition]}>
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.pleaseWriteA, styles.pleaseTypo]}>
                  Please write a detailed description of the problem, such as:
                  description, scope of the problem, and some indicators of the
                  problem.....
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tapPosition}>
          <View style={[styles.tapChild, styles.tapPosition]} />
          <View style={[styles.iphoneXOrNewer, styles.frameParentPosition]}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.arrow21Layout]}
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
            style={[styles.arrow21, styles.arrow21Layout]}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.editTheRequest, styles.nameFlexBox]}>
            Edit the Request
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <MOREInformaion1 onClose={closeButtonContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    width: 291,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "flex-end",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  nameFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  wrapperPosition: {
    zIndex: 1,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontWeight: "300",
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontFamily: FontFamily.dGBaysan,
  },
  projectNamePosition: {
    left: "0%",
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  ticketLayout: {
    width: 80,
    height: 24,
    top: 40,
    position: "absolute",
  },
  jobDoneTypo: {
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  frameIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ticketStatus1Layout: {
    width: 110,
    position: "absolute",
  },
  rectangleContainerPosition: {
    right: -12,
    top: 0,
    position: "absolute",
  },
  serviceLayout: {
    width: 117,
    height: 24,
    top: 40,
    position: "absolute",
  },
  groupLayout: {
    width: 342,
    height: 143,
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
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    right: 0,
    top: 0,
  },
  tapPosition: {
    height: 88,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1307,
    right: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
  },
  text: {
    color: Color.whait,
  },
  button: {
    top: 1117,
    backgroundColor: Color.praimary,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text1: {
    color: Color.colorRed_100,
  },
  button1: {
    top: 1189,
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  nameOfApplicant: {
    width: 169,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
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
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 56,
    width: 343,
  },
  assemAlMohammadi: {
    width: 240,
    color: Color.praimary,
    fontWeight: "300",
    height: 16,
  },
  assemAlMohammadiWrapper: {
    left: 87,
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
  },
  mobileNumber: {
    width: 127,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text2: {
    color: Color.praimary,
    fontWeight: "300",
  },
  wrapper: {
    left: 250,
  },
  mobileNumberParent: {
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  projectName: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
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
    left: 16,
    width: 311,
    top: 47,
    height: 14,
    position: "absolute",
  },
  filterProjectName: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  maintenanceType: {
    right: 196,
    width: 121,
    top: 0,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  jobDone: {
    fontWeight: "600",
    left: "32.5%",
    width: "67.5%",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    color: Color.praimary,
  },
  frameIcon: {
    width: "25%",
    right: "75%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  ticketStatus: {
    height: 24,
    left: 0,
  },
  changeTheStatus: {
    width: "78.18%",
    left: "23.64%",
    top: "16.67%",
    height: "66.67%",
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    color: Color.black,
    textTransform: "capitalize",
  },
  frameIcon1: {
    width: "18.18%",
    right: "81.82%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  ticketStatus1: {
    left: 119,
    height: 24,
    top: 40,
    width: 110,
  },
  reschedule: {
    left: "32.5%",
    width: "67.5%",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    fontWeight: "300",
    color: Color.black,
    textTransform: "capitalize",
  },
  ticketStatus2: {
    left: 237,
    height: 24,
  },
  maintenanceTypeParent: {
    right: 20,
    width: 317,
    top: 0,
    height: 64,
    position: "absolute",
  },
  encapsulatedGroup: {
    width: 337,
    height: 64,
    marginTop: 24,
    overflow: "hidden",
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    maxWidth: "100%",
    width: "100%",
  },
  serviceCategory: {
    right: 239,
    top: 0,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  plannedService: {
    width: "77.78%",
    left: "22.22%",
    top: "16.67%",
    height: "66.67%",
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    color: Color.black,
  },
  frameIcon3: {
    width: "17.09%",
    right: "82.91%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  serviceClass: {
    left: 0,
  },
  serviceClass1: {
    left: 232,
  },
  serviceCategoryParent: {
    width: 349,
    height: 64,
  },
  problemOrRequest: {
    width: 225,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    right: 12,
    height: 143,
    width: 342,
    top: 0,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  pleaseWriteWhatever: {
    marginLeft: -161,
    top: 16,
  },
  rectangleContainer: {
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
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    height: 143,
    width: 342,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    borderColor: Color.colorLightsteelblue_100,
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
    width: 342,
    position: "absolute",
  },
  frameParent: {
    top: 112,
    height: 701,
    marginLeft: -171.5,
    left: "50%",
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
    right: 0,
    top: 0,
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    right: 335,
    height: 24,
    top: 47,
  },
  editTheRequest: {
    marginLeft: -74.5,
    width: 150,
    height: 24,
    top: 47,
    color: Color.praimary,
    textTransform: "capitalize",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    display: "flex",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default MOREInformaion6;
