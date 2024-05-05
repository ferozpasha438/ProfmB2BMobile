import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Pressable,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const VerificationCode11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameLayout} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Text style={[styles.text, styles.textTypo1]}>ادخل رمز التحقق</Text>
      <Text style={[styles.text1, styles.textTypo1]}>ادخل رمز التحقق</Text>
      <Text style={[styles.text2, styles.textTypo1]}>رمز التحقق</Text>
      <Text style={styles.examplegmailcomContainer}>Example@gmail.com</Text>
      <Pressable
        style={[styles.button, styles.text7FlexBox]}
        onPress={() => navigation.navigate("VerificationCode10")}
      >
        <Text style={[styles.text3, styles.textTypo]}>ارسال</Text>
      </Pressable>
      <View style={styles.parent}>
        <Text style={styles.text4}>
          <Text style={styles.text5}>{`لم أستقبل الرمز؟  `}</Text>
          <Text style={styles.text6}>{`اعادة الارسال
`}</Text>
        </Text>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
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
            style={[styles.leftSideIcon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.text7Position]}
          onPress={() => navigation.navigate("ForgotPassword1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text7, styles.text7Position]}>
          استرجاع كلمة المرور
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.groupInnerPosition}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.groupPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameLayout: {
    height: 60,
    width: 60,
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    backgroundColor: Color.whait,
  },
  textTypo1: {
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    lineHeight: 30,
    position: "absolute",
  },
  text7FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupChildLayout: {
    width: 54,
    position: "absolute",
  },
  groupPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  groupShadowBox: {
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
  text7Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  groupInnerPosition: {
    marginLeft: -80,
    width: 160,
    top: 0,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 29,
  },
  rectangleParent: {
    marginLeft: -163.5,
    top: 366,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  text: {
    left: 166,
    width: 193,
    top: 182,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  text1: {
    left: 228,
    width: 131,
    top: 182,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  text2: {
    marginLeft: -43.5,
    top: 318,
    width: 88,
    left: "50%",
  },
  examplegmailcomContainer: {
    top: 214,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    height: 48,
    width: 343,
    color: Color.ternary,
    left: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text3: {
    color: Color.whait,
    width: 291,
  },
  button: {
    marginLeft: -171.5,
    top: 714,
    backgroundColor: Color.praimary,
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    width: 343,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  text5: {
    color: Color.ternary,
  },
  text6: {
    color: Color.praimary,
  },
  text4: {
    left: 0,
    fontSize: FontSize.size_3xs,
    height: 24,
    top: 0,
    width: 140,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    position: "absolute",
  },
  groupChild: {
    top: 25,
    left: 13,
    borderColor: Color.praimary,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    width: 54,
  },
  parent: {
    top: 442,
    left: 219,
    height: 25,
    width: 140,
    position: "absolute",
  },
  groupItem: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    top: 0,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    left: 16,
    top: 48,
  },
  text7: {
    marginLeft: -71.5,
    width: 143,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: 48,
    display: "flex",
    lineHeight: 30,
    color: Color.praimary,
  },
  groupInner: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  icon1: {
    top: 3,
    left: 30,
    width: 100,
    height: 42,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -79.5,
    top: 86,
    width: 160,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
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
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  verificationCode: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default VerificationCode11;
