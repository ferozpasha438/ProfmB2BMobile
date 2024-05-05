import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const VerificationCode8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode}>
      <View style={styles.verificationCodeChild} />
      <View style={styles.verificationCodeItem} />
      <Text style={[styles.text, styles.textTypo6]}>غير مكتملة</Text>
      <Text style={[styles.text1, styles.textTypo6]}>المكتملة</Text>
      <Text style={[styles.text2, styles.textFlexBox]}>
        <Text style={styles.txt}>
          <Text style={styles.text3}>{`يوجد  `}</Text>
          <Text style={styles.text4}>1</Text>
          <Text style={styles.text3}> خدمة مكتملة</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.verificationCodeInner}
        onPress={() => navigation.navigate("VerificationCode7")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.text6, styles.textTypo5]}>21584</Text>
        <Text style={[styles.text7, styles.textTypo2]}>{`رقم الطلب  : `}</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.textTypo1}>صيانة وقائية</Text>
          <Text style={[styles.text9, styles.textTypo2]}>نوع الصيانة :</Text>
        </View>
        <View style={[styles.group, styles.parentFlexBox]}>
          <Text style={[styles.text10, styles.textTypo5]}>نادي جدة لليخوت</Text>
          <Text
            style={[styles.text11, styles.textTypo]}
          >{`اسم المشروع : `}</Text>
        </View>
        <Text style={[styles.text12, styles.textTypo1]}>10 / 10/2023</Text>
        <Text style={[styles.text13, styles.textTypo]}>تاريخ الطلب :</Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <View style={[styles.mediumButtonParent, styles.parentFlexBox]}>
          <Pressable
            style={[styles.mediumButton, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("POPUPERROL")}
          >
            <Text style={[styles.text14, styles.textTypo4]}>تعديل الطلب</Text>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group16.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumSpaceBlock]}
            onPress={() => navigation.navigate("VerificationCode9")}
          >
            <Text style={[styles.text15, styles.textTypo4]}>تفاصيل الطلب</Text>
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2386052.png")}
          />
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textTypo3]}>غير مكتمل</Text>
            <Text style={[styles.text17, styles.textTypo3]}>قيد التنفيذ</Text>
            <Text style={[styles.text18, styles.textTypo3]}>مكتمل</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupInner, styles.groupPosition]} />
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
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.text19Position]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text19, styles.text19Position]}>
          الخدمات المقدمة
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
  textTypo6: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: 126,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupBorder: {
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  textTypo5: {
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo2: {
    width: 66,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontWeight: "600",
    lineHeight: 25,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    width: 77,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    lineHeight: 25,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo1: {
    width: 55,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  textTypo4: {
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  iconLayout: {
    marginLeft: 6,
    width: 16,
    height: 16,
  },
  textTypo3: {
    color: Color.black,
    top: 0,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  groupPosition: {
    height: 87,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
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
  text19Position: {
    height: 24,
    top: 48,
    position: "absolute",
  },
  verificationCodeChild: {
    top: 111,
    borderRadius: Border.br_5xs,
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 16,
    position: "absolute",
  },
  verificationCodeItem: {
    left: 197,
    borderRadius: Border.br_8xs,
    width: 157,
    height: 38,
    top: 116,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  text: {
    left: 65,
    color: Color.praimary,
  },
  text1: {
    left: 248,
    color: Color.whait,
  },
  text3: {
    color: Color.colorLightsteelblue_100,
  },
  text4: {
    color: Color.praimary,
  },
  txt: {
    width: "100%",
  },
  text2: {
    top: 183,
    left: 254,
    width: 105,
    height: 16,
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  verificationCodeInner: {
    backgroundColor: Color.colorGainsboro_200,
    width: 125,
    left: 40,
    height: 38,
    top: 116,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 0.5,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    top: 0,
    height: 190,
    width: 343,
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text6: {
    width: 31,
    lineHeight: 25,
    fontWeight: "300",
    top: 16,
    left: 40,
    position: "absolute",
  },
  text7: {
    left: 75,
    top: 16,
    position: "absolute",
  },
  text9: {
    marginLeft: 4,
  },
  parent: {
    top: 48,
    left: 16,
  },
  text10: {
    width: 75,
  },
  text11: {
    marginLeft: 4,
  },
  group: {
    left: 171,
    justifyContent: "flex-end",
    top: 16,
  },
  text12: {
    left: 191,
    top: 48,
    position: "absolute",
  },
  text13: {
    left: 250,
    top: 48,
    position: "absolute",
  },
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
  },
  text14: {
    width: 85,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
  },
  mediumButton: {
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 140,
    borderStyle: "solid",
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
  },
  text15: {
    color: Color.whait,
  },
  frameIcon: {
    overflow: "hidden",
  },
  mediumButton1: {
    marginLeft: 31,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.praimary,
  },
  mediumButtonParent: {
    top: 142,
    left: 16,
  },
  frameChild: {
    width: 206,
    height: 10,
  },
  text16: {
    left: 184,
    width: 50,
  },
  text17: {
    left: 86,
    width: 51,
  },
  text18: {
    width: 31,
    left: 0,
    color: Color.black,
  },
  container: {
    width: 234,
    marginTop: 4,
    height: 16,
  },
  groupParent: {
    top: 96,
    left: 55,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 215,
    height: 190,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
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
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    left: 16,
  },
  text19: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    width: 135,
    left: "50%",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    height: 24,
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
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
    justifyContent: "flex-end",
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
  verificationCode: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default VerificationCode8;
