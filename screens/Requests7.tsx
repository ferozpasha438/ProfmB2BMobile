import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Requests7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.requests}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childGroupBorder]} />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Filter1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/frame24.png")}
            />
          </Pressable>
          <View style={styles.parent}>
            <Text
              style={[styles.text, styles.textFlexBox]}
            >{`بحث عن رقم الطلب , اسم المشروع , اسم الشركة... `}</Text>
            <Image
              style={[styles.fiRrZoomOutIcon, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/firrzoomout1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.requestsChild} />
      <View style={styles.groupParent}>
        <View style={styles.groupChildLayout}>
          <View style={[styles.groupChild, styles.childGroupShadowBox]} />
          <Text style={styles.text1}>23655</Text>
          <Text
            style={[styles.text2, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={styles.textTypo4}>صيانة روتينية</Text>
            <Text style={[styles.text4, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.text2Position]}>
            <Text style={[styles.text5, styles.textFlexBox]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text6, styles.textTypo3]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text7, styles.textTypo4]}>01 / 11 /2023</Text>
          <Text style={[styles.text8, styles.textTypo3]}>تاريخ الطلب :</Text>
          <View style={styles.groupItem} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text9, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo2]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo2]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text12, styles.textTypo1]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo1]}>
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
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.groupInner, styles.childGroupShadowBox]} />
          <Text style={styles.text1}>25416</Text>
          <Text
            style={[styles.text2, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={styles.textTypo4}>صيانة وقائية</Text>
            <Text style={[styles.text4, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.text2Position]}>
            <Text style={[styles.text5, styles.textFlexBox]}>ممشى جدة</Text>
            <Text
              style={[styles.text6, styles.textTypo3]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text7, styles.textTypo4]}>31 / 10/2023</Text>
          <Text style={[styles.text8, styles.textTypo3]}>تاريخ الطلب :</Text>
          <View style={styles.groupItem} />
          <View style={styles.mediumButtonParent}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("Requests6")}
            >
              <Text style={[styles.text12, styles.textTypo1]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo1]}>
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
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-2386051.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text24, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text25, styles.textTypo6]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo2]}>مكتمل</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.rectangleView, styles.childGroupShadowBox]} />
          <Text style={styles.text1}>26890</Text>
          <Text
            style={[styles.text2, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={styles.textTypo4}>صيانة روتينية</Text>
            <Text style={[styles.text4, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.text2Position]}>
            <Text style={[styles.text5, styles.textFlexBox]}>جدة سوبر دوم</Text>
            <Text
              style={[styles.text6, styles.textTypo3]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text7, styles.textTypo4]}>15 / 10/2023</Text>
          <Text style={[styles.text8, styles.textTypo3]}>تاريخ الطلب :</Text>
          <View style={styles.groupItem} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text9, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo2]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo2]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text12, styles.textTypo1]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo1]}>
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
        <View style={[styles.rectangleContainer, styles.groupChildLayout]}>
          <View style={[styles.groupChild2, styles.childGroupShadowBox]} />
          <Text style={styles.text1}>21584</Text>
          <Text
            style={[styles.text2, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={styles.textTypo4}>صيانة وقائية</Text>
            <Text style={[styles.text4, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.text2Position]}>
            <Text style={[styles.text5, styles.textFlexBox]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text6, styles.textTypo3]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text7, styles.textTypo4]}>10 / 10/2023</Text>
          <Text style={[styles.text8, styles.textTypo3]}>تاريخ الطلب :</Text>
          <View style={styles.groupItem} />
          <View style={styles.mediumButtonParent}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("POPUPERROL")}
            >
              <Text style={[styles.text12, styles.textTypo1]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo1]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-2386052.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text50, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text25, styles.textTypo6]}>قيد التنفيذ</Text>
              <Text style={[styles.text52, styles.textTypo6]}>مكتمل</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.menuListLayout]}>
        <View style={[styles.menuList, styles.menuListLayout]}>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Reports15")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame92.png")}
            />
            <Text style={[styles.text53, styles.textTypo]}>التقارير</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/liuser6.png")}
            />
            <Text style={[styles.text53, styles.textTypo]}>حسابي</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container1, styles.container1Bg]}>
                <Image
                  style={styles.frameIcon4}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={styles.menu4}>
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame107.png")}
            />
            <Text style={[styles.text55, styles.textTypo]}>الطلبات</Text>
          </View>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame91.png")}
            />
            <Text style={[styles.text53, styles.textTypo]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.groupChildPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.groupChildPosition]}
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
            style={[styles.leftSideIcon, styles.frameParentPosition]}
            resizeMode="cover"
            source={require("../assets/left-side3.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow21, styles.textPosition]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text57, styles.textPosition]}>الطلبات</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childGroupBorder: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  frameParentPosition: {
    top: 12,
    position: "absolute",
  },
  frameLayout: {
    width: 16,
    height: 16,
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  textTypo5: {
    width: 66,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    color: Color.black,
    lineHeight: 25,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  textPosition: {
    top: 48,
    position: "absolute",
  },
  text2Position: {
    top: 16,
    position: "absolute",
  },
  textTypo3: {
    width: 77,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    lineHeight: 25,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  textTypo4: {
    width: 55,
    color: Color.praimary,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
  },
  groupPosition: {
    left: 55,
    alignItems: "center",
    position: "absolute",
  },
  textTypo6: {
    color: Color.black,
    fontWeight: "700",
    top: 0,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  textTypo2: {
    color: Color.gray,
    top: 0,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  container1Bg: {
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  iconLayout: {
    marginLeft: 6,
    height: 16,
    width: 16,
  },
  groupChildLayout: {
    height: 190,
    width: 343,
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  textTypo: {
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    height: 88,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    height: 48,
    zIndex: 0,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    height: 16,
  },
  text: {
    width: 215,
    height: 24,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    color: Color.colorLightsteelblue_100,
    lineHeight: 30,
  },
  fiRrZoomOutIcon: {
    marginLeft: 8,
    overflow: "hidden",
    height: 16,
  },
  parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    width: 311,
    justifyContent: "space-between",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
  },
  rectangleParent: {
    top: 112,
    justifyContent: "center",
    left: 16,
    position: "absolute",
  },
  requestsChild: {
    top: 1068,
    height: 54,
    overflow: "hidden",
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  text1: {
    left: 40,
    width: 31,
    color: Color.praimary,
    lineHeight: 25,
    top: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  text2: {
    left: 75,
    top: 16,
    position: "absolute",
  },
  text4: {
    marginLeft: 4,
  },
  group: {
    flexDirection: "row",
    left: 16,
  },
  text5: {
    width: 75,
    color: Color.praimary,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
  },
  text6: {
    marginLeft: 4,
  },
  container: {
    left: 171,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  text7: {
    left: 191,
    top: 48,
    position: "absolute",
  },
  text8: {
    left: 250,
    top: 48,
    position: "absolute",
  },
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    left: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  frameItem: {
    width: 206,
    height: 10,
  },
  text9: {
    left: 188,
    width: 46,
    fontWeight: "700",
  },
  text10: {
    left: 91,
    width: 46,
  },
  text11: {
    width: 31,
    left: 0,
  },
  groupView: {
    width: 234,
    marginTop: 4,
    height: 16,
  },
  groupContainer: {
    top: 96,
  },
  text12: {
    width: 85,
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
  },
  mediumButton: {
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 140,
    flexDirection: "row",
    borderStyle: "solid",
  },
  text13: {
    color: Color.whait,
  },
  frameIcon: {
    overflow: "hidden",
  },
  mediumButton1: {
    marginLeft: 31,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  mediumButtonParent: {
    top: 142,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  groupInner: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  text24: {
    left: 187,
    width: 47,
    fontWeight: "700",
  },
  text25: {
    left: 86,
    width: 51,
    fontWeight: "700",
  },
  groupParent1: {
    top: 95,
  },
  rectangleContainer: {
    marginTop: 24,
  },
  rectangleView: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  groupChild2: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  text50: {
    left: 184,
    width: 50,
    fontWeight: "700",
  },
  text52: {
    fontWeight: "700",
    width: 31,
    left: 0,
  },
  groupParent: {
    marginLeft: -171.5,
    top: 184,
    height: 628,
    left: "50%",
    position: "absolute",
  },
  frameIcon4: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text53: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  menu4: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container1: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  text55: {
    fontWeight: "700",
    color: Color.praimary,
  },
  menuList: {
    bottom: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    left: 0,
    flexDirection: "row",
    backgroundColor: Color.whait,
    justifyContent: "center",
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
    left: 21,
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    width: 24,
    height: 24,
    left: 16,
  },
  text57: {
    marginLeft: -74.5,
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 150,
    fontWeight: "700",
    color: Color.praimary,
    left: "50%",
    height: 24,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    top: 48,
    lineHeight: 30,
    justifyContent: "center",
  },
  requests: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Requests7;
