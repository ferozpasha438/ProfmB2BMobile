import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Reports12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reports12}>
      <View style={[styles.reportDetailsParent, styles.parentFlexBox]}>
        <Text style={styles.reportDetails}>Report details</Text>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame8.png")}
        />
      </View>
      <View style={styles.reports12Child} />
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <View style={[styles.frameChild, styles.childShadowBox]} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.projectNameParent}>
              <Text style={[styles.projectName, styles.nameTypo]}>
                Project name
              </Text>
              <Text
                style={[
                  styles.jeddahYachtClub,
                  styles.jeddahYachtClubSpaceBlock,
                ]}
              >{`Jeddah Yacht Club `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text
                style={[styles.requestNumber, styles.nameTypo]}
              >{` Request number `}</Text>
              <Text style={[styles.text, styles.textTypo]}>52815</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.supervisorName, styles.nameTypo]}>
                {" "}
                Supervisor name
              </Text>
              <Text
                style={[styles.khaledAlAhmadi, styles.sparePartsLayout]}
              >{`Khaled Al-Ahmadi `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.requestDate, styles.textTypo]}>
                {" "}
                Request date
              </Text>
              <Text style={[styles.text1, styles.text1Typo]}>01/11/2023</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.projectName, styles.nameTypo]}>
                {" "}
                Service type
              </Text>
              <Text
                style={[styles.mechanicalAndElectrical, styles.textLayout]}
              >{`Mechanical and electrical `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.requestDate, styles.textTypo]}>
                {" "}
                Service location
              </Text>
              <Text
                style={[styles.firstFloorAnd, styles.text1Typo]}
              >{`First floor and second floor `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceType, styles.workStatusTypo]}>
                {" "}
                Maintenance type
              </Text>
              <Text
                style={[styles.preventiveMaintenance, styles.textLayout]}
              >{`Preventive maintenance `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.spareParts, styles.sparePartsLayout]}>
                Spare parts
              </Text>
              <Text style={[styles.coolingDevice, styles.textLayout]}>
                Cooling device
              </Text>
            </View>
            <View style={styles.parentSpaceBlock}>
              <Text
                style={[styles.workDescription, styles.workDescriptionTypo]}
              >
                {" "}
                Work description
              </Text>
              <Text
                style={[styles.theEngineStopped, styles.workDescriptionTypo]}
              >{`The engine stopped working due to a malfunction in the ignition system `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.workStatus, styles.workStatusTypo]}>
                Work status
              </Text>
              <Text style={[styles.foreclose, styles.textLayout]}>
                Foreclose
              </Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.workStatus, styles.workStatusTypo]}>
                Reason for closure
              </Text>
              <Text style={[styles.foreclose, styles.textLayout]}>
                End of month
              </Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceType, styles.workStatusTypo]}>
                {" "}
                Work period
              </Text>
              <Text
                style={[styles.preventiveMaintenance, styles.textLayout]}
              >{`Morning period `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceStartDate, styles.nameTypo]}>
                {" "}
                Maintenance start date
              </Text>
              <Text style={[styles.text2, styles.textLayout]}>03/11/2023</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceEndDate, styles.nameTypo]}>
                {" "}
                Maintenance end date
              </Text>
              <Text style={[styles.text3, styles.textLayout]}>06/11/2023</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceType, styles.workStatusTypo]}>
                {" "}
                Notes
              </Text>
              <Text
                style={[styles.preventiveMaintenance, styles.textLayout]}
              >{`Not available `}</Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text style={[styles.maintenanceType, styles.workStatusTypo]}>
                {" "}
                Technician name
              </Text>
              <Text style={[styles.preventiveMaintenance, styles.textLayout]}>
                Hassan Ali
              </Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text
                style={[styles.operatingEngineerName, styles.nameTypo]}
              >{` Operating engineer name `}</Text>
              <Text style={[styles.abdulRahmanMustafa, styles.textLayout]}>
                {" "}
                Abdul Rahman Mustafa
              </Text>
            </View>
            <View style={[styles.requestNumberParent, styles.parentSpaceBlock]}>
              <Text
                style={[styles.nameOfOperating, styles.nameTypo]}
              >{`Name of operating manager `}</Text>
              <Text style={[styles.karimMuhammad, styles.textLayout]}>
                Karim Muhammad
              </Text>
            </View>
          </View>
          <View style={styles.photosFromTheProjectParent}>
            <Text style={[styles.photosFromThe, styles.reportFlexBox]}>
              Photos from the project
            </Text>
            <View style={[styles.rectangleGroup, styles.parentSpaceBlock]}>
              <Image
                style={styles.frameLayout}
                resizeMode="cover"
                source={require("../assets/rectangle-4315.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-4316.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.batteryIconPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.batteryIconPosition]}>
        <View style={[styles.groupChild, styles.navBarPosition]} />
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
          style={[styles.arrow21, styles.reportPosition]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.report, styles.reportPosition]}>Report</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  nameTypo: {
    fontSize: FontSize.size_xs,
    height: 16,
  },
  jeddahYachtClubSpaceBlock: {
    marginLeft: 89,
    color: Color.color,
  },
  parentSpaceBlock: {
    marginTop: 24,
    flexDirection: "row",
  },
  textTypo: {
    width: 93,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  sparePartsLayout: {
    width: 122,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  text1Typo: {
    marginLeft: 70,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  textLayout: {
    width: 142,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  workStatusTypo: {
    width: 114,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    alignItems: "center",
  },
  workDescriptionTypo: {
    height: 79,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  reportFlexBox: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    alignItems: "center",
  },
  frameLayout: {
    height: 159,
    width: 135,
    borderRadius: Border.br_8xs,
  },
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  reportPosition: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  reportDetails: {
    height: 16,
    width: 147,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  frameIcon: {
    marginLeft: 172,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  reportDetailsParent: {
    top: 113,
    left: 16,
    alignItems: "center",
  },
  reports12Child: {
    marginLeft: -165.5,
    top: 1296,
    width: 331,
    height: 43,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    shadowRadius: 6,
    elevation: 6,
    width: 343,
    height: 1026,
    zIndex: 0,
  },
  projectName: {
    width: 74,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  jeddahYachtClub: {
    width: 102,
    fontSize: FontSize.size_xs,
    height: 16,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  projectNameParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  requestNumber: {
    width: 112,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  text: {
    lineHeight: 25,
    marginLeft: 51,
    color: Color.color,
  },
  requestNumberParent: {
    alignItems: "center",
  },
  supervisorName: {
    width: 116,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  khaledAlAhmadi: {
    marginLeft: 47,
    color: Color.color,
  },
  requestDate: {
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 30,
    width: 93,
  },
  text1: {
    width: 102,
  },
  mechanicalAndElectrical: {
    marginLeft: 89,
    color: Color.color,
  },
  firstFloorAnd: {
    width: 148,
  },
  maintenanceType: {
    color: Color.praimary,
  },
  preventiveMaintenance: {
    marginLeft: 49,
    color: Color.color,
  },
  spareParts: {
    color: Color.praimary,
    fontWeight: "700",
  },
  coolingDevice: {
    marginLeft: 41,
    color: Color.color,
  },
  workDescription: {
    width: 106,
    color: Color.praimary,
    fontWeight: "700",
  },
  theEngineStopped: {
    width: 156,
    marginLeft: 57,
    color: Color.color,
  },
  workStatus: {
    color: Color.colorRed_100,
  },
  foreclose: {
    marginLeft: 49,
    color: Color.black,
  },
  maintenanceStartDate: {
    width: 140,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  text2: {
    marginLeft: 23,
    color: Color.color,
  },
  maintenanceEndDate: {
    width: 131,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  text3: {
    marginLeft: 32,
    color: Color.color,
  },
  operatingEngineerName: {
    color: Color.praimary,
    width: 147,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    alignItems: "center",
  },
  abdulRahmanMustafa: {
    marginLeft: 16,
    color: Color.color,
  },
  nameOfOperating: {
    width: 155,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
    alignItems: "center",
    fontWeight: "700",
  },
  karimMuhammad: {
    marginLeft: 8,
    color: Color.color,
  },
  photosFromThe: {
    width: 153,
    fontSize: FontSize.size_xs,
    height: 16,
    color: Color.black,
  },
  frameInner: {
    marginLeft: 49,
  },
  rectangleGroup: {
    justifyContent: "flex-end",
  },
  photosFromTheProjectParent: {
    marginTop: 32,
    alignItems: "center",
  },
  frameParent: {
    top: 24,
    left: 12,
    zIndex: 1,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -171.5,
    top: 153,
    height: 659,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowRadius: 20,
    elevation: 20,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    position: "absolute",
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
    right: 0,
    height: 11,
    width: 24,
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
    left: "50%",
    overflow: "hidden",
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
  report: {
    marginLeft: -74.5,
    width: 150,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 30,
    alignItems: "center",
    color: Color.praimary,
    left: "50%",
    fontSize: FontSize.size_base,
    top: 48,
  },
  rectangleContainer: {
    height: 89,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  reports12: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Reports12;
