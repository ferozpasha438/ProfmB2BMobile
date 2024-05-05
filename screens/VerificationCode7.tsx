import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const VerificationCode7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo7]}>غير مكتملة</Text>
        </View>
        <Text style={[styles.text1, styles.textTypo7]}>المكتملة</Text>
      </View>
      <Text style={[styles.text2, styles.textFlexBox]}>
        <Text style={styles.txt}>
          <Text style={styles.text3}>{`يوجد  `}</Text>
          <Text style={styles.text4}>3</Text>
          <Text style={styles.text3}> خدمة غير مكتملة</Text>
        </Text>
      </Text>
      <Pressable
        style={[styles.verificationCodeChild, styles.groupLayout]}
        onPress={() => navigation.navigate("VerificationCode8")}
      />
      <View style={styles.verificationCodeItem} />
      <View style={styles.groupParent}>
        <View style={styles.groupViewLayout}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text6, styles.textTypo6]}>23655</Text>
          <Text
            style={[styles.text7, styles.textTypo3]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo2}>صيانة روتينية</Text>
            <Text style={[styles.text9, styles.textTypo3]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.group, styles.parentFlexBox]}>
            <Text style={[styles.text10, styles.textTypo6]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text11, styles.textTypo1]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text12, styles.textTypo2]}>01 / 11 /2023</Text>
          <Text style={[styles.text13, styles.textTypo1]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.container}>
              <Text style={[styles.text14, styles.textTypo4]}>غير مكتمل</Text>
              <Text style={[styles.text15, styles.textTypo]}>قيد التنفيذ</Text>
              <Text style={[styles.text16, styles.textTypo]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentFlexBox]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text17, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text18, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text6, styles.textTypo6]}>25416</Text>
          <Text
            style={[styles.text7, styles.textTypo3]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo2}>صيانة وقائية</Text>
            <Text style={[styles.text9, styles.textTypo3]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.group, styles.parentFlexBox]}>
            <Text style={[styles.text10, styles.textTypo6]}>ممشى جدة</Text>
            <Text
              style={[styles.text11, styles.textTypo1]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text12, styles.textTypo2]}>31 / 10/2023</Text>
          <Text style={[styles.text13, styles.textTypo1]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={[styles.mediumButtonParent, styles.parentFlexBox]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("Requests6")}
            >
              <Text style={[styles.text17, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text18, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.groupParent1, styles.groupPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-2386051.png")}
            />
            <View style={styles.container}>
              <Text style={[styles.text29, styles.textTypo4]}>غير مكتمل</Text>
              <Text style={[styles.text30, styles.textTypo4]}>قيد التنفيذ</Text>
              <Text style={[styles.text16, styles.textTypo]}>مكتمل</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.text6, styles.textTypo6]}>26890</Text>
          <Text
            style={[styles.text7, styles.textTypo3]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo2}>صيانة روتينية</Text>
            <Text style={[styles.text9, styles.textTypo3]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.group, styles.parentFlexBox]}>
            <Text style={[styles.text10, styles.textTypo6]}>جدة سوبر دوم</Text>
            <Text
              style={[styles.text11, styles.textTypo1]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text12, styles.textTypo2]}>15 / 10/2023</Text>
          <Text style={[styles.text13, styles.textTypo1]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.container}>
              <Text style={[styles.text14, styles.textTypo4]}>غير مكتمل</Text>
              <Text style={[styles.text15, styles.textTypo]}>قيد التنفيذ</Text>
              <Text style={[styles.text16, styles.textTypo]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentFlexBox]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text17, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text18, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.groupChild4Position}>
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
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
              source={require("../assets/wifi6.png")}
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
          style={[styles.arrow21, styles.text45Position]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text45, styles.text45Position]}>
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
  groupLayout: {
    height: 38,
    position: "absolute",
  },
  textTypo7: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo6: {
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo3: {
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
  textTypo1: {
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
  textTypo2: {
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
  groupPosition: {
    left: 55,
    alignItems: "center",
    position: "absolute",
  },
  textTypo4: {
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.gray,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  textTypo5: {
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
  groupViewLayout: {
    height: 190,
    width: 343,
  },
  groupChild4Position: {
    height: 87,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text45Position: {
    height: 24,
    top: 48,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    height: 48,
    width: 343,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary,
    width: 157,
    height: 38,
    left: 0,
    top: 0,
  },
  text: {
    top: 10,
    left: 44,
    color: Color.whait,
  },
  rectangleGroup: {
    top: 5,
    left: 5,
    width: 157,
    height: 38,
  },
  text1: {
    top: 15,
    left: 232,
    color: Color.praimary,
  },
  rectangleParent: {
    top: 111,
    height: 48,
    width: 343,
    left: 16,
    position: "absolute",
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
    left: 239,
    width: 120,
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
  verificationCodeChild: {
    top: 116,
    left: 216,
    backgroundColor: Color.colorGainsboro_200,
    width: 125,
  },
  verificationCodeItem: {
    marginLeft: -169.5,
    top: 857,
    width: 339,
    height: 49,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    height: 190,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    width: 343,
    position: "absolute",
  },
  text6: {
    left: 40,
    width: 31,
    lineHeight: 25,
    fontWeight: "300",
    top: 16,
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
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameChild: {
    width: 206,
    height: 10,
  },
  text14: {
    left: 188,
    width: 46,
  },
  text15: {
    left: 91,
    width: 46,
  },
  text16: {
    width: 31,
    left: 0,
  },
  container: {
    width: 234,
    marginTop: 4,
    height: 16,
  },
  groupContainer: {
    top: 96,
  },
  text17: {
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
  text18: {
    color: Color.whait,
  },
  frameIcon: {
    overflow: "hidden",
  },
  mediumButton1: {
    marginLeft: 31,
    backgroundColor: Color.praimary,
  },
  mediumButtonParent: {
    top: 142,
    left: 16,
  },
  text29: {
    left: 187,
    width: 47,
  },
  text30: {
    left: 86,
    width: 51,
  },
  groupParent1: {
    top: 95,
  },
  groupView: {
    marginTop: 24,
  },
  groupParent: {
    marginLeft: -171.5,
    top: 215,
    height: 597,
    left: "50%",
    position: "absolute",
  },
  groupChild4: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    height: 87,
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
    overflow: "hidden",
    left: "50%",
    top: 0,
    position: "absolute",
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
  text45: {
    marginLeft: -67.5,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    width: 135,
    left: "50%",
    alignItems: "center",
    display: "flex",
    lineHeight: 30,
    height: 24,
    color: Color.praimary,
    textAlign: "center",
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
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default VerificationCode7;
