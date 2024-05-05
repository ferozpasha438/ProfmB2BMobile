import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CallUs2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.callUs, styles.iconLayout]}>
      <Image
        style={[styles.map3Icon, styles.map3IconLayout]}
        resizeMode="cover"
        source={require("../assets/map-31.png")}
      />
      <View style={[styles.navBar, styles.groupPosition]}>
        <View style={[styles.webViewbottom, styles.groupPosition]}>
          <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo2]}>هل تحتاج إلى مساعدة ؟</Text>
      <Text
        style={styles.text1}
      >{`خبرائنا مستعدون دائماً  لتقديم المساعدة في اي وقت `}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.text2, styles.textTypo1]}> تواصل معنا على :</Text>
        <Text
          style={[styles.text3, styles.textTypo1]}
        >{`او أرسل استفسارك على : `}</Text>
        <View style={styles.infoprofmcoParent}>
          <Text style={[styles.infoprofmco, styles.textTypo]}>
            Info@profm.co
          </Text>
          <Image
            style={[styles.svgexport17171, styles.map3IconLayout]}
            resizeMode="cover"
            source={require("../assets/svgexport17-17-1.png")}
          />
        </View>
        <View style={styles.groupItem} />
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Text style={[styles.text4, styles.textTypo]}>966 12 7669965</Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame79.png")}
            />
          </View>
          <View style={[styles.group, styles.groupSpaceBlock]}>
            <Text style={[styles.text4, styles.textTypo]}>966 057818871</Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame79.png")}
            />
          </View>
          <View style={[styles.wwwprofmcomsaParent, styles.groupSpaceBlock]}>
            <Text style={[styles.wwwprofmcomsa, styles.textTypo]}>
              www.profm.com.sa
            </Text>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/svgexport17-18-1.png")}
            />
          </View>
          <View style={[styles.container, styles.text8FlexBox]}>
            <Text style={[styles.text6, styles.textTypo]}>920002668</Text>
            <Text style={styles.text7}>الرقم الموحد :</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <View style={[styles.iphoneXOrNewer, styles.callUsChildPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.arrow21Layout]}
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
          style={[styles.arrow21, styles.arrow21Layout]}
          onPress={() => navigation.navigate("SideMenu5")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text8, styles.text8FlexBox]}>تواصل معنا</Text>
        <View style={styles.groupParent}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangleView, styles.rectanglePosition]} />
          </View>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.callUsChild, styles.callUsChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-2386481.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  map3IconLayout: {
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  groupPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textTypo2: {
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 260,
    width: 343,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textTypo1: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    height: 16,
    display: "flex",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    alignItems: "center",
  },
  groupSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  text8FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  callUsChildPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  rectanglePosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  map3Icon: {
    top: -229,
    left: 90,
    position: "absolute",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    top: 0,
    height: 34,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  text: {
    marginLeft: 6.5,
    top: 398,
    width: 165,
    height: 24,
    textAlign: "right",
    lineHeight: 16,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  text1: {
    marginLeft: -109.5,
    top: 430,
    color: Color.ternary,
    width: 281,
    height: 16,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
    left: 0,
    height: 260,
    width: 343,
  },
  text2: {
    marginLeft: 42.5,
    top: 16,
    width: 121,
  },
  text3: {
    marginLeft: 8.5,
    top: 196,
    width: 155,
  },
  infoprofmco: {
    width: 94,
    height: 16,
  },
  svgexport17171: {
    marginLeft: 8,
  },
  infoprofmcoParent: {
    top: 228,
    left: 218,
    flexDirection: "row",
    position: "absolute",
  },
  groupItem: {
    top: 180,
    borderStyle: "solid",
    borderColor: Color.color2,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    opacity: 0.5,
    left: 0,
    position: "absolute",
  },
  text4: {
    width: 95,
    height: 16,
  },
  frameIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
    overflow: "hidden",
  },
  parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  group: {
    alignItems: "center",
  },
  wwwprofmcomsa: {
    width: 104,
    height: 16,
  },
  wwwprofmcomsaParent: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text6: {
    width: 69,
    height: 10,
  },
  text7: {
    marginLeft: 8,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 16,
  },
  container: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameParent: {
    left: 189,
    alignItems: "flex-end",
    top: 48,
    position: "absolute",
  },
  rectangleParent: {
    top: 478,
    left: 16,
    position: "absolute",
  },
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
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
    top: 0,
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
  },
  arrow21: {
    top: 48,
    left: 16,
    height: 24,
  },
  text8: {
    marginLeft: -70.5,
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "center",
    width: 141,
    top: 48,
    height: 24,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
  },
  rectangleView: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
  rectangleGroup: {
    height: 134,
    top: 0,
    position: "absolute",
  },
  callUsChild: {
    marginLeft: -99.5,
    top: 166,
    width: 200,
    height: 200,
  },
  callUs: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default CallUs2;
