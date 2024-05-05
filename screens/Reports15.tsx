import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Reports15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reports}>
      <View style={[styles.rectangleParent, styles.rectangleGroupPosition]}>
        <View style={styles.frameChild} />
        <View style={styles.parent}>
          <Text
            style={[styles.text, styles.textTypo2]}
          >{`بحث عن رقم الطلب , اسم المشروع , اسم المشرف... `}</Text>
          <Image
            style={[styles.fiRrZoomOutIcon, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/firrzoomout.png")}
          />
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo1]}>جميع التقارير</Text>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("FilterReports2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame24.png")}
          />
        </Pressable>
        <Text style={[styles.text2, styles.textTypo2]}>
          <Text style={styles.txt}>
            <Text style={styles.text3}>{`يتوفر  `}</Text>
            <Text style={styles.text4}>5</Text>
            <Text style={styles.text3}> تقارير للمراجعة</Text>
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("Reports4")}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-238632.png")}
        />
        <Pressable
          style={styles.arrow24}
          onPress={() => navigation.navigate("Reports4")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-4.png")}
          />
        </Pressable>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo2]}>
            <Text style={styles.txt}>
              <Text style={styles.text7}>{`اسم المشرف المسؤول   :      `}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>احمد العامري</Text>
                <Text style={styles.text10}>{` `}</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text11, styles.textLayout1]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text style={styles.text4}>اسم المشروع :</Text>
                <Text style={styles.text3}>{`      `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>جدة سوبر دوم</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text17, styles.textLayout]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text
                  style={styles.text4}
                >{`رقم الطلب                             :     `}</Text>
                <Text style={styles.text3}>{` `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>75621</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("Reports5")}
      >
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-238633.png")}
        />
        <Pressable
          style={styles.arrow24}
          onPress={() => navigation.navigate("Reports5")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-4.png")}
          />
        </Pressable>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo2]}>
            <Text style={styles.txt}>
              <Text style={styles.text7}>{`اسم المشرف المسؤول   :      `}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>عمر المحمدي</Text>
                <Text style={styles.text10}>{` `}</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text11, styles.textLayout1]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text style={styles.text4}>اسم المشروع :</Text>
                <Text style={styles.text3}>{`      `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>ممشى جدة</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text17, styles.textLayout]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text
                  style={styles.text4}
                >{`رقم الطلب                             :     `}</Text>
                <Text style={styles.text3}>{` `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>52815</Text>
              </Text>
            </Text>
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("Reports1")}
      >
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo2]}>
            <Text style={styles.txt}>
              <Text style={styles.text7}>{`اسم المشرف المسؤول   :      `}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>خالد الأحمدي</Text>
                <Text style={styles.text10}>{` `}</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text11, styles.textLayout1]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text style={styles.text4}>اسم المشروع :</Text>
                <Text style={styles.text3}>{`     `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}> نادي جدة لليخوت</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text17, styles.textLayout]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text
                  style={styles.text4}
                >{`رقم الطلب                             :     `}</Text>
                <Text style={styles.text3}>{` `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>52815</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-238632.png")}
        />
        <Pressable
          style={styles.arrow24}
          onPress={() => navigation.navigate("Reports1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-4.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("Reports2")}
      >
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <View style={styles.group}>
          <Text style={styles.textLayout1}>
            <Text style={styles.txt}>
              <Text style={styles.text7}>{`اسم المشرف المسؤول   :      `}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>عاصم المحمدي</Text>
                <Text style={styles.text10}>{` `}</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text11, styles.textLayout1]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text style={styles.text4}>اسم المشروع :</Text>
                <Text style={styles.text3}>{`      `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>ممشى جدة</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text17, styles.textLayout]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text
                  style={styles.text4}
                >{`رقم الطلب                             :     `}</Text>
                <Text style={styles.text3}>{` `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>85925</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-238633.png")}
        />
        <Pressable
          style={styles.arrow24}
          onPress={() => navigation.navigate("Reports2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-4.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("Reports3")}
      >
        <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
        <View style={[styles.groupView, styles.text79Layout]}>
          <Text style={[styles.text74, styles.textTypo2]}>
            <Text style={styles.txt}>
              <Text style={styles.text7}>{`اسم المشرف المسؤول   :      `}</Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>عبدالرحمن الزهراني</Text>
                <Text style={styles.text10}>{` `}</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text79, styles.text79Layout]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text style={styles.text4}>اسم المشروع :</Text>
                <Text style={styles.text3}>{`      `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>مهرجان البحر الأحمر</Text>
              </Text>
            </Text>
          </Text>
          <Text style={[styles.text85, styles.textPosition]}>
            <Text style={styles.txt}>
              <Text style={styles.text12}>
                <Text
                  style={styles.text4}
                >{`رقم الطلب                             :     `}</Text>
                <Text style={styles.text3}>{` `}</Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text9}>24595</Text>
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-2386391.png")}
        />
        <Pressable
          style={styles.arrow24}
          onPress={() => navigation.navigate("Reports3")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-4.png")}
          />
        </Pressable>
      </Pressable>
      <View style={styles.reportsChild} />
      <View style={[styles.rectangleParent3, styles.menuListLayout]}>
        <View style={[styles.groupChild6, styles.menuListLayout]} />
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
          style={[styles.arrow211, styles.textPosition]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text91, styles.textPosition]}>التقارير</Text>
      </View>
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.menuListLayout]}>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame89.png")}
            />
            <Text style={[styles.text92, styles.textTypo]}>التقارير</Text>
          </View>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/liuser6.png")}
            />
            <Text style={[styles.text93, styles.textTypo]}>حسابي</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={styles.container1}>
                <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame90.png")}
            />
            <Text style={[styles.text93, styles.textTypo]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame91.png")}
            />
            <Text style={[styles.text93, styles.textTypo]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleGroupPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    alignItems: "center",
  },
  frameLayout: {
    width: 16,
    height: 16,
  },
  textTypo1: {
    fontSize: FontSize.size_base,
    color: Color.praimary,
    fontWeight: "700",
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  groupChildShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  textLayout1: {
    width: 200,
    height: 16,
    display: "flex",
    textAlign: "right",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
  },
  textLayout: {
    width: 174,
    height: 16,
    display: "flex",
    textAlign: "right",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
  },
  text79Layout: {
    width: 204,
    position: "absolute",
  },
  textPosition: {
    top: 48,
    position: "absolute",
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  bottomNavPosition: {
    bottom: 0,
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
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderWidth: 0.5,
    height: 48,
    zIndex: 0,
    width: 343,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    shadowRadius: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  text: {
    width: 215,
    height: 24,
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  fiRrZoomOutIcon: {
    marginLeft: 8,
    overflow: "hidden",
    height: 16,
  },
  parent: {
    left: 88,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    top: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 113,
    justifyContent: "center",
    left: "50%",
  },
  text1: {
    top: 185,
    left: 196,
    width: 163,
    color: Color.praimary,
    fontWeight: "700",
    textAlign: "right",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    height: 16,
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
    width: 105,
    marginLeft: 222,
    fontWeight: "700",
    height: 16,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent: {
    top: 217,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    height: 89,
    width: 343,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  groupItem: {
    top: 8,
    left: 271,
    width: 64,
    height: 73,
    position: "absolute",
  },
  arrow24: {
    left: 8,
    top: 36,
    width: 18,
    height: 18,
    position: "absolute",
  },
  text7: {
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  text9: {
    fontFamily: FontFamily.dGBaysan,
  },
  text10: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text6: {
    width: 183,
    height: 16,
  },
  text12: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  text11: {
    marginTop: 8,
  },
  text17: {
    marginTop: 8,
  },
  group: {
    left: 59,
    alignItems: "flex-end",
    top: 12,
    position: "absolute",
  },
  rectangleGroup: {
    top: 572,
    height: 89,
    width: 343,
    left: "50%",
  },
  groupInner: {
    top: 0,
    height: 89,
    width: 343,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  rectangleContainer: {
    top: 677,
    height: 89,
    width: 343,
    left: "50%",
  },
  rectangleView: {
    top: 0,
    height: 89,
    width: 343,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  groupPressable: {
    top: 257,
    height: 89,
    width: 343,
    left: "50%",
  },
  groupChild2: {
    top: 0,
    height: 89,
    width: 343,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  rectangleParent1: {
    top: 362,
    height: 89,
    width: 343,
    left: "50%",
  },
  groupChild4: {
    top: 0,
    height: 89,
    width: 343,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
  },
  text74: {
    left: 1,
    width: 203,
    top: 0,
    height: 16,
    position: "absolute",
  },
  text79: {
    top: 24,
    left: 0,
    height: 16,
    display: "flex",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    alignItems: "center",
  },
  text85: {
    left: 30,
    width: 174,
    height: 16,
    display: "flex",
    textAlign: "right",
    lineHeight: 30,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
  },
  groupView: {
    left: 55,
    height: 64,
    top: 12,
  },
  rectangleParent2: {
    top: 467,
    height: 89,
    width: 343,
    left: "50%",
  },
  reportsChild: {
    top: 790,
    width: 335,
    height: 82,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild6: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowRadius: 20,
    elevation: 20,
    height: 88,
    marginLeft: -187.5,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.03)",
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
    top: 0,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  arrow211: {
    width: 24,
    left: 16,
    height: 24,
  },
  text91: {
    marginLeft: -74.5,
    textAlign: "center",
    width: 150,
    color: Color.praimary,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
  },
  rectangleParent3: {
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    height: 89,
  },
  frameIcon: {
    width: 24,
    overflow: "hidden",
    height: 24,
  },
  text92: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  text93: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu4: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container1: {
    backgroundColor: Color.praimary,
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    borderStyle: "solid",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    left: 0,
    alignItems: "flex-end",
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
  reports: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Reports15;
