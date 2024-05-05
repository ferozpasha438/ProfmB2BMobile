import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const POPUPNEWPASSWERD = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.popUpNewPasswerd}>
      <View
        style={[
          styles.manWorkerCleaningFloorWithParent,
          styles.groupChildLayout,
        ]}
      >
        <Image
          style={[
            styles.manWorkerCleaningFloorWithIcon,
            styles.popUpNewPasswerdItemLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-1.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
          useAngle={true}
          angle={180.13}
        />
      </View>
      <View style={[styles.popUpNewPasswerdChild, styles.webViewbottomBg]} />
      <View style={[styles.webViewbottom, styles.webViewbottomBg]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={styles.iphoneXOrNewer}>
        <View style={[styles.iphoneXOrNewer1, styles.iconLayout2]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
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
      <View style={[styles.frameParent, styles.containerFlexBox]}>
        <View style={styles.frameGroup}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textFlexBox]}>
              رقم الجوال / البريد الإلكتروني
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.smsParent, styles.smsParentPosition]}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/sms1.png")}
                />
                <Text style={styles.textTypo3}>
                  من فضلك أدخل البريد الإلكتروني
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text2, styles.textFlexBox]}>كلمة المرور</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.frameContainer, styles.smsParentPosition]}>
                <View style={styles.lockParent}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/lock1.png")}
                  />
                  <Text style={styles.textTypo3}>من فضلك أدخل كلمة المرور</Text>
                </View>
                <Image
                  style={styles.eyeSlashIcon}
                  resizeMode="cover"
                  source={require("../assets/eyeslash6.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ForgotPassword1")}
        >
          <Text style={styles.text4}>نسيت كلمة المرور ؟</Text>
        </Pressable>
      </View>
      <View style={[styles.container, styles.containerFlexBox]}>
        <Text style={[styles.text5, styles.textTypo2]}>مرحبًا بعودتك !</Text>
        <Text style={[styles.text6, styles.textTypo2]}>
          {" "}
          تسجيل الدخول للمتابعة
        </Text>
      </View>
      <Pressable
        style={styles.frame}
        onPress={() => navigation.navigate("POPUPLOGIN")}
      >
        <Text style={styles.text7}>تسجيل الدخول</Text>
      </Pressable>
      <Pressable
        style={styles.framePressable}
        onPress={() => navigation.navigate("SIGNUP1")}
      >
        <View style={styles.profmParent}>
          <Text style={[styles.profm, styles.profmTypo]}>PROFM</Text>
          <Text style={styles.text8}>{`جديد في `}</Text>
        </View>
        <Text style={[styles.text9, styles.textTypo1]}>تسجيل مستخدم جديد</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.faceIdPosition]}
        onPress={() => navigation.navigate("ChangeTheLanguage")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/group-2385801.png")}
        />
      </Pressable>
      <View style={styles.groupView}>
        <Text style={[styles.text10, styles.textTypo]}>
          بالدخول للحساب انت موافق على
        </Text>
        <View style={styles.text11Position}>
          <Text style={[styles.text11, styles.text11Position]}>
            الشروط و الأحكام
          </Text>
          <View style={styles.groupItem} />
        </View>
      </View>
      <View style={[styles.popUpNewPasswerdItem, styles.frameParentPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Login3")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <View style={styles.httpslottiefilescomanimatParent}>
          <Image
            style={styles.httpslottiefilescomanimatIcon}
            resizeMode="cover"
            source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua.png")}
          />
          <View style={styles.frameView}>
            <Text style={[styles.text12, styles.profmTypo]}>
              تم تعيين كلمة المرور الجديدة بنجاح
            </Text>
            <Text
              style={[styles.text13, styles.textTypo1]}
            >{`يرجى تسجيل الدخول مرة أخرى باستخدام كلمة المرور الجديدة.
`}</Text>
          </View>
        </View>
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
  popUpNewPasswerdItemLayout: {
    width: 375,
    position: "absolute",
  },
  webViewbottomBg: {
    backgroundColor: Color.colorGray_100,
    width: 375,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  containerFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
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
  textTypo2: {
    color: Color.whait,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  profmTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  textTypo1: {
    marginTop: 8,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  faceIdPosition: {
    left: 16,
    position: "absolute",
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
  text11Position: {
    width: 72,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParentPosition: {
    top: "50%",
    left: "50%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  manWorkerCleaningFloorWithIcon: {
    height: 263,
    left: 0,
    top: 0,
  },
  groupChild: {
    backgroundColor: "transparent",
    left: "50%",
    marginLeft: -187.5,
  },
  manWorkerCleaningFloorWithParent: {
    left: 0,
  },
  popUpNewPasswerdChild: {
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
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
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
  iphoneXOrNewer1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  text: {
    width: 166,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.praimary,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    lineHeight: 30,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.gray,
    height: 56,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  iconLayout: {
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo3: {
    marginLeft: 8,
    opacity: 0.5,
    textAlign: "left",
    color: Color.gray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    color: Color.praimary,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  lockParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eyeSlashIcon: {
    marginLeft: 127,
    opacity: 0.5,
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    color: Color.gray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
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
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: "50%",
    left: "50%",
  },
  text5: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  text6: {
    fontSize: FontSize.size_lg,
    marginTop: 12,
    fontWeight: "300",
    color: Color.whait,
  },
  container: {
    top: 166,
    right: 16,
    justifyContent: "center",
  },
  text7: {
    fontSize: FontSize.size_base,
    color: Color.whait,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frame: {
    marginLeft: -171.5,
    top: 558,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  profm: {
    color: Color.ternary,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  text8: {
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
  text9: {
    fontWeight: "700",
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
  groupPressable: {
    top: 48,
    width: 30,
    height: 30,
  },
  text10: {
    left: 74,
    width: 139,
    color: Color.ternary,
    height: 16,
    top: 0,
    position: "absolute",
  },
  text11: {
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
  popUpNewPasswerdItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
    height: 812,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.83%",
    top: "5.99%",
    right: "88.34%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  text12: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: 294,
    height: 57,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text13: {
    color: Color.colorLightsteelblue_100,
    width: 292,
    height: 58,
    lineHeight: 30,
  },
  frameView: {
    marginTop: 16,
    alignItems: "center",
  },
  httpslottiefilescomanimatParent: {
    top: 33,
    left: 25,
    alignItems: "center",
    position: "absolute",
  },
  faceId: {
    top: 239,
    borderRadius: Border.br_mini,
    height: 334,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 16,
    width: 343,
    overflow: "hidden",
    backgroundColor: Color.whait,
  },
  popUpNewPasswerd: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.whait,
  },
});

export default POPUPNEWPASSWERD;
