import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Profile2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View
        style={[styles.cleaningWindowByUsingSpeciParent, styles.wrapperLayout]}
      >
        <Image
          style={[styles.cleaningWindowByUsingSpeciIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/cleaningwindowbyusingspecialliquidrepairmanisworkingindoorsmodernroom-2.png")}
        />
        <LinearGradient
          style={[styles.wrapper, styles.wrapperLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={[styles.pressable, styles.iconLayout1]}
            onPress={() => navigation.navigate("MOREInformaion13")}
          />
        </LinearGradient>
        <View style={[styles.iphoneXOrNewer, styles.iconPosition1]}>
          <View style={[styles.iphoneXOrNewer1, styles.iconLayout1]}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/battery1.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi8.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                resizeMode="cover"
                source={require("../assets/mobile-signal1.png")}
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
              source={require("../assets/left-side8.png")}
            />
          </View>
        </View>
        <View style={[styles.container, styles.linePosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>حسابي التعريفي</Text>
        </View>
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/3-1-41.png")}
          />
        </Pressable>
      </View>
      <View style={styles.profileChild} />
      <View style={styles.frameParent}>
        <View style={styles.wrapperGroup238624Parent}>
          <View style={[styles.wrapperGroup238624, styles.textFlexBox]}>
            <Image
              style={[styles.wrapperGroup238624Child, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/group-2386241.png")}
            />
          </View>
          <View style={styles.frameFlexBox}>
            <Text style={[styles.text1, styles.textClr]}>ارامكو السعودية</Text>
          </View>
        </View>
        <View
          style={[styles.aramcoSaudiArabiagmailcomWrapper, styles.frameFlexBox]}
        >
          <Text style={styles.aramcoSaudiArabiagmailcom}>
            Aramco Saudi Arabia@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.profileItem} />
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.menuListFlexBox]}>
          <View style={[styles.menu2, styles.menuFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame92.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>التقارير</Text>
          </View>
          <View style={[styles.menu4, styles.menuFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/liuser7.png")}
            />
            <Text style={[styles.text3, styles.textTypo1]}>حسابي</Text>
          </View>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
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
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame90.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame91.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListBg]}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.menuListFlexBox]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <Text style={[styles.text6, styles.textTypo]}>
              تعديل معلومات الحساب
            </Text>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/encapsulated-group3.png")}
          />
        </View>
        <Pressable
          style={[styles.parent, styles.groupFlexBox]}
          onPress={() => navigation.navigate("ChangePassword3")}
        >
          <Text style={[styles.text6, styles.textTypo]}>تغيير كلمة المرور</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/encapsulated-group4.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.group, styles.groupFlexBox]}
          onPress={() => navigation.navigate("LogOutFromProfile")}
        >
          <Text style={[styles.text8, styles.textTypo]}>تسجيل الخروج</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238627.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.group1}
        onPress={() => navigation.navigate("MOREInformaion13")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 404,
    width: 375,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  linePosition: {
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textClr: {
    color: Color.praimary,
    fontWeight: "700",
  },
  frameFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomNavPosition: {
    bottom: 0,
    position: "absolute",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  menuFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  textTypo1: {
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menuListBg: {
    backgroundColor: Color.whait,
    width: 375,
    left: 0,
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  groupFlexBox: {
    marginTop: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cleaningWindowByUsingSpeciIcon: {
    height: 391,
    width: 375,
    left: 0,
  },
  pressable: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    marginLeft: -187.5,
  },
  wrapper: {
    left: "50%",
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
    width: 24,
    height: 11,
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
  iphoneXOrNewer1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
  },
  text: {
    lineHeight: 30,
    color: Color.whait,
    height: 24,
    width: 135,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    display: "flex",
  },
  container: {
    top: 48,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pressable1: {
    left: 38,
    top: 139,
    width: 300,
    height: 126,
    position: "absolute",
  },
  cleaningWindowByUsingSpeciParent: {
    left: 0,
  },
  profileChild: {
    top: 359,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 453,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  wrapperGroup238624Child: {
    objectFit: "contain",
    transform: [
      {
        scale: 1.267,
      },
    ],
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperGroup238624: {
    width: 90,
    height: 90,
  },
  text1: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    color: Color.praimary,
  },
  wrapperGroup238624Parent: {
    justifyContent: "center",
    alignItems: "center",
  },
  aramcoSaudiArabiagmailcom: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontWeight: "300",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  aramcoSaudiArabiagmailcomWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightsteelblue_200,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
  },
  frameParent: {
    top: 315,
    left: 108,
    alignItems: "center",
    position: "absolute",
  },
  profileItem: {
    top: 504,
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text2: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    marginTop: 6,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  menu2: {
    alignItems: "center",
  },
  text3: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu4: {
    marginLeft: 16,
    alignItems: "center",
  },
  container1: {
    backgroundColor: Color.praimary,
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
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    backgroundColor: Color.whait,
    width: 375,
    left: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
  line: {
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    height: 5,
    borderRadius: Border.br_81xl,
    width: 135,
  },
  iphoneIndicator: {
    height: 30,
    bottom: 0,
    position: "absolute",
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    overflow: "hidden",
  },
  text6: {
    color: Color.black,
  },
  frameView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 30,
    height: 30,
    marginLeft: 16,
  },
  frameContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  parent: {
    justifyContent: "flex-end",
  },
  text8: {
    color: Color.colorRed_100,
  },
  group: {
    justifyContent: "center",
  },
  frameGroup: {
    top: 536,
    left: 164,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  group1: {
    left: "90.4%",
    top: "46.67%",
    right: "5.33%",
    bottom: "52.22%",
    width: "4.27%",
    height: "1.11%",
    position: "absolute",
  },
  profile: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile2;
