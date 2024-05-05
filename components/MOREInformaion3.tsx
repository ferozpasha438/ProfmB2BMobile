import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

type MOREInformaion3Type = {
  onClose?: () => void;
};

const MOREInformaion3 = ({ onClose }: MOREInformaion3Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.moreInformaion, styles.iconLayout1]}>
      <View style={styles.moreInformaionChild} />
      <Pressable
        style={[styles.button, styles.buttonBg]}
        onPress={() => navigation.navigate("Requests7")}
      >
        <Text style={[styles.text, styles.textTypo6]}>حفظ</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo5]}>اسم صاحب الطلب</Text>
          <View style={[styles.rectangleParent, styles.buttonLayout]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <Text style={[styles.text2, styles.textTypo3]}>
                عبدالرحمن الغامدي
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text3, styles.textTypo5]}>رقم الجوال</Text>
          <View style={[styles.rectangleParent, styles.buttonLayout]}>
            <View style={styles.frameShadowBox} />
            <View style={styles.wrapperPosition}>
              <Text style={[styles.text4, styles.textTypo3]}>05629871269</Text>
            </View>
          </View>
        </View>
        <View style={styles.projectName}>
          <Image
            style={[styles.projectNameChild, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/frame-155.png")}
          />
          <Text style={[styles.text5, styles.buttonPosition1]}>
            اسم المشروع
          </Text>
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
            style={[styles.projectNameChild, styles.buttonChildPosition]}
            resizeMode="cover"
            source={require("../assets/frame-156.png")}
          />
          <Text style={[styles.text5, styles.buttonPosition1]}>نوع الخدمة</Text>
        </View>
        <View style={[styles.parent1, styles.parent1Layout]}>
          <Text style={[styles.text11, styles.textLayout]}>فئة الخدمة</Text>
          <View style={styles.serviceClassParent}>
            <View style={[styles.serviceClass, styles.textPosition1]}>
              <Text style={[styles.text12, styles.textTypo1]}>
                خدمة مخطط لها
              </Text>
              <Image
                style={[styles.frameIcon3, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
            <View style={[styles.parent2, styles.textPosition1]}>
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
          <Text style={[styles.text14, styles.textTypo5]}>
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
          <Text style={[styles.text14, styles.textTypo5]}>وصف المشكلة</Text>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.childGroupShadowBox]} />
            <Text style={[styles.text17, styles.textTypo]}>
              من فضلك اكتب وصف المشكلة بشكل مفصل مثل : وصف و مجال المشكلة وبعض
              مؤشرات المشكلة.....
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={styles.menuList}>
          <View style={styles.textLayout}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame16.png")}
            />
            <Text style={styles.text18}>التقارير</Text>
          </View>
          <View style={styles.textLayout}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={styles.text18}>السجل</Text>
          </View>
          <View style={styles.textLayout}>
            <View style={styles.menu31}>
              <View style={[styles.container1, styles.buttonBg]}>
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
            <Text style={styles.text18}>الطلبات</Text>
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
            <Text style={styles.text18}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.textPosition1]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.rightSide, styles.rightSidePosition]}>
            <Image
              style={[styles.batteryIcon, styles.textPosition1]}
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text22, styles.text22Position]}>تعديل الطلب</Text>
      </View>
      <View
        style={[styles.moreInformaionItem, styles.loginWithFaceIdPosition]}
      />
      <View style={[styles.loginWithFaceId, styles.loginWithFaceIdPosition]}>
        <View style={styles.faceId}>
          <View style={styles.parent4}>
            <Text style={[styles.text23, styles.textTypo6]}>
              هل انت متاكد من حذف الطلب
            </Text>
            <Text style={[styles.text24, styles.textTypo6]}>
              حذف الطلب سيؤدي إلى إلغاء الخدمة وسوف تحتاج إلى تقديم طلب جديد
            </Text>
          </View>
          <Pressable
            style={[styles.button1, styles.buttonPosition]}
            onPress={() => navigation.navigate("MOREInformaion16")}
          >
            <View style={[styles.buttonChild, styles.iconLayout]} />
            <Text style={[styles.text25, styles.textPosition]}>إلغاء</Text>
          </Pressable>
          <Pressable
            style={[styles.button2, styles.buttonPosition]}
            onPress={() => navigation.navigate("MOREInformaion2")}
          >
            <View style={[styles.buttonItem, styles.iconLayout]} />
            <Text style={[styles.text26, styles.textPosition]}>حذف</Text>
          </Pressable>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("MOREInformaion16")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector9.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.httpslottiefilescomanimatIcon,
              styles.rightSidePosition,
            ]}
            resizeMode="cover"
            source={require("../assets/httpslottiefilescomanimationsquestionmark9mvpaoclgq.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  buttonBg: {
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  textTypo6: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo5: {
    textAlign: "right",
    fontWeight: "300",
    height: 16,
    display: "flex",
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  buttonLayout: {
    borderRadius: Border.br_3xs,
    width: 343,
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
  textTypo3: {
    color: Color.black,
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  buttonChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
  },
  buttonPosition1: {
    top: "0%",
    position: "absolute",
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
    right: "0%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
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
  textPosition1: {
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
  bottomNavPosition: {
    bottom: 0,
    position: "absolute",
    width: 375,
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
  rightSidePosition: {
    top: 17,
    position: "absolute",
  },
  text22Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  loginWithFaceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    height: 48,
    width: 301,
    marginLeft: -150.5,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    width: 288,
    top: "22.92%",
    marginLeft: -143.5,
    height: "50%",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1227,
    left: 16,
    overflow: "hidden",
    height: 56,
    width: 343,
    position: "absolute",
  },
  text: {
    width: 291,
    color: Color.whait,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
  },
  button: {
    top: 1117,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    width: 343,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    position: "absolute",
  },
  text1: {
    width: 169,
    height: 16,
    display: "flex",
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
    color: Color.black,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 16,
  },
  wrapper: {
    height: 14,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
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
    height: 16,
    display: "flex",
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
    width: "100%",
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text5: {
    height: "19.51%",
    width: "52.19%",
    left: "47.81%",
    color: Color.black,
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    fontSize: FontSize.size_sm,
    top: "0%",
    alignItems: "center",
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
    display: "flex",
    textAlign: "right",
    fontWeight: "300",
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
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
    display: "flex",
    textAlign: "right",
    fontWeight: "300",
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
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
    height: 16,
    display: "flex",
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
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  container1: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
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
    flex: 1,
    alignItems: "center",
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
    position: "absolute",
    width: 375,
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
    left: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
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
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
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
    right: 15,
    width: 67,
    height: 11,
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
    top: 48,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  tap: {
    top: -1,
  },
  moreInformaionItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    height: 812,
    width: 375,
  },
  text23: {
    fontSize: FontSize.size_2xl,
    width: 314,
    color: Color.colorRed_100,
    height: 35,
    display: "flex",
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
  },
  text24: {
    color: Color.gray,
    width: 300,
    marginTop: 8,
    lineHeight: 30,
    fontSize: FontSize.size_base,
    height: 56,
  },
  parent4: {
    top: 202,
    left: 14,
    height: 99,
    alignItems: "center",
    position: "absolute",
  },
  buttonChild: {
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    top: "0%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  text25: {
    lineHeight: 22,
    color: Color.colorRed_100,
  },
  button1: {
    top: 390,
  },
  buttonItem: {
    backgroundColor: Color.colorRed_100,
    top: "0%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_3xs,
  },
  text26: {
    lineHeight: 30,
    color: Color.whait,
  },
  button2: {
    top: 333,
  },
  icon1: {
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "5.83%",
    top: "4.37%",
    right: "88.34%",
    bottom: "91.27%",
    width: "5.83%",
    height: "4.37%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    left: 82,
    width: 180,
    height: 180,
  },
  faceId: {
    borderRadius: Border.br_mini,
    height: 458,
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
  },
  loginWithFaceId: {
    marginTop: -228,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -171.5,
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default MOREInformaion3;
