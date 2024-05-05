import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FilterCompleted = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.filterCompleted, styles.iconLayout]}>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.text, styles.textTypo1]}>Apply filter</Text>
      </View>
      <View
        style={[styles.filterProjectNameParent, styles.iphoneXOrNewerPosition]}
      >
        <View style={styles.serviceTypeLayout}>
          <Text style={[styles.projectName, styles.dateTypo]}>
            Project Name
          </Text>
          <View
            style={[styles.filterProjectNameChild, styles.childShadowBox]}
          />
          <Image
            style={styles.filterProjectNameItem}
            resizeMode="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
        <View style={[styles.serviceType, styles.serviceTypeLayout]}>
          <Text style={[styles.projectName, styles.dateTypo]}>
            ticket number
          </Text>
          <View style={[styles.rectangleParent, styles.parentFlexBox]}>
            <View style={[styles.frameChild, styles.childShadowBox]} />
            <View
              style={[
                styles.pleaseEnterYourTicketNumbeWrapper,
                styles.buttonFlexBox,
              ]}
            >
              <Text style={styles.pleaseEnterYour}>
                Please enter your ticket number
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.serviceType, styles.serviceTypeLayout]}>
          <Text style={[styles.projectName, styles.dateTypo]}>
            Service Type
          </Text>
          <Image
            style={[styles.serviceTypeChild, styles.notchIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-153.png")}
          />
        </View>
        <View style={[styles.dateParent, styles.parentFlexBox]}>
          <Text style={[styles.date, styles.dateTypo]}>Date</Text>
          <View style={styles.groupWrapper}>
            <View style={styles.groupParent}>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={[styles.groupChild, styles.groupShadowBox]} />
                <Pressable
                  style={[styles.parent, styles.toPosition]}
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
              <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                <View style={[styles.groupItem, styles.groupShadowBox]} />
                <Pressable
                  style={[styles.parent, styles.toPosition]}
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
              <Text style={[styles.to, styles.toPosition]}>To</Text>
            </View>
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
      <View style={styles.groupPosition}>
        <View style={[styles.groupInner, styles.groupPosition]} />
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
          style={[styles.arrow21, styles.filterPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.filter, styles.filterPosition]}>Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  iphoneXOrNewerPosition: {
    left: "50%",
    position: "absolute",
  },
  dateTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  childShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
  },
  serviceTypeLayout: {
    height: 82,
    width: 343,
  },
  parentFlexBox: {
    alignItems: "flex-end",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    width: 120,
    top: 0,
    height: 32,
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
  toPosition: {
    top: 9,
    position: "absolute",
  },
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
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
  filterPosition: {
    height: 24,
    top: 48,
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
    top: 718,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    width: 343,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
  },
  projectName: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    display: "flex",
    left: "0%",
    position: "absolute",
  },
  filterProjectNameChild: {
    top: 26,
    left: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.whait,
    position: "absolute",
  },
  filterProjectNameItem: {
    top: 47,
    left: 16,
    width: 311,
    height: 14,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  pleaseEnterYour: {
    opacity: 0.5,
    textAlign: "right",
    color: Color.gray,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontFamily: FontFamily.dGBaysan,
  },
  pleaseEnterYourTicketNumbeWrapper: {
    top: 21,
    right: 16,
    zIndex: 1,
  },
  rectangleParent: {
    marginTop: -15,
    top: "50%",
    right: "-100%",
    left: "100%",
    backgroundColor: Color.whait,
    position: "absolute",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  serviceType: {
    marginTop: 24,
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  date: {
    width: 70,
    height: 16,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    display: "flex",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 120,
    left: 0,
    top: 0,
    height: 32,
    position: "absolute",
  },
  textTypo: {
    width: 58,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    color: Color.gray,
    fontWeight: "300",
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
    alignItems: "center",
    top: 9,
    flexDirection: "row",
  },
  rectangleGroup: {
    left: 0,
    width: 120,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: 120,
    left: 0,
    top: 0,
    height: 32,
    position: "absolute",
  },
  rectangleContainer: {
    left: 223,
  },
  to: {
    left: 163,
    fontWeight: "600",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    top: 9,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupParent: {
    height: 32,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  groupWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
  dateParent: {
    marginTop: 24,
  },
  filterProjectNameParent: {
    top: 112,
    height: 382,
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
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  filter: {
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
  filterCompleted: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default FilterCompleted;
