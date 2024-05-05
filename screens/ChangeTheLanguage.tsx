import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const ChangeTheLanguage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.changeTheLanguage}>
      <View style={styles.manWorkerCleaningFloorWithParent}>
        <Image
          style={[styles.manWorkerCleaningFloorWithIcon, styles.changePosition]}
          resizeMode="cover"
          source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-1.png")}
        />
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
          useAngle={true}
          angle={180.13}
        />
      </View>
      <View
        style={[styles.changeTheLanguageChild, styles.groupInnerPosition1]}
      />
      <View style={[styles.webViewbottom, styles.webPosition]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
      <View style={styles.iphoneXOrNewer}>
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
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo3]}>
          الجوال / البريد الإلكتروني
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.containerLayout]} />
          <View style={[styles.smsParent, styles.parentFlexBox]}>
            <Image
              style={[styles.smsIcon, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/sms1.png")}
            />
            <Text style={styles.textTypo2}>من فضلك أدخل بريدك الإلكتروني</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.text2, styles.textTypo3]}>كلمة المرور</Text>
      <View style={[styles.changeTheLanguageItem, styles.containerLayout]} />
      <View style={[styles.lockParent, styles.parentFlexBox]}>
        <Image
          style={[styles.lockIcon, styles.iconFrameLayout]}
          resizeMode="cover"
          source={require("../assets/lock1.png")}
        />
        <Text style={styles.textTypo2}>من فضلك أدخل كلمة المرور</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text4}>نسيت كلمة المرور ؟</Text>
      </View>
      <View style={[styles.group, styles.groupFlexBox]}>
        <Text style={[styles.text5, styles.textTypo1]}>مرحبًا بعودتك !</Text>
        <Text style={[styles.text6, styles.textTypo4]}>
          {" "}
          تسجيل الدخول للمتابعة
        </Text>
      </View>
      <View style={[styles.container, styles.parentFlexBox]}>
        <Text style={[styles.text7, styles.textTypo]}>تسجيل الدخول</Text>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.profmParent}>
          <Text style={[styles.profm, styles.profmTypo]}>PROFM</Text>
          <Text style={[styles.text8, styles.textTypo]}>{`جديد في `}</Text>
        </View>
        <Text style={[styles.text9, styles.profmTypo]}>تسجيل مستخدم جديد</Text>
      </View>
      <Image
        style={[styles.vuesaxlineareyeSlashIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineareyeslash.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.arParent}>
          <Text style={styles.ar}>AR</Text>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame80.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.changeTheLanguageInner, styles.changePosition]}
        onPress={() => navigation.navigate("Login3")}
      />
      <View style={[styles.webViewbottom1, styles.webPosition]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.frameGroup, styles.groupPosition]}>
          <View style={styles.frameContainer}>
            <Image
              style={[styles.frameIcon1, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/frame78.png")}
            />
            <View style={styles.frameView}>
              <Pressable onPress={() => navigation.navigate("Login3")}>
                <Text style={styles.text10Typo}>العربية</Text>
              </Pressable>
              <Image
                style={[styles.frameIcon2, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/frame81.png")}
              />
            </View>
          </View>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              style={[styles.frameIcon1, styles.iconFrameLayout]}
              resizeMode="cover"
              source={require("../assets/frame47.png")}
            />
            <View style={styles.englishParent}>
              <Text style={styles.text10Typo}>English</Text>
              <Image
                style={[styles.frameIcon2, styles.iconFrameLayout]}
                resizeMode="cover"
                source={require("../assets/frame48.png")}
              />
            </View>
          </Pressable>
        </View>
        <View style={[styles.homeIndicator4, styles.homeLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupInnerPosition1: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
  },
  webPosition: {
    bottom: 0,
    height: 34,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    borderRadius: Border.br_81xl,
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  parentPosition: {
    left: 359,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  textTypo3: {
    height: 16,
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
  },
  containerLayout: {
    height: 56,
    borderRadius: Border.br_3xs,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconFrameLayout: {
    height: 20,
    width: 20,
  },
  groupFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "700",
    color: Color.whait,
  },
  textTypo4: {
    fontFamily: FontFamily.dGBaysan,
    textAlign: "right",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  profmTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: 30,
    width: 67,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 153,
    left: "50%",
    marginLeft: -187.5,
    width: 375,
    position: "absolute",
  },
  groupPosition: {
    top: 48,
    left: 16,
  },
  manWorkerCleaningFloorWithIcon: {
    height: 263,
    top: 0,
  },
  groupChild: {
    backgroundColor: "transparent",
    left: "50%",
    marginLeft: -187.5,
    height: 292,
    width: 375,
    top: 0,
    position: "absolute",
  },
  manWorkerCleaningFloorWithParent: {
    height: 292,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  changeTheLanguageChild: {
    top: 266,
    height: 546,
    backgroundColor: Color.colorGray_100,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeIndicator1: {
    backgroundColor: Color.colorGray_200,
    width: 134,
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
    height: 34,
    backgroundColor: Color.colorGray_100,
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
    width: 147,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChild: {
    zIndex: 0,
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
  textTypo2: {
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
    top: 18,
    zIndex: 1,
    flexDirection: "row",
    left: 16,
  },
  rectangleParent: {
    marginTop: 10,
    width: 343,
    backgroundColor: Color.whait,
  },
  parent: {
    top: 300,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  text2: {
    top: 406,
    left: 282,
    width: 77,
    position: "absolute",
  },
  changeTheLanguageItem: {
    top: 432,
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
    borderRadius: Border.br_3xs,
    width: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: 359,
    position: "absolute",
  },
  lockIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  lockParent: {
    top: 450,
    left: 343,
    flexDirection: "row",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text4: {
    textAlign: "left",
    color: Color.gray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  wrapper: {
    top: 512,
    left: 16,
    position: "absolute",
  },
  text5: {
    fontSize: FontSize.size_5xl,
    color: Color.whait,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  text6: {
    fontSize: FontSize.size_lg,
    marginTop: 12,
    color: Color.whait,
    textAlign: "right",
    fontWeight: "300",
  },
  group: {
    top: 166,
    right: 16,
  },
  text7: {
    color: Color.whait,
    fontWeight: "700",
    textAlign: "left",
  },
  container: {
    width: "91.47%",
    top: 558,
    right: "4.27%",
    left: "4.27%",
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    height: 56,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  profm: {
    color: Color.gray,
    lineHeight: 30,
  },
  text8: {
    marginLeft: 4,
    color: Color.gray,
    textAlign: "right",
    fontWeight: "300",
    lineHeight: 30,
  },
  profmParent: {
    flexDirection: "row",
  },
  text9: {
    marginTop: 8,
    color: Color.praimary,
    textAlign: "center",
  },
  frameParent: {
    marginLeft: -75.5,
    top: 694,
    left: "50%",
  },
  vuesaxlineareyeSlashIcon: {
    height: "2.46%",
    width: "5.33%",
    top: "55.42%",
    right: "86.13%",
    bottom: "42.12%",
    left: "8.53%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_500,
    left: 0,
    height: 30,
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
  rectangleGroup: {
    top: 48,
    left: 16,
  },
  changeTheLanguageInner: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    height: 812,
  },
  webViewbottom1: {
    height: 34,
    backgroundColor: Color.whait,
  },
  groupInner: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    top: 0,
    backgroundColor: Color.whait,
  },
  frameIcon1: {
    overflow: "hidden",
  },
  text10Typo: {
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon2: {
    marginLeft: 12,
    overflow: "hidden",
  },
  frameView: {
    marginLeft: 242,
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  englishParent: {
    marginLeft: 237,
    flexDirection: "row",
    alignItems: "center",
  },
  framePressable: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
  homeIndicator4: {
    marginLeft: -23.5,
    bottom: 140,
    backgroundColor: Color.colorGray_300,
    width: 47,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 626,
  },
  changeTheLanguage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.whait,
  },
});

export default ChangeTheLanguage;
