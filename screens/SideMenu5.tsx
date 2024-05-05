import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const SideMenu5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sideMenu}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("Profile2")}
      >
        <View style={styles.frameGroup}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo7]}>ارامكو السعودية</Text>
          </View>
          <Text style={[styles.text1, styles.textTypo7]}>شركة</Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-1674.png")}
        />
      </Pressable>
      <View style={[styles.sideMenuChild, styles.sideLayout]} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <Pressable
          style={[styles.menu1, styles.menuFlexBox1]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <Text style={[styles.text2, styles.textTypo6]}>الرئيسية</Text>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame37.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.menu2, styles.menuFlexBox1]}
        onPress={() => navigation.navigate("CallUs3")}
      >
        <Text style={[styles.text3, styles.textTypo6]}>من نحن</Text>
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame38.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.menu3, styles.menuFlexBox]}
        onPress={() => navigation.navigate("CallUs2")}
      >
        <Text style={[styles.text3, styles.textTypo6]}>تواصل معنا</Text>
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame93.png")}
        />
      </Pressable>
      <View style={[styles.sideMenuItem, styles.sideLayout]} />
      <View style={[styles.sideMenuInner, styles.sideLayout]} />
      <Pressable
        style={styles.parent}
        onPress={() => navigation.navigate("SideMenu4")}
      >
        <Text style={[styles.text5, styles.textTypo7]}>تسجيل الخروج</Text>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/group-2386271.png")}
        />
      </Pressable>
      <View style={styles.poweredByParent}>
        <Text style={styles.poweredBy}>Powered by</Text>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            style={[styles.logo1Icon, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/logo-1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.menu31, styles.menuFlexBox]}
        onPress={() => navigation.navigate("SideMenu3")}
      >
        <Text style={[styles.text3, styles.textTypo6]}>تغيير اللغة</Text>
        <Image
          style={[styles.frameIcon3, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame97.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.moreInformaionWrapper, styles.moreLayout]}
        onPress={() => navigation.navigate("MOREInformaion13")}
      >
        <Pressable
          style={[styles.moreInformaion, styles.moreLayout]}
          onPress={() => navigation.navigate("MOREInformaion13")}
        >
          <View style={styles.groupContainer}>
            <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
              <View style={[styles.groupItem, styles.groupChildShadowBox]} />
              <View style={styles.frameContainer}>
                <View style={styles.group}>
                  <Text style={[styles.text7, styles.textFlexBox]}>
                    نادي جدة لليخوت
                  </Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`اسم المشروع : `}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text9, styles.textFlexBox]}>
                    صيانة روتينية
                  </Text>
                  <Text style={[styles.text10, styles.textTypo4]}>
                    نوع الصيانة :
                  </Text>
                </View>
                <View style={[styles.frameView, styles.parent1Position]}>
                  <Text style={[styles.text11, styles.textFlexBox]}>
                    01 / 11 /2023
                  </Text>
                  <Text style={[styles.text12, styles.textTypo4]}>
                    تاريخ الطلب :
                  </Text>
                </View>
                <View style={[styles.parent1, styles.parent1Position]}>
                  <Text style={[styles.text13, styles.textTypo3]}>23655</Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`رقم الطلب       : `}</Text>
                </View>
              </View>
              <View style={styles.groupInner} />
              <View style={styles.groupParent1}>
                <Image
                  style={styles.frameInner}
                  resizeMode="cover"
                  source={require("../assets/group-2386056.png")}
                />
                <View style={styles.groupView}>
                  <Text style={[styles.text15, styles.textPosition]}>
                    غير مكتمل
                  </Text>
                  <Text style={[styles.text16, styles.textClr]}>
                    قيد التنفيذ
                  </Text>
                  <Text style={[styles.text17, styles.textClr]}>مكتمل</Text>
                </View>
              </View>
              <View style={styles.mediumButtonParent}>
                <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text18, styles.textTypo2]}>
                    تعديل الطلب
                  </Text>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/group24.png")}
                  />
                </View>
                <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text19, styles.textTypo2]}>
                    تفاصيل الطلب
                  </Text>
                  <Image
                    style={[styles.frameIcon4, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame42.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.rectangleGroup, styles.groupChildLayout1]}>
              <View
                style={[styles.rectangleView, styles.groupChildShadowBox]}
              />
              <View style={styles.frameContainer}>
                <View style={styles.group}>
                  <Text style={[styles.text7, styles.textFlexBox]}>
                    ممشى جدة
                  </Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`اسم المشروع : `}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text9, styles.textFlexBox]}>
                    صيانة وقائية
                  </Text>
                  <Text style={[styles.text10, styles.textTypo4]}>
                    نوع الصيانة :
                  </Text>
                </View>
                <View style={[styles.frameView, styles.parent1Position]}>
                  <Text style={[styles.text11, styles.textFlexBox]}>
                    31 / 10/2023
                  </Text>
                  <Text style={[styles.text12, styles.textTypo4]}>
                    تاريخ الطلب :
                  </Text>
                </View>
                <View style={[styles.parent1, styles.parent1Position]}>
                  <Text style={[styles.text13, styles.textTypo3]}>25416</Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`رقم الطلب       : `}</Text>
                </View>
              </View>
              <View style={styles.groupInner} />
              <View style={styles.groupParent1}>
                <Image
                  style={styles.frameInner}
                  resizeMode="cover"
                  source={require("../assets/group-23860510.png")}
                />
                <View style={styles.groupView}>
                  <Text style={[styles.text28, styles.textLayout1]}>
                    غير مكتمل
                  </Text>
                  <Text style={[styles.text29, styles.textFlexBox]}>
                    قيد التنفيذ
                  </Text>
                  <Text style={[styles.text17, styles.textClr]}>مكتمل</Text>
                </View>
              </View>
              <View style={styles.mediumButtonParent}>
                <Pressable
                  style={[styles.mediumButton, styles.mediumSpaceBlock]}
                  onPress={() => navigation.navigate("Requests6")}
                >
                  <Text style={[styles.text18, styles.textTypo2]}>
                    تعديل الطلب
                  </Text>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/group25.png")}
                  />
                </Pressable>
                <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text19, styles.textTypo2]}>
                    تفاصيل الطلب
                  </Text>
                  <Image
                    style={[styles.frameIcon4, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame43.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
              <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
              <View style={styles.frameContainer}>
                <View style={styles.group}>
                  <Text style={[styles.text7, styles.textFlexBox]}>
                    جدة سوبر دوم
                  </Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`اسم المشروع : `}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text9, styles.textFlexBox]}>
                    صيانة روتينية
                  </Text>
                  <Text style={[styles.text10, styles.textTypo4]}>
                    نوع الصيانة :
                  </Text>
                </View>
                <View style={[styles.frameView, styles.parent1Position]}>
                  <Text style={[styles.text11, styles.textFlexBox]}>
                    15 / 10/2023
                  </Text>
                  <Text style={[styles.text12, styles.textTypo4]}>
                    تاريخ الطلب :
                  </Text>
                </View>
                <View style={[styles.parent1, styles.parent1Position]}>
                  <Text style={[styles.text13, styles.textTypo3]}>26890</Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`رقم الطلب       : `}</Text>
                </View>
              </View>
              <View style={styles.groupInner} />
              <View style={styles.groupParent1}>
                <Image
                  style={styles.frameInner}
                  resizeMode="cover"
                  source={require("../assets/group-23860511.png")}
                />
                <View style={styles.groupView}>
                  <Text style={[styles.text28, styles.textLayout1]}>
                    غير مكتمل
                  </Text>
                  <Text style={[styles.text16, styles.textClr]}>
                    قيد التنفيذ
                  </Text>
                  <Text style={[styles.text17, styles.textClr]}>مكتمل</Text>
                </View>
              </View>
              <View style={styles.mediumButtonParent}>
                <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text18, styles.textTypo2]}>
                    تعديل الطلب
                  </Text>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/group26.png")}
                  />
                </View>
                <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text19, styles.textTypo2]}>
                    تفاصيل الطلب
                  </Text>
                  <Image
                    style={[styles.frameIcon4, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame44.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.rectangleParent1, styles.groupChildLayout1]}>
              <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
              <View style={styles.frameContainer}>
                <View style={styles.group}>
                  <Text style={[styles.text7, styles.textFlexBox]}>
                    نادي جدة لليخوت
                  </Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`اسم المشروع : `}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={[styles.text9, styles.textFlexBox]}>
                    صيانة وقائية
                  </Text>
                  <Text style={[styles.text10, styles.textTypo4]}>
                    نوع الصيانة :
                  </Text>
                </View>
                <View style={[styles.frameView, styles.parent1Position]}>
                  <Text style={[styles.text11, styles.textFlexBox]}>
                    10 / 10/2023
                  </Text>
                  <Text style={[styles.text12, styles.textTypo4]}>
                    تاريخ الطلب :
                  </Text>
                </View>
                <View style={[styles.parent1, styles.parent1Position]}>
                  <Text style={[styles.text13, styles.textTypo3]}>21584</Text>
                  <Text
                    style={[styles.text8, styles.textTypo4]}
                  >{`رقم الطلب       : `}</Text>
                </View>
              </View>
              <View style={styles.groupInner} />
              <View style={styles.groupParent1}>
                <Image
                  style={styles.frameInner}
                  resizeMode="cover"
                  source={require("../assets/group-23860512.png")}
                />
                <View style={styles.groupView}>
                  <Text style={[styles.text54, styles.textFlexBox]}>
                    غير مكتمل
                  </Text>
                  <Text style={[styles.text29, styles.textFlexBox]}>
                    قيد التنفيذ
                  </Text>
                  <Text style={[styles.text56, styles.textTypo3]}>مكتمل</Text>
                </View>
              </View>
              <View style={styles.mediumButtonParent}>
                <Pressable
                  style={[styles.mediumButton, styles.mediumSpaceBlock]}
                  onPress={() => navigation.navigate("POPUPERROL")}
                >
                  <Text style={[styles.text18, styles.textTypo2]}>
                    تعديل الطلب
                  </Text>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/group27.png")}
                  />
                </Pressable>
                <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
                  <Text style={[styles.text19, styles.textTypo2]}>
                    تفاصيل الطلب
                  </Text>
                  <Image
                    style={[styles.frameIcon4, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame45.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/3-1-15.png")}
          />
          <View style={styles.parent17}>
            <Text style={[styles.text59, styles.textTypo1]}>رؤية الكل</Text>
            <Text style={[styles.text60, styles.textTypo]}>
              الطلبات الأخيرة
            </Text>
          </View>
          <View style={[styles.rectangleParent2, styles.groupChild5Layout]}>
            <View style={[styles.groupChild5, styles.groupChildPosition]} />
            <Text
              style={[styles.text61, styles.text61Position]}
            >{`الخدمات المقدمة 
`}</Text>
            <View style={styles.frameParent4}>
              <View style={styles.wrapper}>
                <Text style={[styles.text62, styles.textTypo5]}>
                  أعمال السباكة
                </Text>
                <View style={[styles.frameChild4, styles.frameChildLayout]} />
              </View>
              <View style={styles.parent19}>
                <Text style={[styles.text62, styles.textTypo5]}>
                  أعمال الكهرباء
                </Text>
                <View style={[styles.frameChild5, styles.frameChildLayout]} />
              </View>
              <View style={styles.parent20}>
                <Text style={[styles.text62, styles.textTypo5]}>
                  أعمال النظافة
                </Text>
                <View style={[styles.frameChild6, styles.frameChildLayout]} />
              </View>
              <View style={styles.parent20}>
                <Text style={[styles.text62, styles.textTypo5]}>
                  أعمال التكييف
                </Text>
                <View style={[styles.frameChild7, styles.frameChildLayout]} />
              </View>
              <View style={styles.parent22}>
                <Text style={[styles.text62, styles.textTypo5]}>أخرى</Text>
                <View style={[styles.frameChild8, styles.frameChildLayout]} />
              </View>
            </View>
            <Image
              style={[styles.vectorIcon, styles.text61Position]}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-117.png")}
              />
              <View style={styles.groupChild6} />
              <Text style={[styles.text67, styles.text67Layout]}>37%</Text>
            </View>
            <View style={[styles.polygonGroup, styles.polygonShadowBox]}>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-119.png")}
              />
              <View style={styles.groupChild6} />
              <Text style={[styles.text67, styles.text67Layout]}>10%</Text>
            </View>
            <View
              style={[styles.polygonContainer, styles.polygonParentShadowBox]}
            >
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-117.png")}
              />
              <View style={styles.groupChild6} />
              <Text style={[styles.text67, styles.text67Layout]}>13%</Text>
            </View>
            <View style={[styles.polygonParent1, styles.polygonShadowBox]}>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-117.png")}
              />
              <View style={styles.groupChild6} />
              <Text style={[styles.text67, styles.text67Layout]}>8%</Text>
            </View>
            <View style={[styles.polygonParent2, styles.parentPosition]}>
              <Image
                style={styles.polygonIcon}
                resizeMode="cover"
                source={require("../assets/polygon-120.png")}
              />
              <View style={styles.groupChild6} />
              <Text style={[styles.text67, styles.text67Layout]}>30%</Text>
            </View>
          </View>
          <View style={[styles.frameParent5, styles.iconPosition1]}>
            <View style={styles.frameParent6}>
              <View style={styles.parent23}>
                <Text style={[styles.text72, styles.textTypo2]}>مرحبا بك</Text>
                <View style={styles.frame}>
                  <Text style={styles.text73}>ارامكو السعودية</Text>
                </View>
              </View>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-1675.png")}
              />
            </View>
            <Image
              style={[styles.frameIcon8, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame94.png")}
            />
          </View>
          <View style={[styles.rectangleParent3, styles.groupChild15Layout]}>
            <View style={[styles.groupChild15, styles.groupChild15Layout]} />
            <View style={[styles.frameParent7, styles.parentPosition]}>
              <View style={styles.frameParent6}>
                <View style={styles.frameParent6}>
                  <Text
                    style={[styles.text74, styles.textLayout]}
                  >{` 35 % `}</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild16Layout]}
                  >
                    <View
                      style={[styles.groupChild16, styles.groupChild16Layout]}
                    />
                    <View
                      style={[styles.groupChild17, styles.groupChildLayout]}
                    />
                  </View>
                  <Text style={[styles.text75, styles.textFlexBox]}>35</Text>
                </View>
                <Text style={[styles.text76, styles.textLayout1]}>
                  المكتملة
                </Text>
              </View>
              <View style={styles.frameParent9}>
                <View style={styles.parent25}>
                  <Text
                    style={[styles.text77, styles.textLayout]}
                  >{`65 % `}</Text>
                  <View
                    style={[styles.rectangleParent4, styles.groupChild16Layout]}
                  >
                    <View
                      style={[styles.groupChild16, styles.groupChild16Layout]}
                    />
                    <View
                      style={[styles.groupChild19, styles.groupChildLayout]}
                    />
                  </View>
                  <Text style={[styles.text75, styles.textFlexBox]}>65</Text>
                </View>
                <Text style={[styles.text79, styles.textFlexBox]}>
                  غير مكتملة
                </Text>
              </View>
            </View>
            <Text style={[styles.text80, styles.textTypo1]}>
              <Text
                style={styles.text81}
              >{`جميع الخدمات المقدمة منذ بداية العقد `}</Text>
              <Text style={styles.text82}> ( 100 )</Text>
              <Text style={styles.text81}>{` 
`}</Text>
            </Text>
          </View>
          <View style={[styles.moreInformaionChild, styles.iconPosition1]} />
        </Pressable>
      </Pressable>
      <Image
        style={[styles.sideMenuChild1, styles.text67Layout]}
        resizeMode="cover"
        source={require("../assets/group-238694.png")}
      />
      <View style={[styles.iphoneXOrNewer, styles.iconPosition1]}>
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
      <View style={[styles.webViewbottom, styles.iconPosition1]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo7: {
    fontSize: FontSize.size_sm,
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  sideLayout: {
    height: 1,
    width: 181,
    borderTopWidth: 0.5,
    borderColor: Color.whait,
    borderStyle: "solid",
    left: 179,
    position: "absolute",
  },
  groupLayout: {
    width: 196,
    height: 36,
    position: "absolute",
  },
  menuFlexBox1: {
    width: 81,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo6: {
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  frameLayout: {
    height: 24,
    width: 24,
    marginLeft: 8,
  },
  menuFlexBox: {
    width: 108,
    left: 251,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  logoLayout: {
    height: 29,
    width: 100,
  },
  frameIconLayout: {
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  moreLayout: {
    height: 650,
    width: 300,
    top: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 152,
    width: 274,
    left: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo4: {
    marginLeft: 3.2,
    color: Color.black,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs_6,
    height: 13,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  parent1Position: {
    top: 26,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo3: {
    width: 25,
    height: 13,
    display: "flex",
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  textPosition: {
    left: 150,
    fontSize: FontSize.size_5xs,
    color: Color.praimary,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  textClr: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  mediumSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo2: {
    fontSize: FontSize.size_xs_2,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    marginLeft: 4.8,
    width: 13,
    height: 13,
  },
  textLayout1: {
    width: 38,
    height: 13,
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  iconPosition1: {
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    height: 19,
    lineHeight: 20,
    fontSize: FontSize.size_3xs_6,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontSize: FontSize.size_smi_8,
    height: 19,
    lineHeight: 20,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupChild5Layout: {
    height: 138,
    width: 274,
  },
  groupChildPosition: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text61Position: {
    top: 19,
    position: "absolute",
  },
  textTypo5: {
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 12,
    width: 12,
    borderRadius: Border.br_9xs,
    marginLeft: 4.8,
  },
  polygonParentShadowBox: {
    height: 14,
    elevation: 2.7,
    shadowRadius: 2.7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 22,
  },
  text67Layout: {
    width: 18,
    position: "absolute",
  },
  polygonShadowBox: {
    left: 30,
    height: 14,
    elevation: 2.7,
    shadowRadius: 2.7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 22,
    position: "absolute",
  },
  parentPosition: {
    top: 45,
    position: "absolute",
  },
  groupChild15Layout: {
    height: 96,
    width: 274,
    position: "absolute",
  },
  textLayout: {
    width: 26,
    lineHeight: 7,
    height: 6,
    fontSize: FontSize.size_3xs_6,
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    alignItems: "center",
  },
  groupChild16Layout: {
    width: 152,
    height: 6,
  },
  groupChildLayout: {
    borderRadius: Border.br_5xs,
    top: 0,
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  text: {
    textAlign: "center",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    marginTop: 4,
    textAlign: "left",
    fontWeight: "300",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  frameChild: {
    height: 45,
    marginLeft: 8,
    width: 45,
  },
  frameParent: {
    left: 195,
    alignItems: "center",
    flexDirection: "row",
    top: 104,
    position: "absolute",
  },
  sideMenuChild: {
    top: 181,
  },
  groupChild: {
    left: 196,
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.whait,
    top: 0,
    height: 36,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    height: 36,
  },
  text2: {
    color: Color.praimary,
  },
  frameIcon: {
    overflow: "hidden",
  },
  menu1: {
    top: 6,
    left: 99,
    justifyContent: "center",
  },
  groupParent: {
    top: 229,
    height: 36,
    left: 179,
    width: 196,
  },
  text3: {
    color: Color.whait,
  },
  menu2: {
    top: 297,
    left: 278,
    justifyContent: "flex-end",
  },
  menu3: {
    top: 359,
  },
  sideMenuItem: {
    top: 499,
  },
  sideMenuInner: {
    top: 631,
  },
  text5: {
    textAlign: "right",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  parent: {
    top: 553,
    left: 245,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  poweredBy: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontWeight: "300",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  logo1Icon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  logo: {
    marginTop: 12,
  },
  poweredByParent: {
    top: 653,
    left: 219,
    alignItems: "center",
    position: "absolute",
  },
  frameIcon3: {
    marginLeft: 8,
  },
  menu31: {
    top: 421,
  },
  groupItem: {
    borderRadius: Border.br_5xs,
    top: 0,
    height: 152,
    width: 274,
    left: 0,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  text7: {
    width: 60,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    fontWeight: "300",
  },
  text8: {
    width: 62,
  },
  group: {
    left: 124,
    justifyContent: "flex-end",
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  text9: {
    width: 46,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    fontWeight: "300",
  },
  text10: {
    width: 53,
  },
  container: {
    left: 0,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  text11: {
    width: 44,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    fontWeight: "300",
  },
  text12: {
    width: 54,
  },
  frameView: {
    left: 1,
  },
  text13: {
    lineHeight: 20,
    color: Color.praimary,
    fontWeight: "300",
  },
  parent1: {
    left: 159,
  },
  frameContainer: {
    top: 56,
    width: 249,
    height: 38,
    left: 13,
    position: "absolute",
  },
  groupInner: {
    top: 43,
    borderColor: Color.gray,
    borderTopWidth: 0.4,
    width: 275,
    height: 0,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  frameInner: {
    width: 165,
    height: 8,
  },
  text15: {
    width: 37,
    height: 13,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  text16: {
    left: 73,
    width: 37,
    height: 13,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  text17: {
    width: 25,
    height: 13,
    display: "flex",
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupView: {
    width: 187,
    marginTop: 3.2,
    height: 13,
  },
  groupParent1: {
    left: 44,
    top: 10,
    alignItems: "center",
    position: "absolute",
  },
  text18: {
    width: 68,
    fontWeight: "600",
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
  },
  mediumButton: {
    borderColor: Color.praimary,
    borderWidth: 1.6,
    width: 112,
    borderStyle: "solid",
  },
  text19: {
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "right",
    color: Color.whait,
  },
  frameIcon4: {
    overflow: "hidden",
  },
  mediumButton1: {
    marginLeft: 24.8,
    backgroundColor: Color.praimary,
  },
  mediumButtonParent: {
    top: 114,
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  rectangleView: {
    borderRadius: Border.br_5xs,
    top: 0,
    height: 152,
    width: 274,
    left: 0,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  text28: {
    left: 150,
    fontSize: FontSize.size_5xs,
    color: Color.praimary,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  text29: {
    left: 69,
    width: 41,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleGroup: {
    top: 171,
  },
  groupChild1: {
    borderRadius: Border.br_5xs,
    top: 0,
    height: 152,
    width: 274,
    left: 0,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  rectangleContainer: {
    top: 342,
  },
  groupChild3: {
    borderRadius: Border.br_5xs,
    top: 0,
    height: 152,
    width: 274,
    left: 0,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  text54: {
    left: 147,
    width: 40,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    color: Color.praimary,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  text56: {
    color: Color.praimary,
    left: 0,
    top: 0,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent1: {
    top: 514,
  },
  groupContainer: {
    top: 440,
    left: 12,
    height: 666,
    width: 274,
    position: "absolute",
  },
  icon: {
    marginLeft: -34,
    top: 32,
    width: 69,
    height: 25,
  },
  text59: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    width: 37,
  },
  text60: {
    width: 89,
    marginLeft: 148.8,
  },
  parent17: {
    top: 402,
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild5: {
    height: 138,
    width: 274,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text61: {
    width: 138,
    fontSize: FontSize.size_smi_8,
    height: 19,
    lineHeight: 20,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    left: 124,
  },
  text62: {
    width: 59,
    color: Color.black,
    fontWeight: "300",
  },
  frameChild4: {
    backgroundColor: Color.binary,
  },
  frameChild5: {
    backgroundColor: Color.praimary,
  },
  parent19: {
    marginLeft: 6.4,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild6: {
    backgroundColor: Color.colorGold,
  },
  parent20: {
    marginLeft: 6.4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild7: {
    backgroundColor: Color.ternary,
  },
  frameChild8: {
    backgroundColor: Color.colorChocolate,
  },
  parent22: {
    marginLeft: 6.4,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent4: {
    top: 58,
    left: 102,
    width: 159,
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    width: 80,
    height: 80,
    left: 13,
  },
  polygonIcon: {
    top: 14,
    left: 14,
    height: 5,
    width: 6,
    position: "absolute",
  },
  groupChild6: {
    borderRadius: 1,
    height: 11,
    width: 22,
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text67: {
    top: 2,
    left: 2,
    fontSize: FontSize.size_6xs_4,
    lineHeight: 6,
    height: 6,
    color: Color.black,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
  },
  polygonParent: {
    top: 34,
    left: 78,
    position: "absolute",
  },
  polygonGroup: {
    top: 82,
  },
  polygonContainer: {
    top: 70,
    left: 58,
    position: "absolute",
  },
  polygonParent1: {
    top: 10,
  },
  polygonParent2: {
    left: 5,
    height: 14,
    elevation: 2.7,
    shadowRadius: 2.7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 22,
  },
  rectangleParent2: {
    top: 122,
    left: 13,
    position: "absolute",
  },
  text72: {
    color: Color.praimary,
    textAlign: "left",
    fontWeight: "700",
  },
  text73: {
    color: Color.ternary,
    fontSize: FontSize.size_3xs_6,
    fontWeight: "300",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  frame: {
    marginTop: 3.2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  parent23: {
    alignItems: "flex-end",
  },
  ellipseIcon: {
    width: 36,
    marginLeft: 6.4,
    height: 36,
  },
  frameParent6: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon8: {
    marginLeft: 140,
  },
  frameParent5: {
    marginLeft: -137.2,
    top: 63,
    width: 274,
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild15: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    top: 0,
    backgroundColor: Color.whait,
    left: 0,
  },
  text74: {
    textAlign: "left",
  },
  groupChild16: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild17: {
    left: 101,
    width: 51,
    height: 6,
    position: "absolute",
    backgroundColor: Color.praimary,
  },
  rectangleParent4: {
    marginLeft: 8,
  },
  text75: {
    width: 16,
    height: 6,
    lineHeight: 20,
    fontSize: FontSize.size_3xs_6,
    color: Color.praimary,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    justifyContent: "center",
  },
  text76: {
    marginLeft: 14.4,
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_3xs_6,
    fontWeight: "300",
  },
  text77: {
    textAlign: "center",
    justifyContent: "center",
  },
  groupChild19: {
    left: 43,
    width: 109,
    height: 6,
    position: "absolute",
    backgroundColor: Color.praimary,
  },
  parent25: {
    flexDirection: "row",
  },
  text79: {
    marginLeft: 6.4,
    color: Color.black,
    lineHeight: 20,
    fontSize: FontSize.size_3xs_6,
    height: 13,
    textAlign: "right",
    width: 45,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent9: {
    marginTop: 12.8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent7: {
    left: 6,
  },
  text81: {
    color: Color.black,
  },
  text82: {
    color: Color.praimary,
  },
  text80: {
    top: 13,
    left: 36,
    width: 203,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent3: {
    top: 280,
    left: 13,
  },
  moreInformaionChild: {
    marginLeft: -133.2,
    top: 1146,
    width: 266,
    height: 50,
    overflow: "hidden",
  },
  moreInformaion: {
    marginTop: -324.8,
    backgroundColor: Color.colorGray_100,
    left: 0,
  },
  moreInformaionWrapper: {
    marginTop: -325,
    left: -214,
  },
  sideMenuChild1: {
    left: 105,
    height: 18,
    top: 104,
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
    width: 24,
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
    height: 6,
    width: 6,
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
    height: 21,
    width: 54,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  webViewbottom: {
    marginLeft: -187.5,
    bottom: 0,
    width: 375,
    height: 34,
    backgroundColor: Color.praimary,
  },
  sideMenu: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.praimary,
  },
});

export default SideMenu5;
