import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FilterReports2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.filterReports}>
      <View style={styles.filterProjectNameParent}>
        <View style={styles.serviceTypeLayout}>
          <Text style={styles.text}>اسم المشروع</Text>
          <Image
            style={[styles.filterProjectNameChild, styles.notchIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1516.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo2]}>نوع الصيانة</Text>
          <View style={[styles.maintenanceType, styles.maintenanceLayout]}>
            <Text style={[styles.text2, styles.textTypo1]}>صيانة روتينية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={[styles.maintenanceType1, styles.maintenanceLayout]}>
            <Text style={[styles.text2, styles.textTypo1]}>صيانة إصلاحية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={[styles.maintenanceType2, styles.maintenanceLayout]}>
            <Text style={[styles.text4, styles.textTypo1]}>صيانة وقائية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
        </View>
        <View style={[styles.serviceType, styles.serviceTypeLayout]}>
          <Text style={styles.text}>نوع الخدمة</Text>
          <Image
            style={[styles.filterProjectNameChild, styles.notchIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1535.png")}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo2]}>التاريخ</Text>
          <View style={styles.frameParent}>
            <View style={styles.dateClassParent}>
              <View style={styles.dateLayout}>
                <Text style={[styles.text7, styles.textTypo1]}>سنوي</Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame88.png")}
                />
              </View>
              <View style={[styles.dateClass1, styles.dateLayout]}>
                <Text style={[styles.text7, styles.textTypo1]}>شهري</Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame88.png")}
                />
              </View>
            </View>
            <View style={styles.groupParent}>
              <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <View style={[styles.groupChild, styles.groupShadowBox]} />
                <Pressable
                  style={styles.container}
                  onPress={() => navigation.navigate("DateReports")}
                >
                  <Text style={styles.text9}>{`01 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group18.png")}
                  />
                </Pressable>
              </View>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={[styles.groupItem, styles.groupShadowBox]} />
                <Pressable
                  style={styles.container}
                  onPress={() => navigation.navigate("DateReports")}
                >
                  <Text style={styles.text9}>{`30 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group18.png")}
                  />
                </Pressable>
              </View>
              <Text style={styles.text11}>إلى</Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo2]}>الحالة</Text>
          <View style={styles.filterParent}>
            <View style={styles.filterLayout}>
              <Text style={styles.text13}>جميع الطلبات</Text>
              <Image
                style={[styles.frameIcon5, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.filter1, styles.filterLayout]}>
              <Text style={styles.text13}>طلب مكتمل</Text>
              <Image
                style={[styles.frameIcon5, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.filter1, styles.filterLayout]}>
              <Text style={styles.text13}>طلب غير مكتمل</Text>
              <Image
                style={[styles.frameIcon5, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
            <View style={[styles.filter1, styles.filterLayout]}>
              <Text style={styles.text13}>طلب قيد التنفيذ</Text>
              <Image
                style={[styles.frameIcon5, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame22.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.serviceType, styles.serviceTypeLayout]}>
          <Text style={styles.text}>فريق العمل</Text>
          <Image
            style={[styles.filterProjectNameChild, styles.notchIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1536.png")}
          />
        </View>
      </View>
      <View style={styles.filterReportsChild} />
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.text18, styles.textTypo]}>تطبيق الفلتر</Text>
      </View>
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.navBarPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.navBarPosition]}>
        <View style={[styles.groupInner, styles.navBarPosition]} />
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
          style={[styles.arrow21, styles.text19Position]}
          onPress={() => navigation.navigate("Reports15")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text19, styles.text19Position]}>فلتر</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo2: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  maintenanceLayout: {
    height: 24,
    width: 100,
    top: 40,
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameIconPosition: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  serviceTypeLayout: {
    height: 82,
    width: 343,
  },
  dateLayout: {
    width: 58,
    height: 24,
  },
  rectangleLayout: {
    width: 120,
    height: 32,
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
  },
  filterLayout: {
    width: 111,
    height: 24,
  },
  buttonFlexBox: {
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  navBarPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text19Position: {
    top: 48,
    height: 24,
    position: "absolute",
  },
  text: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    left: "47.81%",
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.black,
    position: "absolute",
  },
  filterProjectNameChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text1: {
    left: 263,
    width: 80,
    color: Color.praimary,
    top: 0,
    position: "absolute",
  },
  text2: {
    width: "75%",
    left: "-1%",
  },
  frameIcon: {
    width: "20%",
    left: "80%",
    right: "0%",
  },
  maintenanceType: {
    left: 238,
  },
  maintenanceType1: {
    left: 119,
  },
  text4: {
    width: "70%",
    left: "4%",
  },
  maintenanceType2: {
    left: 0,
  },
  parent: {
    height: 64,
    marginTop: 24,
    width: 343,
  },
  serviceType: {
    marginTop: 24,
  },
  text6: {
    width: 70,
    color: Color.black,
    height: 16,
  },
  text7: {
    width: "55.17%",
    left: "0%",
  },
  frameIcon3: {
    width: "34.48%",
    left: "65.52%",
    right: "0%",
  },
  dateClass1: {
    marginLeft: 40,
  },
  dateClassParent: {
    flexDirection: "row",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    width: 120,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text9: {
    color: Color.gray,
    height: 14,
    width: 58,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  groupIconLayout: {
    marginLeft: 8,
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  container: {
    left: 20,
    top: 9,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    left: 223,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    width: 120,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
  },
  text11: {
    left: 162,
    color: Color.colorLightsteelblue_100,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 9,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    position: "absolute",
  },
  groupParent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 32,
    marginTop: 16,
    width: 343,
  },
  frameParent: {
    marginTop: 16,
    alignItems: "center",
  },
  group: {
    marginTop: 24,
    alignItems: "flex-end",
  },
  text13: {
    width: "79.28%",
    left: "-1.8%",
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    top: "16.67%",
    height: "66.67%",
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameIcon5: {
    width: "18.02%",
    right: "-0.9%",
    left: "82.88%",
  },
  filter1: {
    marginTop: 16,
  },
  filterParent: {
    marginTop: 16,
  },
  filterProjectNameParent: {
    top: 113,
    height: 699,
    alignItems: "flex-end",
    left: 16,
    position: "absolute",
  },
  filterReportsChild: {
    top: 959,
    width: 344,
    height: 68,
    overflow: "hidden",
    left: 16,
    position: "absolute",
  },
  text18: {
    color: Color.whait,
    width: 291,
  },
  button: {
    marginLeft: -171.5,
    top: 871,
    backgroundColor: Color.praimary,
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: 343,
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
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 0,
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  groupInner: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
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
    left: "50%",
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    left: 16,
  },
  text19: {
    marginLeft: -74.5,
    lineHeight: 30,
    width: 150,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    color: Color.praimary,
    display: "flex",
  },
  rectangleContainer: {
    height: 89,
    top: 0,
  },
  filterReports: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default FilterReports2;
