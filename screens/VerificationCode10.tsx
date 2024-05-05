import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const VerificationCode10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <Text style={styles.text}>إعادة تعين كلمة المرور الجديدة الخاصة بك</Text>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("POPUPNEWPASSWERD")}
      >
        <Text style={[styles.text1, styles.textTypo2]}>تقديم</Text>
      </Pressable>
      <Text style={[styles.text2, styles.textFlexBox]}>
        كلمة المرور الجديدة
      </Text>
      <View style={[styles.parent, styles.groupPosition]}>
        <Text style={[styles.text3, styles.textTypo1]}>تأكيد كلمة المرور</Text>
        <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.lockIconLayout}
                resizeMode="cover"
                source={require("../assets/lock.png")}
              />
              <Text style={styles.textTypo}>
                من فضلك أدخل كلمة المرور مرة اخرى
              </Text>
            </View>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eyeslash4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text5, styles.textTypo1]}>كلمة المرور</Text>
        <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
          <View style={styles.framePosition}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.lockIconLayout}
                resizeMode="cover"
                source={require("../assets/lock.png")}
              />
              <Text style={styles.textTypo}>من فضلك أدخل كلمة المرور</Text>
            </View>
            <Image
              style={[styles.eyeSlashIcon1, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("../assets/eyeslash4.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.text7, styles.textFlexBox]}>الحد الأدنى 8 احرف</Text>
      <Text style={[styles.text8, styles.textFlexBox]}>
        حرف واحد كبير وصغير على الأقل
      </Text>
      <View style={[styles.rectangleContainer, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
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
        <Pressable
          style={[styles.arrow21, styles.text9Position]}
          onPress={() => navigation.navigate("ForgotPassword1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text9, styles.text9Position]}>
          استرجاع كلمة المرور
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.groupChildPosition]}>
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
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo2: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  textFlexBox: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupPosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    marginLeft: 171.5,
    left: "50%",
    width: 343,
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 16,
    color: Color.praimary,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  framePosition: {
    zIndex: 1,
    width: 311,
    top: 18,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  eyeIconLayout: {
    opacity: 0.5,
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChildPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text9Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  groupItemPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 214,
    height: 24,
    width: 343,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    left: 16,
    position: "absolute",
  },
  text1: {
    color: Color.whait,
    width: 291,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  button: {
    marginLeft: -171.5,
    top: 714,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    flexDirection: "row",
    left: "50%",
    width: 343,
    position: "absolute",
  },
  text2: {
    top: 182,
    left: 204,
    fontSize: FontSize.size_lg,
    width: 155,
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 30,
  },
  text3: {
    width: 100,
  },
  frameShadowBox: {
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
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  lockIconLayout: {
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
    opacity: 0.5,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    justifyContent: "space-between",
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  parent: {
    top: 384,
  },
  text5: {
    width: 77,
  },
  eyeSlashIcon1: {
    marginLeft: 126,
  },
  group: {
    top: 278,
  },
  text7: {
    top: 482,
    left: 229,
    width: 130,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    height: 16,
  },
  text8: {
    top: 503,
    left: 149,
    width: 210,
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    height: 16,
  },
  groupChild: {
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
    top: 48,
    left: 16,
  },
  text9: {
    marginLeft: -70.5,
    width: 142,
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
    top: 48,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    display: "flex",
  },
  groupItem: {
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
    left: 30,
    height: 42,
    width: 100,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -79.5,
    top: 86,
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  rectangleContainer: {
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

export default VerificationCode10;
