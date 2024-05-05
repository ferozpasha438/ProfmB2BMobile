import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Login3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View
        style={[
          styles.manWorkerCleaningFloorWithParent,
          styles.groupChildLayout,
        ]}
      >
        <Image
          style={styles.manWorkerCleaningFloorWithIcon}
          resizeMode="cover"
          source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-1.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
          useAngle={true}
          angle={180.13}
        />
      </View>
      <View style={[styles.loginChild, styles.loginChildBg]} />
      <View style={[styles.webViewbottom, styles.loginChildBg]}>
        <View style={[styles.homeIndicator, styles.frameParent1FlexBox]}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
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
            style={styles.recordingIndicatorIcon}
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
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.frameGroup}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo3]}>
              رقم الجوال / البريد الإلكتروني
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.smsParent, styles.smsParentPosition]}>
                <Image
                  style={[styles.smsIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/sms.png")}
                />
                <Text style={[styles.text1, styles.textTransform]}>
                  من فضلك أدخل البريد الإلكتروني
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text2, styles.textTypo3]}>كلمة المرور</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.frameContainer, styles.smsParentPosition]}>
                <View style={styles.lockParent}>
                  <Image
                    style={[styles.lockIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/lock.png")}
                  />
                  <Text style={[styles.text3, styles.textTransform]}>
                    من فضلك أدخل كلمة المرور
                  </Text>
                </View>
                <Image
                  style={[styles.eyeSlashIcon, styles.textTransform]}
                  resizeMode="cover"
                  source={require("../assets/eyeslash5.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ForgotPassword1")}
        >
          <Text style={[styles.text4, styles.textTypo2]}>
            نسيت كلمة المرور ؟
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.container, styles.iconPosition]}
        onPress={() => navigation.navigate("POPUPLOGIN")}
      >
        <Text style={[styles.text5, styles.textTypo1]}>تسجيل الدخول</Text>
      </Pressable>
      <Pressable
        style={styles.framePressable}
        onPress={() => navigation.navigate("SIGNUP1")}
      >
        <View style={styles.profmParent}>
          <Text style={[styles.profm, styles.profmTypo]}>PROFM</Text>
          <Text style={styles.text6}>{`جديد في `}</Text>
        </View>
        <Text style={[styles.text7, styles.textSpaceBlock]}>
          تسجيل مستخدم جديد
        </Text>
      </Pressable>
      <View style={styles.groupView}>
        <Text style={[styles.text8, styles.textTypo]}>
          بالدخول للحساب انت موافق على
        </Text>
        <View style={styles.text9Position}>
          <Text style={[styles.text9, styles.text9Position]}>
            الشروط و الأحكام
          </Text>
          <View style={styles.groupItem} />
        </View>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("ChangeTheLanguage")}
      >
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={styles.arParent}>
          <Text style={styles.ar}>AR</Text>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame80.png")}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-46.png")}
      />
      <View style={[styles.frameView, styles.frameFlexBox]}>
        <View style={[styles.frameParent1, styles.frameParent1FlexBox]}>
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame19.png")}
          />
          <Text
            style={[styles.text10, styles.textTypo1]}
          >{`مرحبًا بعودتك `}</Text>
        </View>
        <Text style={[styles.text11, styles.textSpaceBlock]}>
          {" "}
          تسجيل الدخول للمتابعة
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 292,
    width: 375,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    marginLeft: -187.5,
    left: "50%",
  },
  loginChildBg: {
    backgroundColor: Color.colorGray_100,
    width: 375,
    position: "absolute",
  },
  frameParent1FlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  textTypo3: {
    display: "flex",
    height: 16,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  smsParentPosition: {
    zIndex: 1,
    top: 18,
    flexDirection: "row",
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  textTransform: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo2: {
    color: Color.colorLightsteelblue_100,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  iconPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "700",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  profmTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  textSpaceBlock: {
    marginTop: 8,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
    alignItems: "center",
  },
  text9Position: {
    width: 72,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 30,
    width: 67,
    position: "absolute",
  },
  manWorkerCleaningFloorWithIcon: {
    height: 263,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    left: "50%",
    height: 292,
    width: 375,
    top: 0,
    position: "absolute",
  },
  manWorkerCleaningFloorWithParent: {
    left: 0,
  },
  loginChild: {
    top: 266,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 546,
    left: 0,
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
    left: "50%",
    marginLeft: -187.5,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
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
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    height: 11,
    width: 67,
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
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    width: 166,
    height: 16,
    lineHeight: 30,
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
    height: 56,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  smsIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text1: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  smsParent: {
    justifyContent: "center",
  },
  rectangleParent: {
    marginTop: 10,
    borderRadius: Border.br_3xs,
    width: 343,
    backgroundColor: Color.whait,
  },
  parent: {
    width: 343,
  },
  text2: {
    width: 77,
    height: 16,
  },
  lockIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text3: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  lockParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eyeSlashIcon: {
    marginLeft: 127,
    height: 20,
    width: 20,
  },
  frameContainer: {
    width: 311,
  },
  group: {
    marginTop: 24,
    width: 343,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    textAlign: "left",
  },
  wrapper: {
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameParent: {
    marginTop: -106,
    marginLeft: 171.5,
    top: "50%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: "50%",
  },
  text5: {
    color: Color.whait,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  container: {
    top: 558,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    marginLeft: -171.5,
    borderRadius: Border.br_3xs,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
  },
  profm: {
    color: Color.ternary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  text6: {
    marginLeft: 4,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
  },
  profmParent: {
    flexDirection: "row",
  },
  text7: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.praimary,
  },
  framePressable: {
    marginLeft: -75.5,
    top: 662,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  text8: {
    left: 74,
    width: 139,
    color: Color.ternary,
    height: 16,
    top: 0,
    position: "absolute",
  },
  text9: {
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
    alignItems: "center",
    color: Color.praimary,
  },
  groupItem: {
    top: 16,
    left: 1,
    borderColor: Color.praimary,
    borderTopWidth: 1,
    width: 71,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupView: {
    top: 751,
    left: 81,
    width: 213,
    height: 16,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_500,
    left: 0,
    top: 0,
  },
  ar: {
    fontSize: FontSize.size_2xs_5,
    fontWeight: "600",
    color: Color.whait,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon: {
    width: 18,
    height: 18,
    marginLeft: 3.5,
    overflow: "hidden",
  },
  arParent: {
    top: 6,
    flexDirection: "row",
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  rectangleContainer: {
    top: 48,
    left: 16,
  },
  icon: {
    top: 128,
    width: 150,
    height: 49,
  },
  frameIcon1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text10: {
    fontSize: FontSize.size_5xl,
    color: Color.whait,
    marginLeft: 8,
    textAlign: "right",
  },
  frameParent1: {
    flexDirection: "row",
  },
  text11: {
    fontSize: FontSize.size_lg,
    color: Color.whait,
    textAlign: "right",
    fontWeight: "300",
    marginTop: 8,
  },
  frameView: {
    top: 184,
    left: 176,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
});

export default Login3;
