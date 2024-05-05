import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import MOREInformaion3 from "../components/MOREInformaion3";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const MOREInformaion16 = () => {
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true);
  }, []);

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.moreInformaion}>
        <View style={styles.moreInformaionChild} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("MOREInformaion14")}
        >
          <Text style={[styles.text, styles.textTypo9]}>حفظ التغييرات</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={openButtonContainer1}>
          <Text style={[styles.text1, styles.textTypo9]}>حذف الطلب</Text>
        </Pressable>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.parent}>
            <Text style={[styles.text2, styles.textFlexBox]}>
              اسم صاحب الطلب
            </Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={[styles.wrapper, styles.wrapperPosition]}>
                <Text style={[styles.text3, styles.textClr]}>
                  عبدالرحمن الغامدي
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text4, styles.textFlexBox]}>رقم الجوال</Text>
            <View style={styles.rectangleParent}>
              <View style={styles.frameShadowBox} />
              <View style={styles.wrapperPosition}>
                <Text style={[styles.text5, styles.textClr]}>05629871269</Text>
              </View>
            </View>
          </View>
          <View style={styles.projectName}>
            <Image
              style={[styles.projectNameChild, styles.notchIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-1539.png")}
            />
            <Text style={[styles.text6, styles.textFlexBox]}>اسم المشروع</Text>
          </View>
          <View style={[styles.groupView, styles.parent1Layout]}>
            <Text style={[styles.text7, styles.textTypo3]}>نوع الصيانة</Text>
            <View style={[styles.maintenanceType, styles.maintenanceLayout]}>
              <Text style={[styles.text8, styles.textTypo1]}>
                صيانة روتينية
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame3.png")}
              />
            </View>
            <View style={[styles.maintenanceType1, styles.maintenanceLayout]}>
              <Text style={[styles.text9, styles.textTypo2]}>
                صيانة إصلاحية
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame4.png")}
              />
            </View>
            <View style={[styles.maintenanceType2, styles.parentGroupPosition]}>
              <Text style={[styles.text10, styles.textTypo2]}>
                صيانة وقائية
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconPosition]}
                resizeMode="cover"
                source={require("../assets/frame4.png")}
              />
            </View>
          </View>
          <View style={styles.projectName}>
            <Image
              style={[styles.projectNameChild, styles.notchIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame-1540.png")}
            />
            <Text style={[styles.text6, styles.textFlexBox]}>نوع الخدمة</Text>
          </View>
          <View style={[styles.parent1, styles.parent1Layout]}>
            <Text style={[styles.text12, styles.textTypo3]}>فئة الخدمة</Text>
            <View
              style={[styles.serviceClassParent, styles.parentGroupPosition]}
            >
              <View style={styles.serviceClass}>
                <Text style={[styles.text13, styles.textTypo1]}>
                  خدمة مخطط لها
                </Text>
                <Image
                  style={[styles.frameIcon3, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame3.png")}
                />
              </View>
              <View style={[styles.parent2, styles.parentGroupPosition]}>
                <Text style={[styles.text14, styles.textTypo2]}>طلب خدمة</Text>
                <Image
                  style={[styles.frameIcon4, styles.frameIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/frame4.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.frameView}>
            <Text style={[styles.text15, styles.textFlexBox]}>
              المشكلة أو الطلب
            </Text>
            <View style={[styles.rectangleContainer, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <Text style={[styles.text16, styles.textTypo]}>
                من فضلك اكتب ما تريد عن المشكلة او الطلب.....
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <Text style={[styles.text15, styles.textFlexBox]}>وصف المشكلة</Text>
            <View style={[styles.rectangleContainer, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.childGroupShadowBox]} />
              <Text style={[styles.text18, styles.textTypo]}>
                من فضلك اكتب وصف المشكلة بشكل مفصل مثل : وصف و مجال المشكلة وبعض
                مؤشرات المشكلة.....
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.tapPosition}>
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
            style={[styles.arrow21, styles.text19Position]}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.text19, styles.text19Position]}>
            تعديل الطلب
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <MOREInformaion3 onClose={closeButtonContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  textTypo9: {
    width: 291,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  wrapperPosition: {
    zIndex: 1,
    left: 17,
    top: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textClr: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parent1Layout: {
    height: 64,
    marginTop: 24,
  },
  textTypo3: {
    width: 70,
    top: 0,
    height: 16,
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  maintenanceLayout: {
    width: 100,
    height: 24,
    top: 40,
  },
  textTypo1: {
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    color: Color.praimary,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  frameIconPosition: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_3xs,
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  parentGroupPosition: {
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 143,
    width: 342,
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  textTypo: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    top: 16,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  tapPosition: {
    height: 88,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text19Position: {
    top: 47,
    height: 24,
    position: "absolute",
  },
  moreInformaionChild: {
    top: 1285,
    overflow: "hidden",
    height: 56,
    width: 343,
    left: 16,
    position: "absolute",
  },
  text: {
    color: Color.whait,
  },
  button: {
    top: 1117,
    backgroundColor: Color.praimary,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text1: {
    color: Color.colorRed_100,
  },
  button1: {
    top: 1189,
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    left: "50%",
    marginLeft: -171.5,
    height: 56,
    width: 343,
    position: "absolute",
  },
  text2: {
    width: 169,
    height: 16,
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameShadowBox: {
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 56,
    width: 343,
  },
  text3: {
    width: 240,
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 16,
  },
  wrapper: {
    height: 14,
  },
  rectangleParent: {
    marginTop: 10,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
  },
  parent: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  text4: {
    width: 94,
    height: 16,
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text5: {
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  group: {
    marginTop: 24,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
  },
  projectNameChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  text6: {
    height: "19.51%",
    width: "52.19%",
    top: "0%",
    left: "47.81%",
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  projectName: {
    height: 82,
    marginTop: 24,
    width: 343,
  },
  text7: {
    left: 267,
  },
  text8: {
    width: "78%",
    left: "-4%",
  },
  frameIcon: {
    width: "20%",
    left: "80%",
  },
  maintenanceType: {
    left: 232,
    height: 24,
    position: "absolute",
  },
  text9: {
    width: "75%",
    left: "-1%",
  },
  maintenanceType1: {
    left: 116,
    height: 24,
    position: "absolute",
  },
  text10: {
    width: "70%",
    left: "4%",
  },
  maintenanceType2: {
    height: 24,
    width: 100,
    top: 40,
  },
  groupView: {
    width: 337,
  },
  text12: {
    left: 263,
  },
  text13: {
    width: "74.29%",
    left: "0.95%",
  },
  frameIcon3: {
    width: "19.05%",
    left: "80.95%",
  },
  serviceClass: {
    left: 223,
    width: 105,
    height: 24,
    top: 0,
    position: "absolute",
  },
  text14: {
    width: "78.95%",
    left: "-6.32%",
  },
  frameIcon4: {
    width: "21.05%",
    left: "78.95%",
  },
  parent2: {
    width: 95,
    height: 24,
    top: 0,
  },
  serviceClassParent: {
    width: 328,
    height: 24,
    top: 40,
    left: 0,
  },
  parent1: {
    width: 333,
  },
  text15: {
    width: 225,
    height: 16,
    textAlign: "right",
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    height: 143,
    width: 342,
    left: 0,
    position: "absolute",
    top: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  text16: {
    marginLeft: -88,
  },
  rectangleContainer: {
    marginTop: 16,
  },
  frameView: {
    marginTop: 24,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  groupItem: {
    height: 143,
    width: 342,
    left: 0,
    position: "absolute",
    top: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  text18: {
    marginLeft: -156,
    lineHeight: 20,
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  frameParent: {
    top: 112,
    height: 700,
    alignItems: "flex-end",
    marginLeft: -171.5,
    left: "50%",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    elevation: 20,
    shadowRadius: 20,
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
    top: 0,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    width: 24,
    top: 47,
    left: 16,
  },
  text19: {
    marginLeft: -74.5,
    width: 150,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    display: "flex",
    alignItems: "center",
    lineHeight: 30,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 47,
    justifyContent: "center",
    left: "50%",
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default MOREInformaion16;
