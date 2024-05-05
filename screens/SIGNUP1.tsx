import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SIGNUP1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo5]}>{`رقم الجوال `}</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text style={styles.textTypo4}>
                من فضلك أدخل رقم الجوال المسجل
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text2, styles.textTypo5]}>
            البريد الإلكتروني المسجل
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.wrapper}>
              <Text style={styles.textTypo4}>Example@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text3, styles.textTypo5]}>كلمة المرور</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>من فضلك أدخل كلمة المرور</Text>
              </View>
              <Image
                style={styles.eyeIconLayout}
                resizeMode="cover"
                source={require("../assets/eyeslash5.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo2}> تأكيد كلمة المرور</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameContainer, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>
                  من فضلك أدخل كلمة المرور مرة اخرى
                </Text>
              </View>
              <Image
                style={[styles.eyeSlashIcon1, styles.eyeIconLayout]}
                resizeMode="cover"
                source={require("../assets/eyeslash5.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo2}>اسم العميل</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>
                  من فضلك أدخل أسمك باللغة العربية
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>اسم العميل المختصر</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>
                  من فضلك أدخل أسمك باللغة العربية
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>الدولة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>من فضلك أدخل أسم الدولة</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>المدينة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo3}>من فضلك أدخل أسم المدينة</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>منطقة المدينة</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo4}>مثل المنطقة الغربية ,....</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.textTypo1}>العنوان</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo4}>
                  من فضلك أدخل العنوان بالتفصيل
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text19, styles.textTypo5]}>
            الشخص الذي يمكن الاتصال به
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameWrapper, styles.framePosition]}>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo4}>من فضلك أدخل رقم الجوال</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonSpaceBlock]}>
        <Text style={[styles.text21, styles.textTypo]}>حفظ</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.buttonSpaceBlock]}
        onPress={() => navigation.navigate("MOREInformaion18")}
      >
        <Text style={[styles.text22, styles.textTypo]}>
          تسجيل المزيد من المعلومات
        </Text>
      </Pressable>
      <View style={[styles.signUpChild, styles.signUpChildPosition]} />
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
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
        <View style={[styles.arrow21Parent, styles.frameFlexBox]}>
          <Pressable
            style={styles.arrow21}
            onPress={() => navigation.navigate("Login3")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={styles.text23}>تسجيل مستخدم جديد</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <View style={[styles.webViewbottom, styles.groupPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo5: {
    height: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
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
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  eyeIconLayout: {
    height: 20,
    width: 20,
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    marginLeft: -171.5,
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    borderRadius: Border.br_3xs,
    width: 343,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    width: 291,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  signUpChildPosition: {
    left: 16,
    position: "absolute",
  },
  groupPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  groupItemPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  text: {
    width: 64,
    lineHeight: 30,
    height: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
    width: 343,
  },
  textTypo4: {
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
    left: 16,
    top: 21,
    alignItems: "center",
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
    width: 147,
    lineHeight: 30,
    height: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  group: {
    marginTop: 16,
    width: 343,
  },
  text3: {
    width: 77,
    height: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  textTypo3: {
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
  frameGroup: {
    justifyContent: "space-between",
    top: 18,
    width: 311,
  },
  textTypo2: {
    width: 104,
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
  eyeSlashIcon1: {
    marginLeft: 106,
  },
  frameContainer: {
    top: 18,
    width: 311,
  },
  frameWrapper: {
    width: 311,
    top: 21,
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
  text19: {
    width: 179,
    height: 16,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
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
    left: "50%",
    position: "absolute",
  },
  text21: {
    color: Color.whait,
  },
  button: {
    top: 1260,
    backgroundColor: Color.praimary,
  },
  text22: {
    color: Color.praimary,
    width: 291,
    lineHeight: 30,
  },
  button1: {
    top: 1332,
    borderColor: Color.praimary,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    marginLeft: -171.5,
  },
  signUpChild: {
    top: 1410,
    overflow: "hidden",
    height: 56,
    left: 16,
    width: 343,
  },
  groupChild: {
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
    left: "50%",
    position: "absolute",
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
  text23: {
    width: 152,
    marginLeft: 72,
    height: 24,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  arrow21Parent: {
    top: 48,
    left: 16,
    position: "absolute",
  },
  groupItem: {
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
  groupParent: {
    marginLeft: -79.5,
    top: 86,
    height: 48,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  groupView: {
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
  signUp: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default SIGNUP1;
