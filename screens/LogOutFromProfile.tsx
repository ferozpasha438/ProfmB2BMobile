import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LogOutFromProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.logOutFromProfile}>
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
              source={require("../assets/left-side8.png")}
            />
          </View>
        </View>
        <View style={styles.arrow21Parent}>
          <Pressable
            style={styles.arrow21}
            onPress={() => navigation.navigate("ForgotPassword1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2-13.png")}
            />
          </Pressable>
          <Text style={[styles.text, styles.textClr2]}>حسابي التعريفي</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3-1-41.png")}
        />
      </View>
      <View style={styles.logOutFromProfileChild} />
      <View style={styles.frameParent}>
        <View style={styles.wrapperGroup238624Parent}>
          <View style={styles.wrapperGroup238624}>
            <Image
              style={[styles.wrapperGroup238624Child, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group-238624.png")}
            />
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo2]}>
              ارامكو السعودية
            </Text>
          </View>
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
      <View style={styles.logOutFromProfileItem} />
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.menuListFlexBox]}>
          <View style={styles.menu2}>
            <View style={styles.frame} />
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame86.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>التقارير</Text>
          </View>
          <View style={styles.menu2}>
            <Image
              style={styles.liuserIcon}
              resizeMode="cover"
              source={require("../assets/liuser5.png")}
            />
            <Text style={[styles.text3, styles.textTypo1]}>حسابي</Text>
          </View>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={styles.container}>
                <Image
                  style={styles.liuserIcon}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={styles.liuserIcon}
              resizeMode="cover"
              source={require("../assets/frame31.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.liuserIcon}
              resizeMode="cover"
              source={require("../assets/frame87.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.logOutFromProfileInner} />
      <View style={[styles.frameGroup, styles.menuListFlexBox]}>
        <View style={[styles.frameContainer, styles.parentFlexBox]}>
          <View style={styles.frameView}>
            <Text style={[styles.text6, styles.textClr]}>تعديل الحساب</Text>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/encapsulated-group3.png")}
          />
        </View>
        <View style={[styles.parent, styles.parentSpaceBlock]}>
          <Text style={[styles.text6, styles.textClr]}>تغيير كلمة المرور</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/encapsulated-group4.png")}
          />
        </View>
        <View style={[styles.group, styles.parentSpaceBlock]}>
          <Text style={[styles.text8, styles.textTypo]}>تسجيل الخروج</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238627.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleView, styles.faceIdPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={styles.attendanceSuccessful}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group17.png")}
          />
          <View style={styles.parentSpaceBlock}>
            <Text style={[styles.text9, styles.textClr]}>هل أنت متأكد ؟</Text>
            <Text style={[styles.text10, styles.textClr1]}>{`
هل أنت متأكد أنك تريد تسجيل الخروج من هذا الحساب؟ يمكنك تسجيل الدخول مرة أخرى بسهولة
`}</Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonPosition1]}
          onPress={() => navigation.navigate("Login3")}
        >
          <View style={[styles.buttonChild, styles.buttonPosition]} />
          <Text style={[styles.signUp, styles.logInPosition]}>
            تسجيل الخروج
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonPosition1]}
          onPress={() => navigation.navigate("Profile2")}
        >
          <View style={[styles.buttonItem, styles.buttonPosition]} />
          <Text style={[styles.logIn, styles.logInPosition]}>إلغاء</Text>
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textClr2: {
    color: Color.whait,
    lineHeight: 30,
  },
  wrapperFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo2: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    marginTop: 6,
    fontFamily: FontFamily.dGBaysan,
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textClr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  parentSpaceBlock: {
    marginTop: 32,
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textClr1: {
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
  logInPosition: {
    width: 288,
    top: "22.92%",
    marginLeft: -143.5,
    height: "50%",
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
  cleaningWindowByUsingSpeciIcon: {
    height: 391,
    width: 375,
    left: 0,
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
    right: 0,
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
  icon: {
    overflow: "hidden",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  text: {
    marginLeft: 88,
    width: 135,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow21Parent: {
    top: 48,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  icon1: {
    top: 139,
    left: 38,
    width: 300,
    height: 126,
    position: "absolute",
  },
  cleaningWindowByUsingSpeciParent: {
    left: 0,
  },
  logOutFromProfileChild: {
    top: 359,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 453,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  wrapperGroup238624Child: {
    objectFit: "contain",
    transform: [
      {
        scale: 1.267,
      },
    ],
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperGroup238624: {
    width: 90,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: Color.praimary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  wrapper: {
    flexDirection: "row",
  },
  wrapperGroup238624Parent: {
    justifyContent: "center",
    alignItems: "center",
  },
  aramcoSaudiArabiagmailcom: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
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
  frameParent: {
    top: 315,
    left: 108,
    alignItems: "center",
    position: "absolute",
  },
  logOutFromProfileItem: {
    top: 504,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frame: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  frameIcon: {
    marginTop: 6,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text2: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  liuserIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text3: {
    color: Color.praimary,
    fontWeight: "700",
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
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
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    backgroundColor: Color.whait,
    justifyContent: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    height: 5,
    borderRadius: Border.br_81xl,
    width: 135,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    height: 30,
    backgroundColor: Color.whait,
    left: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    left: "50%",
    marginLeft: -187.5,
    overflow: "hidden",
  },
  logOutFromProfileInner: {
    top: 387,
    left: 225,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text6: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
  },
  frameView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 30,
    marginLeft: 16,
    height: 30,
  },
  frameContainer: {
    alignItems: "center",
  },
  parent: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  text8: {
    color: Color.colorRed_100,
    fontFamily: FontFamily.dGBaysan,
  },
  group: {
    justifyContent: "center",
    flexDirection: "row",
  },
  frameGroup: {
    top: 536,
    left: 213,
  },
  rectangleView: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    width: 375,
    height: 812,
  },
  groupIcon: {
    width: 100,
    height: 100,
  },
  text9: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    height: 30,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  text10: {
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
  attendanceSuccessful: {
    top: 32,
    left: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    borderColor: Color.praimary,
    borderWidth: 2,
    borderStyle: "solid",
  },
  signUp: {
    lineHeight: 22,
    color: Color.praimary,
  },
  button: {
    top: 363,
  },
  buttonItem: {
    backgroundColor: Color.praimary,
  },
  logIn: {
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
  logOutFromProfile: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default LogOutFromProfile;
