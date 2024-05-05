import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native";
import VerificationCode2 from "../components/VerificationCode2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CloseTicket = () => {
  const [bigBottunContainerVisible, setBigBottunContainerVisible] =
    useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openBigBottunContainer = useCallback(() => {
    setBigBottunContainerVisible(true);
  }, []);

  const closeBigBottunContainer = useCallback(() => {
    setBigBottunContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.closeTicket}>
        <Text style={[styles.toCloseThe, styles.closeLayout]}>
          To close the ticket, you must complete the following information
        </Text>
        <Pressable
          style={[styles.bigBottun, styles.wrapperFlexBox]}
          onPress={openBigBottunContainer}
        >
          <Text style={[styles.logIn, styles.logInTypo]}>Close Ticket</Text>
        </Pressable>
        <View style={styles.closeTicketChild} />
        <View style={styles.frameParent}>
          <View style={styles.nameParentTransform}>
            <Text style={[styles.ticketNumber, styles.nameTypo]}>
              Ticket number
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={styles.textTypo}>{`52815
`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.supervisorNameParent, styles.nameParentTransform]}
          >
            <Text style={[styles.supervisorName, styles.nameTypo]}>
              Supervisor name
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={styles.textTypo}>{`Khaled Al-Ahmadi 
`}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.contactNameParent, styles.nameParentTransform]}>
            <Text style={[styles.contactName, styles.nameTypo]}>
              Contact name
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={styles.textTypo}>{`Ahmad Alla
`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.maintenanceTypeParent, styles.nameParentTransform]}
          >
            <Text style={[styles.maintenanceType, styles.nameTypo]}>
              Maintenance type
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={styles.textTypo}>{`Preventive 
`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}
          >
            <View style={[styles.serviceCategoryParent, styles.groupPosition]}>
              <Text style={[styles.serviceCategory, styles.nameTypo]}>
                Service category
              </Text>
              <View style={[styles.serviceClass, styles.servicePosition2]}>
                <Text style={[styles.plannedService, styles.serviceTypo]}>
                  Planned service
                </Text>
                <Image
                  style={[styles.frameIcon, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
              <View style={[styles.serviceClass1, styles.servicePosition2]}>
                <Text style={[styles.serviceRequest, styles.serviceTypo]}>
                  Service ticket
                </Text>
                <Image
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame3.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.serviceType}>
            <Text style={[styles.serviceType1, styles.frameIconPosition]}>
              Discipline type
            </Text>
            <Image
              style={[styles.serviceTypeChild, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-152.png")}
            />
          </View>
          <View style={styles.ticketStatusParent}>
            <Text style={[styles.ticketStatus, styles.nameTypo]}>
              Ticket status
            </Text>
            <View style={styles.ticketStatusGroup}>
              <View style={styles.ticketStatus1}>
                <Text style={styles.jobDoneTypo}>Job Done</Text>
                <Image
                  style={[styles.frameIcon2, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
              <View style={[styles.ticketStatus2, styles.ticketSpaceBlock]}>
                <Text style={[styles.reschedule, styles.jobDoneTypo]}>
                  reschedule
                </Text>
                <Image
                  style={[styles.frameIcon2, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
              <View style={[styles.ticketStatus3, styles.ticketSpaceBlock]}>
                <Text style={[styles.changeTheStatus, styles.serviceTypo]}>
                  change the status
                </Text>
                <Image
                  style={[styles.frameIcon4, styles.frameIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.ticketStatusParent}>
            <Text style={[styles.requestIssue, styles.nameTypo]}>
              Request / Issue
            </Text>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupChildShadowBox]} />
              <Text style={[styles.pleaseWriteWhat, styles.serviceTypo]}>
                Please write what is the reason for closing the ticket.....
              </Text>
            </View>
          </View>
          <View style={styles.ticketStatusParent}>
            <Text style={[styles.requestIssue, styles.nameTypo]}>Remarks</Text>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupChildShadowBox]} />
              <Text style={[styles.pleaseWriteWhat, styles.serviceTypo]}>
                Please write all your comments.....
              </Text>
            </View>
          </View>
          <View style={styles.ticketStatusParent}>
            <Text style={[styles.requestIssue, styles.nameTypo]}>Action</Text>
            <View style={[styles.groupView, styles.groupLayout]}>
              <View style={[styles.groupInner, styles.groupChildShadowBox]} />
              <Text style={[styles.pleaseWriteWhat, styles.serviceTypo]}>
                Please write what our team did in this job.....
              </Text>
            </View>
          </View>
          <View style={styles.ticketStatusParent}>
            <Text style={[styles.addPhotos, styles.nameTypo]}>Add Photos</Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-238655.png")}
            />
          </View>
        </View>
        <View style={[styles.navBar, styles.navBarPosition]}>
          <View style={[styles.webViewbottom, styles.navBarPosition]}>
            <View style={styles.homeIndicator}>
              <View style={styles.homeIndicator1} />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent3, styles.navBarPosition]}>
          <View style={[styles.groupChild1, styles.navBarPosition]} />
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
                source={require("../assets/wifi3.png")}
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
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.closeTicket1, styles.arrow21Position]}>
            Close Ticket
          </Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={bigBottunContainerVisible}
      >
        <View style={styles.bigBottunContainerOverlay}>
          <Pressable
            style={styles.bigBottunContainerBg}
            onPress={closeBigBottunContainer}
          />
          <VerificationCode2 onClose={closeBigBottunContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  closeLayout: {
    display: "flex",
    lineHeight: 30,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logInTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  nameTypo: {
    height: 16,
    color: Color.black,
    textTransform: "capitalize",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  nameParentTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "flex-end",
    width: 343,
  },
  encapsulatedGroupLayout: {
    height: 64,
    width: 337,
  },
  groupPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  servicePosition2: {
    top: 40,
    height: 24,
    position: "absolute",
  },
  serviceTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIconPosition: {
    left: "0%",
    position: "absolute",
  },
  ticketSpaceBlock: {
    marginLeft: 36,
    height: 24,
  },
  jobDoneTypo: {
    left: "32.5%",
    width: "67.5%",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    color: Color.black,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupLayout: {
    height: 143,
    width: 343,
  },
  groupChildShadowBox: {
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
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
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
  toCloseThe: {
    top: 113,
    right: 71,
    color: Color.ternary,
    width: 288,
    height: 48,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    position: "absolute",
  },
  bigBottunContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  bigBottunContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logIn: {
    color: Color.whait,
    width: 295,
  },
  bigBottun: {
    top: 1638,
    backgroundColor: "#cf0303",
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    width: 343,
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  closeTicketChild: {
    top: 1710,
    left: 16,
    height: 30,
    overflow: "hidden",
    width: 343,
    position: "absolute",
  },
  ticketNumber: {
    width: 169,
    height: 16,
    lineHeight: 25,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameShadowBox: {
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
  },
  textTypo: {
    width: 240,
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    height: 16,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  wrapper: {
    top: 21,
    left: 86,
    height: 14,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    alignItems: "flex-end",
    width: 343,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  supervisorName: {
    width: 169,
    height: 16,
    lineHeight: 25,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  supervisorNameParent: {
    marginTop: 24,
  },
  contactName: {
    width: 169,
    height: 16,
    lineHeight: 25,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  contactNameParent: {
    marginTop: 24,
  },
  maintenanceType: {
    width: 169,
    height: 16,
    lineHeight: 25,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  maintenanceTypeParent: {
    marginTop: 24,
  },
  serviceCategory: {
    right: 227,
    width: 110,
    top: 0,
    position: "absolute",
  },
  plannedService: {
    width: "77.78%",
    left: "22.22%",
    top: "16.67%",
    height: "66.67%",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon: {
    width: "17.09%",
    right: "82.91%",
    left: "0%",
    position: "absolute",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
  },
  serviceClass: {
    left: 0,
    width: 117,
    height: 24,
  },
  serviceRequest: {
    width: "80%",
    left: "24.76%",
    fontWeight: "600",
    top: "16.67%",
    height: "66.67%",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
  },
  frameIcon1: {
    width: "19.05%",
    right: "80.95%",
    left: "0%",
    position: "absolute",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
  },
  serviceClass1: {
    left: 232,
    width: 105,
    height: 24,
  },
  serviceCategoryParent: {
    height: 64,
    width: 337,
  },
  encapsulatedGroup: {
    marginTop: 24,
    overflow: "hidden",
  },
  serviceType1: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    color: Color.black,
    textTransform: "capitalize",
    lineHeight: 25,
    left: "0%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
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
  serviceType: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  ticketStatus: {
    width: 121,
  },
  frameIcon2: {
    width: "25%",
    right: "75%",
    left: "0%",
    position: "absolute",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
  },
  ticketStatus1: {
    width: 80,
    height: 24,
  },
  reschedule: {
    textTransform: "capitalize",
  },
  ticketStatus2: {
    width: 80,
  },
  changeTheStatus: {
    width: "78.18%",
    left: "23.64%",
    top: "16.67%",
    height: "66.67%",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  frameIcon4: {
    width: "18.18%",
    right: "81.82%",
    left: "0%",
    position: "absolute",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
  },
  ticketStatus3: {
    width: 110,
  },
  ticketStatusGroup: {
    marginTop: 24,
    flexDirection: "row",
    width: 343,
  },
  ticketStatusParent: {
    marginTop: 24,
  },
  requestIssue: {
    width: 225,
  },
  groupChild: {
    height: 143,
    width: 343,
    right: 0,
    top: 0,
    position: "absolute",
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_3xs,
  },
  pleaseWriteWhat: {
    marginLeft: -155.5,
    top: 16,
    color: Color.colorLightsteelblue_100,
    opacity: 0.5,
    left: "50%",
    fontWeight: "300",
  },
  groupView: {
    marginTop: 10,
  },
  groupItem: {
    height: 143,
    width: 343,
    right: 0,
    top: 0,
    position: "absolute",
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    height: 143,
    width: 343,
    right: 0,
    top: 0,
    position: "absolute",
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_3xs,
  },
  addPhotos: {
    width: 179,
  },
  groupIcon: {
    height: 110,
    marginTop: 10,
    width: 343,
  },
  frameParent: {
    top: 185,
    height: 627,
    left: "50%",
    marginLeft: -171.5,
    alignItems: "center",
    position: "absolute",
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
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_100,
    height: 34,
    top: 0,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  groupChild1: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
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
    width: 24,
    height: 11,
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
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  closeTicket1: {
    marginLeft: -74.5,
    width: 150,
    color: Color.praimary,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    display: "flex",
    lineHeight: 30,
    top: 48,
  },
  rectangleParent3: {
    height: 89,
    top: 0,
  },
  closeTicket: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.whait,
  },
});

export default CloseTicket;
