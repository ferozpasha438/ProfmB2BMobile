import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Requests6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.requests}>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={[styles.frameChild, styles.groupItemBorder]} />
        <View style={[styles.frameParent, styles.framePosition]}>
          <Pressable
            style={[styles.frame, styles.frameLayout]}
            onPress={() => navigation.navigate("Filter1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
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
              source={require("../assets/firrzoomout.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textClr]}>
                نادي جدة لليخوت
              </Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textClr]}>صيانة روتينية</Text>
              <Text style={[styles.text4, styles.textTypo7]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textClr]}>01 / 11 /2023</Text>
              <Text style={[styles.text6, styles.textTypo7]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={[styles.text7, styles.textTypo6]}>23655</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860513.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text9, styles.textTypo4]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo4]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo6]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentPosition]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textClr]}>ممشى جدة</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textClr]}>صيانة وقائية</Text>
              <Text style={[styles.text4, styles.textTypo7]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textClr]}>31 / 10/2023</Text>
              <Text style={[styles.text6, styles.textTypo7]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={[styles.text7, styles.textTypo6]}>25416</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860514.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text22, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text23, styles.textTypo5]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo6]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentPosition]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textClr]}>جدة سوبر دوم</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textClr]}>صيانة روتينية</Text>
              <Text style={[styles.text4, styles.textTypo7]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textClr]}>15 / 10/2023</Text>
              <Text style={[styles.text6, styles.textTypo7]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={[styles.text7, styles.textTypo6]}>26890</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860513.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text22, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo4]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo6]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentPosition]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("MOREInformaion16")}
            >
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.frameGroup, styles.framePosition]}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textClr]}>
                نادي جدة لليخوت
              </Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textClr]}>صيانة وقائية</Text>
              <Text style={[styles.text4, styles.textTypo7]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textClr]}>10 / 10/2023</Text>
              <Text style={[styles.text6, styles.textTypo7]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={[styles.text7, styles.textTypo6]}>21584</Text>
              <Text
                style={[styles.text2, styles.textTypo7]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupItemBorder]} />
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860515.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text48, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text23, styles.textTypo5]}>قيد التنفيذ</Text>
              <Text style={[styles.text50, styles.textTypo5]}>مكتمل</Text>
            </View>
          </View>
          <View style={[styles.mediumButtonParent, styles.parentPosition]}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("POPUPERROL")}
            >
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require("../assets/group14.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.container1Bg]}
              onPress={() => navigation.navigate("VerificationCode9")}
            >
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.requestsChild, styles.parentPosition]} />
      <View style={[styles.bottomNav, styles.bottomNavLayout]}>
        <View style={[styles.menuList, styles.menuListBg]}>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame16.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>التقارير</Text>
          </View>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>السجل</Text>
          </View>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container1, styles.container1Bg]}>
                <Image
                  style={styles.frameIcon4}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-11.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={styles.menu5}>
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame104.png")}
            />
            <Text style={[styles.text55, styles.textTypo2]}>الطلبات</Text>
          </View>
          <Pressable
            style={styles.menu1}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame18.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
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
          style={[styles.arrow21, styles.text57Position]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text57, styles.textTypo]}>الطلبات</Text>
      </View>
      <View style={[styles.requestsItem, styles.faceIdPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={[styles.attendanceSuccessful, styles.faceIdPosition]}>
          <Image
            style={[styles.frameIcon8, styles.bottomNavLayout]}
            resizeMode="cover"
            source={require("../assets/frame106.png")}
          />
          <View style={styles.parent17}>
            <Text style={[styles.text58, styles.textTypo]}>
              جاري الأن تنفيذ طلبك
            </Text>
            <Text style={[styles.text59, styles.textTypo]}>
              نعتذر لا يمكن تعديل الطلب في حين تنفيذه يمكنك طلب خدمة جديدة
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Requests7")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  groupItemBorder: {
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  framePosition: {
    width: 311,
    left: 16,
    position: "absolute",
  },
  frameLayout: {
    width: 16,
    height: 16,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  rectangleParentLayout: {
    height: 190,
    left: 0,
    width: 343,
    position: "absolute",
  },
  textClr: {
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
  },
  textTypo7: {
    marginLeft: 4,
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
  parent1Position: {
    top: 32,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo6: {
    width: 31,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
  },
  textTypo4: {
    width: 46,
    top: 0,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
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
  textTypo3: {
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
  iconLayout1: {
    marginLeft: 6,
    height: 16,
    width: 16,
  },
  textTypo5: {
    fontWeight: "700",
    color: Color.praimary,
  },
  bottomNavLayout: {
    height: 90,
    overflow: "hidden",
  },
  menuListBg: {
    backgroundColor: Color.whait,
    left: 0,
  },
  textTypo2: {
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  tapPosition: {
    height: 88,
    width: 373,
    marginLeft: -186.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text57Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild: {
    borderWidth: 0.5,
    zIndex: 0,
    height: 48,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
  },
  icon: {
    overflow: "hidden",
  },
  frame: {
    height: 16,
  },
  text: {
    width: 215,
    height: 24,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    lineHeight: 30,
    display: "flex",
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
    justifyContent: "space-between",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    top: 12,
  },
  rectangleParent: {
    top: 112,
    justifyContent: "center",
  },
  groupChildShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    height: 190,
    left: 0,
    top: 0,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text1: {
    width: 75,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    height: 16,
  },
  text2: {
    width: 77,
  },
  group: {
    left: 155,
    justifyContent: "flex-end",
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  text3: {
    width: 57,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    height: 16,
  },
  text4: {
    width: 66,
  },
  container: {
    left: 0,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  text5: {
    width: 55,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    height: 16,
  },
  text6: {
    width: 68,
  },
  frameView: {
    left: 1,
  },
  text7: {
    lineHeight: 25,
    width: 31,
    color: Color.praimary,
    fontWeight: "300",
  },
  parent1: {
    left: 199,
  },
  frameGroup: {
    top: 70,
    height: 48,
  },
  groupItem: {
    top: 54,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    width: 206,
    height: 10,
  },
  text9: {
    left: 188,
    fontWeight: "700",
    color: Color.praimary,
  },
  text10: {
    left: 91,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  text11: {
    left: 0,
    top: 0,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    position: "absolute",
  },
  groupView: {
    width: 234,
    marginTop: 4,
    height: 16,
  },
  groupContainer: {
    left: 55,
    alignItems: "center",
    top: 12,
    position: "absolute",
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
  },
  rectangleGroup: {
    top: 0,
  },
  text22: {
    left: 187,
    width: 47,
    top: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  text23: {
    left: 86,
    width: 51,
    top: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  rectangleContainer: {
    top: 214,
  },
  rectangleParent1: {
    top: 428,
  },
  text48: {
    left: 184,
    width: 50,
    top: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  text50: {
    width: 31,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent2: {
    top: 642,
  },
  groupParent: {
    top: 184,
    height: 832,
    width: 343,
  },
  requestsChild: {
    top: 1068,
    height: 54,
    overflow: "hidden",
    width: 343,
  },
  frameIcon4: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text53: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu2: {
    width: 70,
    alignItems: "center",
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
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    width: 375,
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
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
    width: 375,
    left: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 375,
    left: "50%",
    bottom: 0,
    position: "absolute",
    marginLeft: -187.5,
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    height: 88,
    width: 373,
    marginLeft: -186.5,
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
    left: 21,
    width: 54,
    height: 21,
    top: 12,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  arrow21: {
    left: 15,
    width: 24,
  },
  text57: {
    marginLeft: -74.5,
    width: 150,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: 48,
    height: 24,
    position: "absolute",
    left: "50%",
    fontWeight: "700",
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  requestsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    height: 812,
  },
  frameIcon8: {
    width: 90,
  },
  text58: {
    fontSize: FontSize.size_2xl,
    width: 256,
    height: 35,
    fontWeight: "700",
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text59: {
    width: 315,
    height: 56,
    marginTop: 8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorLightsteelblue_100,
  },
  parent17: {
    height: 99,
    marginTop: 16,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -107.5,
    marginLeft: -157.5,
    height: 214,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.83%",
    top: "6.97%",
    right: "88.34%",
    bottom: "86.06%",
    width: "5.83%",
    height: "6.97%",
    position: "absolute",
  },
  faceId: {
    marginTop: -143,
    marginLeft: -171.5,
    borderRadius: Border.br_mini,
    height: 287,
    overflow: "hidden",
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  requests: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Requests6;
