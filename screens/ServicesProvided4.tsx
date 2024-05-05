import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const ServicesProvided4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.servicesProvided4}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleLayout}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo1]}>21584</Text>
          <Text style={[styles.orderNumber, styles.orderNumberClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.orderNumberClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChild2Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete, styles.completedTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.inProgressFlexBox]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedTypo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode")}
          >
            <Text style={[styles.feedback, styles.text2Typo]}>feedback</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame35.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("Reports14")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>view report</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame36.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo1]}>21584</Text>
          <Text style={[styles.orderNumber, styles.orderNumberClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.orderNumberClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChild2Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete, styles.completedTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.inProgressFlexBox]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedTypo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode")}
          >
            <Text style={[styles.feedback, styles.text2Typo]}>feedback</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame35.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("Reports14")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>view report</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame36.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo1]}>21584</Text>
          <Text style={[styles.orderNumber, styles.orderNumberClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.orderNumberClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChild2Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete, styles.completedTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.inProgressFlexBox]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedTypo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode")}
          >
            <Text style={[styles.feedback, styles.text2Typo]}>feedback</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame35.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("Reports14")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>view report</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame36.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text, styles.textTypo1]}>21584</Text>
          <Text style={[styles.orderNumber, styles.orderNumberClr]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text1Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text1Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.orderNumberClr]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text1Typo]}>
            Date of request :
          </Text>
          <View style={styles.groupItem} />
          <View style={styles.lineParent}>
            <View style={[styles.groupInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChild2Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete, styles.completedTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.inProgressFlexBox]}>
              In progress
            </Text>
            <Text style={[styles.completed, styles.completedTypo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode")}
          >
            <Text style={[styles.feedback, styles.text2Typo]}>feedback</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame35.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("Reports14")}
          >
            <Text style={[styles.text2, styles.text2Typo]}>view report</Text>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame36.png")}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.thereIs35CompletedServiceParent,
          styles.groupContainerFlexBox,
        ]}
      >
        <Text style={[styles.thereIs35Container, styles.servicesProvidedTypo]}>
          <Text style={styles.thereIs35Container1}>
            <Text style={styles.thereIs}>{`There is `}</Text>
            <Text style={styles.text12}>35</Text>
            <Text style={styles.thereIs}> completed service</Text>
          </Text>
        </Text>
        <Pressable
          style={styles.frameIconLayout}
          onPress={() => navigation.navigate("FilterCompleted")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.servicesProvided4Child, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided6")}
      />
      <Pressable
        style={[styles.servicesProvided4Item, styles.servicesLayout]}
        onPress={() => navigation.navigate("ServicesProvided5")}
      />
      <View style={[styles.groupContainer, styles.groupContainerFlexBox]}>
        <View style={styles.rectangleParentLayout}>
          <View style={[styles.groupChild23, styles.groupChildShadowBox]} />
          <View style={[styles.completedParent, styles.parentPosition]}>
            <Text style={[styles.completed4, styles.inTransitTypo]}>
              Completed
            </Text>
            <Text style={[styles.text13, styles.textTypo]}>( 35 )</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.incompleteParent, styles.parentPosition]}>
            <Text style={[styles.incomplete4, styles.inTransitTypo]}>
              Incomplete
            </Text>
            <Text style={[styles.text14, styles.textTypo]}>{`( 63 ) `}</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.outOfScopeParent, styles.parentPosition]}>
            <Text style={[styles.outOfScope, styles.inTransitTypo]}>
              out of scope
            </Text>
            <Text style={[styles.text15, styles.textTypo]}>( 2 )</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.inTransitParent, styles.parentPosition]}>
            <Text style={[styles.inTransit, styles.inTransitTypo]}>
              in transit
            </Text>
            <Text style={[styles.text15, styles.textTypo]}>( 1 )</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupChild27Position}>
        <View style={[styles.groupChild27, styles.groupChild27Position]} />
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
              source={require("../assets/wifi4.png")}
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
            style={[styles.leftSideIcon, styles.groupChild2Position]}
            resizeMode="cover"
            source={require("../assets/left-side1.png")}
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
        <Text style={[styles.servicesProvided, styles.arrow21Position]}>
          Services provided
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
  textTypo1: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  orderNumberClr: {
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  text1Typo: {
    top: 48,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  lineViewLayout: {
    width: 91,
    borderTopWidth: 1,
    borderColor: Color.colorMediumseagreen,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 10,
    top: 0,
  },
  groupChild2Position: {
    left: 21,
    position: "absolute",
  },
  completedTypo: {
    width: 53,
    justifyContent: "center",
    textAlign: "center",
    top: 14,
    color: Color.black,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  inProgressFlexBox: {
    textAlign: "center",
    justifyContent: "center",
  },
  mediumPosition: {
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text2Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
  },
  rectangleLayout: {
    height: 190,
    width: 343,
  },
  groupContainerFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  servicesProvidedTypo: {
    lineHeight: 30,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  servicesLayout: {
    height: 38,
    width: 88,
    backgroundColor: Color.colorGainsboro_200,
    top: 116,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  inTransitTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    marginLeft: 2,
    color: Color.color,
    fontSize: FontSize.size_xs,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  rectangleParentLayout: {
    height: 32,
    width: 150,
  },
  groupChild27Position: {
    height: 87,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  batteryIconPosition: {
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
  groupChildShadowBox1: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  text: {
    right: 52,
    width: 31,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    height: 16,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    fontWeight: "300",
    lineHeight: 25,
  },
  orderNumber: {
    right: 85,
    width: 70,
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  preventive: {
    right: 16,
    width: 48,
    color: Color.praimary,
    fontWeight: "300",
  },
  projectName: {
    right: 261,
    width: 66,
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    width: 86,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    height: 16,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    fontWeight: "300",
  },
  text1: {
    right: 197,
    width: 51,
    color: Color.praimary,
    fontWeight: "300",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  groupInner: {
    left: 127,
  },
  lineView: {
    left: 29,
  },
  ellipseIcon: {
    left: 216,
    position: "absolute",
  },
  groupChild1: {
    left: 118,
    position: "absolute",
  },
  groupChild2: {
    height: 10,
    width: 10,
    top: 0,
  },
  incomplete: {
    right: 195,
  },
  inProgress: {
    right: 99,
    width: 52,
    justifyContent: "center",
    top: 14,
    textAlign: "center",
    color: Color.black,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  completed: {
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  feedback: {
    width: 63,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
  },
  frameIcon: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton: {
    left: 178,
    borderWidth: 2,
    width: 149,
    paddingHorizontal: Padding.p_sm,
    borderColor: Color.praimary,
    borderStyle: "solid",
    justifyContent: "center",
  },
  text2: {
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon1: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton1: {
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_5xl_5,
    left: 16,
  },
  rectangleGroup: {
    marginTop: 16,
  },
  groupParent: {
    top: 199,
    height: 613,
    left: 16,
    position: "absolute",
  },
  thereIs: {
    color: Color.colorLightsteelblue_100,
  },
  text12: {
    color: Color.praimary,
  },
  thereIs35Container1: {
    width: "100%",
  },
  thereIs35Container: {
    width: 142,
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    lineHeight: 30,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thereIs35CompletedServiceParent: {
    top: 167,
    justifyContent: "space-between",
    alignItems: "center",
    width: 343,
    flexDirection: "row",
    left: 16,
  },
  servicesProvided4Child: {
    right: 32,
  },
  servicesProvided4Item: {
    right: 255,
  },
  groupChild23: {
    borderWidth: 1,
    borderColor: Color.praimary,
    borderStyle: "solid",
  },
  completed4: {
    width: 63,
    fontWeight: "700",
  },
  text13: {
    width: 30,
    fontWeight: "700",
  },
  completedParent: {
    left: 31,
  },
  incomplete4: {
    width: 63,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  text14: {
    width: 29,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  incompleteParent: {
    left: 28,
  },
  rectangleParent2: {
    opacity: 0.5,
    marginLeft: 16,
  },
  outOfScope: {
    width: 74,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  text15: {
    width: 23,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  outOfScopeParent: {
    left: 26,
  },
  inTransit: {
    width: 54,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  inTransitParent: {
    left: 36,
  },
  groupContainer: {
    marginLeft: -171.5,
    top: 111,
    width: 359,
    left: "50%",
  },
  groupChild27: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
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
    height: 21,
    width: 54,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  servicesProvided: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    width: 135,
    left: "50%",
    lineHeight: 30,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    justifyContent: "center",
    textAlign: "center",
    color: Color.praimary,
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
  servicesProvided4: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ServicesProvided4;
