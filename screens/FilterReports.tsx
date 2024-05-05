import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const FilterReports = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.filterReports}>
      <View style={styles.filterReportsChild} />
      <View style={styles.button}>
        <Text style={styles.text}>Apply filter</Text>
      </View>
      <View
        style={[styles.filterProjectNameParent, styles.frameWrapperPosition]}
      >
        <View style={styles.serviceTypeLayout}>
          <Text style={styles.projectName}>Project Name</Text>
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
              <Text style={[styles.jobDone, styles.jobDoneTypo]}>Job Done</Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={styles.ticketStatus1}>
              <Text style={[styles.changeTheStatus, styles.jobDoneTypo]}>
                change the status
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.ticketStatus2, styles.ticketLayout]}>
              <Text style={[styles.reschedule, styles.jobDoneTypo]}>
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
          <Text style={styles.projectName}>Service Type</Text>
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
                <View style={styles.groupShadowBox} />
                <View style={styles.parent}>
                  <Text style={styles.textTypo1}>{`01 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                </View>
              </View>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={styles.groupShadowBox} />
                <View style={styles.parent}>
                  <Text style={styles.textTypo1}>{`30 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                </View>
              </View>
              <Text style={styles.to}>To</Text>
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
              Completed Request
            </Text>
            <Image
              style={[styles.frameIcon6, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter1}>
            <Text style={[styles.completedRequest, styles.requestTypo]}>
              Request in progress
            </Text>
            <Image
              style={[styles.frameIcon6, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={styles.filter3}>
            <Text style={[styles.incompleteRequest, styles.requestTypo]}>
              Incomplete request
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
      <View style={[styles.rectangleContainer, styles.navBarPosition]}>
        <View style={styles.groupInner} />
        <View style={[styles.iphoneXOrNewer, styles.frameWrapperPosition]}>
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
          style={styles.arrow21}
          onPress={() => navigation.navigate("Reports")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={styles.filter4}>Filter</Text>
      </View>
      <Pressable
        style={styles.filterReportsItem}
        onPress={() => navigation.navigate("FilterReports1")}
      />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.navBarPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={styles.moParent}>
        <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
        <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
        <Text style={[styles.we, styles.moTypo]}>We</Text>
        <Text style={[styles.th, styles.moTypo]}>Th</Text>
        <Text style={[styles.er, styles.moTypo]}>Er</Text>
        <Text style={[styles.sa, styles.moTypo]}>Sa</Text>
        <Text style={[styles.su, styles.moTypo]}>Su</Text>
        <Image
          style={[styles.vectorIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-198.png")}
        />
        <View style={styles.namberParent}>
          <View style={[styles.namber, styles.namberSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.namber1, styles.namberSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo]}>8</Text>
          </View>
          <View style={[styles.namber2, styles.namberSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo]}>15</Text>
          </View>
          <View style={[styles.namber3, styles.namberSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo]}>22</Text>
          </View>
          <View style={[styles.namber4, styles.namberSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo]}>29</Text>
          </View>
          <View style={[styles.namber5, styles.namberPosition5]}>
            <Text style={[styles.text3, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.namber6, styles.namberPosition5]}>
            <Text style={[styles.text3, styles.textTypo]}>9</Text>
          </View>
          <View style={[styles.namber7, styles.namberPosition5]}>
            <Text style={[styles.text3, styles.textTypo]}>16</Text>
          </View>
          <View style={[styles.namber8, styles.namberPosition5]}>
            <Text style={[styles.text3, styles.textTypo]}>23</Text>
          </View>
          <View style={[styles.namber9, styles.namberPosition5]}>
            <Text style={[styles.text3, styles.textTypo]}>30</Text>
          </View>
          <View style={[styles.namber10, styles.namberPosition4]}>
            <Text style={[styles.text3, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.namber11, styles.namberPosition4]}>
            <Text style={[styles.text3, styles.textTypo]}>10</Text>
          </View>
          <View style={[styles.namber12, styles.namberPosition4]}>
            <Text style={[styles.text3, styles.textTypo]}>17</Text>
          </View>
          <View style={[styles.namber13, styles.namberPosition4]}>
            <Text style={[styles.text3, styles.textTypo]}>24</Text>
          </View>
          <View style={[styles.namber14, styles.namberPosition4]}>
            <Text style={[styles.text3, styles.textTypo]}>31</Text>
          </View>
          <View style={[styles.namber15, styles.namberPosition3]}>
            <Text style={[styles.text3, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.namber16, styles.namberPosition3]}>
            <Text style={[styles.text3, styles.textTypo]}>11</Text>
          </View>
          <View style={[styles.namber17, styles.namberPosition3]}>
            <Text style={[styles.text3, styles.textTypo]}>18</Text>
          </View>
          <View style={[styles.namber18, styles.namberPosition3]}>
            <Text style={[styles.text3, styles.textTypo]}>25</Text>
          </View>
          <View style={[styles.namber19, styles.namberPosition2]}>
            <Text style={[styles.text3, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.namber20, styles.namberPosition2]}>
            <Text style={[styles.text3, styles.textTypo]}>12</Text>
          </View>
          <View style={[styles.namber21, styles.namberPosition2]}>
            <Text style={[styles.text3, styles.textTypo]}>19</Text>
          </View>
          <View style={[styles.namber22, styles.namberPosition2]}>
            <Text style={[styles.text3, styles.textTypo]}>26</Text>
          </View>
          <View style={[styles.namber23, styles.namberPosition1]}>
            <Text style={[styles.text3, styles.textTypo]}>6</Text>
          </View>
          <View style={[styles.namber24, styles.namberPosition1]}>
            <Text style={[styles.text3, styles.textTypo]}>13</Text>
          </View>
          <View style={[styles.namber25, styles.namberPosition1]}>
            <Text style={[styles.text3, styles.textTypo]}>20</Text>
          </View>
          <View style={[styles.namber26, styles.namberPosition1]}>
            <Text style={[styles.text29, styles.textTypo]}>27</Text>
          </View>
          <View style={[styles.namber27, styles.namberPosition]}>
            <Text style={[styles.text3, styles.textTypo]}>7</Text>
          </View>
          <View style={[styles.namber28, styles.namberPosition]}>
            <Text style={[styles.text3, styles.textTypo]}>14</Text>
          </View>
          <View style={[styles.namber29, styles.namberPosition]}>
            <Text style={[styles.text3, styles.textTypo]}>21</Text>
          </View>
          <View style={[styles.namber30, styles.namberPosition]}>
            <Text style={[styles.text3, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector10.png")}
            />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.frameWrapperFlexBox}>
                <Text style={styles.august2023}>August 2023</Text>
                <Image
                  style={styles.groupIcon2}
                  resizeMode="cover"
                  source={require("../assets/group7.png")}
                />
              </View>
            </View>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperPosition: {
    left: "50%",
    position: "absolute",
  },
  ticketLayout: {
    width: 80,
    height: 24,
    top: 40,
    position: "absolute",
  },
  jobDoneTypo: {
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
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
  requestTypo: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
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
  moTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.poppinsSemiBold,
    top: 136,
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  namberSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    right: 0,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 0.2,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  namberPosition5: {
    right: 44,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  namberPosition4: {
    right: 88,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  namberPosition3: {
    right: 132,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  namberPosition2: {
    right: 176,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  namberPosition1: {
    right: 220,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  namberPosition: {
    right: 264,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  viewLayout: {
    height: 46,
    width: 329,
    right: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 15,
    width: 9,
    top: 1,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    width: 104,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filterReportsChild: {
    top: 959,
    right: 16,
    width: 344,
    height: 68,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    width: 291,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.whait,
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
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    left: "0%",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
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
    width: 121,
    height: 16,
    right: 196,
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
    left: "32.5%",
    width: "67.5%",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
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
    top: "16.67%",
    height: "66.67%",
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
    left: "32.5%",
    width: "67.5%",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    textTransform: "capitalize",
  },
  ticketStatus2: {
    left: 237,
    height: 24,
  },
  maintenanceTypeParent: {
    width: 317,
    right: 20,
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
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
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
  groupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: Border.br_8xs,
    width: 120,
    height: 32,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
  },
  textTypo1: {
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
  rectangleGroup: {
    left: 223,
  },
  to: {
    left: 163,
    color: Color.colorLightsteelblue_100,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 9,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
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
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
    top: 1,
    width: 375,
    marginLeft: -187.5,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    left: "50%",
    position: "absolute",
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
    right: 0,
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
    top: 48,
    width: 24,
    height: 24,
    position: "absolute",
  },
  filter4: {
    marginLeft: -74.5,
    lineHeight: 30,
    width: 150,
    color: Color.praimary,
    top: 48,
    height: 24,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    height: 89,
    top: 0,
  },
  filterReportsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    top: "50%",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    height: 812,
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
    justifyContent: "flex-end",
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: "#646566",
    height: 34,
    top: 0,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  mo: {
    width: 24,
    right: 20,
  },
  tu: {
    right: 64,
    width: 24,
  },
  we: {
    right: 108,
  },
  th: {
    right: 152,
    width: 24,
  },
  er: {
    width: 24,
    right: 196,
    opacity: 0.5,
    fontFamily: FontFamily.poppinsSemiBold,
    top: 136,
  },
  sa: {
    right: 240,
    width: 24,
  },
  su: {
    right: 284,
    width: 24,
  },
  vectorIcon: {
    height: "5.08%",
    width: "6.08%",
    top: "5.08%",
    right: "87.84%",
    bottom: "89.85%",
    left: "6.08%",
    position: "absolute",
  },
  frameChild: {
    top: 290,
    right: 237,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text3: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    letterSpacing: 0.2,
  },
  namber: {
    top: 0,
  },
  namber1: {
    top: 40,
  },
  namber2: {
    top: 80,
  },
  namber3: {
    top: 120,
  },
  namber4: {
    top: 160,
  },
  namber5: {
    top: 0,
  },
  namber6: {
    top: 40,
  },
  namber7: {
    top: 80,
  },
  namber8: {
    top: 120,
  },
  namber9: {
    top: 160,
  },
  namber10: {
    top: 0,
  },
  namber11: {
    top: 40,
  },
  namber12: {
    top: 80,
  },
  namber13: {
    top: 120,
  },
  namber14: {
    top: 160,
  },
  namber15: {
    top: 0,
  },
  namber16: {
    top: 40,
  },
  namber17: {
    top: 80,
  },
  namber18: {
    top: 120,
  },
  namber19: {
    top: 0,
  },
  namber20: {
    top: 40,
  },
  namber21: {
    top: 80,
  },
  namber22: {
    top: 120,
  },
  namber23: {
    top: 0,
  },
  namber24: {
    top: 40,
  },
  namber25: {
    top: 80,
  },
  text29: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: 0.2,
    color: Color.whait,
  },
  namber26: {
    top: 120,
  },
  namber27: {
    top: 0,
  },
  namber28: {
    top: 40,
  },
  namber29: {
    top: 80,
  },
  namber30: {
    top: 120,
  },
  namberParent: {
    top: 173,
    width: 288,
    height: 184,
    right: 20,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorAliceblue_100,
    top: 0,
  },
  vectorIcon1: {
    zIndex: 0,
    right: 0,
  },
  august2023: {
    fontFamily: FontFamily.poppinsBold,
    letterSpacing: 0.1,
    color: Color.praimary,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontWeight: "700",
  },
  groupIcon2: {
    width: 8,
    height: 4,
    marginLeft: 6,
  },
  frameWrapper: {
    marginLeft: -52.6,
    zIndex: 1,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  vectorIcon2: {
    right: 301,
    zIndex: 2,
  },
  vectorParent: {
    top: 14,
    right: 10,
    padding: Padding.p_3xs,
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  groupView: {
    top: 66,
  },
  moParent: {
    marginTop: -197,
    marginLeft: -164.5,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 2.2,
    elevation: 2.2,
    height: 394,
    width: 329,
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  filterReports: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default FilterReports;
