import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MOREInformaion18 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <View style={styles.moreInformaionChild} />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo4]}>
            الشخص المسؤول عن العقد
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text style={styles.textTypo3}>
                من فضلك أدخل الأسم باللغة العربية
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text2, styles.textTypo4]}>قيمة الضريبة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text style={styles.textTypo3}>
                من فضلك أدخل قيمة الضريبة الرسمية
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text4, styles.textTypo4]}>رقم جوال بديل</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text style={styles.textTypo2}>من فضلك أدخل رقم الجوال</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text6, styles.textTypo4]}>
            البريد الإلكتروني البديل
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text
                style={styles.textTypo2}
              >{`من فضلك أدخل البريد الإلكتروني `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text8, styles.textTypo4]}>{`عنوان بديل `}</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>
                  من فضلك أدخل العنوان بالتفصيل
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={styles.textTypo1}>جهة الاتصال البديلة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>من فضلك أدخل رقم الجوال</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={styles.textTypo1}>السجل التجاري</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>
                  من فضلك أدخل رقم السجل التجاري
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.typeOfBusiness2, styles.groupSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/type-of-business-2.png")}
        />
        <View style={styles.groupSpaceBlock}>
          <Text style={styles.textTypo1}>الموظفين</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>من فضلك أدخل عدد الموظفين</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={styles.textTypo1}>عنوان الشركة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>
                  اضغط لتحديد الموقع من الخريطة
                </Text>
              </View>
              <Image
                style={styles.frameIconLayout}
                resizeMode="cover"
                source={require("../assets/svgexport17-10-11.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={styles.textTypo1}>شعار الشركة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={[styles.wrapper2, styles.buttonFlexBox]}>
                <Text style={styles.textTypo2}>اضغط لاختيار صورة</Text>
              </View>
              <Image
                style={styles.frameIconLayout}
                resizeMode="cover"
                source={require("../assets/frame75.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("POPUPNEWACCONET")}
      >
        <Text style={[styles.text20, styles.textTypo]}>إنشاء حساب</Text>
      </Pressable>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <View style={[styles.iphoneXOrNewer, styles.frameParentPosition]}>
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
        <View style={[styles.arrow21Parent, styles.buttonFlexBox]}>
          <Pressable
            style={styles.arrow21}
            onPress={() => navigation.navigate("SIGNUP1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.text21, styles.textTypo]}>
            المزيد من المعلومات
          </Text>
        </View>
        <View style={styles.logo}>
          <View style={styles.logoInnerPosition}>
            <View style={[styles.groupChild, styles.logoInnerPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.tapPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo4: {
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    display: "flex",
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  framePosition: {
    width: 311,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupSpaceBlock: {
    marginTop: 16,
    width: 343,
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  logoInnerPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1320,
    overflow: "hidden",
    height: 56,
    width: 343,
    left: 16,
    position: "absolute",
  },
  text: {
    width: 169,
    lineHeight: 30,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    height: 56,
    width: 343,
  },
  textTypo3: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  wrapper: {
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "row",
    top: 21,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  parent: {
    width: 343,
  },
  text2: {
    width: 94,
    lineHeight: 30,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  text4: {
    width: 108,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  textTypo2: {
    textAlign: "left",
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text6: {
    width: 133,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  text8: {
    width: 104,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  wrapper2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  frameWrapper: {
    top: 21,
    width: 311,
  },
  textTypo1: {
    width: 125,
    height: 16,
    display: "flex",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  typeOfBusiness2: {
    height: 82,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameIconLayout: {
    height: 20,
    width: 20,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  frameGroup: {
    top: 18,
    justifyContent: "space-between",
  },
  frameParent: {
    marginLeft: 171.5,
    top: 158,
    height: 654,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
  },
  text20: {
    color: Color.whait,
    width: 291,
  },
  button: {
    marginLeft: -171.5,
    top: 1260,
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    left: "50%",
    height: 56,
    width: 343,
    position: "absolute",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 375,
    marginLeft: -187.5,
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
    top: 0,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    height: 24,
    width: 24,
  },
  text21: {
    width: 150,
    marginLeft: 73,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    lineHeight: 30,
  },
  arrow21Parent: {
    top: 48,
    flexDirection: "row",
    justifyContent: "center",
    left: 16,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    shadowRadius: 10,
    marginLeft: -80,
  },
  icon1: {
    top: 3,
    left: 30,
    width: 100,
    height: 42,
    position: "absolute",
  },
  logo: {
    marginLeft: -79.5,
    top: 86,
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  tap: {
    height: 134,
    top: 0,
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
    backgroundColor: Color.colorGray_100,
  },
  moreInformaion: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default MOREInformaion18;
