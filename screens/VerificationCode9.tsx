import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const VerificationCode9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.verificationCode, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo4]}>عبدالرحمن الغامدي</Text>
          <Text style={[styles.text1, styles.textTypo4]}>05629871269</Text>
          <Text
            style={[styles.text1, styles.textTypo4]}
          >{`نادي جدة لليخوت `}</Text>
          <Text style={[styles.text1, styles.textTypo4]}>01 / 11 / 2023</Text>
          <Text style={[styles.text4, styles.textTypo3]}>23655</Text>
          <Text style={[styles.text5, styles.textTypo3]}>غير مكتمل</Text>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textLayout]}>صاحب الطلب</Text>
          <Text style={[styles.text7, styles.textLayout]}>رقم الجوال</Text>
          <Text style={[styles.text7, styles.textLayout]}>اسم المشروع</Text>
          <Text style={[styles.text9, styles.textTypo2]}>تاريخ الطلب</Text>
          <Text style={[styles.text9, styles.textTypo2]}>{`رقم الطلب `}</Text>
          <Text style={[styles.text9, styles.textTypo2]}>حالة الطلب</Text>
        </View>
      </View>
      <Pressable
        style={[styles.svgexport1822, styles.svgexportLayout]}
        onPress={() => navigation.navigate("MOREInformaion16")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/svgexport18-2-2.png")}
        />
      </Pressable>
      <Text style={[styles.text12, styles.textTypo1]}>تفاصيل الطلب</Text>
      <View style={[styles.svgexport1822Parent, styles.buttonFlexBox1]}>
        <Pressable
          style={styles.svgexportLayout}
          onPress={() => navigation.navigate("MOREInformaion16")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/svgexport18-2-2.png")}
          />
        </Pressable>
        <Text style={[styles.text13, styles.textTypo1]}>تفاصيل الصيانة</Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("MOREInformaion13")}
      >
        <Text style={[styles.text14, styles.textTypo]}>حفظ</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={styles.container}>
            <Text style={[styles.text15, styles.textLayout]}>
              صيانة روتينية
            </Text>
            <Text style={[styles.text16, styles.textLayout]}>كهربائية</Text>
            <Text style={[styles.text16, styles.textLayout]}>مخطط لها</Text>
            <Text style={[styles.text18, styles.textTypo4]}>
              تأكد من ان جميع الأسلاك ...
            </Text>
            <Text style={[styles.text19, styles.textTypo4]}>
              ارتفاع الجهد الكهربائي ...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <Text
              style={[styles.text6, styles.textLayout]}
            >{`نوع الصيانة `}</Text>
            <Text style={[styles.text7, styles.textLayout]}>نوع الخدمة</Text>
            <Text style={[styles.text7, styles.textLayout]}>فئة الخدمة</Text>
            <Text style={[styles.text9, styles.textTypo2]}>
              المشكلة / الطلب
            </Text>
            <Text style={[styles.text9, styles.textTypo2]}>وصف المشكلة</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupInnerPosition}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
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
            source={require("../assets/left-side3.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.text25Position]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text25, styles.text25Position]}>تفاصيل الطلب</Text>
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
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 248,
    width: 343,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  textTypo4: {
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    color: Color.colorLightsteelblue_100,
    lineHeight: 30,
  },
  textTypo3: {
    width: 93,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  textLayout: {
    width: 74,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  textTypo2: {
    fontWeight: "700",
    color: Color.praimary,
  },
  svgexportLayout: {
    height: 18,
    width: 18,
  },
  textTypo1: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  buttonFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  groupLayout: {
    height: 208,
    width: 343,
    position: "absolute",
  },
  frameLayout: {
    height: 176,
    position: "absolute",
  },
  groupInnerPosition: {
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
  text25Position: {
    height: 24,
    top: 48,
    position: "absolute",
  },
  groupChild: {
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 248,
    width: 343,
    position: "absolute",
  },
  text: {
    width: 122,
  },
  text1: {
    width: 102,
    marginTop: 24,
  },
  text4: {
    lineHeight: 25,
    color: Color.colorLightsteelblue_100,
  },
  text5: {
    color: Color.colorLightsteelblue_100,
    lineHeight: 30,
    width: 93,
  },
  parent: {
    alignItems: "flex-end",
    width: 142,
    top: 16,
    left: 16,
    position: "absolute",
  },
  text6: {
    color: Color.praimary,
    fontWeight: "700",
  },
  text7: {
    color: Color.praimary,
    fontWeight: "700",
    marginTop: 24,
  },
  text9: {
    color: Color.praimary,
    width: 93,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 30,
  },
  group: {
    left: 234,
    height: 216,
    alignItems: "flex-end",
    top: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 145,
    left: 16,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  svgexport1822: {
    top: 111,
    left: 16,
    position: "absolute",
  },
  text12: {
    top: 112,
    left: 265,
    width: 92,
    position: "absolute",
  },
  text13: {
    width: 96,
    marginLeft: 229,
  },
  svgexport1822Parent: {
    top: 417,
    alignItems: "center",
    left: 16,
  },
  text14: {
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
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    width: 343,
  },
  groupItem: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  text15: {
    color: Color.colorLightsteelblue_100,
  },
  text16: {
    marginTop: 24,
    color: Color.colorLightsteelblue_100,
  },
  text18: {
    width: 143,
    marginTop: 24,
  },
  text19: {
    marginTop: 24,
    width: 142,
  },
  container: {
    alignItems: "flex-end",
    width: 142,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameView: {
    left: 218,
    alignItems: "flex-end",
    top: 0,
  },
  frameParent: {
    width: 311,
    top: 16,
    left: 16,
  },
  rectangleGroup: {
    top: 451,
    left: 16,
  },
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    height: 87,
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
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    left: 16,
  },
  text25: {
    marginLeft: -59.5,
    width: 120,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    color: Color.praimary,
    display: "flex",
    top: 48,
    lineHeight: 30,
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
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
});

export default VerificationCode9;
