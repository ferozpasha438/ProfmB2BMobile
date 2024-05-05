import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ChangePassword2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.changePassword}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-31.png")}
      />
      <View style={[styles.navBar, styles.tapPosition1]}>
        <View style={[styles.webViewbottom, styles.tapPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.changePasswordChild, styles.eyeIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-2-11.png")}
      />
      <Text style={[styles.text, styles.textLayout2]}>تغيير كلمة المرور</Text>
      <Text style={[styles.text1, styles.textClr]}>
        الرجاء ادخال كلمة المرور القديمة ثم أدخا كلمة المرور الجديدة
      </Text>
      <View style={styles.inputFild}>
        <Text style={styles.text2}>كلمة المرور</Text>
        <Image
          style={[styles.inputFildChild, styles.eyeIconTransform]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
        <Image
          style={[styles.eyeSlashIcon, styles.eyeSlashIconPosition]}
          resizeMode="cover"
          source={require("../assets/eyeslash1.png")}
        />
        <View style={[styles.ellipseParent, styles.eyeSlashIconPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1731.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-1741.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-1751.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-1761.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-1771.png")}
          />
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-1781.png")}
          />
        </View>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={styles.tapChild} />
        <View style={[styles.iphoneXOrNewer, styles.tapPosition]}>
          <Image
            style={[styles.notchIcon, styles.notchIconLayout]}
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
              style={styles.recordingIndicatorIcon}
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
        <Image
          style={styles.arrow21}
          resizeMode="cover"
          source={require("../assets/arrow-2-1.png")}
        />
        <Text style={[styles.text3, styles.textFlexBox]}>تعديل الطلب</Text>
      </View>
      <View style={styles.button}>
        <Text style={[styles.text4, styles.text4Typo]}>تغيير كلمة المرور</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={[styles.text5, styles.textTypo1]}>
            كلمة المرور القديمة
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={[styles.wrapper, styles.textFlexBox]}>
                <Text style={[styles.text6, styles.textTypo]}>
                  من فضلك أدخل كلمة المرور القديمة
                </Text>
              </View>
              <Image
                style={[styles.eyeSlashIcon1, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text7, styles.textTypo1]}>
            كلمة المرور الجديدة
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={[styles.wrapper, styles.textFlexBox]}>
                <Text style={[styles.text8, styles.textTypo]}>
                  من فضلك أدخل كلمة المرور الجديدة
                </Text>
              </View>
              <Image
                style={[styles.eyeSlashIcon2, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash4.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.groupSpaceBlock}>
          <Text style={[styles.text9, styles.textTypo1]}>
            {" "}
            تأكيد كلمة المرور الجديدة
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChildShadowBox} />
            <View style={styles.framePosition}>
              <View style={[styles.wrapper, styles.textFlexBox]}>
                <Text style={[styles.text10, styles.textTypo]}>
                  من فضلك أدخل كلمة المرور مرة اخرى
                </Text>
              </View>
              <Image
                style={[styles.eyeSlashIcon3, styles.eyeIconTransform]}
                resizeMode="cover"
                source={require("../assets/eyeslash4.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.text11, styles.textTypo1]}>الحد الأدنى 8 احرف</Text>
      <Text style={[styles.text12, styles.textTypo1]}>
        حرف واحد كبير وصغير على الأقل
      </Text>
      <View style={[styles.changePasswordItem, styles.eyeSlashIconPosition]} />
      <View style={styles.faceId}>
        <Image
          style={[styles.httpsapplottiefilescomanIcon, styles.tapPosition]}
          resizeMode="cover"
          source={require("../assets/httpsapplottiefilescomanimationda65a2f79fe04f8cb69c27e6819678af.png")}
        />
        <View style={styles.wrapper1}>
          <Text
            style={[styles.text13, styles.textFlexBox]}
          >{`تم تغيير كلمة المرور بنجاح `}</Text>
        </View>
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("Profile2")}
        >
          <View style={styles.buttonChild} />
          <Text style={[styles.logIn, styles.text4Typo]}>موافق</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tapPosition1: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  tapPosition: {
    top: 0,
    position: "absolute",
  },
  eyeIconLayout: {
    height: 20,
    width: 20,
  },
  textLayout2: {
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    textAlign: "right",
    alignItems: "center",
    left: "50%",
  },
  textClr: {
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eyeIconTransform: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  eyeSlashIconPosition: {
    top: "50%",
    position: "absolute",
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text4Typo: {
    color: Color.whait,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo1: {
    height: 16,
    fontWeight: "300",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  framePosition: {
    zIndex: 1,
    width: 311,
    top: 18,
    flexDirection: "row",
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  map3Icon: {
    top: -229,
    left: 90,
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
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
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
    top: 0,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  changePasswordChild: {
    top: 47,
    left: 16,
    width: 20,
    position: "absolute",
  },
  text: {
    marginLeft: -3.5,
    top: 116,
    width: 175,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  text1: {
    marginLeft: -94.5,
    top: 156,
    width: 266,
    height: 24,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    textAlign: "right",
    alignItems: "center",
    left: "50%",
  },
  text2: {
    top: "-1.72%",
    left: "25.36%",
    letterSpacing: 0.5,
    fontFamily: FontFamily.dubai,
    color: Color.primary3,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    textAlign: "right",
    position: "absolute",
  },
  inputFildChild: {
    height: "82.76%",
    top: "17.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    opacity: 0.5,
    width: "100%",
  },
  eyeSlashIcon: {
    marginTop: -4,
    left: 309,
    width: 18,
    height: 18,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChild: {
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildLayout: {
    marginLeft: 4,
    height: 7,
    width: 7,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  ellipseParent: {
    marginTop: 1,
    left: 17,
    flexDirection: "row",
  },
  inputFild: {
    height: "7.14%",
    width: "91.47%",
    top: "75.74%",
    right: "-87.2%",
    bottom: "17.12%",
    left: "95.73%",
    display: "none",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  tapChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    display: "none",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
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
    display: "none",
    position: "absolute",
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
    top: 48,
    width: 24,
    height: 24,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    marginLeft: -74.5,
    width: 150,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    lineHeight: 30,
    top: 48,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  tap: {
    height: 89,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  text4: {
    width: 291,
  },
  button: {
    top: 714,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    width: 343,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    marginLeft: -171.5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  text5: {
    width: 120,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    width: 343,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text6: {
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
  },
  wrapper: {
    flexDirection: "row",
  },
  eyeSlashIcon1: {
    height: 20,
    width: 20,
  },
  frameGroup: {
    justifyContent: "space-between",
  },
  rectangleParent: {
    marginTop: 10,
    width: 343,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  parent: {
    width: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text7: {
    width: 120,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text8: {
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
  },
  eyeSlashIcon2: {
    height: 20,
    width: 20,
  },
  groupSpaceBlock: {
    marginTop: 16,
    width: 343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text9: {
    width: 152,
    height: 16,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text10: {
    textAlign: "left",
  },
  eyeSlashIcon3: {
    marginLeft: 106,
    height: 20,
    width: 20,
  },
  frameParent: {
    top: 212,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  text11: {
    top: 506,
    left: 229,
    width: 130,
    height: 16,
    fontWeight: "300",
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text12: {
    top: 527,
    left: 149,
    width: 210,
    height: 16,
    fontWeight: "300",
    color: Color.ternary,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  changePasswordItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    height: 812,
  },
  httpsapplottiefilescomanIcon: {
    left: 71,
    width: 200,
    height: 200,
  },
  text13: {
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    height: 30,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.size_2xl,
  },
  wrapper1: {
    marginLeft: -127.5,
    top: 186,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn: {
    height: "50%",
    marginLeft: -143.5,
    top: "25%",
    width: 288,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 30,
    color: Color.whait,
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  button1: {
    marginLeft: -150.5,
    top: 264,
    width: 301,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  faceId: {
    marginTop: -162,
    borderRadius: Border.br_mini,
    height: 333,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 343,
    marginLeft: -171.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  changePassword: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ChangePassword2;
