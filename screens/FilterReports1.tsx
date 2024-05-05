import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const FilterReports1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.filterReports}>
      <View style={styles.filterReportsChild} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Reports")}
      >
        <Text style={styles.text}>Apply filter</Text>
      </Pressable>
      <View
        style={[styles.filterProjectNameParent, styles.iphoneXOrNewerPosition]}
      >
        <View style={styles.serviceTypeLayout}>
          <Text style={[styles.projectName, styles.filter5Typo]}>
            Project Name
          </Text>
          <View style={styles.filterProjectNameChild} />
          <Image
            style={styles.filterProjectNameItem}
            resizeMode="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
        <View style={styles.encapsulatedGroup}>
          <View style={styles.maintenanceTypeParent}>
            <Text style={styles.maintenanceType}>Maintenance type</Text>
            <View style={[styles.ticketStatus, styles.ticketLayout]}>
              <Text style={[styles.jobDone, styles.requestTypo1]}>
                Job Done
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={styles.ticketStatus1}>
              <Text style={[styles.changeTheStatus, styles.requestTypo1]}>
                change the status
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.ticketStatus2, styles.ticketLayout]}>
              <Text style={[styles.reschedule, styles.requestTypo1]}>
                reschedule
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.serviceType, styles.serviceTypeLayout]}>
          <Text style={[styles.projectName, styles.filter5Typo]}>
            Service Type
          </Text>
          <Image
            style={styles.serviceTypeChild}
            resizeMode="cover"
            source={require("../assets/frame-15.png")}
          />
        </View>
        <View style={styles.dateParent}>
          <Text style={[styles.date, styles.dateTypo]}>Date</Text>
          <View style={styles.frameParent}>
            <View style={styles.dateClassParent}>
              <View style={styles.dateLayout}>
                <Text style={[styles.monthly, styles.annualTypo]}>Monthly</Text>
                <Image
                  style={styles.frameIconPosition}
                  resizeMode="cover"
                  source={require("../assets/frame23.png")}
                />
              </View>
              <View style={[styles.dateClass1, styles.dateLayout]}>
                <Text style={[styles.annual, styles.annualTypo]}>Annual</Text>
                <Image
                  style={styles.frameIconPosition}
                  resizeMode="cover"
                  source={require("../assets/frame23.png")}
                />
              </View>
            </View>
            <View style={styles.groupParent}>
              <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <View style={[styles.groupChild, styles.groupShadowBox]} />
                <Pressable
                  style={styles.parent}
                  onPress={() => navigation.navigate("FilterReports")}
                >
                  <Text style={styles.textTypo}>{`01 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={[styles.groupItem, styles.groupShadowBox]} />
                <Pressable
                  style={styles.parent}
                  onPress={() => navigation.navigate("FilterReports")}
                >
                  <Text style={styles.textTypo}>{`30 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                </Pressable>
              </View>
              <Text style={[styles.to, styles.requestTypo]}>To</Text>
            </View>
          </View>
        </View>
        <View style={styles.statusParent}>
          <Text style={styles.dateTypo}>Status</Text>
          <View style={styles.filter}>
            <Text style={[styles.allRequests, styles.requestTypo]}>
              All Requests
            </Text>
            <Image
              style={[styles.frameIcon5, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter1}>
            <Text style={[styles.completedRequest, styles.requestTypo]}>
              Completed Tickets
            </Text>
            <Image
              style={[styles.frameIcon6, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter1}>
            <Text style={[styles.completedRequest, styles.requestTypo]}>
              Tickets in progress
            </Text>
            <Image
              style={[styles.frameIcon6, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter3}>
            <Text style={[styles.incompleteRequest, styles.requestTypo]}>
              Incomplete Tickets
            </Text>
            <Image
              style={[styles.frameIcon8, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter3}>
            <Text style={[styles.incompleteRequest, styles.requestTypo]}>
              Tickets are out of scope
            </Text>
            <Image
              style={[styles.frameIcon8, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.serviceType, styles.serviceTypeLayout]}
          resizeMode="cover"
          source={require("../assets/service-type.png")}
        />
      </View>
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.navBarPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.navBarPosition]}>
        <View style={[styles.groupInner, styles.navBarPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.iphoneXOrNewerPosition]}>
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
          onPress={() => navigation.navigate("Reports")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.filter5, styles.arrow21Position]}>Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneXOrNewerPosition: {
    left: "50%",
    position: "absolute",
  },
  filter5Typo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  ticketLayout: {
    width: 80,
    height: 24,
    top: 40,
    position: "absolute",
  },
  requestTypo1: {
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
  },
  frameIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  serviceTypeLayout: {
    height: 82,
    width: 343,
  },
  dateTypo: {
    width: 70,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  annualTypo: {
    left: "61.76%",
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  dateLayout: {
    width: 68,
    height: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  rectangleLayout: {
    width: 120,
    height: 32,
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
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
  requestTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
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
  filterReportsChild: {
    top: 959,
    right: 16,
    width: 344,
    height: 68,
    overflow: "hidden",
    position: "absolute",
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
    top: 871,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  projectName: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    display: "flex",
    textTransform: "capitalize",
    left: "0%",
    position: "absolute",
  },
  filterProjectNameChild: {
    top: 26,
    left: 343,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  filterProjectNameItem: {
    top: 47,
    left: 16,
    width: 311,
    height: 14,
    position: "absolute",
  },
  maintenanceType: {
    right: 196,
    width: 121,
    height: 16,
    top: 0,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  jobDone: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    left: "32.5%",
    width: "67.5%",
  },
  frameIcon: {
    width: "25%",
    right: "75%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    position: "absolute",
    left: "0%",
  },
  ticketStatus: {
    height: 24,
    left: 0,
  },
  changeTheStatus: {
    width: "78.18%",
    left: "23.64%",
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    textTransform: "capitalize",
  },
  frameIcon1: {
    width: "18.18%",
    right: "81.82%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    position: "absolute",
    left: "0%",
  },
  ticketStatus1: {
    left: 119,
    width: 110,
    height: 24,
    top: 40,
    position: "absolute",
  },
  reschedule: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    left: "32.5%",
    width: "67.5%",
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
    marginTop: 24,
    height: 64,
    overflow: "hidden",
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  serviceType: {
    marginTop: 24,
  },
  date: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  monthly: {
    width: "61.76%",
  },
  frameIconPosition: {
    left: "70.59%",
    width: "29.41%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
    position: "absolute",
  },
  annual: {
    width: "47.06%",
  },
  dateClass1: {
    marginLeft: 40,
  },
  dateClassParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 120,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    width: 58,
    textAlign: "right",
    color: Color.gray,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: 14,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  groupIconLayout: {
    marginLeft: 8,
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  parent: {
    left: 20,
    top: 9,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 120,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 223,
  },
  to: {
    left: 163,
    fontWeight: "600",
    color: Color.colorLightsteelblue_100,
    top: 9,
    textAlign: "center",
  },
  groupParent: {
    height: 32,
    marginTop: 16,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  frameParent: {
    marginTop: 16,
    alignItems: "center",
  },
  dateParent: {
    alignItems: "flex-end",
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  allRequests: {
    width: "79.28%",
    left: "22.52%",
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
  },
  frameIcon5: {
    width: "18.02%",
    right: "82.88%",
    left: "-0.9%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  filter: {
    width: 111,
    marginTop: 16,
    height: 24,
  },
  completedRequest: {
    width: "83.55%",
    left: "16.45%",
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
  },
  frameIcon6: {
    width: "13.16%",
    right: "87.5%",
    left: "-0.66%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  filter1: {
    width: 152,
    marginTop: 16,
    height: 24,
  },
  incompleteRequest: {
    width: "93.1%",
    left: "17.24%",
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
  },
  frameIcon8: {
    width: "13.79%",
    right: "86.9%",
    left: "-0.69%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  filter3: {
    width: 145,
    marginTop: 16,
    height: 24,
  },
  statusParent: {
    width: 201,
    marginTop: 24,
  },
  filterProjectNameParent: {
    top: 113,
    height: 699,
    marginLeft: -171.5,
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
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 0,
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  groupInner: {
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
    right: 0,
    width: 24,
    height: 11,
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  filter5: {
    marginLeft: -74.5,
    lineHeight: 30,
    color: Color.praimary,
    width: 150,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 48,
    justifyContent: "center",
    left: "50%",
  },
  rectangleContainer: {
    height: 89,
    top: 0,
  },
  filterReports: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default FilterReports1;
