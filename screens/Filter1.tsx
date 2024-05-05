import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Filter1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.filter}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childShadowBox]} />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <Image
            style={[styles.frameIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/frame101.png")}
          />
          <View style={styles.parent}>
            <Text
              style={[styles.text, styles.textFlexBox]}
            >{`بحث عن رقم طلب , اسم مشروع , اسم الشركة... `}</Text>
            <Image
              style={[styles.fiRrZoomOutIcon, styles.iconSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/firrzoomout1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={styles.frameGroup}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textFlexBox]}>
                نادي جدة لليخوت
              </Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textFlexBox]}>
                صيانة روتينية
              </Text>
              <Text style={[styles.text4, styles.textTypo6]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textFlexBox]}>
                01 / 11 /2023
              </Text>
              <Text style={[styles.text6, styles.textTypo6]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={styles.text7}>23655</Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupContainer, styles.frameParentPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860513.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text9, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo4]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo4]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout2}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.buttonBg]}>
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={styles.frameGroup}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textFlexBox]}>ممشى جدة</Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textFlexBox]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text4, styles.textTypo6]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textFlexBox]}>
                31 / 10/2023
              </Text>
              <Text style={[styles.text6, styles.textTypo6]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={styles.text7}>25416</Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupContainer, styles.frameParentPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860514.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text22, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text23, styles.textTypo5]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo4]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout2}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.buttonBg]}>
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={styles.frameGroup}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textFlexBox]}>
                جدة سوبر دوم
              </Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textFlexBox]}>
                صيانة روتينية
              </Text>
              <Text style={[styles.text4, styles.textTypo6]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textFlexBox]}>
                15 / 10/2023
              </Text>
              <Text style={[styles.text6, styles.textTypo6]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={styles.text7}>26890</Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupContainer, styles.frameParentPosition]}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-23860513.png")}
            />
            <View style={styles.groupView}>
              <Text style={[styles.text22, styles.textTypo5]}>غير مكتمل</Text>
              <Text style={[styles.text10, styles.textTypo4]}>قيد التنفيذ</Text>
              <Text style={[styles.text11, styles.textTypo4]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout2}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.buttonBg]}>
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <View style={styles.frameGroup}>
            <View style={styles.group}>
              <Text style={[styles.text1, styles.textFlexBox]}>
                نادي جدة لليخوت
              </Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`اسم المشروع : `}</Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text3, styles.textFlexBox]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text4, styles.textTypo6]}>
                نوع الصيانة :
              </Text>
            </View>
            <View style={[styles.frameView, styles.parent1Position]}>
              <Text style={[styles.text5, styles.textFlexBox]}>
                10 / 10/2023
              </Text>
              <Text style={[styles.text6, styles.textTypo6]}>
                تاريخ الطلب :
              </Text>
            </View>
            <View style={[styles.parent1, styles.parent1Position]}>
              <Text style={styles.text7}>21584</Text>
              <Text
                style={[styles.text2, styles.textTypo6]}
              >{`رقم الطلب       : `}</Text>
            </View>
          </View>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupContainer, styles.frameParentPosition]}>
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
          <View style={styles.mediumButtonParent}>
            <Pressable
              style={[styles.mediumButton, styles.mediumSpaceBlock]}
              onPress={() => navigation.navigate("POPUPERROL")}
            >
              <Text style={[styles.text12, styles.textTypo3]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout2}
                resizeMode="cover"
                source={require("../assets/group15.png")}
              />
            </Pressable>
            <View style={[styles.mediumButton1, styles.buttonBg]}>
              <Text style={[styles.text13, styles.textTypo3]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.menuListLayout]}>
        <View style={[styles.menuList, styles.menuListLayout]}>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame102.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>التقارير</Text>
          </View>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame103.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>السجل</Text>
          </View>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container1, styles.buttonBg]}>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-11.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={styles.menu5}>
            <Image
              style={styles.frameIcon5}
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
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame105.png")}
            />
            <Text style={[styles.text53, styles.textTypo2]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
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
          style={[styles.arrow21, styles.text57Position]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text57, styles.textTypo]}>الطلبات</Text>
      </View>
      <Pressable
        style={[styles.filterChild, styles.menuListLayout]}
        onPress={() => navigation.navigate("Requests7")}
      />
      <View style={[styles.rectangleParent3, styles.groupChild4Position]}>
        <View style={[styles.groupChild4, styles.groupChild4Position]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Requests7")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <View style={styles.parent17}>
          <Text style={[styles.text58, styles.textTypo1]}>فلتر</Text>
          <Image
            style={[styles.frameIcon9, styles.iconSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/frame15.png")}
          />
        </View>
        <Text style={[styles.text59, styles.textTypo1]}>الحالة</Text>
        <View style={[styles.groupChild5, styles.groupPosition]} />
        <View style={styles.filterParent}>
          <View style={styles.filterLayout}>
            <Text style={[styles.text60, styles.textPosition]}>
              جميع الطلبات
            </Text>
            <Image
              style={[styles.frameIcon10, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame3.png")}
            />
          </View>
          <View style={[styles.filter2, styles.filterLayout]}>
            <Text style={[styles.text61, styles.textPosition]}>طلب مكتمل</Text>
            <Image
              style={[styles.frameIcon10, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={[styles.filter2, styles.filterLayout]}>
            <Text style={[styles.text61, styles.textPosition]}>
              طلب غير مكتمل
            </Text>
            <Image
              style={[styles.frameIcon10, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <View style={[styles.filter2, styles.filterLayout]}>
            <Text style={[styles.text61, styles.textPosition]}>
              طلب قيد التنفيذ
            </Text>
            <Image
              style={[styles.frameIcon10, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonBg]}
        onPress={() => navigation.navigate("Requests7")}
      >
        <Text style={[styles.text64, styles.textTypo]}>تطبيق الفلتر</Text>
      </Pressable>
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
    backgroundColor: Color.whait,
  },
  frameParentPosition: {
    top: 12,
    position: "absolute",
  },
  iconLayout3: {
    width: 16,
    height: 16,
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  iconSpaceBlock: {
    marginLeft: 8,
    overflow: "hidden",
  },
  rectangleParentLayout: {
    height: 190,
    left: 0,
    width: 343,
    position: "absolute",
  },
  textTypo6: {
    marginLeft: 4,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontWeight: "600",
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
  groupPosition: {
    height: 1,
    borderTopWidth: 0.5,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo5: {
    fontWeight: "700",
    color: Color.praimary,
  },
  textTypo4: {
    color: Color.colorLightsteelblue_100,
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
  textTypo3: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  buttonBg: {
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  iconLayout2: {
    marginLeft: 6,
    height: 16,
    width: 16,
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  textTypo2: {
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
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
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild4Position: {
    height: 347,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    lineHeight: 25,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    alignItems: "center",
  },
  textPosition: {
    left: "-1.8%",
    top: "16.67%",
    width: "79.28%",
    height: "66.67%",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  filterLayout: {
    width: 111,
    height: 24,
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 0.5,
    zIndex: 0,
    height: 48,
    width: 343,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
  },
  frameIcon: {
    overflow: "hidden",
    height: 16,
  },
  text: {
    width: 198,
    height: 24,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    display: "flex",
    color: Color.gray,
    fontWeight: "300",
    lineHeight: 30,
  },
  fiRrZoomOutIcon: {
    height: 16,
    width: 16,
  },
  parent: {
    marginLeft: 73,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
  },
  rectangleParent: {
    top: 112,
    left: 16,
    position: "absolute",
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
    color: Color.praimary,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    display: "flex",
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
    color: Color.praimary,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    display: "flex",
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
    color: Color.praimary,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    display: "flex",
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
    width: 31,
    lineHeight: 25,
    color: Color.praimary,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
  },
  parent1: {
    left: 199,
  },
  frameGroup: {
    top: 70,
    width: 311,
    height: 48,
    left: 16,
    position: "absolute",
  },
  groupItem: {
    top: 54,
    width: 344,
    borderColor: Color.gray,
  },
  frameItem: {
    width: 206,
    height: 10,
  },
  text9: {
    left: 188,
    width: 46,
    top: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
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
    left: 55,
    alignItems: "center",
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
  frameIcon1: {
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
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    height: 16,
    position: "absolute",
  },
  rectangleParent2: {
    top: 642,
  },
  groupParent: {
    top: 184,
    height: 832,
    width: 343,
    left: 16,
    position: "absolute",
  },
  frameIcon5: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text53: {
    color: Color.gray,
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
    justifyContent: "center",
    left: 0,
    flexDirection: "row",
    backgroundColor: Color.whait,
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
    left: "50%",
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    overflow: "hidden",
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
    top: 48,
    height: 24,
    position: "absolute",
    justifyContent: "center",
    left: "50%",
    color: Color.praimary,
    display: "flex",
    alignItems: "center",
    lineHeight: 30,
  },
  filterChild: {
    marginTop: -406,
    top: "50%",
    backgroundColor: Color.colorGray_400,
    left: "50%",
    marginLeft: -187.5,
    height: 812,
  },
  groupChild4: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.whait,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "6.4%",
    top: "6.92%",
    right: "88.27%",
    bottom: "87.32%",
    width: "5.33%",
    height: "5.76%",
    position: "absolute",
  },
  text58: {
    width: 32,
    color: Color.praimary,
  },
  frameIcon9: {
    width: 18,
    height: 18,
  },
  parent17: {
    top: 24,
    left: 293,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text59: {
    top: 74,
    left: 307,
    width: 44,
    color: Color.black,
    position: "absolute",
  },
  groupChild5: {
    top: 58,
    borderColor: Color.colorLightsteelblue_100,
    width: 376,
  },
  text60: {
    fontWeight: "600",
    left: "-1.8%",
    top: "16.67%",
    width: "79.28%",
    height: "66.67%",
    color: Color.praimary,
  },
  frameIcon10: {
    height: "83.33%",
    width: "18.02%",
    top: "8.33%",
    right: "-0.9%",
    bottom: "8.33%",
    left: "82.88%",
    overflow: "hidden",
    position: "absolute",
  },
  text61: {
    color: Color.black,
    fontWeight: "300",
  },
  filter2: {
    marginTop: 16,
  },
  filterParent: {
    top: 106,
    left: 240,
    position: "absolute",
  },
  rectangleParent3: {
    top: 465,
  },
  text64: {
    width: 291,
    color: Color.whait,
  },
  button: {
    top: 740,
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    left: 16,
    position: "absolute",
  },
  filter: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Filter1;
