import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View
        style={[
          styles.cleaningWindowByUsingSpeciParent,
          styles.groupChildLayout,
        ]}
      >
        <Image
          style={[styles.cleaningWindowByUsingSpeciIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/cleaningwindowbyusingspecialliquidrepairmanisworkingindoorsmodernroom-2.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.faceIdShadowBox]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
          useAngle={true}
          angle={180}
        />
        <View style={[styles.iphoneXOrNewer, styles.iconPosition1]}>
          <View style={styles.iphoneXOrNewer1}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/battery1.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi7.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                resizeMode="cover"
                source={require("../assets/mobile-signal1.png")}
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
              source={require("../assets/left-side4.png")}
            />
          </View>
        </View>
        <Text style={[styles.myAccount, styles.lineLayout]}>My Account</Text>
        <Pressable
          style={[styles.arrow21, styles.arrow21Position]}
          onPress={() => navigation.navigate("Home9")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-13.png")}
          />
        </Pressable>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3-1-41.png")}
        />
      </View>
      <View style={styles.profileChild} />
      <View style={styles.encapsulatedGroupParent}>
        <Image
          style={[styles.encapsulatedGroupIcon, styles.bottomNavLayout]}
          resizeMode="cover"
          source={require("../assets/encapsulated-group2.png")}
        />
        <View style={[styles.assemAlMohammadiWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.assemAlMohammadi}>Assem Al-Mohammadi</Text>
        </View>
        <View
          style={[
            styles.aramcoSaudiArabiagmailcomWrapper,
            styles.wrapperFlexBox,
          ]}
        >
          <Text style={styles.aramcoSaudiArabiagmailcom}>
            Aramco Saudi Arabia@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.profileItem} />
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={styles.menuList}>
          <Pressable
            style={styles.menuLayout}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame33.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Requests</Text>
          </Pressable>
          <Pressable
            style={[styles.menu3, styles.menuLayout]}
            onPress={() => navigation.navigate("MOREInformaion11")}
          >
            <View style={styles.menu31}>
              <View style={styles.container}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={styles.menu5}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/liuser2.png")}
            />
            <Text style={[styles.myAccount1, styles.homeTypo]}>My Account</Text>
          </View>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame14.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Reports</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
      </View>
      <View style={styles.encapsulatedGroupGroup}>
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group3.png")}
        />
        <View style={styles.editAccountInformationWrapper}>
          <Text style={[styles.editAccountInformation, styles.areYouSureClr]}>
            Edit Account Information
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.encapsulatedGroupContainer}
        onPress={() => navigation.navigate("ChangePassword1")}
      >
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group4.png")}
        />
        <Text style={[styles.changePassword, styles.areYouSureClr]}>
          Change Password
        </Text>
      </Pressable>
      <View style={styles.frameView}>
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group5.png")}
        />
        <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
      </View>
      <View style={[styles.profileInner, styles.faceIdPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={styles.attendanceSuccessful}>
          <Image
            style={styles.httpslottiefilescomanimatIcon}
            resizeMode="cover"
            source={require("../assets/httpslottiefilescomanimationslogoutmr0qrexu1w.png")}
          />
          <View style={styles.areYouSureParent}>
            <Text style={[styles.areYouSure, styles.areYouSureClr]}>
              Are you sure?
            </Text>
            <Text style={[styles.areYouSure1, styles.homeClr]}>{`
Are you sure you want to log out of this account? You can log in again easily
`}</Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonPosition1]}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={[styles.buttonChild, styles.buttonPosition]} />
          <Text style={[styles.logOut1, styles.cancelPosition]}>Log out</Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonPosition1]}
          onPress={() => navigation.navigate("Profile1")}
        >
          <View style={[styles.buttonItem, styles.buttonPosition]} />
          <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 404,
    width: 375,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 0,
    position: "absolute",
  },
  faceIdShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  lineLayout: {
    width: 135,
    position: "absolute",
  },
  arrow21Position: {
    top: 48,
    height: 24,
  },
  bottomNavLayout: {
    height: 90,
    overflow: "hidden",
  },
  wrapperFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 6,
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menuLayout: {
    width: 57,
    alignItems: "center",
  },
  areYouSureClr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  logOutTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homeClr: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  buttonPosition1: {
    height: 48,
    width: 301,
    marginLeft: -150.5,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cancelPosition: {
    width: 288,
    top: "22.92%",
    marginLeft: -144.5,
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  cleaningWindowByUsingSpeciIcon: {
    height: 391,
    width: 375,
    right: 0,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: "transparent",
    left: "50%",
    marginLeft: -187.5,
    height: 404,
    width: 375,
    top: 0,
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
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
  },
  myAccount: {
    right: 128,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.whait,
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 48,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    left: 16,
    height: 24,
    width: 24,
    position: "absolute",
  },
  icon1: {
    top: 139,
    right: 38,
    width: 300,
    height: 126,
    position: "absolute",
  },
  cleaningWindowByUsingSpeciParent: {
    right: 0,
  },
  profileChild: {
    top: 359,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 453,
    width: 375,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  encapsulatedGroupIcon: {
    width: 90,
  },
  assemAlMohammadi: {
    color: Color.praimary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  assemAlMohammadiWrapper: {
    flexDirection: "row",
  },
  aramcoSaudiArabiagmailcom: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "300",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  aramcoSaudiArabiagmailcomWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightsteelblue_200,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    flexDirection: "row",
  },
  encapsulatedGroupParent: {
    marginLeft: -85.5,
    top: 315,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  profileItem: {
    top: 504,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu5: {
    width: 58,
    marginLeft: 16,
    alignItems: "center",
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    justifyContent: "flex-end",
    padding: Padding.p_sm,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menu3: {
    marginLeft: 16,
  },
  myAccount1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu2: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  menuList: {
    bottom: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    backgroundColor: Color.whait,
    flexDirection: "row",
    justifyContent: "center",
    width: 375,
    right: 0,
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  iphoneIndicator: {
    height: 30,
    backgroundColor: Color.whait,
    right: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    overflow: "hidden",
    left: "50%",
    marginLeft: -187.5,
  },
  encapsulatedGroupIcon1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  editAccountInformation: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  editAccountInformationWrapper: {
    marginLeft: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  encapsulatedGroupGroup: {
    top: 536,
    right: 158,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  changePassword: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    marginLeft: 16,
  },
  encapsulatedGroupContainer: {
    top: 598,
    right: 199,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  logOut: {
    color: Color.colorRed_100,
    marginLeft: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  frameView: {
    top: 660,
    right: 263,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  profileInner: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 100,
    height: 85,
  },
  areYouSure: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
  },
  areYouSure1: {
    letterSpacing: 0.3,
    lineHeight: 25,
    width: 264,
    height: 72,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
  },
  areYouSureParent: {
    marginTop: 32,
    alignItems: "center",
  },
  attendanceSuccessful: {
    top: 32,
    right: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    borderColor: Color.praimary,
    borderWidth: 2,
    borderStyle: "solid",
  },
  logOut1: {
    lineHeight: 22,
    color: Color.praimary,
  },
  button: {
    top: 363,
  },
  buttonItem: {
    backgroundColor: Color.praimary,
  },
  cancel: {
    color: Color.whait,
    lineHeight: 30,
  },
  button1: {
    top: 306,
  },
  faceId: {
    marginTop: -217,
    marginLeft: -171.5,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    width: 343,
    height: 435,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
  },
  profile: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile;
