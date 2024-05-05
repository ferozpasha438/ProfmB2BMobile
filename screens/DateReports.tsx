import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DateReports = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.dateReports}>
      <View style={styles.filterProjectNameParent}>
        <View style={styles.serviceTypeLayout}>
          <Text style={styles.text}>اسم المشروع</Text>
          <Image
            style={[styles.filterProjectNameChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1516.png")}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo3]}>نوع الصيانة</Text>
          <View style={[styles.maintenanceType, styles.maintenanceLayout]}>
            <Text style={[styles.text2, styles.textTypo2]}>صيانة روتينية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={[styles.maintenanceType1, styles.maintenanceLayout]}>
            <Text style={[styles.text2, styles.textTypo2]}>صيانة إصلاحية</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              resizeMode="cover"
              source={require("../assets/frame22.png")}
            />
          </View>
          <View style={[styles.maintenanceType2, styles.maintenanceLayout]}>
            <Text style={[styles.text4, styles.textTypo2]}>صيانة وقائية</Text>
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
            style={[styles.filterProjectNameChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1535.png")}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo3]}>التاريخ</Text>
          <View style={styles.frameParent}>
            <View style={styles.dateClassParent}>
              <View style={styles.dateLayout}>
                <Text style={[styles.text7, styles.textTypo2]}>سنوي</Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame88.png")}
                />
              </View>
              <View style={[styles.dateClass1, styles.dateLayout]}>
                <Text style={[styles.text7, styles.textTypo2]}>شهري</Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame88.png")}
                />
              </View>
            </View>
            <View style={styles.groupParent}>
              <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <View style={styles.groupShadowBox} />
                <View style={styles.container}>
                  <Text style={styles.text9}>{`01 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group18.png")}
                  />
                </View>
              </View>
              <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                <View style={styles.groupShadowBox} />
                <View style={styles.container}>
                  <Text style={styles.text9}>{`30 / 11 / 2023 `}</Text>
                  <Image
                    style={styles.groupIconLayout}
                    resizeMode="cover"
                    source={require("../assets/group18.png")}
                  />
                </View>
              </View>
              <Text style={styles.text11}>إلى</Text>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={[styles.text6, styles.textTypo3]}>الحالة</Text>
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
            style={[styles.filterProjectNameChild, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1536.png")}
          />
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={[styles.text18, styles.textTypo1]}>تطبيق الفلتر</Text>
      </View>
      <View style={styles.dateReportsChild} />
      <View style={[styles.navBar, styles.navBarPosition]}>
        <View style={[styles.webViewbottom, styles.navBarPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.navBarPosition]}>
        <View style={styles.groupInner} />
        <View style={[styles.iphoneXOrNewer, styles.frameWrapperPosition]}>
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.text19, styles.text19Position]}>فلتر</Text>
      </View>
      <View style={styles.dateReportsItem} />
      <View style={styles.moParent}>
        <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
        <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
        <Text style={[styles.we, styles.moTypo]}>We</Text>
        <Text style={[styles.th, styles.moTypo]}>Th</Text>
        <Text style={[styles.er, styles.moTypo]}>Er</Text>
        <Text style={[styles.sa, styles.moTypo]}>Sa</Text>
        <Text style={[styles.su, styles.moTypo]}>Su</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("FilterReports2")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-198.png")}
        />
        <View style={styles.namberParent}>
          <View style={[styles.namber, styles.namberSpaceBlock]}>
            <Text style={[styles.text20, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.namber1, styles.namberSpaceBlock]}>
            <Text style={[styles.text20, styles.textTypo]}>8</Text>
          </View>
          <View style={[styles.namber2, styles.namberSpaceBlock]}>
            <Text style={[styles.text20, styles.textTypo]}>15</Text>
          </View>
          <View style={[styles.namber3, styles.namberSpaceBlock]}>
            <Text style={[styles.text20, styles.textTypo]}>22</Text>
          </View>
          <View style={[styles.namber4, styles.namberSpaceBlock]}>
            <Text style={[styles.text20, styles.textTypo]}>29</Text>
          </View>
          <View style={[styles.namber5, styles.namberPosition5]}>
            <Text style={[styles.text20, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.namber6, styles.namberPosition5]}>
            <Text style={[styles.text20, styles.textTypo]}>9</Text>
          </View>
          <View style={[styles.namber7, styles.namberPosition5]}>
            <Text style={[styles.text20, styles.textTypo]}>16</Text>
          </View>
          <View style={[styles.namber8, styles.namberPosition5]}>
            <Text style={[styles.text20, styles.textTypo]}>23</Text>
          </View>
          <View style={[styles.namber9, styles.namberPosition5]}>
            <Text style={[styles.text20, styles.textTypo]}>30</Text>
          </View>
          <View style={[styles.namber10, styles.namberPosition4]}>
            <Text style={[styles.text20, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.namber11, styles.namberPosition4]}>
            <Text style={[styles.text20, styles.textTypo]}>10</Text>
          </View>
          <View style={[styles.namber12, styles.namberPosition4]}>
            <Text style={[styles.text20, styles.textTypo]}>17</Text>
          </View>
          <View style={[styles.namber13, styles.namberPosition4]}>
            <Text style={[styles.text20, styles.textTypo]}>24</Text>
          </View>
          <View style={[styles.namber14, styles.namberPosition4]}>
            <Text style={[styles.text20, styles.textTypo]}>31</Text>
          </View>
          <View style={[styles.namber15, styles.namberPosition3]}>
            <Text style={[styles.text20, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.namber16, styles.namberPosition3]}>
            <Text style={[styles.text20, styles.textTypo]}>11</Text>
          </View>
          <View style={[styles.namber17, styles.namberPosition3]}>
            <Text style={[styles.text20, styles.textTypo]}>18</Text>
          </View>
          <View style={[styles.namber18, styles.namberPosition3]}>
            <Text style={[styles.text20, styles.textTypo]}>25</Text>
          </View>
          <View style={[styles.namber19, styles.namberPosition2]}>
            <Text style={[styles.text20, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.namber20, styles.namberPosition2]}>
            <Text style={[styles.text20, styles.textTypo]}>12</Text>
          </View>
          <View style={[styles.namber21, styles.namberPosition2]}>
            <Text style={[styles.text20, styles.textTypo]}>19</Text>
          </View>
          <View style={[styles.namber22, styles.namberPosition2]}>
            <Text style={[styles.text20, styles.textTypo]}>26</Text>
          </View>
          <View style={[styles.namber23, styles.namberPosition1]}>
            <Text style={[styles.text20, styles.textTypo]}>6</Text>
          </View>
          <View style={[styles.namber24, styles.namberPosition1]}>
            <Text style={[styles.text20, styles.textTypo]}>13</Text>
          </View>
          <View style={[styles.namber25, styles.namberPosition1]}>
            <Text style={[styles.text20, styles.textTypo]}>20</Text>
          </View>
          <View style={[styles.namber26, styles.namberPosition1]}>
            <Text style={[styles.text46, styles.textTypo]}>27</Text>
          </View>
          <View style={[styles.namber27, styles.namberPosition]}>
            <Text style={[styles.text20, styles.textTypo]}>7</Text>
          </View>
          <View style={[styles.namber28, styles.namberPosition]}>
            <Text style={[styles.text20, styles.textTypo]}>14</Text>
          </View>
          <View style={[styles.namber29, styles.namberPosition]}>
            <Text style={[styles.text20, styles.textTypo]}>21</Text>
          </View>
          <View style={[styles.namber30, styles.namberPosition]}>
            <Text style={[styles.text20, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector18.png")}
            />
            <View style={[styles.frameWrapper, styles.groupFlexBox]}>
              <View style={styles.groupFlexBox}>
                <Image
                  style={styles.groupIcon2}
                  resizeMode="cover"
                  source={require("../assets/group19.png")}
                />
                <Text style={styles.text51}>أغسطس 2023</Text>
              </View>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector19.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  textTypo3: {
    height: 16,
    color: Color.praimary,
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
  textTypo2: {
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
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  filterLayout: {
    width: 111,
    height: 24,
  },
  buttonFlexBox: {
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
  },
  textTypo1: {
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
  frameWrapperPosition: {
    left: "50%",
    top: 0,
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
  moTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.poppinsSemiBold,
    top: 136,
    color: Color.colorBlack,
    letterSpacing: 0.1,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  namberSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    left: 0,
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  namberPosition5: {
    left: 44,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  namberPosition4: {
    left: 88,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  namberPosition3: {
    left: 132,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  namberPosition2: {
    left: 176,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  namberPosition1: {
    left: 220,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  namberPosition: {
    left: 264,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    width: 24,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    position: "absolute",
  },
  viewLayout: {
    height: 46,
    width: 329,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 15,
    width: 9,
    top: 1,
    position: "absolute",
  },
  groupFlexBox: {
    width: 104,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    left: "47.81%",
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
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
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
  text1: {
    left: 263,
    width: 80,
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
    borderRadius: Border.br_8xs,
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
    top: 121,
    height: 691,
    alignItems: "flex-end",
    left: 16,
    position: "absolute",
  },
  text18: {
    width: 291,
    color: Color.whait,
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
  dateReportsChild: {
    top: 959,
    width: 344,
    height: 68,
    left: 16,
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
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    top: 0,
    backgroundColor: Color.colorGray_100,
    width: 375,
    marginLeft: -187.5,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 88,
    top: 1,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    position: "absolute",
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
    overflow: "hidden",
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
    top: 48,
    display: "flex",
  },
  rectangleContainer: {
    height: 89,
    top: 0,
  },
  dateReportsItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    top: "50%",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    height: 812,
  },
  mo: {
    width: 24,
    left: 20,
  },
  tu: {
    left: 64,
    width: 24,
  },
  we: {
    left: 108,
  },
  th: {
    left: 152,
    width: 24,
  },
  er: {
    left: 196,
    width: 24,
  },
  sa: {
    left: 240,
    width: 24,
  },
  su: {
    left: 284,
    width: 24,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "87.84%",
    top: "5.08%",
    right: "6.08%",
    bottom: "89.85%",
    width: "6.08%",
    height: "5.08%",
    position: "absolute",
  },
  frameChild: {
    top: 290,
    left: 237,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text20: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    letterSpacing: 0.2,
  },
  namber: {
    top: 0,
  },
  namber1: {
    top: 40,
  },
  namber2: {
    top: 80,
  },
  namber3: {
    top: 120,
  },
  namber4: {
    top: 160,
  },
  namber5: {
    top: 0,
  },
  namber6: {
    top: 40,
  },
  namber7: {
    top: 80,
  },
  namber8: {
    top: 120,
  },
  namber9: {
    top: 160,
  },
  namber10: {
    top: 0,
  },
  namber11: {
    top: 40,
  },
  namber12: {
    top: 80,
  },
  namber13: {
    top: 120,
  },
  namber14: {
    top: 160,
  },
  namber15: {
    top: 0,
  },
  namber16: {
    top: 40,
  },
  namber17: {
    top: 80,
  },
  namber18: {
    top: 120,
  },
  namber19: {
    top: 0,
  },
  namber20: {
    top: 40,
  },
  namber21: {
    top: 80,
  },
  namber22: {
    top: 120,
  },
  namber23: {
    top: 0,
  },
  namber24: {
    top: 40,
  },
  namber25: {
    top: 80,
  },
  text46: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.whait,
  },
  namber26: {
    top: 120,
  },
  namber27: {
    top: 0,
  },
  namber28: {
    top: 40,
  },
  namber29: {
    top: 80,
  },
  namber30: {
    top: 120,
  },
  namberParent: {
    top: 173,
    width: 288,
    height: 184,
    left: 20,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorAliceblue_100,
    top: 0,
  },
  vectorIcon: {
    zIndex: 0,
    left: 0,
  },
  groupIcon2: {
    width: 8,
    height: 4,
  },
  text51: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    marginLeft: 6,
    letterSpacing: 0.1,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
  },
  frameWrapper: {
    marginLeft: -51.5,
    zIndex: 1,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    left: 301,
    zIndex: 2,
  },
  vectorParent: {
    top: 14,
    left: 10,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  groupView: {
    top: 66,
  },
  moParent: {
    marginTop: -197,
    marginLeft: -164.5,
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 2.2,
    elevation: 2.2,
    height: 394,
    width: 329,
    top: "50%",
    left: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    position: "absolute",
    overflow: "hidden",
  },
  dateReports: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default DateReports;
