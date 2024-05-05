import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MOREInformaion13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.moreInformaion}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi9.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal2.png")}
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
          source={require("../assets/left-side5.png")}
        />
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo8]}>رؤية الكل</Text>
        <Text style={[styles.text1, styles.textTypo7]}>الطلبات الأخيرة</Text>
      </View>
      <View style={styles.frameParent}>
        <Pressable
          style={styles.ellipseParent}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1674.png")}
          />
          <View style={styles.group}>
            <Text style={styles.text2}>مرحبا بك</Text>
            <View style={styles.wrapper}>
              <Text style={styles.text3}>ارامكو السعودية</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("SideMenu5")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/frame98.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("VerificationCode8")}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
        <View style={styles.frameGroup}>
          <View style={styles.ellipseParent}>
            <View style={styles.ellipseParent}>
              <Text style={[styles.text4, styles.textLayout2]}>{` 35 % `}</Text>
              <View style={[styles.rectangleGroup, styles.text5SpaceBlock]}>
                <View style={[styles.groupItem, styles.groupPosition1]} />
                <View style={[styles.groupInner, styles.groupChildPosition]} />
              </View>
              <Text style={[styles.text5, styles.text5SpaceBlock]}>35</Text>
            </View>
            <Text style={[styles.text6, styles.textLayout1]}>المكتملة</Text>
          </View>
          <View style={styles.frameView}>
            <View style={styles.parent1}>
              <Text style={[styles.text7, styles.textLayout2]}>{`65 % `}</Text>
              <View style={[styles.rectangleGroup, styles.text5SpaceBlock]}>
                <View style={[styles.groupItem, styles.groupPosition1]} />
                <View style={[styles.groupChild1, styles.groupChildPosition]} />
              </View>
              <Text style={[styles.text5, styles.text5SpaceBlock]}>65</Text>
            </View>
            <Text style={[styles.text9, styles.textFlexBox]}>غير مكتملة</Text>
          </View>
        </View>
        <Text style={[styles.text10, styles.textPosition1]}>
          <Text
            style={styles.text11}
          >{`جميع الخدمات المقدمة منذ بداية العقد `}</Text>
          <Text style={styles.text12}> ( 100 )</Text>
          <Text style={styles.text11}>{` 
`}</Text>
        </Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </Pressable>
      <View style={styles.moreInformaionChild} />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={[styles.text14, styles.textTypo7]}>
          الخدمات غير المكتملة
        </Text>
        <View style={[styles.frameParent1, styles.parentFlexBox]}>
          <View style={styles.parent2}>
            <Text style={[styles.text15, styles.textTypo6]}>أعمال السباكة</Text>
            <View style={[styles.frameItem, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent3}>
            <Text style={[styles.text16, styles.textLayout]}>
              أعمال الكهرباء
            </Text>
            <View style={[styles.frameInner, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent4}>
            <Text style={[styles.text15, styles.textTypo6]}>أعمال النظافة</Text>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent4}>
            <Text style={[styles.text16, styles.textLayout]}>
              أعمال التكييف
            </Text>
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
          </View>
          <View style={[styles.parent6, styles.parentFlexBox]}>
            <Text style={[styles.text16, styles.textLayout]}>أخرى</Text>
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
          </View>
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-113.png")}
            />
            <View style={styles.groupChild3} />
            <Text style={[styles.text20, styles.textTypo4]}>20</Text>
          </View>
          <View style={[styles.polygonGroup, styles.polygonShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-113.png")}
            />
            <View style={styles.groupChild3} />
            <Text style={[styles.text21, styles.textTypo4]}>6</Text>
          </View>
          <View
            style={[styles.polygonContainer, styles.polygonParentShadowBox]}
          >
            <Image
              style={[styles.polygonIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-113.png")}
            />
            <View style={styles.groupChild3} />
            <Text style={[styles.text21, styles.textTypo4]}>8</Text>
          </View>
          <View style={[styles.polygonParent1, styles.polygonShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-113.png")}
            />
            <View style={styles.groupChild3} />
            <Text style={[styles.text21, styles.textTypo4]}>3</Text>
          </View>
          <View style={[styles.polygonParent2, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-113.png")}
            />
            <View style={styles.groupChild3} />
            <Text style={[styles.text21, styles.textTypo4]}>16</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParentLayout}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text25, styles.textTypo6]}>21584</Text>
          <Text
            style={[styles.text26, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent7, styles.textPosition]}>
            <Text style={styles.textTypo3}>صيانة وقائية</Text>
            <Text style={[styles.text28, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.parent8, styles.parentFlexBox]}>
            <Text style={[styles.text29, styles.textTypo6]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text30, styles.textTypo2]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text31, styles.textTypo3]}>10 / 10/2023</Text>
          <Text style={[styles.text32, styles.textTypo2]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text33, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group16.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
              <Text style={[styles.text34, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameChild4}
              resizeMode="cover"
              source={require("../assets/group-2386052.png")}
            />
            <View style={styles.parent9}>
              <Text style={[styles.text35, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text36, styles.textTypo6]}>قيد التنفيذ</Text>
              <Text style={[styles.text37, styles.textTypo6]}>مكتمل</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text25, styles.textTypo6]}>23655</Text>
          <Text
            style={[styles.text26, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent7, styles.textPosition]}>
            <Text style={styles.textTypo3}>صيانة روتينية</Text>
            <Text style={[styles.text28, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.parent8, styles.parentFlexBox]}>
            <Text style={[styles.text29, styles.textTypo6]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text30, styles.textTypo2]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text31, styles.textTypo3]}>01 / 11 /2023</Text>
          <Text style={[styles.text32, styles.textTypo2]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameChild4}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.parent9}>
              <Text style={[styles.text46, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text47, styles.textTypo1]}>قيد التنفيذ</Text>
              <Text style={[styles.text48, styles.textTypo1]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text33, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group16.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
              <Text style={[styles.text34, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text25, styles.textTypo6]}>25416</Text>
          <Text
            style={[styles.text26, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent7, styles.textPosition]}>
            <Text style={styles.textTypo3}>صيانة وقائية</Text>
            <Text style={[styles.text28, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.parent8, styles.parentFlexBox]}>
            <Text style={[styles.text29, styles.textTypo6]}>ممشى جدة</Text>
            <Text
              style={[styles.text30, styles.textTypo2]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text31, styles.textTypo3]}>31 / 10/2023</Text>
          <Text style={[styles.text32, styles.textTypo2]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text33, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group16.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
              <Text style={[styles.text34, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupPosition]}>
            <Image
              style={styles.frameChild4}
              resizeMode="cover"
              source={require("../assets/group-2386051.png")}
            />
            <View style={styles.parent9}>
              <Text style={[styles.text61, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text36, styles.textTypo6]}>قيد التنفيذ</Text>
              <Text style={[styles.text48, styles.textTypo1]}>مكتمل</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text25, styles.textTypo6]}>26890</Text>
          <Text
            style={[styles.text26, styles.textTypo5]}
          >{`رقم الطلب  : `}</Text>
          <View style={[styles.parent7, styles.textPosition]}>
            <Text style={styles.textTypo3}>صيانة روتينية</Text>
            <Text style={[styles.text28, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.parent8, styles.parentFlexBox]}>
            <Text style={[styles.text29, styles.textTypo6]}>جدة سوبر دوم</Text>
            <Text
              style={[styles.text30, styles.textTypo2]}
            >{`اسم المشروع : `}</Text>
          </View>
          <Text style={[styles.text31, styles.textTypo3]}>15 / 10/2023</Text>
          <Text style={[styles.text32, styles.textTypo2]}>تاريخ الطلب :</Text>
          <View style={styles.lineView} />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <Image
              style={styles.frameChild4}
              resizeMode="cover"
              source={require("../assets/group-238605.png")}
            />
            <View style={styles.parent9}>
              <Text style={[styles.text46, styles.textTypo6]}>غير مكتمل</Text>
              <Text style={[styles.text47, styles.textTypo1]}>قيد التنفيذ</Text>
              <Text style={[styles.text48, styles.textTypo1]}>مكتمل</Text>
            </View>
          </View>
          <View style={styles.mediumButtonParent}>
            <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
              <Text style={[styles.text33, styles.textTypo5]}>تعديل الطلب</Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group16.png")}
              />
            </View>
            <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
              <Text style={[styles.text34, styles.textTypo5]}>
                تفاصيل الطلب
              </Text>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.menuListLayout]}>
        <View style={[styles.menuList, styles.menuListLayout]}>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Reports15")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame92.png")}
            />
            <Text style={[styles.text77, styles.textTypo]}>التقارير</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/liuser6.png")}
            />
            <Text style={[styles.text77, styles.textTypo]}>حسابي</Text>
          </Pressable>
          <Pressable
            style={styles.menu4}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={styles.container1}>
                <Image
                  style={styles.frameIcon4}
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
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame99.png")}
            />
            <Text style={[styles.text77, styles.textTypo]}>الطلبات</Text>
          </Pressable>
          <View style={styles.menu4}>
            <Image
              style={styles.frameIcon4}
              resizeMode="cover"
              source={require("../assets/frame100.png")}
            />
            <Text style={[styles.text80, styles.textTypo]}>الرئيسية</Text>
          </View>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo8: {
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
  },
  textTypo7: {
    fontSize: FontSize.size_base,
    color: Color.praimary,
    fontWeight: "700",
    height: 24,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  groupChildLayout: {
    height: 139,
    width: 343,
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  textLayout2: {
    width: 32,
    lineHeight: 9,
    height: 8,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  text5SpaceBlock: {
    marginLeft: 10,
    height: 8,
  },
  groupPosition1: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupChildPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  textLayout1: {
    width: 47,
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textPosition1: {
    top: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 173,
    width: 343,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textTypo6: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    marginLeft: 4,
    width: 15,
  },
  textLayout: {
    width: 66,
    color: Color.black,
  },
  iconPosition: {
    left: 10,
    top: 12,
    position: "absolute",
  },
  polygonParentShadowBox: {
    height: 18,
    elevation: 3.38,
    shadowRadius: 3.38,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 27,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  textTypo4: {
    height: 7,
    lineHeight: 7,
    fontSize: FontSize.size_5xs,
    left: 9,
    top: 4,
    fontWeight: "600",
    color: Color.black,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  polygonShadowBox: {
    left: 32,
    height: 18,
    width: 27,
    elevation: 3.38,
    shadowRadius: 3.38,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  textTypo5: {
    fontWeight: "600",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  textPosition: {
    top: 48,
    position: "absolute",
  },
  textTypo2: {
    width: 77,
    fontWeight: "600",
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
  },
  textTypo3: {
    width: 55,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    marginLeft: 6,
    width: 16,
    height: 16,
  },
  groupPosition: {
    left: 55,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 190,
    width: 343,
  },
  textTypo1: {
    color: Color.gray,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    top: 0,
    position: "absolute",
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  textTypo: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  icon: {
    marginLeft: -42.5,
    top: 40,
    width: 86,
    height: 31,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
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
    display: "none",
    height: 6,
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
    overflow: "hidden",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  text: {
    height: 24,
    width: 46,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  text1: {
    width: 111,
    marginLeft: 186,
    color: Color.praimary,
    fontWeight: "700",
  },
  parent: {
    top: 502,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  frameChild: {
    width: 45,
    height: 45,
  },
  text2: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  text3: {
    color: Color.ternary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  wrapper: {
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  group: {
    marginLeft: 8,
    justifyContent: "center",
  },
  ellipseParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    width: 28,
    height: 28,
    marginLeft: 175,
  },
  frameParent: {
    top: 79,
    alignItems: "center",
    width: 343,
    marginLeft: -171.5,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    height: 139,
    width: 343,
  },
  text4: {
    height: 8,
    textAlign: "left",
  },
  groupItem: {
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupInner: {
    left: 126,
    width: 64,
    backgroundColor: Color.praimary,
    height: 8,
  },
  rectangleGroup: {
    width: 190,
  },
  text5: {
    width: 20,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
  },
  text6: {
    marginLeft: 18,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  text7: {
    height: 8,
    textAlign: "center",
    justifyContent: "center",
  },
  groupChild1: {
    left: 54,
    width: 136,
    backgroundColor: Color.praimary,
    height: 8,
  },
  parent1: {
    flexDirection: "row",
  },
  text9: {
    width: 56,
    height: 16,
    color: Color.black,
    marginLeft: 8,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  frameView: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    top: 56,
    left: 8,
    position: "absolute",
  },
  text11: {
    color: Color.black,
  },
  text12: {
    color: Color.praimary,
  },
  text10: {
    left: 45,
    width: 254,
    fontWeight: "700",
    height: 24,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
  },
  groupIcon: {
    height: "6.47%",
    width: "4.66%",
    top: "87.77%",
    right: "47.52%",
    bottom: "5.76%",
    left: "47.81%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 350,
    left: 16,
    position: "absolute",
  },
  moreInformaionChild: {
    marginLeft: -166.5,
    top: 1433,
    width: 333,
    height: 63,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text14: {
    top: 24,
    left: 163,
    width: 172,
    color: Color.praimary,
    fontWeight: "700",
    position: "absolute",
  },
  text15: {
    width: 74,
    color: Color.black,
    fontWeight: "300",
  },
  frameItem: {
    backgroundColor: Color.binary,
    marginLeft: 4,
  },
  parent2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text16: {
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  frameInner: {
    marginLeft: 4,
    backgroundColor: Color.praimary,
  },
  parent3: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.colorGold,
    marginLeft: 4,
  },
  parent4: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.ternary,
    marginLeft: 4,
  },
  frameChild3: {
    backgroundColor: Color.colorChocolate,
    marginLeft: 4,
  },
  parent6: {
    marginLeft: 8,
    alignItems: "center",
  },
  frameParent1: {
    top: 72,
    left: 136,
    width: 199,
    flexWrap: "wrap",
    alignItems: "flex-end",
    position: "absolute",
  },
  vectorIcon: {
    width: 100,
    height: 100,
  },
  polygonIcon: {
    width: 7,
    height: 6,
  },
  groupChild3: {
    borderRadius: 2,
    height: 14,
    width: 27,
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text20: {
    width: 10,
  },
  polygonParent: {
    left: 92,
    top: 30,
  },
  text21: {
    width: 9,
  },
  polygonGroup: {
    top: 91,
  },
  polygonContainer: {
    top: 83,
    left: 68,
  },
  polygonParent1: {
    top: 0,
  },
  polygonParent2: {
    top: 44,
    left: 0,
  },
  vectorParent: {
    left: 6,
    width: 119,
    height: 112,
    top: 30,
    position: "absolute",
  },
  groupView: {
    top: 153,
    left: 16,
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    elevation: 20,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    height: 190,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 343,
    top: 0,
    position: "absolute",
  },
  text25: {
    left: 40,
    width: 31,
    top: 16,
    position: "absolute",
    height: 16,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontWeight: "300",
    lineHeight: 25,
  },
  text26: {
    left: 75,
    width: 66,
    color: Color.black,
    top: 16,
    position: "absolute",
    height: 16,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
  },
  text28: {
    width: 66,
    color: Color.black,
    marginLeft: 4,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
  },
  parent7: {
    flexDirection: "row",
    left: 16,
  },
  text29: {
    width: 75,
    height: 16,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontWeight: "300",
  },
  text30: {
    marginLeft: 4,
  },
  parent8: {
    left: 171,
    top: 16,
    position: "absolute",
  },
  text31: {
    left: 191,
    top: 48,
    position: "absolute",
  },
  text32: {
    left: 250,
    top: 48,
    position: "absolute",
  },
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  text33: {
    width: 85,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    color: Color.praimary,
  },
  mediumButton: {
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 140,
    borderStyle: "solid",
  },
  text34: {
    color: Color.whait,
    fontSize: FontSize.size_sm,
  },
  frameIcon: {
    overflow: "hidden",
  },
  mediumButton1: {
    marginLeft: 31,
    backgroundColor: Color.praimary,
  },
  mediumButtonParent: {
    top: 142,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  frameChild4: {
    width: 206,
    height: 10,
  },
  text35: {
    left: 184,
    width: 50,
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  text36: {
    left: 86,
    width: 51,
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  text37: {
    width: 31,
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    left: 0,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  parent9: {
    width: 234,
    height: 16,
    marginTop: 4,
  },
  groupContainer: {
    top: 96,
  },
  text46: {
    left: 188,
    height: 16,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    width: 46,
    top: 0,
    position: "absolute",
  },
  text47: {
    left: 91,
    width: 46,
  },
  text48: {
    width: 31,
    left: 0,
  },
  rectangleParent2: {
    marginTop: 24,
  },
  text61: {
    left: 187,
    height: 16,
    width: 47,
    color: Color.black,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupParent2: {
    top: 95,
  },
  groupParent: {
    top: 550,
    height: 262,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  frameIcon4: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text77: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  menu4: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container1: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  menu31: {
    height: 52,
    width: 74,
    alignItems: "center",
  },
  text80: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    alignItems: "flex-end",
    backgroundColor: Color.whait,
    left: 0,
    justifyContent: "center",
    flexDirection: "row",
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
    bottom: 0,
    width: 375,
    backgroundColor: Color.whait,
    left: 0,
  },
  bottomNav: {
    marginLeft: -187.5,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    overflow: "hidden",
    left: "50%",
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MOREInformaion13;
