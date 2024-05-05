import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Reports5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reports5}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childShadowBox]} />
        <View style={[styles.frameParent, styles.containerPosition]}>
          <View style={styles.groupFlexBox}>
            <Text style={[styles.text, styles.textLayout]}>ممشى جدة</Text>
            <Text style={[styles.text1, styles.textTypo3]}>52815</Text>
            <Text style={[styles.text2, styles.textTypo3]}>عمر المحمدي</Text>
            <Text style={[styles.text3, styles.textLayout]}>
              01 / 11 / 2023
            </Text>
            <Text
              style={[styles.text4, styles.textTypo3]}
            >{`ميكانيكية و كهربائية `}</Text>
            <Text style={[styles.text4, styles.textTypo3]}>
              الطابق الأول و الطابق الثاني
            </Text>
            <Text style={[styles.text4, styles.textTypo3]}>صيانة وقائية</Text>
            <Text style={[styles.text7, styles.textTypo3]}>
              توقف المحرك عن العمل بسبب عطل في نظام الإشعال
            </Text>
            <Text style={[styles.text4, styles.textTypo3]}>لا يتوفر</Text>
            <Text style={[styles.text4, styles.textTypo3]}>طلب مكتمل</Text>
            <Text style={[styles.text4, styles.textTypo3]}>فترة صباحية</Text>
            <Text style={[styles.text4, styles.textTypo3]}>03 / 11 / 2023</Text>
            <Text style={[styles.text4, styles.textTypo3]}>06 / 11 / 2023</Text>
            <Text style={[styles.text4, styles.textTypo3]}>لا يتوفر</Text>
            <Text style={[styles.text4, styles.textTypo3]}>حسن علي</Text>
            <Text style={[styles.text4, styles.textTypo3]}>
              عبدالرحمن مصطفى
            </Text>
            <Text style={[styles.text4, styles.textTypo3]}>كريم محمد</Text>
          </View>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={styles.textTypo1}>اسم المشروع</Text>
            <Text
              style={[styles.text18, styles.textTypo2]}
            >{`رقم الطلب `}</Text>
            <Text style={[styles.text19, styles.textTypo1]}>اسم المشرف</Text>
            <Text style={[styles.text18, styles.textTypo2]}>تاريخ الطلب</Text>
            <Text style={[styles.text19, styles.textTypo1]}>نوع الخدمة</Text>
            <Text style={[styles.text18, styles.textTypo2]}>موقع الخدمة</Text>
            <Text style={[styles.text18, styles.textTypo2]}>نوع الصيانة</Text>
            <Text style={[styles.text24, styles.textTypo2]}>وصف العمل</Text>
            <Text style={[styles.text18, styles.textTypo2]}>
              إحتياج قطع غيار
            </Text>
            <Text style={[styles.text26, styles.textTypo2]}>حالة العمل</Text>
            <Text
              style={[styles.text26, styles.textTypo2]}
            >{`فترة العمل `}</Text>
            <Text style={[styles.text26, styles.textTypo2]}>
              تاريخ بداية الصيانة
            </Text>
            <Text style={[styles.text26, styles.textTypo2]}>
              تاريخ إنتهاء الصيانة
            </Text>
            <Text style={[styles.text26, styles.textTypo2]}>ملاحظات</Text>
            <Text style={[styles.text26, styles.textTypo2]}>اسم الفني</Text>
            <Text style={[styles.text32, styles.textTypo2]}>
              اسم مهندس التشغيل
            </Text>
            <Text style={[styles.text26, styles.textTypo2]}>
              اسم مدير التشغيل
            </Text>
          </View>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Text style={[styles.text34, styles.textFlexBox]}>
            صور من المشروع
          </Text>
          <View style={styles.rectangleGroup}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/rectangle-4316.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-4315.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame8.png")}
        />
        <Text style={[styles.text35, styles.textTypo]}>تفاصيل التقرير</Text>
      </View>
      <View style={styles.reports5Child} />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.batteryIconPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.batteryIconPosition]}>
        <View style={[styles.groupChild, styles.navBarPosition]} />
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
          style={[styles.arrow21, styles.text36Position]}
          onPress={() => navigation.navigate("Reports15")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text36, styles.text36Position]}>تقرير</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  containerPosition: {
    left: 12,
    position: "absolute",
  },
  textLayout: {
    width: 102,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  textTypo3: {
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    marginTop: 24,
    alignItems: "center",
    textAlign: "right",
  },
  groupFlexBox: {
    alignItems: "flex-end",
    height: 688,
  },
  textTypo2: {
    color: Color.praimary,
    fontWeight: "700",
    marginTop: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  textTypo1: {
    width: 74,
    color: Color.praimary,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  textFlexBox: {
    textAlign: "center",
    justifyContent: "center",
    color: Color.praimary,
  },
  frameLayout: {
    height: 159,
    width: 135,
    borderRadius: Border.br_8xs,
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text36Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    shadowRadius: 6,
    elevation: 6,
    width: 343,
    height: 972,
    zIndex: 0,
  },
  text: {
    height: 16,
  },
  text1: {
    lineHeight: 25,
    marginTop: 24,
    width: 93,
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  text2: {
    width: 122,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    lineHeight: 30,
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  text3: {
    marginTop: 24,
    height: 16,
  },
  text4: {
    width: 142,
    marginTop: 24,
    height: 16,
    alignItems: "center",
    lineHeight: 30,
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  text7: {
    width: 156,
    height: 48,
    marginTop: 24,
    alignItems: "center",
    lineHeight: 30,
    display: "flex",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  text18: {
    width: 93,
    height: 16,
  },
  text19: {
    marginTop: 24,
  },
  text24: {
    height: 48,
    width: 93,
  },
  text26: {
    width: 114,
    height: 16,
  },
  text32: {
    width: 120,
    height: 16,
  },
  group: {
    marginLeft: 43,
  },
  frameParent: {
    top: 23,
    zIndex: 1,
    flexDirection: "row",
  },
  text34: {
    width: 98,
    justifyContent: "center",
    fontWeight: "700",
    textAlign: "center",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    fontSize: FontSize.size_xs,
  },
  frameInner: {
    marginLeft: 49,
  },
  rectangleGroup: {
    marginTop: 24,
    flexDirection: "row",
  },
  container: {
    top: 751,
    zIndex: 2,
    alignItems: "center",
  },
  rectangleParent: {
    marginLeft: -171.5,
    top: 153,
    height: 659,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  text35: {
    color: Color.black,
    width: 103,
    marginLeft: 216,
    height: 16,
    textAlign: "right",
    fontSize: FontSize.size_base,
  },
  frameGroup: {
    top: 113,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  reports5Child: {
    marginLeft: -165.5,
    top: 1136,
    width: 331,
    height: 43,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
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
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowRadius: 20,
    elevation: 20,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
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
    height: 11,
    width: 24,
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
  text36: {
    marginLeft: -74.5,
    width: 150,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    justifyContent: "center",
    textAlign: "center",
    color: Color.praimary,
    left: "50%",
  },
  rectangleContainer: {
    height: 89,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  reports5: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Reports5;
