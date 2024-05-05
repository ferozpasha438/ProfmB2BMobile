import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";

const CallUs3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.callUs, styles.iconLayout]}>
      <Image
        style={styles.map3Icon}
        resizeMode="cover"
        source={require("../assets/map-31.png")}
      />
      <View style={[styles.navBar, styles.navBarLayout]}>
        <View style={[styles.webViewbottom, styles.batteryIconPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <Text style={styles.text}>بعض المعلومات عننا</Text>
      <View style={[styles.rectangleParent, styles.batteryIconPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.iphoneXOrNewer, styles.batteryIconPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
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
          style={[styles.arrow21, styles.text1Position]}
          onPress={() => navigation.navigate("SideMenu5")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text1, styles.text1Position]}>من نحن</Text>
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
      <Image
        style={styles.callUsChild}
        resizeMode="cover"
        source={require("../assets/group-238649.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`تهدف برو اف ام إلى تلبية الاحتياجات االادارية والتشغيلية للقطاعات العامة والخاصة بالمملكة، ومواكبة النمو والتميز في تقديم الخدمة للعملاء، واستمرار تطوير الخدمات اللوجيستية ، ورعاية كوادرها البشريّة ،

انطلاقاً من دورنا الوطنيّ في قطاع الخدمات اللوجيستية، وتعزيزاً لمكانتنا الرائدة، واكبنا بخطى تطويريّة واثقة مسيرةَ المملكة في برنامج التحول الوطني 2020، فوضعنا برنامجنا الداخلي في التحديث الشامل والتوسّع الاستراتيجي، ورسمنا أهداف مستقبليّة لمواكبة رؤية المملكة 2030، وتحقيق تطلعاتها على المستويات كافة.

ونفخرُ بكوادرنا الوطنيّة ذات الكفاءة المعرفيّة والإداريّة والاستشاريّة العالية التي تنهضُ بمهمة التحول الاستراتيجي، وتنفيذ أهدافها في التوسّع والنّمو من خلال تطوير الهيكل الإداري، وتحديث البنية التحتية وتطويرها .`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navBarLayout: {
    height: 34,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text1Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  groupItemPosition: {
    marginLeft: -80,
    height: 48,
    width: 160,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 343,
    width: 343,
    position: "absolute",
  },
  textTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    left: "50%",
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
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    position: "absolute",
  },
  text: {
    marginLeft: 6.5,
    top: 398,
    lineHeight: 16,
    width: 165,
    height: 24,
    display: "flex",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 110,
    backgroundColor: Color.whait,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
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
    left: "50%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    left: 16,
    width: 24,
  },
  text1: {
    marginLeft: -70.5,
    lineHeight: 30,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
    width: 141,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    left: "50%",
    color: Color.praimary,
    fontSize: FontSize.size_base,
    top: 48,
  },
  groupItem: {
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
  rectangleParent: {
    height: 134,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  callUsChild: {
    marginLeft: -99.5,
    top: 166,
    width: 200,
    height: 200,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    left: 0,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    top: 0,
  },
  text2: {
    marginLeft: -155.5,
    top: 16,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    color: Color.colorLightsteelblue_100,
    width: 311,
    height: 311,
    textAlign: "right",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rectangleGroup: {
    top: 438,
    left: 16,
  },
  callUs: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default CallUs3;
