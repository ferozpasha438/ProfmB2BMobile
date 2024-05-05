import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const POPUPLOGIN = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.popUpLogIn}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`اسم المشروع : `}</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text2, styles.textFlexBox]}>
              صيانة روتينية
            </Text>
            <Text style={[styles.text3, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Text style={[styles.text4, styles.textFlexBox]}>
              01 / 11 /2023
            </Text>
            <Text style={[styles.text5, styles.textTypo5]}>تاريخ الطلب :</Text>
          </View>
          <View style={[styles.frameView, styles.containerPosition]}>
            <Text style={[styles.text6, styles.textTypo4]}>23655</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`رقم الطلب       : `}</Text>
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2386053.png")}
          />
          <View style={styles.groupView}>
            <Text style={[styles.text8, styles.textTypo3]}>غير مكتمل</Text>
            <Text style={[styles.text9, styles.textTypo3]}>قيد التنفيذ</Text>
            <Text style={[styles.text10, styles.textTypo4]}>مكتمل</Text>
          </View>
        </View>
        <View style={styles.mediumButtonParent}>
          <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
            <Text style={[styles.text11, styles.textTypo2]}>تعديل الطلب</Text>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </View>
          <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
            <Text style={[styles.text12, styles.textTypo2]}>تفاصيل الطلب</Text>
            <Image
              style={[styles.frameIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildLayout1]}>
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>ممشى جدة</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`اسم المشروع : `}</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text2, styles.textFlexBox]}>صيانة وقائية</Text>
            <Text style={[styles.text3, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Text style={[styles.text4, styles.textFlexBox]}>31 / 10/2023</Text>
            <Text style={[styles.text5, styles.textTypo5]}>تاريخ الطلب :</Text>
          </View>
          <View style={[styles.frameView, styles.containerPosition]}>
            <Text style={[styles.text6, styles.textTypo4]}>25416</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`رقم الطلب       : `}</Text>
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2386054.png")}
          />
          <View style={styles.groupView}>
            <Text style={[styles.text21, styles.textLayout1]}>غير مكتمل</Text>
            <Text style={[styles.text22, styles.textFlexBox]}>قيد التنفيذ</Text>
            <Text style={[styles.text10, styles.textTypo4]}>مكتمل</Text>
          </View>
        </View>
        <View style={styles.mediumButtonParent}>
          <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
            <Text style={[styles.text11, styles.textTypo2]}>تعديل الطلب</Text>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </View>
          <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
            <Text style={[styles.text12, styles.textTypo2]}>تفاصيل الطلب</Text>
            <Image
              style={[styles.frameIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupChildLayout1]}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>جدة سوبر دوم</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`اسم المشروع : `}</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text2, styles.textFlexBox]}>
              صيانة روتينية
            </Text>
            <Text style={[styles.text3, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Text style={[styles.text4, styles.textFlexBox]}>15 / 10/2023</Text>
            <Text style={[styles.text5, styles.textTypo5]}>تاريخ الطلب :</Text>
          </View>
          <View style={[styles.frameView, styles.containerPosition]}>
            <Text style={[styles.text6, styles.textTypo4]}>26890</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`رقم الطلب       : `}</Text>
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2386053.png")}
          />
          <View style={styles.groupView}>
            <Text style={[styles.text21, styles.textLayout1]}>غير مكتمل</Text>
            <Text style={[styles.text9, styles.textTypo3]}>قيد التنفيذ</Text>
            <Text style={[styles.text10, styles.textTypo4]}>مكتمل</Text>
          </View>
        </View>
        <View style={styles.mediumButtonParent}>
          <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
            <Text style={[styles.text11, styles.textTypo2]}>تعديل الطلب</Text>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </View>
          <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
            <Text style={[styles.text12, styles.textTypo2]}>تفاصيل الطلب</Text>
            <Image
              style={[styles.frameIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChildLayout1]}>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>
              نادي جدة لليخوت
            </Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`اسم المشروع : `}</Text>
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.text2, styles.textFlexBox]}>صيانة وقائية</Text>
            <Text style={[styles.text3, styles.textTypo5]}>نوع الصيانة :</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Text style={[styles.text4, styles.textFlexBox]}>10 / 10/2023</Text>
            <Text style={[styles.text5, styles.textTypo5]}>تاريخ الطلب :</Text>
          </View>
          <View style={[styles.frameView, styles.containerPosition]}>
            <Text style={[styles.text6, styles.textTypo4]}>21584</Text>
            <Text
              style={[styles.text1, styles.textTypo5]}
            >{`رقم الطلب       : `}</Text>
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2386055.png")}
          />
          <View style={styles.groupView}>
            <Text style={[styles.text47, styles.textFlexBox]}>غير مكتمل</Text>
            <Text style={[styles.text22, styles.textFlexBox]}>قيد التنفيذ</Text>
            <Text style={[styles.text49, styles.textTypo4]}>مكتمل</Text>
          </View>
        </View>
        <View style={styles.mediumButtonParent}>
          <View style={[styles.mediumButton, styles.mediumSpaceBlock]}>
            <Text style={[styles.text11, styles.textTypo2]}>تعديل الطلب</Text>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </View>
          <View style={[styles.mediumButton1, styles.mediumSpaceBlock]}>
            <Text style={[styles.text12, styles.textTypo2]}>تفاصيل الطلب</Text>
            <Image
              style={[styles.frameIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
      </View>
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
            source={require("../assets/wifi5.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal2.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side7.png")}
        />
      </View>
      <View style={styles.parent16}>
        <Text style={[styles.text52, styles.textTypo3]}>رؤية الكل</Text>
        <Text style={styles.text53}>الطلبات الأخيرة</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <Text style={[styles.text54, styles.text54Position]}>{`الخدمات المقدمة 
`}</Text>
        <View style={[styles.frameParent2, styles.parentFlexBox]}>
          <View style={styles.parent17}>
            <Text style={styles.text55}>أعمال السباكة</Text>
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent18}>
            <Text style={styles.text55}>أعمال الكهرباء</Text>
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent19}>
            <Text style={styles.text55}>أعمال النظافة</Text>
            <View style={[styles.frameChild4, styles.frameChildLayout]} />
          </View>
          <View style={styles.parent19}>
            <Text style={styles.text55}>أعمال التكييف</Text>
            <View style={[styles.frameChild5, styles.frameChildLayout]} />
          </View>
          <View style={[styles.parent21, styles.parentFlexBox]}>
            <Text style={styles.text55}>أخرى</Text>
            <View style={[styles.frameChild6, styles.frameChildLayout]} />
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.text54Position]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild5} />
          <Text style={[styles.text60, styles.textFlexBox]}>37%</Text>
        </View>
        <View style={[styles.polygonGroup, styles.polygonShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild5} />
          <Text style={[styles.text60, styles.textFlexBox]}>10%</Text>
        </View>
        <View style={[styles.polygonContainer, styles.polygonParentShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild5} />
          <Text style={[styles.text60, styles.textFlexBox]}>13%</Text>
        </View>
        <View style={[styles.polygonParent1, styles.polygonShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild5} />
          <Text style={[styles.text60, styles.textFlexBox]}>8%</Text>
        </View>
        <View style={[styles.polygonParent2, styles.parentPosition]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild5} />
          <Text style={[styles.text60, styles.textFlexBox]}>30%</Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParent3SpaceBlock]}>
        <Image
          style={styles.frameIcon4}
          resizeMode="cover"
          source={require("../assets/frame10.png")}
        />
        <View style={styles.frameParent4}>
          <View style={styles.parent22}>
            <Text style={[styles.text65, styles.textTypo2]}>مرحبا بك</Text>
            <View style={styles.wrapper}>
              <Text style={styles.text66}>ارامكو السعودية</Text>
            </View>
          </View>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1674.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.groupChild14Layout]}>
        <View style={[styles.groupChild14, styles.groupChild14Layout]} />
        <View style={[styles.frameParent5, styles.parentPosition]}>
          <View style={styles.frameParent6}>
            <View style={styles.frameParent6}>
              <Text style={[styles.text67, styles.textLayout]}>{` 35 % `}</Text>
              <View style={[styles.rectangleParent4, styles.text68SpaceBlock]}>
                <View
                  style={[styles.groupChild15, styles.groupChildPosition]}
                />
                <View style={[styles.groupChild16, styles.groupChildLayout]} />
              </View>
              <Text style={[styles.text68, styles.text68SpaceBlock]}>35</Text>
            </View>
            <Text style={[styles.text69, styles.textLayout1]}>المكتملة</Text>
          </View>
          <View style={[styles.frameParent7, styles.parentSpaceBlock]}>
            <View style={styles.parent24}>
              <Text style={[styles.text70, styles.textLayout]}>{`65 % `}</Text>
              <View style={[styles.rectangleParent4, styles.text68SpaceBlock]}>
                <View
                  style={[styles.groupChild15, styles.groupChildPosition]}
                />
                <View style={[styles.groupChild18, styles.groupChildLayout]} />
              </View>
              <Text style={[styles.text68, styles.text68SpaceBlock]}>65</Text>
            </View>
            <Text style={[styles.text72, styles.textFlexBox]}>غير مكتملة</Text>
          </View>
        </View>
        <Text style={styles.text73}>
          <Text
            style={styles.text74}
          >{`جميع الخدمات المقدمة منذ بداية العقد `}</Text>
          <Text style={styles.text75}> ( 100 )</Text>
          <Text style={styles.text74}>{` 
`}</Text>
        </Text>
      </View>
      <View style={styles.popUpLogInChild} />
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.groupChildBg]}>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame82.png")}
            />
            <Text style={[styles.text77, styles.textTypo1]}>التقارير</Text>
          </View>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame83.png")}
            />
            <Text style={[styles.text77, styles.textTypo1]}>السجل</Text>
          </View>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("MOREInformaion17")}
          >
            <View style={styles.menu31}>
              <View style={styles.container1}>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame84.png")}
            />
            <Text style={[styles.text77, styles.textTypo1]}>الطلبات</Text>
          </View>
          <View style={styles.menu2}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame85.png")}
            />
            <Text style={[styles.text80, styles.textTypo1]}>الرئيسية</Text>
          </View>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.popUpLogInItem, styles.popUpLogInItemPosition]} />
      <View style={[styles.loginWithFaceId, styles.popUpLogInItemPosition]}>
        <View style={[styles.faceId, styles.groupChildShadowBox]}>
          <View
            style={[styles.attendanceSuccessful, styles.popUpLogInItemPosition]}
          >
            <Image
              style={styles.httpslottiefilescomanimatIcon}
              resizeMode="cover"
              source={require("../assets/httpslottiefilescomanimationscorrectejpoinrfua.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.text81, styles.textTypo]}>
                تسجيل دخول ناجح
              </Text>
              <Text style={[styles.text82, styles.textTypo]}>
                يمكنك الأن الإطلاع على جميع الإحصائيات و الطلبات والتحكم فيها
                بالإضافة إلى إمكانية طلب خدمة جديدة
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/vector9.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 190,
    width: 343,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo5: {
    marginLeft: 4,
    color: Color.black,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    top: 32,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo4: {
    width: 31,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  textTypo3: {
    width: 46,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  mediumSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  textTypo2: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout1: {
    marginLeft: 6,
    width: 16,
    height: 16,
  },
  textLayout1: {
    width: 47,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    height: 6,
    position: "absolute",
  },
  groupChild4Layout: {
    height: 173,
    width: 343,
  },
  groupChildPosition: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text54Position: {
    top: 24,
    position: "absolute",
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
    marginLeft: 6,
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
  },
  polygonShadowBox: {
    left: 38,
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
  parentPosition: {
    top: 56,
    position: "absolute",
  },
  frameParent3SpaceBlock: {
    marginLeft: -171.5,
    alignItems: "center",
  },
  groupChild14Layout: {
    height: 120,
    width: 343,
    position: "absolute",
  },
  textLayout: {
    width: 32,
    lineHeight: 9,
    height: 8,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  text68SpaceBlock: {
    marginLeft: 10,
    height: 8,
  },
  groupChildLayout: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  parentSpaceBlock: {
    marginTop: 16,
    alignItems: "center",
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.whait,
    left: 0,
  },
  textTypo1: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  popUpLogInItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  text: {
    width: 75,
    height: 16,
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
  },
  text1: {
    width: 77,
  },
  parent: {
    left: 155,
    top: 0,
    position: "absolute",
  },
  text2: {
    width: 57,
    height: 16,
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
  },
  text3: {
    width: 66,
  },
  group: {
    flexDirection: "row",
    top: 0,
  },
  text4: {
    width: 55,
    height: 16,
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
  },
  text5: {
    width: 68,
  },
  container: {
    left: 1,
  },
  text6: {
    lineHeight: 25,
    color: Color.praimary,
    fontWeight: "300",
  },
  frameView: {
    left: 199,
  },
  frameParent: {
    top: 70,
    width: 311,
    height: 48,
    left: 16,
    position: "absolute",
  },
  groupItem: {
    top: 54,
    borderColor: Color.gray,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderStyle: "solid",
  },
  frameChild: {
    width: 206,
    height: 10,
  },
  text8: {
    left: 188,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  text9: {
    left: 91,
    color: Color.colorLightsteelblue_100,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  text10: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupView: {
    width: 234,
    marginTop: 4,
    height: 16,
  },
  groupParent: {
    left: 55,
    top: 12,
    alignItems: "center",
    position: "absolute",
  },
  text11: {
    width: 85,
    fontWeight: "600",
    lineHeight: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.praimary,
  },
  mediumButton: {
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 140,
    borderStyle: "solid",
  },
  text12: {
    color: Color.whait,
    fontWeight: "600",
    lineHeight: 25,
    textAlign: "right",
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
  rectangleParent: {
    top: 550,
    left: 15,
    height: 190,
  },
  groupInner: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  text21: {
    left: 187,
    fontWeight: "700",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  text22: {
    left: 86,
    width: 51,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 764,
    left: 15,
    height: 190,
  },
  rectangleView: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  rectangleContainer: {
    top: 978,
    left: 15,
    height: 190,
  },
  groupChild2: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 190,
    width: 343,
    position: "absolute",
  },
  text47: {
    left: 184,
    width: 50,
    fontWeight: "700",
    height: 16,
    alignItems: "center",
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  text49: {
    fontWeight: "700",
    color: Color.praimary,
    left: 0,
    position: "absolute",
    top: 0,
  },
  rectangleParent1: {
    top: 1192,
    left: 15,
    height: 190,
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
    left: "50%",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  text52: {
    height: 24,
    color: Color.colorLightsteelblue_100,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  text53: {
    width: 111,
    marginLeft: 186,
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  parent16: {
    top: 502,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  groupChild4: {
    height: 173,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 5,
    shadowRadius: 5,
  },
  text54: {
    width: 172,
    fontSize: FontSize.size_base,
    height: 24,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    left: 155,
  },
  text55: {
    width: 74,
    color: Color.black,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
  },
  frameChild2: {
    backgroundColor: Color.binary,
  },
  parent17: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild3: {
    backgroundColor: Color.praimary,
  },
  parent18: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild4: {
    backgroundColor: Color.colorGold,
  },
  parent19: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild5: {
    backgroundColor: Color.ternary,
  },
  frameChild6: {
    backgroundColor: Color.colorChocolate,
  },
  parent21: {
    marginLeft: 8,
    alignItems: "center",
  },
  frameParent2: {
    top: 72,
    left: 128,
    width: 199,
    flexWrap: "wrap",
    alignItems: "flex-end",
    position: "absolute",
  },
  vectorIcon: {
    width: 100,
    height: 100,
    left: 16,
  },
  polygonIcon: {
    left: 10,
    width: 7,
    top: 12,
  },
  groupChild5: {
    borderRadius: 2,
    height: 14,
    width: 27,
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text60: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 7,
    width: 23,
    height: 7,
    textAlign: "center",
    justifyContent: "center",
    color: Color.black,
    fontWeight: "600",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  polygonParent: {
    top: 42,
    left: 98,
    position: "absolute",
  },
  polygonGroup: {
    top: 103,
  },
  polygonContainer: {
    top: 87,
    left: 73,
    position: "absolute",
  },
  polygonParent1: {
    top: 12,
  },
  polygonParent2: {
    left: 6,
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
  },
  rectangleParent2: {
    top: 153,
    left: 16,
    position: "absolute",
  },
  frameIcon4: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  text65: {
    textAlign: "left",
    fontWeight: "700",
    color: Color.praimary,
  },
  text66: {
    color: Color.ternary,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  wrapper: {
    justifyContent: "center",
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  parent22: {
    alignItems: "flex-end",
  },
  ellipseIcon: {
    width: 45,
    height: 45,
    marginLeft: 8,
  },
  frameParent4: {
    marginLeft: 175,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent3: {
    top: 79,
    left: "50%",
    flexDirection: "row",
    width: 343,
    marginLeft: -171.5,
    position: "absolute",
  },
  groupChild14: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 5,
    shadowRadius: 5,
    backgroundColor: Color.whait,
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  text67: {
    height: 8,
    textAlign: "left",
  },
  groupChild15: {
    width: 190,
    height: 8,
  },
  groupChild16: {
    left: 126,
    width: 64,
    height: 8,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  rectangleParent4: {
    width: 190,
  },
  text68: {
    width: 20,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent6: {
    alignItems: "center",
    flexDirection: "row",
  },
  text69: {
    marginLeft: 18,
    color: Color.black,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  text70: {
    height: 8,
    textAlign: "center",
    justifyContent: "center",
  },
  groupChild18: {
    left: 54,
    width: 136,
    height: 8,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  parent24: {
    flexDirection: "row",
  },
  text72: {
    width: 56,
    marginLeft: 8,
    color: Color.black,
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    height: 16,
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  frameParent7: {
    flexDirection: "row",
  },
  frameParent5: {
    left: 8,
  },
  text74: {
    color: Color.black,
  },
  text75: {
    color: Color.praimary,
  },
  text73: {
    top: 16,
    left: 45,
    width: 254,
    height: 24,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rectangleParent3: {
    top: 350,
    left: 16,
  },
  popUpLogInChild: {
    marginLeft: -166.5,
    top: 1433,
    width: 333,
    height: 63,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon5: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text77: {
    color: Color.gray,
    fontWeight: "300",
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  container1: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.praimary,
    borderStyle: "solid",
    flexDirection: "row",
  },
  menu31: {
    height: 52,
    width: 74,
    alignItems: "center",
  },
  text80: {
    fontWeight: "700",
    color: Color.praimary,
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    width: 375,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
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
    width: 375,
    backgroundColor: Color.whait,
    left: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  popUpLogInItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 130,
    height: 130,
  },
  text81: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: 256,
    justifyContent: "center",
    height: 35,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
  },
  text82: {
    width: 292,
    height: 87,
    marginTop: 8,
    fontSize: FontSize.size_base,
    color: Color.colorLightsteelblue_100,
  },
  attendanceSuccessful: {
    marginTop: -138,
    marginLeft: -145.5,
    height: 276,
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "5.83%",
    top: "5.99%",
    right: "88.34%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  faceId: {
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 334,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
  },
  loginWithFaceId: {
    marginTop: -167,
    marginLeft: -171.5,
    alignItems: "center",
    justifyContent: "center",
  },
  popUpLogIn: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default POPUPLOGIN;
