import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MOREInformaion12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={styles.moreInformaionChild} />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.personResponsibleForTheConParent}>
          <Text style={[styles.personResponsibleFor, styles.alternativeTypo]}>
            Person responsible for the contract
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.pleaseEnterTheNameInArabiWrapper,
                styles.pleaseWrapperPosition,
              ]}
            >
              <Text style={styles.pleaseTypo}>
                {" "}
                Please enter the name in Arabic
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={[styles.taxAmount, styles.alternativeTypo]}>
            {" "}
            Tax amount
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.pleaseEnterTheOfficialTaxWrapper,
                styles.pleaseWrapperPosition,
              ]}
            >
              <Text style={styles.pleaseTypo}>
                {" "}
                Please enter the official tax amount
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text
            style={[styles.alternativeMobileNumber, styles.alternativeTypo]}
          >
            {" "}
            Alternative mobile number
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.pleaseEnterTheMobileNumberWrapper,
                styles.pleaseWrapperPosition,
              ]}
            >
              <Text style={styles.clickTypo}>
                {" "}
                Please enter the mobile number
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={[styles.alternativeEmail, styles.alternativeTypo]}>
            {" "}
            Alternative email
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.pleaseEnterTheEmailWrapper,
                styles.pleaseWrapperPosition,
              ]}
            >
              <Text style={styles.clickTypo}> Please enter the email</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={styles.alternativeAddressTypo}>
            {" "}
            Alternative address
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text
                  style={styles.clickTypo}
                >{` Please enter the address in detail `}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={styles.alternativeAddressTypo}>
            Alternate contact person
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text style={styles.clickTypo}>Please enter mobile number</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={[styles.commercialRegistration, styles.alternativeTypo]}>
            Commercial registration
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text style={styles.clickTypo}>
                  Please enter commercial registration number
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[
            styles.typeOfBusinessInEnglish,
            styles.taxAmountParentSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../assets/type-of-business-in-english.png")}
        />
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={styles.companyTypo}>Employees</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text style={styles.clickTypo}>
                  Please enter number of employees
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={[styles.companyAddress, styles.companyTypo]}>
            Company address
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[styles.svgexport17101Parent, styles.frameWrapperPosition]}
            >
              <Image
                style={styles.frameIconLayout}
                resizeMode="cover"
                source={require("../assets/svgexport17-10-1.png")}
              />
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text style={styles.clickTypo}>
                  Click to select location from map
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.taxAmountParent, styles.taxAmountParentSpaceBlock]}
        >
          <Text style={[styles.companyLogo, styles.companyTypo]}>
            Company logo
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[styles.svgexport17101Parent, styles.frameWrapperPosition]}
            >
              <Image
                style={styles.frameIconLayout}
                resizeMode="cover"
                source={require("../assets/frame75.png")}
              />
              <View
                style={[
                  styles.pleaseEnterTheAddressInDeWrapper,
                  styles.buttonFlexBox,
                ]}
              >
                <Text style={styles.clickTypo}> Click to choose an image</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Home2")}
      >
        <Text style={[styles.text, styles.textTypo]}>Create account</Text>
      </Pressable>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.frameParentPosition]}>
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
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
        <Text style={[styles.moreInformation, styles.arrow21Position]}>
          More information
        </Text>
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("SIGNUP")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <View style={styles.logo}>
          <View style={styles.logoInnerPosition}>
            <View style={[styles.groupChild, styles.logoInnerPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.tapPosition]}>
        <View style={[styles.homeIndicator, styles.frameWrapperFlexBox]}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  alternativeTypo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.praimary,
    textTransform: "capitalize",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  pleaseWrapperPosition: {
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    top: 21,
    alignItems: "center",
    position: "absolute",
  },
  taxAmountParentSpaceBlock: {
    marginTop: 16,
    width: 343,
  },
  frameWrapperFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  companyTypo: {
    width: 125,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  frameWrapperPosition: {
    width: 311,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  tapPosition: {
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
    height: 24,
    top: 48,
    position: "absolute",
  },
  logoInnerPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1320,
    right: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
  },
  personResponsibleFor: {
    width: 302,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    height: 56,
    width: 343,
  },
  pleaseTypo: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterTheNameInArabiWrapper: {
    left: 159,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    width: 343,
  },
  personResponsibleForTheConParent: {
    alignItems: "flex-end",
    width: 343,
  },
  taxAmount: {
    width: 94,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  pleaseEnterTheOfficialTaxWrapper: {
    left: 139,
  },
  taxAmountParent: {
    alignItems: "flex-end",
  },
  alternativeMobileNumber: {
    width: 176,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  clickTypo: {
    textAlign: "right",
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseEnterTheMobileNumberWrapper: {
    left: 158,
  },
  alternativeEmail: {
    width: 133,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  pleaseEnterTheEmailWrapper: {
    left: 209,
  },
  alternativeAddressTypo: {
    width: 172,
    height: 16,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  pleaseEnterTheAddressInDeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  frameWrapper: {
    width: 311,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 21,
    justifyContent: "flex-end",
  },
  commercialRegistration: {
    width: 174,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  typeOfBusinessInEnglish: {
    height: 82,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  companyAddress: {
    textTransform: "capitalize",
    width: 125,
  },
  frameIconLayout: {
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  svgexport17101Parent: {
    top: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  companyLogo: {
    textTransform: "capitalize",
    width: 125,
  },
  frameParent: {
    marginLeft: 171.5,
    top: 158,
    height: 654,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  text: {
    color: Color.whait,
    width: 291,
  },
  button: {
    marginLeft: -171.5,
    top: 1260,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    left: "50%",
    height: 56,
    width: 343,
    position: "absolute",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.whait,
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
  moreInformation: {
    marginLeft: -74.5,
    width: 150,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    top: 48,
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    left: 16,
    top: 48,
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    shadowRadius: 10,
    marginLeft: -80,
  },
  icon1: {
    top: 3,
    right: 30,
    width: 100,
    height: 42,
    position: "absolute",
  },
  logo: {
    marginLeft: -80.5,
    top: 86,
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  tap: {
    height: 134,
    top: 0,
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
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  moreInformaion: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default MOREInformaion12;
