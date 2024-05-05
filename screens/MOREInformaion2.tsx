import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MOREInformaion2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={styles.moreInformaionChild} />
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Requests7")}
      >
        <Text style={styles.text}>حفظ</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textLayout1]}>اسم صاحب الطلب</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text2, styles.textClr1]}>
                عبدالرحمن الغامدي
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text3, styles.textLayout1]}>رقم الجوال</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameShadowBox} />
            <View style={styles.wrapperPosition}>
              <Text style={[styles.text4, styles.textClr1]}>05629871269</Text>
            </View>
          </View>
        </View>
        <View style={styles.projectName}>
          <Image
            style={[styles.projectNameChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-155.png")}
          />
          <Text style={[styles.text5, styles.textClr1]}>اسم المشروع</Text>
        </View>
        <View style={[styles.groupView, styles.parent1Layout]}>
          <Text style={[styles.text6, styles.textLayout]}>نوع الصيانة</Text>
          <View style={[styles.maintenanceType, styles.maintenanceLayout]}>
            <Text style={[styles.text7, styles.textTypo1]}>صيانة روتينية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame3.png")}
            />
          </View>
          <View style={[styles.maintenanceType1, styles.maintenanceLayout]}>
            <Text style={[styles.text8, styles.textTypo2]}>صيانة إصلاحية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={[styles.maintenanceType2, styles.maintenanceLayout]}>
            <Text style={[styles.text9, styles.textTypo2]}>صيانة وقائية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
        </View>
        <View style={styles.projectName}>
          <Image
            style={[styles.projectNameChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-156.png")}
          />
          <Text style={[styles.text5, styles.textClr1]}>نوع الخدمة</Text>
        </View>
        <View style={[styles.parent1, styles.parent1Layout]}>
          <Text style={[styles.text11, styles.textLayout]}>فئة الخدمة</Text>
          <View style={styles.serviceClassParent}>
            <View style={[styles.serviceClass, styles.textPosition]}>
              <Text style={[styles.text12, styles.textTypo1]}>
                خدمة مخطط لها
              </Text>
              <Image
                style={[styles.frameIcon3, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
            <View style={[styles.parent2, styles.textPosition]}>
              <Text style={[styles.text13, styles.textTypo2]}>طلب خدمة</Text>
              <Image
                style={[styles.frameIcon4, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.text14, styles.textLayout1]}>
            المشكلة أو الطلب
          </Text>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.childGroupShadowBox]} />
            <Text style={[styles.text15, styles.textTypo]}>
              من فضلك اكتب ما تريد عن المشكلة او الطلب.....
            </Text>
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.text14, styles.textLayout1]}>وصف المشكلة</Text>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.childGroupShadowBox]} />
            <Text style={[styles.text17, styles.textTypo]}>
              من فضلك اكتب وصف المشكلة بشكل مفصل مثل : وصف و مجال المشكلة وبعض
              مؤشرات المشكلة.....
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.menuListLayout]}>
        <View style={[styles.menuList, styles.menuListLayout]}>
          <View style={styles.textLayout}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame16.png")}
            />
            <Text style={[styles.text18, styles.textClr]}>التقارير</Text>
          </View>
          <View style={styles.textLayout}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={[styles.text18, styles.textClr]}>السجل</Text>
          </View>
          <View style={styles.textLayout}>
            <View style={styles.menu31}>
              <View style={styles.container1}>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-11.png")}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame17.png")}
            />
            <Text style={[styles.text18, styles.textClr]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={styles.menu1}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame18.png")}
            />
            <Text style={[styles.text18, styles.textClr]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.textPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.textPosition]}
              resizeMode="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
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
          style={[styles.arrow21, styles.text22Position]}
          onPress={() => navigation.navigate("Requests7")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text22, styles.text22Position]}>تعديل الطلب</Text>
      </View>
      <View style={[styles.moreInformaionItem, styles.menuListLayout]} />
      <View style={styles.faceId}>
        <View style={styles.parent4}>
          <Text style={[styles.text23, styles.textClr1]}>
            تم حذف طلبك بنجاح
          </Text>
          <Text style={[styles.text24, styles.textClr]}>
            لقد تم حذف طلبك ويمكنك تقديم طلب جديد في أي وقت
          </Text>
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Image
          style={styles.httpslottiefilescomanimatIcon}
          resizeMode="cover"
          source={require("../assets/httpslottiefilescomanimationsdelete8rw2zud6fg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textLayout1: {
    height: 16,
    textAlign: "right",
  },
  wrapperPosition: {
    zIndex: 1,
    left: 17,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textClr1: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  parent1Layout: {
    height: 64,
    marginTop: 24,
  },
  textLayout: {
    width: 70,
    alignItems: "center",
  },
  maintenanceLayout: {
    width: 100,
    height: 24,
    top: 40,
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  frameIconPosition: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    color: Color.black,
    display: "flex",
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 143,
    width: 342,
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  textTypo: {
    opacity: 0.5,
    top: 16,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  textClr: {
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    height: 88,
    width: 373,
    marginLeft: -186.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text22Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  moreInformaionChild: {
    top: 1227,
    overflow: "hidden",
    height: 56,
    width: 343,
    left: 16,
    position: "absolute",
  },
  text: {
    color: Color.whait,
    width: 291,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  button: {
    top: 1117,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.praimary,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  text1: {
    width: 169,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
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
    height: 56,
    width: 343,
  },
  text2: {
    width: 240,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    height: 16,
    textAlign: "right",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  wrapper: {
    height: 14,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  parent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  text3: {
    width: 94,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    textAlign: "right",
    color: Color.black,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  group: {
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  projectNameChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text5: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    left: "47.81%",
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    position: "absolute",
  },
  projectName: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  text6: {
    left: 267,
    top: 0,
    position: "absolute",
    height: 16,
    textAlign: "right",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  text7: {
    width: "78%",
    left: "-4%",
  },
  frameIcon: {
    width: "20%",
    left: "80%",
  },
  maintenanceType: {
    left: 232,
    height: 24,
  },
  text8: {
    width: "75%",
    left: "-1%",
  },
  maintenanceType1: {
    left: 116,
    height: 24,
  },
  text9: {
    width: "70%",
    left: "4%",
  },
  maintenanceType2: {
    left: 0,
    height: 24,
  },
  groupView: {
    width: 337,
  },
  text11: {
    left: 263,
    top: 0,
    position: "absolute",
    height: 16,
    textAlign: "right",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  text12: {
    width: "74.29%",
    left: "0.95%",
  },
  frameIcon3: {
    width: "19.05%",
    left: "80.95%",
  },
  serviceClass: {
    left: 223,
    width: 105,
    height: 24,
  },
  text13: {
    width: "78.95%",
    left: "-6.32%",
  },
  frameIcon4: {
    width: "21.05%",
    left: "78.95%",
  },
  parent2: {
    width: 95,
    left: 0,
    height: 24,
  },
  serviceClassParent: {
    width: 328,
    left: 0,
    height: 24,
    top: 40,
    position: "absolute",
  },
  parent1: {
    width: 333,
  },
  text14: {
    width: 225,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    alignItems: "center",
  },
  groupChild: {
    height: 143,
    width: 342,
    left: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text15: {
    marginLeft: -88,
  },
  rectangleContainer: {
    marginTop: 16,
  },
  frameView: {
    marginTop: 24,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  groupItem: {
    height: 143,
    width: 342,
    left: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text17: {
    marginLeft: -156,
    lineHeight: 20,
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  frameParent: {
    top: 111,
    height: 701,
    alignItems: "flex-end",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  frameIcon5: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text18: {
    lineHeight: 16,
    textAlign: "left",
    marginTop: 6,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  container1: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.praimary,
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menu5: {
    width: 71,
    alignItems: "center",
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    left: 0,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    height: 30,
    bottom: 0,
    width: 375,
    left: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 0,
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
    maxHeight: "100%",
    maxWidth: "100%",
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
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    left: 15,
    width: 24,
  },
  text22: {
    marginLeft: -74.5,
    width: 150,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  tap: {
    top: -1,
  },
  moreInformaionItem: {
    marginTop: -406,
    top: "50%",
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    left: "50%",
    height: 812,
  },
  text23: {
    fontSize: FontSize.size_2xl,
    width: 256,
    height: 35,
    display: "flex",
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  text24: {
    width: 315,
    marginTop: 8,
    lineHeight: 30,
    textAlign: "center",
    fontSize: FontSize.size_base,
    height: 56,
  },
  parent4: {
    top: 187,
    left: 14,
    height: 99,
    alignItems: "center",
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "5.83%",
    top: "6.12%",
    right: "88.34%",
    bottom: "87.77%",
    width: "5.83%",
    height: "6.12%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    top: 33,
    left: 107,
    width: 130,
    height: 130,
    position: "absolute",
  },
  faceId: {
    top: 243,
    borderRadius: Border.br_mini,
    height: 327,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    overflow: "hidden",
    width: 343,
    left: 16,
    position: "absolute",
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MOREInformaion2;
