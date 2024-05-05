import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const DesihnSystemArabic = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.desihnSystemArabic}>
      <View style={[styles.frameParent, styles.linePosition]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-43.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-33.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <View style={[styles.rectangleView, styles.frameChildLayout]} />
        </View>
        <View style={styles.ellipseGroup}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-52.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-42.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-32.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <View style={[styles.frameChild7, styles.frameChildLayout]} />
        </View>
        <View style={styles.ellipseGroup}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-51.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <View style={[styles.frameChild13, styles.frameChildLayout]} />
        </View>
        <View style={styles.ellipseGroup}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <View style={[styles.frameChild19, styles.frameChildLayout]} />
        </View>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo26]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={[styles.text1, styles.textSpaceBlock]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={[styles.text2, styles.textTypo25]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={[styles.text3, styles.textTypo24]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={styles.text4}>السلام عليكم ورحمة الله و بركاته</Text>
        <Text style={[styles.text5, styles.textSpaceBlock]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={[styles.text6, styles.textSpaceBlock]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={[styles.text7, styles.textSpaceBlock]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={styles.text8}>السلام عليكم ورحمة الله و بركاته</Text>
      </View>
      <Text style={[styles.colours, styles.logoTypo]}>Colours</Text>
      <Text style={[styles.fonts, styles.fontsPosition]}>Fonts</Text>
      <Text style={[styles.logo, styles.logoTypo]}>Logo</Text>
      <Text style={[styles.compound, styles.logoTypo]}>Compound</Text>
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/3-1-11.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/3-1-2.png")}
      />
      <View style={styles.desihnSystemArabicChild} />
      <View style={styles.desihnSystemArabicItem} />
      <View style={styles.desihnSystemArabicInner} />
      <View style={styles.desihnSystemArabicChild1} />
      <View style={[styles.button, styles.typeBorder1]}>
        <View style={[styles.property1button, styles.property1buttonLayout]}>
          <Text style={[styles.text9, styles.textTypo23]}>تسجيل الدخول</Text>
        </View>
        <View style={[styles.property1button2, styles.property1buttonBorder]}>
          <Text style={[styles.text10, styles.textTypo23]}>تسجيل الدخول</Text>
        </View>
      </View>
      <View style={[styles.typeOfBusiness, styles.typeBorder1]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-157.png")}
          />
        </View>
        <View
          style={[styles.property1variant7, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-158.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant8, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-159.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant9, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1510.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant10, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1511.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant2, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text16, styles.textTypo22]}>{`تنظيف `}</Text>
              <Text style={[styles.text17, styles.textTypo22]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo22]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo20]}>
                جميع المرافق
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text20, styles.textTypo19]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant3, styles.property1variantLayout8]}
        >
          <View
            style={[
              styles.property1variant3Inner,
              styles.property1variant2InnerPosition,
            ]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text17, styles.textTypo22]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo22]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo20]}>
                جميع المرافق
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text style={[styles.text24, styles.textTypo22]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text25, styles.textTypo18]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant4, styles.property1variantChildLayout]}
        >
          <View
            style={[
              styles.property1variant4Inner,
              styles.property1variant4InnerPosition,
            ]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild9, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text26, styles.textTypo22]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo22]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo20]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo22]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text30, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant5, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild16, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout7]} />
              <Text style={[styles.text17, styles.textTypo22]}>صيانة</Text>
              <Text style={[styles.text32, styles.textTypo22]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo20]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo22]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text35, styles.textTypo18]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant6, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild23, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild29, styles.groupChildLayout6]} />
              <Text style={[styles.text17, styles.textTypo22]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo22]}>زراعة</Text>
              <Text style={[styles.text38, styles.textTypo20]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo22]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text35, styles.textTypo18]}>نوع الأعمال</Text>
        </View>
      </View>
      <View style={[styles.typeOfBusiness2, styles.typeBorder1]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-157.png")}
          />
        </View>
        <View
          style={[styles.property1variant71, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1543.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant81, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1544.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant91, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1545.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant21, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner1, styles.groupChildLayout5]}
          >
            <View style={[styles.rectangleParent2, styles.groupChildLayout5]}>
              <View style={[styles.groupChild30, styles.groupChildLayout5]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <Text style={[styles.text45, styles.textTypo17]}>
                القطاع الخاص
              </Text>
              <Text style={[styles.text46, styles.textTypo16]}>
                القطاع العام
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                القطاع التطوعي
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text48, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant31, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant3Inner1, styles.groupChildLayout4]}
          >
            <View style={[styles.rectangleParent3, styles.groupChildLayout4]}>
              <View style={[styles.groupChild35, styles.groupChildLayout4]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <Text style={[styles.text46, styles.textTypo16]}>
                القطاع العام
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                القطاع التطوعي
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text style={[styles.text51, styles.textTypo17]}>
                القطاع الخاص
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text52, styles.textFlexBox]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant41, styles.property1variantLayout6]}
        >
          <View
            style={[styles.property1variant4Inner1, styles.groupChildLayout5]}
          >
            <View style={[styles.rectangleParent2, styles.groupChildLayout5]}>
              <View style={[styles.groupChild41, styles.groupChildLayout5]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text53, styles.textTypo16]}>
                القطاع العام
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                القطاع التطوعي
              </Text>
              <Text style={[styles.text45, styles.textTypo17]}>
                القطاع الخاص
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text56, styles.textTypo14]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant51, styles.property1variantLayout6]}
        >
          <View
            style={[styles.property1variant5Inner1, styles.groupChildLayout4]}
          >
            <View style={[styles.rectangleParent3, styles.groupChildLayout4]}>
              <View style={[styles.groupChild47, styles.groupChildLayout4]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild52, styles.groupChildLayout6]} />
              <Text style={[styles.text46, styles.textTypo16]}>
                القطاع العام
              </Text>
              <Text style={[styles.text58, styles.textTypo15]}>
                القطاع التطوعي
              </Text>
              <Text style={[styles.text45, styles.textTypo17]}>
                القطاع الخاص
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text60, styles.textTypo14]}>نوع الأعمال</Text>
        </View>
      </View>
      <View style={[styles.mediumButton, styles.serviceTypeBorder]}>
        <View
          style={[styles.property1button1, styles.property1buttonSpaceBlock]}
        >
          <Text style={[styles.text61, styles.textTypo13]}>تفاصيل الطلب</Text>
          <Image
            style={[styles.frameIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View
          style={[styles.property1button21, styles.property1buttonSpaceBlock]}
        >
          <Text style={[styles.text62, styles.textTypo13]}>تعديل الطلب</Text>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group28.png")}
          />
        </View>
      </View>
      <View style={[styles.serviceClass, styles.classLayout]}>
        <View
          style={[styles.property1default2, styles.property1default2Layout]}
        >
          <Text style={[styles.text63, styles.textTypo12]}>خدمة مخطط لها</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant32, styles.property1variantLayout5]}
        >
          <Text style={[styles.text64, styles.textPosition5]}>طلب خدمة</Text>
          <Image
            style={[styles.frameIcon3, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant22, styles.property1default2Layout]}
        >
          <Text style={[styles.text65, styles.textTypo12]}>خدمة مخطط لها</Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View
          style={[styles.property1variant42, styles.property1variantLayout5]}
        >
          <Text style={[styles.text66, styles.textPosition5]}>طلب خدمة</Text>
          <Image
            style={[styles.frameIcon3, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.dateClass, styles.classLayout]}>
        <View
          style={[styles.property1default3, styles.property1variantLayout4]}
        >
          <Text style={[styles.text67, styles.textPosition4]}>شهري</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant33, styles.property1variantLayout4]}
        >
          <Text style={[styles.text67, styles.textPosition4]}>سنوي</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant23, styles.property1variantLayout4]}
        >
          <Text style={[styles.text69, styles.textPosition4]}>شهري</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View
          style={[styles.property1variant43, styles.property1variantLayout4]}
        >
          <Text style={[styles.text69, styles.textPosition4]}>سنوي</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.maintenanceType, styles.filterBorder]}>
        <View
          style={[styles.property1default4, styles.property1variantLayout3]}
        >
          <Text style={[styles.text71, styles.textPosition3]}>
            صيانة روتينية
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant34, styles.property1variantLayout3]}
        >
          <Text style={[styles.text71, styles.textPosition3]}>
            صيانة إصلاحية
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant52, styles.property1variantLayout3]}
        >
          <Text style={[styles.text73, styles.textPosition2]}>
            صيانة وقائية
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant24, styles.property1variantLayout3]}
        >
          <Text style={[styles.text74, styles.textTypo12]}>صيانة روتينية</Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
        <View
          style={[styles.property1variant44, styles.property1variantLayout3]}
        >
          <Text style={[styles.text75, styles.textPosition3]}>
            صيانة إصلاحية
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
        <View
          style={[styles.property1variant61, styles.property1variantLayout3]}
        >
          <Text style={[styles.text76, styles.textPosition2]}>
            صيانة وقائية
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
      </View>
      <View style={[styles.serviceType, styles.serviceTypeBorder]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1535.png")}
          />
        </View>
        <View
          style={[styles.property1variant72, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1546.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant82, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1547.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant92, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1548.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant101, styles.property1variantPosition2]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1549.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant18, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1550.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant15, styles.property1variantPosition2]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1551.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant16, styles.property1variantPosition2]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1552.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant17, styles.property1variantPosition2]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1553.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View style={styles.property1variant25}>
          <View
            style={[styles.property1variant2Inner2, styles.groupChildLayout3]}
          >
            <View style={[styles.rectangleParent6, styles.groupChildLayout3]}>
              <View style={[styles.groupChild53, styles.groupChildLayout3]} />
              <Image
                style={[styles.groupChild54, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild60, styles.groupChildPosition2]} />
              <View style={[styles.groupChild61, styles.groupChildPosition1]} />
              <View style={[styles.groupChild62, styles.groupChildLayout8]} />
              <Text style={[styles.text86, styles.textTypo11]}>
                صيانة كهربائية
              </Text>
              <Text style={[styles.text87, styles.textTypo11]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text90, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text91, styles.textTypo9]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text92, styles.textTypo22]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text93, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child13,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child15,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child16,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text94, styles.textLayout1]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant35, styles.property1variantPosition1]}
        >
          <View
            style={[styles.property1variant2Inner2, styles.groupChildLayout3]}
          >
            <View style={[styles.rectangleParent6, styles.groupChildLayout3]}>
              <View style={[styles.groupChild63, styles.groupChildLayout3]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild60, styles.groupChildPosition2]} />
              <View style={[styles.groupChild61, styles.groupChildPosition1]} />
              <View style={[styles.groupChild62, styles.groupChildLayout8]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text98, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text91, styles.textTypo9]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text92, styles.textTypo22]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text93, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text style={[styles.text102, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child9,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child15,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text103, styles.textTypo7]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant45, styles.property1variantPosition1]}
        >
          <View
            style={[styles.property1variant4Inner2, styles.groupChild74Layout]}
          >
            <View style={[styles.rectangleParent8, styles.groupChild74Layout]}>
              <View style={[styles.groupChild74, styles.groupChild74Layout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-919.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild78, styles.groupChildLayout8]} />
              <View style={[styles.groupChild79, styles.groupChildLayout8]} />
              <View style={[styles.groupChild80, styles.groupChildPosition]} />
              <View style={[styles.groupChild81, styles.groupChildLayout8]} />
              <View style={[styles.groupChild82, styles.groupChildLayout8]} />
              <View style={[styles.groupChild83, styles.groupChildLayout8]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text104, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text105, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text106, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text107, styles.textTypo22]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text108, styles.textPosition1]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text109, styles.textLayout]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text110, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child9,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child11,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text112, styles.textTypo7]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant53, styles.property1variantPosition1]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild85, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild60, styles.groupChildPosition2]} />
              <View style={[styles.groupChild61, styles.groupChildPosition1]} />
              <View style={[styles.groupChild62, styles.groupChildLayout8]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout7]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text114, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text91, styles.textTypo9]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text92, styles.textTypo22]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text93, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text118, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child8,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child9,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text121, styles.textFlexBox]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant62, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild96, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild101, styles.groupChildLayout8]} />
              <View style={[styles.groupChild102, styles.groupChildLayout8]} />
              <View style={[styles.groupChild103, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild105, styles.groupChildLayout7]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text123, styles.textTypo6]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text124, styles.textTypo5]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text125, styles.textTypo4]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text126, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text128, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child8,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text130, styles.textTypo18]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant11, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild106, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild102, styles.groupChildLayout8]} />
              <View style={[styles.groupChild103, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild114, styles.groupChildPosition3]}
              />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text132, styles.textTypo6]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text124, styles.textTypo5]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text134, styles.textTypo4]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text126, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant11Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant11Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child8,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text130, styles.textTypo18]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant12, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild115, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild102, styles.groupChildLayout8]} />
              <View style={[styles.groupChild103, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View
                style={[styles.groupChild124, styles.groupChildPosition2]}
              />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text98, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text142, styles.textTypo5]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text134, styles.textTypo4]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text126, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant11Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child9,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child8,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text130, styles.textTypo18]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant13, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild125, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild102, styles.groupChildLayout8]} />
              <View style={[styles.groupChild103, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild60, styles.groupChildPosition2]} />
              <View
                style={[styles.groupChild135, styles.groupChildPosition1]}
              />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text150, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text91, styles.textTypo9]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text152, styles.textTypo4]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text126, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child8,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child10,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text130, styles.textTypo18]}>نوع الخدمة</Text>
        </View>
        <View
          style={[styles.property1variant14, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner2, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent9, styles.groupChildLayout2]}>
              <View style={[styles.groupChild136, styles.groupChildLayout2]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-918.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild102, styles.groupChildLayout8]} />
              <View style={[styles.groupChild103, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild60, styles.groupChildPosition2]} />
              <View style={[styles.groupChild146, styles.groupChildLayout6]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                صيانة ميكانيكية
              </Text>
              <Text style={[styles.text114, styles.textTypo10]}>
                صيانة أنظمة التكييف
              </Text>
              <Text style={[styles.text160, styles.textTypo9]}>
                صيانة أجهزة التبريد
              </Text>
              <Text style={[styles.text161, styles.textTypo4]}>
                صيانة المصاعد و السلالم الكهربائية
              </Text>
              <Text style={[styles.text162, styles.textTypo8]}>
                صيانة نظام الأمن و المراقبة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                صيانة السباكة
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                صيانة المرافق
              </Text>
              <Text style={[styles.text111, styles.textPosition1]}>
                صيانة كهربائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant11Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child15,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text130, styles.textTypo18]}>نوع الخدمة</Text>
        </View>
      </View>
      <View style={[styles.typeOfProblem, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الصيانة</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1512.png")}
          />
        </View>
        <View
          style={[styles.property1variant71, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1513.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant81, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1514.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant91, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1515.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant21, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner1, styles.groupChildLayout5]}
          >
            <View style={[styles.rectangleParent2, styles.groupChildLayout5]}>
              <View style={[styles.groupChild147, styles.groupChildLayout5]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <Text style={[styles.text45, styles.textTypo17]}>
                صيانة روتينية
              </Text>
              <Text style={[styles.text172, styles.textTypo17]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                صيانة وقائية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text48, styles.textFlexBox]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant31, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant3Inner1, styles.groupChildLayout4]}
          >
            <View style={[styles.rectangleParent3, styles.groupChildLayout4]}>
              <View style={[styles.groupChild152, styles.groupChildLayout4]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <Text style={[styles.text175, styles.textTypo22]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                صيانة وقائية
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text style={[styles.text51, styles.textTypo17]}>
                صيانة روتينية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text52, styles.textFlexBox]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant41, styles.property1variantLayout6]}
        >
          <View
            style={[styles.property1variant4Inner1, styles.groupChildLayout5]}
          >
            <View style={[styles.rectangleParent2, styles.groupChildLayout5]}>
              <View style={[styles.groupChild158, styles.groupChildLayout5]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text179, styles.textTypo3]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text47, styles.textTypo15]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text45, styles.textTypo17]}>
                صيانة روتينية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text56, styles.textTypo14]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant51, styles.property1variantLayout6]}
        >
          <View
            style={[styles.property1variant5Inner1, styles.groupChildLayout4]}
          >
            <View style={[styles.rectangleParent3, styles.groupChildLayout4]}>
              <View style={[styles.groupChild164, styles.groupChildLayout4]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild52, styles.groupChildLayout6]} />
              <Text style={[styles.text183, styles.textTypo3]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text58, styles.textTypo15]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text45, styles.textTypo17]}>
                صيانة روتينية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text60, styles.textTypo14]}>نوع الصيانة</Text>
        </View>
      </View>
      <View style={[styles.projectName, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1516.png")}
          />
        </View>
        <View
          style={[styles.property1variant7, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1517.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant8, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1518.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant9, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1519.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant10, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1520.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant2, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.groupChild170, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupChild54, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text86, styles.textTypo11]}>
                نادي جدة لليخوت
              </Text>
              <Text style={[styles.text87, styles.textTypo11]}>ممشى جدة</Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text196, styles.textLayout1]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant3, styles.property1variantLayout8]}
        >
          <View
            style={[
              styles.property1variant3Inner,
              styles.property1variant2InnerPosition,
            ]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.groupChild176, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text
                style={[styles.text102, styles.textPosition1]}
              >{`نادي جدة لليخوت `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text25, styles.textTypo18]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant4, styles.property1variantChildLayout]}
        >
          <View
            style={[
              styles.property1variant4Inner,
              styles.property1variant4InnerPosition,
            ]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.groupChild183, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text202, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text30, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant5, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.groupChild190, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout7]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text118, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت  `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text35, styles.textTypo18]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant6, styles.property1variantLayout8]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout9]}
          >
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.groupChild197, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild29, styles.groupChildLayout6]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text128, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت   `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text35, styles.textTypo18]}>اسم المشروع</Text>
        </View>
      </View>
      <View style={[styles.typeOfCategory, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text217, styles.textFlexBox]}>الفئة</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1521.png")}
          />
        </View>
        <View
          style={[styles.property1variant75, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1522.png")}
          />
          <Text style={[styles.text217, styles.textFlexBox]}>نوع المشكلة</Text>
        </View>
        <View
          style={[styles.property1variant85, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1523.png")}
          />
          <Text style={[styles.text217, styles.textFlexBox]}>نوع المشكلة</Text>
        </View>
        <View
          style={[
            styles.property1variant28,
            styles.property1variantChildLayout,
          ]}
        >
          <View
            style={[styles.property1variant2Inner5, styles.groupChildLayout1]}
          >
            <View style={[styles.rectangleParent24, styles.groupChildLayout1]}>
              <View style={[styles.groupChild204, styles.groupChildLayout1]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-96.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <Text style={[styles.text220, styles.textTypo2]}>
                خدمة مخطط لها
              </Text>
              <Text style={[styles.text46, styles.textTypo16]}>طلب خدمة</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text222, styles.textTypo1]}>الفئة</Text>
        </View>
        <View
          style={[
            styles.property1variant38,
            styles.property1variantChildLayout,
          ]}
        >
          <View
            style={[styles.property1variant3Inner5, styles.groupChildLayout1]}
          >
            <View style={[styles.rectangleParent24, styles.groupChildLayout1]}>
              <View style={[styles.groupChild208, styles.groupChildLayout1]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-97.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Text style={[styles.text46, styles.textTypo16]}>طلب خدمة</Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text style={[styles.text224, styles.textTypo2]}>
                خدمة مخطط لها
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text225, styles.textTypo1]}>الفئة</Text>
        </View>
        <View
          style={[
            styles.property1variant48,
            styles.property1variantChildLayout,
          ]}
        >
          <View
            style={[styles.property1variant4Inner5, styles.groupChildLayout1]}
          >
            <View style={[styles.rectangleParent24, styles.groupChildLayout1]}>
              <View style={[styles.groupChild213, styles.groupChildLayout1]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-97.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild217, styles.groupChildLayout6]} />
              <Text style={[styles.text53, styles.textTypo16]}>طلب خدمة</Text>
              <Text
                style={[styles.text227, styles.textTypo15]}
              >{`خدمة مخطط لها `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text228, styles.textFlexBox]}>الفئة</Text>
        </View>
      </View>
      <View style={[styles.filter, styles.filterBorder]}>
        <View
          style={[styles.property1default9, styles.property1variantLayout1]}
        >
          <Text style={[styles.text229, styles.textPosition]}>
            طلب غير مكتمل
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant39, styles.property1variantLayout1]}
        >
          <Text style={[styles.text229, styles.textPosition]}>طلب مكتمل</Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant56, styles.property1variantLayout1]}
        >
          <Text style={[styles.text229, styles.textPosition]}>
            طلب قيد التنفيذ
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant76, styles.property1variantLayout1]}
        >
          <Text style={[styles.text229, styles.textPosition]}>
            جميع الطلبات
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant29, styles.property1variantLayout1]}
        >
          <Text style={[styles.text233, styles.textPosition]}>
            طلب غير مكتمل
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
        <View
          style={[styles.property1variant49, styles.property1variantLayout1]}
        >
          <Text style={[styles.text233, styles.textPosition]}>طلب مكتمل</Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
        <View
          style={[styles.property1variant64, styles.property1variantLayout1]}
        >
          <Text style={[styles.text233, styles.textPosition]}>
            طلب قيد التنفيذ
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
        <View
          style={[styles.property1variant86, styles.property1variantLayout1]}
        >
          <Text style={[styles.text233, styles.textPosition]}>
            جميع الطلبات
          </Text>
          <Image
            style={[styles.frameIcon16, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame5.png")}
          />
        </View>
      </View>
      <View style={[styles.filterProjectName, styles.typeBorder1]}>
        <View style={[styles.property1default, styles.property1variantLayout9]}>
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1516.png")}
          />
        </View>
        <View
          style={[styles.property1variant77, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1517.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant87, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1518.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant95, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1519.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant103, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1520.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant111, styles.property1variantLayout9]}
        >
          <Image
            style={styles.property1defaultChild}
            resizeMode="cover"
            source={require("../assets/frame-1554.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant210, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild218, styles.groupChildLayout]} />
              <Image
                style={[styles.groupChild54, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <Text style={[styles.text86, styles.textTypo11]}>
                نادي جدة لليخوت
              </Text>
              <Text style={[styles.text87, styles.textTypo11]}>ممشى جدة</Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text style={[styles.text247, styles.textTypo10]}>
                جميع المشاريع
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.text248, styles.textTypo]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant310, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild225, styles.groupChildLayout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text style={[styles.text247, styles.textTypo10]}>
                جميع المشاريع
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout7]} />
              <Text
                style={[styles.text102, styles.textPosition1]}
              >{`نادي جدة لليخوت `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child,
              styles.property1variant2InnerPosition,
            ]}
          />
          <Text style={[styles.text254, styles.textTypo]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant410, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild233, styles.groupChildLayout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout8]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text202, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text style={[styles.text247, styles.textTypo10]}>
                جميع المشاريع
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child2,
              styles.property1variant4InnerPosition,
            ]}
          />
          <Text style={[styles.text254, styles.textTypo]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant57, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild241, styles.groupChildLayout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild59, styles.groupChildPosition3]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout7]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text247, styles.textTypo10]}>
                جميع المشاريع
              </Text>
              <Text style={[styles.text118, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت  `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text254, styles.textTypo]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant65, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild249, styles.groupChildLayout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild105, styles.groupChildLayout7]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text247, styles.textTypo10]}>
                جميع المشاريع
              </Text>
              <Text style={[styles.text128, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت   `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child7,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text254, styles.textTypo]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant121, styles.property1variantLayout]}
        >
          <View
            style={[styles.property1variant2Inner6, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout]}>
              <View style={[styles.groupChild256, styles.groupChildLayout]} />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout8]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <View style={[styles.groupChild1, styles.groupChildLayout8]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild262, styles.groupChildPosition]} />
              <Text style={[styles.text95, styles.textPosition1]}>
                ممشى جدة
              </Text>
              <Text style={[styles.text88, styles.textPosition1]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text275, styles.textTypo10]}>
                جميع المشاريع
              </Text>
              <Text style={[styles.text89, styles.textPosition1]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text111, styles.textPosition1]}
              >{`نادي جدة لليخوت   `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child2,
              styles.property1variant2InnerPosition1,
            ]}
          />
          <Text style={[styles.text254, styles.textTypo]}>اسم المشروع</Text>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.bottomPosition]}>
        <View style={[styles.menuList, styles.menuListPosition]}>
          <Pressable
            style={styles.menuFlexBox}
            onPress={() => navigation.navigate("Reports15")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame92.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>التقارير</Text>
          </Pressable>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/liuser6.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>حسابي</Text>
          </Pressable>
          <View style={[styles.menu4, styles.menuFlexBox]}>
            <View style={[styles.menu31, styles.menuLayout]}>
              <View style={[styles.menu32, styles.menuLayout]}>
                <View style={[styles.menu31, styles.menuLayout]}>
                  <View style={styles.container}>
                    <Image
                      style={[styles.frameIcon24, styles.frameLayout]}
                      resizeMode="cover"
                      source={require("../assets/frame110.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame99.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame91.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListPosition]}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
      </View>
      <View style={[styles.bottomNav1, styles.bottomPosition]}>
        <View style={[styles.menuList, styles.menuListPosition]}>
          <Pressable
            style={styles.menuFlexBox}
            onPress={() => navigation.navigate("Reports15")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame92.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>التقارير</Text>
          </Pressable>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Profile2")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/liuser6.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>حسابي</Text>
          </Pressable>
          <View style={[styles.menu4, styles.menuFlexBox]}>
            <View style={styles.container}>
              <Image
                style={[styles.frameIcon24, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame111.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Requests7")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame99.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>الطلبات</Text>
          </Pressable>
          <Pressable
            style={[styles.menu4, styles.menuFlexBox]}
            onPress={() => navigation.navigate("MOREInformaion13")}
          >
            <Image
              style={[styles.frameIcon24, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame91.png")}
            />
            <Text style={[styles.text279, styles.logoTypo]}>الرئيسية</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.menuListPosition]}>
          <View style={[styles.line, styles.linePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linePosition: {
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 51,
    borderRadius: Border.br_xl,
    marginLeft: -10,
    height: 24,
  },
  textTypo26: {
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  textSpaceBlock: {
    marginTop: 15,
    color: Color.colorBlack,
  },
  textTypo25: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  textTypo24: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  logoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  fontsPosition: {
    top: 151,
    position: "absolute",
  },
  iconLayout1: {
    width: 250,
    position: "absolute",
  },
  typeBorder1: {
    width: 383,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  property1buttonLayout: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    borderRadius: Border.br_3xs,
    left: "5.22%",
    right: "5.22%",
    width: "89.56%",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo23: {
    width: 291,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  property1buttonBorder: {
    borderWidth: 2,
    borderColor: Color.praimary,
    borderStyle: "solid",
  },
  property1variantLayout9: {
    height: 82,
    width: 343,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  property1variantLayout8: {
    height: 276,
    width: 343,
    left: 20,
    position: "absolute",
  },
  groupChildLayout9: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 0,
    left: 0,
  },
  groupChildShadowBox: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupPosition: {
    height: 14,
    top: 21,
    position: "absolute",
  },
  groupChildLayout8: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  lineViewPosition: {
    top: 104,
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition5: {
    top: 200,
    left: 0,
    position: "absolute",
  },
  textTypo22: {
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo20: {
    width: 87,
    left: 240,
    top: 216,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant2InnerPosition: {
    top: 26,
    left: 0,
  },
  property1variant2ItemLayout: {
    height: 46,
    left: 0,
    width: 343,
    position: "absolute",
  },
  textTypo19: {
    height: "5.83%",
    top: "0.36%",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupChildLayout7: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  textTypo18: {
    height: "5.8%",
    display: "flex",
    color: Color.black,
    left: "47.81%",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  property1variantChildLayout: {
    width: 343,
    position: "absolute",
  },
  property1variant4InnerPosition: {
    top: 28,
    left: 0,
  },
  groupChildPosition4: {
    top: 103,
    left: 0,
    position: "absolute",
  },
  property1variant2InnerPosition1: {
    top: 27,
    left: 0,
  },
  groupChildLayout6: {
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  property1variantLayout7: {
    height: 227,
    width: 343,
    left: 20,
    position: "absolute",
  },
  groupChildLayout5: {
    height: 200,
    width: 343,
    position: "absolute",
  },
  textTypo17: {
    width: 88,
    left: 239,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo16: {
    width: 84,
    left: 243,
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo15: {
    width: 108,
    left: 219,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChildLayout4: {
    height: 201,
    width: 343,
    position: "absolute",
  },
  property1variantLayout6: {
    height: 228,
    width: 343,
    left: 20,
    position: "absolute",
  },
  textTypo14: {
    height: "7.02%",
    display: "flex",
    color: Color.black,
    left: "47.81%",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  serviceTypeBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  property1buttonSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    left: 20,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo13: {
    lineHeight: 25,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    marginLeft: 6,
    width: 16,
    height: 16,
  },
  classLayout: {
    height: 196,
    width: 145,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  property1default2Layout: {
    width: 105,
    left: 20,
    height: 24,
    position: "absolute",
  },
  textTypo12: {
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "right",
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
  property1variantLayout5: {
    width: 95,
    left: 30,
    height: 24,
    position: "absolute",
  },
  textPosition5: {
    left: "-6.32%",
    width: "78.95%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantLayout4: {
    width: 58,
    left: 67,
    height: 24,
    position: "absolute",
  },
  textPosition4: {
    width: "55.17%",
    top: "16.67%",
    height: "66.67%",
    left: "0%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  filterBorder: {
    width: 145,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  property1variantLayout3: {
    width: 100,
    left: 25,
    height: 24,
    position: "absolute",
  },
  textPosition3: {
    left: "-1%",
    width: "75%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textPosition2: {
    left: "4%",
    width: "70%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantPosition2: {
    top: 616,
    height: 82,
    width: 343,
    position: "absolute",
  },
  groupChildLayout3: {
    height: 440,
    width: 343,
    position: "absolute",
  },
  groupChildPosition3: {
    top: 248,
    left: 0,
    position: "absolute",
  },
  groupChildPosition2: {
    top: 296,
    left: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 344,
    left: 0,
    position: "absolute",
  },
  textTypo11: {
    width: 120,
    right: 16,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textPosition1: {
    left: 207,
    width: 120,
  },
  textTypo10: {
    top: 264,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo9: {
    top: 312,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo8: {
    width: 175,
    left: 152,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textLayout1: {
    width: 179,
    right: 0,
  },
  property1variantPosition1: {
    top: 121,
    height: 466,
    width: 343,
    position: "absolute",
  },
  textTypo7: {
    height: "3.43%",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupChild74Layout: {
    height: 438,
    width: 343,
    position: "absolute",
  },
  groupChildPosition: {
    top: 247,
    left: 0,
    position: "absolute",
  },
  textLayout: {
    width: 217,
    left: 110,
    color: Color.praimary,
  },
  groupChildLayout2: {
    height: 437,
    width: 343,
    position: "absolute",
  },
  property1variantLayout2: {
    height: 464,
    width: 343,
    position: "absolute",
  },
  textTypo6: {
    width: 139,
    left: 188,
    top: 265,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo5: {
    top: 313,
    left: 207,
    width: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo4: {
    top: 361,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  typeBorder: {
    top: 1003,
    width: 383,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    width: 97,
    left: 230,
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 152,
    width: 343,
    position: "absolute",
  },
  textTypo2: {
    width: 113,
    left: 214,
    height: 16,
    top: 72,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo1: {
    height: "8.99%",
    display: "flex",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  property1variantLayout1: {
    width: 111,
    left: 17,
    height: 24,
    position: "absolute",
  },
  textPosition: {
    left: "-1.8%",
    width: "79.28%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantLayout: {
    height: 323,
    width: 343,
    left: 20,
    position: "absolute",
  },
  groupChildLayout: {
    height: 296,
    width: 343,
    position: "absolute",
  },
  textTypo: {
    top: "0.31%",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  bottomPosition: {
    height: 90,
    backgroundColor: Color.colorWhitesmoke_200,
    marginLeft: 2686.5,
    width: 375,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  menuListPosition: {
    width: 375,
    left: 0,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  frameLayout: {
    height: 24,
    width: 24,
  },
  menuFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  menuLayout: {
    height: 52,
    alignItems: "center",
  },
  frameItem: {
    marginLeft: -10,
    height: 24,
    width: 24,
  },
  rectangleView: {
    backgroundColor: Color.colorBeige,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  frameChild7: {
    backgroundColor: Color.ternary,
  },
  ellipseGroup: {
    marginLeft: 30,
    flexDirection: "row",
  },
  frameChild13: {
    backgroundColor: Color.binary,
  },
  frameChild19: {
    backgroundColor: Color.praimary,
  },
  frameParent: {
    marginLeft: -3676.5,
    top: 87,
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text1: {
    fontSize: FontSize.size_3xs,
    marginTop: 15,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text2: {
    marginTop: 15,
    color: Color.colorBlack,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  text3: {
    marginTop: 15,
    color: Color.colorBlack,
    fontWeight: "300",
  },
  text4: {
    fontSize: FontSize.size_base,
    marginTop: 15,
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text5: {
    fontSize: FontSize.size_lg,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
    fontWeight: "300",
  },
  text6: {
    fontSize: FontSize.size_xl,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
  },
  text7: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
  },
  text8: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginTop: 15,
    textAlign: "right",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  parent: {
    top: 255,
    left: 274,
    alignItems: "flex-end",
    position: "absolute",
  },
  colours: {
    top: 17,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    left: 36,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  fonts: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_6xl,
    left: 36,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  logo: {
    top: 587,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    left: 36,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  compound: {
    top: 862,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    left: 36,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    top: 657,
    height: 104,
    left: 36,
    width: 250,
  },
  icon1: {
    top: 665,
    left: 317,
    height: 88,
  },
  desihnSystemArabicChild: {
    backgroundColor: Color.gray,
    height: 103,
    width: 232,
    left: 876,
    top: 242,
    position: "absolute",
  },
  desihnSystemArabicItem: {
    backgroundColor: Color.black,
    left: 1138,
    height: 103,
    width: 232,
    top: 242,
    position: "absolute",
  },
  desihnSystemArabicInner: {
    backgroundColor: Color.whait,
    top: 77,
    left: 1138,
    height: 103,
    width: 232,
    position: "absolute",
  },
  desihnSystemArabicChild1: {
    backgroundColor: Color.color,
    top: 77,
    height: 103,
    width: 232,
    left: 876,
    position: "absolute",
  },
  text9: {
    color: Color.whait,
  },
  property1button: {
    top: 20,
    backgroundColor: Color.praimary,
  },
  text10: {
    color: Color.praimary,
  },
  property1button2: {
    top: 96,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_111xl,
    borderRadius: Border.br_3xs,
    left: "5.22%",
    right: "5.22%",
    width: "89.56%",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    flexDirection: "row",
    position: "absolute",
  },
  button: {
    height: 172,
    left: 24,
    top: 969,
    width: 383,
  },
  text11: {
    color: Color.black,
    fontWeight: "300",
    left: "47.81%",
    width: "52.19%",
    top: "0%",
    height: "19.51%",
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1defaultChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    maxHeight: "100%",
    left: "0%",
    maxWidth: "100%",
    right: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  property1default: {
    left: 20,
    top: 20,
  },
  property1variant7: {
    top: 1647,
    left: 20,
  },
  property1variant8: {
    top: 1749,
    left: 20,
  },
  property1variant9: {
    top: 1841,
    left: 20,
  },
  property1variant10: {
    top: 1943,
    left: 20,
  },
  groupChild: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupItem: {
    left: 16,
    width: 311,
  },
  groupInner: {
    top: 56,
    left: 0,
    position: "absolute",
    borderColor: Color.gray,
  },
  lineView: {
    borderColor: Color.gray,
  },
  groupChild1: {
    top: 152,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild2: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  text16: {
    width: 47,
    left: 280,
    height: 16,
    top: 72,
    color: Color.praimary,
  },
  text17: {
    top: 120,
    width: 47,
    left: 280,
    height: 16,
    color: Color.praimary,
  },
  text18: {
    top: 168,
    width: 47,
    left: 280,
    height: 16,
    color: Color.praimary,
  },
  text19: {
    color: Color.praimary,
  },
  rectangleParent: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  property1variant2Inner: {
    left: 0,
    top: 27,
  },
  property1variant2Child: {
    width: 343,
    position: "absolute",
    height: 56,
  },
  property1variant2Item: {
    top: 83,
  },
  property1variant2Child1: {
    top: 131,
  },
  property1variant2Child2: {
    top: 179,
  },
  property1variant2Child3: {
    top: 227,
  },
  text20: {
    top: "0.36%",
    left: "47.81%",
    width: "52.19%",
  },
  property1variant2: {
    top: 142,
  },
  groupChild3: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild4: {
    top: 56,
    left: 0,
    position: "absolute",
    borderColor: Color.praimary,
  },
  groupChild5: {
    borderColor: Color.praimary,
  },
  groupChild8: {
    top: 56,
    left: 0,
    position: "absolute",
  },
  text24: {
    width: 47,
    left: 280,
    height: 16,
    top: 72,
    color: Color.whait,
  },
  property1variant3Inner: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  property1variant3Child: {
    top: 133,
  },
  property1variant3Item: {
    top: 181,
  },
  property1variant3Child1: {
    top: 229,
  },
  text25: {
    top: "0%",
  },
  property1variant3: {
    top: 438,
  },
  groupChild9: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild15: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  text26: {
    top: 120,
    width: 47,
    left: 280,
    height: 16,
    color: Color.whait,
  },
  property1variant4Inner: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  property1variant4Child: {
    top: 86,
  },
  property1variant4Child2: {
    width: 343,
    position: "absolute",
    height: 56,
  },
  text30: {
    height: "5.78%",
    top: "0.72%",
    color: Color.black,
    fontWeight: "300",
    left: "47.81%",
    width: "52.19%",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant4: {
    height: 277,
    top: 740,
    left: 20,
  },
  groupChild16: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild22: {
    top: 152,
    left: 0,
    position: "absolute",
  },
  text32: {
    top: 168,
    width: 47,
    left: 280,
    height: 16,
    color: Color.whait,
  },
  property1variant5Child: {
    top: 230,
  },
  property1variant5Child2: {
    left: 0,
    width: 343,
    position: "absolute",
    height: 56,
  },
  text35: {
    top: "0.36%",
  },
  property1variant5: {
    top: 1036,
  },
  groupChild23: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild29: {
    top: 200,
    left: 0,
    position: "absolute",
  },
  text38: {
    color: Color.whait,
  },
  property1variant6Item: {
    top: 85,
  },
  property1variant6Child1: {
    top: 180,
  },
  property1variant6: {
    top: 1341,
  },
  typeOfBusiness: {
    left: 442,
    height: 2077,
    top: 969,
    width: 383,
  },
  property1variant71: {
    top: 1327,
    left: 20,
  },
  property1variant81: {
    top: 1429,
    left: 20,
  },
  property1variant91: {
    top: 1521,
    left: 20,
  },
  groupChild30: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text45: {
    top: 72,
    color: Color.praimary,
  },
  text46: {
    color: Color.praimary,
  },
  text47: {
    top: 168,
    color: Color.praimary,
  },
  rectangleParent2: {
    top: 0,
    left: 0,
  },
  property1variant2Inner1: {
    left: 0,
    top: 27,
  },
  text48: {
    height: "7.09%",
    top: "0.44%",
    color: Color.black,
    fontWeight: "300",
    left: "47.81%",
    width: "52.19%",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant21: {
    top: 142,
  },
  groupChild35: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text51: {
    top: 72,
    color: Color.whait,
  },
  rectangleParent3: {
    top: 0,
    left: 0,
  },
  property1variant3Inner1: {
    top: 26,
    left: 0,
  },
  text52: {
    height: "7.05%",
    color: Color.black,
    fontWeight: "300",
    left: "47.81%",
    width: "52.19%",
    top: "0%",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant31: {
    top: 438,
  },
  groupChild41: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text53: {
    color: Color.whait,
  },
  property1variant4Inner1: {
    top: 28,
    left: 0,
  },
  text56: {
    top: "0.88%",
  },
  property1variant41: {
    top: 740,
  },
  groupChild47: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild52: {
    top: 152,
    left: 0,
    position: "absolute",
  },
  text58: {
    top: 168,
    color: Color.whait,
  },
  property1variant5Inner1: {
    left: 0,
    top: 27,
  },
  text60: {
    top: "0.44%",
  },
  property1variant51: {
    top: 1036,
  },
  typeOfBusiness2: {
    left: 891,
    height: 2077,
    top: 969,
    width: 383,
  },
  text61: {
    color: Color.whait,
  },
  frameIcon1: {
    overflow: "hidden",
  },
  property1button1: {
    top: 20,
    backgroundColor: Color.praimary,
  },
  text62: {
    width: 85,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
  },
  property1button21: {
    top: 75,
    width: 140,
    borderWidth: 2,
    borderColor: Color.praimary,
    borderStyle: "solid",
  },
  mediumButton: {
    width: 180,
    height: 132,
    top: 1174,
    left: 24,
  },
  text63: {
    width: "71.43%",
    left: "3.81%",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon2: {
    width: "19.05%",
    left: "80.95%",
    right: "0%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1default2: {
    top: 20,
  },
  text64: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon3: {
    width: "21.05%",
    left: "78.95%",
    right: "0%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1variant32: {
    top: 108,
  },
  text65: {
    width: "74.29%",
    left: "0.95%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant22: {
    top: 64,
  },
  text66: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant42: {
    top: 152,
  },
  serviceClass: {
    top: 1328,
    left: 24,
  },
  text67: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon6: {
    width: "34.48%",
    left: "65.52%",
    right: "0%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1default3: {
    top: 20,
  },
  property1variant33: {
    top: 108,
  },
  text69: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant23: {
    top: 64,
  },
  property1variant43: {
    top: 152,
  },
  dateClass: {
    top: 1594,
    left: 247,
  },
  text71: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon10: {
    width: "20%",
    left: "80%",
    right: "0%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1default4: {
    top: 20,
  },
  property1variant34: {
    top: 108,
  },
  text73: {
    color: Color.black,
    fontWeight: "300",
  },
  property1variant52: {
    top: 196,
  },
  text74: {
    width: "78%",
    left: "-4%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant24: {
    top: 64,
  },
  text75: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant44: {
    top: 152,
  },
  text76: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant61: {
    top: 240,
  },
  maintenanceType: {
    left: 262,
    height: 275,
    top: 1174,
  },
  property1variant72: {
    left: 390,
    top: 20,
  },
  property1variant82: {
    left: 766,
    top: 20,
  },
  property1variant92: {
    left: 1142,
    top: 20,
  },
  property1variant101: {
    left: 20,
  },
  property1variant18: {
    top: 1209,
    left: 20,
  },
  property1variant15: {
    left: 390,
  },
  property1variant16: {
    left: 766,
  },
  property1variant17: {
    left: 1142,
  },
  groupChild53: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild54: {
    width: "90.67%",
    right: "4.66%",
    left: "4.66%",
    maxWidth: "100%",
    height: 14,
    overflow: "hidden",
  },
  groupChild59: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild60: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild61: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild62: {
    top: 392,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  text86: {
    top: 72,
  },
  text87: {
    top: 120,
  },
  text88: {
    top: 168,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text89: {
    top: 216,
    left: 207,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text90: {
    left: 174,
    width: 153,
    color: Color.praimary,
  },
  text91: {
    left: 207,
    width: 120,
  },
  text92: {
    top: 360,
    left: 108,
    width: 219,
    color: Color.praimary,
  },
  text93: {
    top: 408,
    color: Color.praimary,
  },
  rectangleParent6: {
    top: 0,
    left: 0,
  },
  property1variant2Inner2: {
    top: 26,
    left: 0,
  },
  property1variant2Child13: {
    top: 275,
  },
  property1variant2Child14: {
    top: 322,
  },
  property1variant2Child15: {
    top: 369,
  },
  property1variant2Child16: {
    top: 416,
  },
  text94: {
    height: "3.43%",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
    top: "0%",
  },
  property1variant25: {
    height: 466,
    top: 120,
    width: 343,
    left: 20,
    position: "absolute",
  },
  groupChild63: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text95: {
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text98: {
    left: 194,
    width: 133,
    color: Color.praimary,
  },
  text102: {
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    top: 72,
    color: Color.whait,
  },
  property1variant3Child9: {
    top: 276,
  },
  property1variant3Child12: {
    top: 420,
  },
  text103: {
    left: "47.81%",
    width: "52.19%",
    top: "0%",
  },
  property1variant35: {
    left: 390,
  },
  groupChild74: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild78: {
    borderColor: Color.gray,
    left: 0,
    top: 151,
    position: "absolute",
  },
  groupChild79: {
    top: 199,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild80: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild81: {
    top: 295,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild82: {
    top: 343,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild83: {
    top: 391,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  text104: {
    top: 119,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.whait,
  },
  text105: {
    top: 167,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text106: {
    top: 215,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text107: {
    top: 263,
    left: 185,
    width: 142,
    color: Color.praimary,
  },
  text108: {
    top: 311,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
  },
  text109: {
    top: 359,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text110: {
    top: 407,
    color: Color.praimary,
  },
  text111: {
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    top: 72,
    color: Color.praimary,
  },
  rectangleParent8: {
    top: 0,
    left: 0,
  },
  property1variant4Inner2: {
    top: 28,
    left: 0,
  },
  property1variant4Child10: {
    top: 324,
  },
  property1variant4Child11: {
    top: 372,
  },
  property1variant4Child12: {
    top: 419,
  },
  text112: {
    top: "0.21%",
    left: "47.81%",
    width: "52.19%",
  },
  property1variant45: {
    left: 766,
  },
  groupChild85: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text114: {
    left: 181,
    width: 146,
    color: Color.praimary,
  },
  text118: {
    top: 168,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.whait,
  },
  rectangleParent9: {
    top: 0,
    left: 0,
  },
  property1variant5Inner2: {
    left: 0,
    top: 27,
  },
  property1variant5Child7: {
    top: 277,
  },
  property1variant5Child8: {
    top: 325,
  },
  property1variant5Child9: {
    top: 373,
  },
  property1variant5Child10: {
    top: 418,
  },
  text121: {
    height: "3.45%",
    color: Color.black,
    fontWeight: "300",
    left: "47.81%",
    width: "52.19%",
    top: "0%",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant53: {
    left: 1142,
  },
  groupChild96: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild101: {
    top: 297,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild102: {
    top: 345,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild103: {
    top: 393,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild105: {
    top: 200,
    left: 0,
    position: "absolute",
  },
  text123: {
    color: Color.praimary,
  },
  text124: {
    color: Color.praimary,
  },
  text125: {
    left: 111,
    width: 216,
    color: Color.praimary,
  },
  text126: {
    top: 409,
    color: Color.praimary,
  },
  text128: {
    top: 216,
    left: 207,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.whait,
  },
  property1variant6Child7: {
    top: 323,
  },
  property1variant6Child8: {
    top: 374,
  },
  text130: {
    top: "0.37%",
  },
  property1variant62: {
    top: 712,
    height: 464,
    left: 20,
  },
  groupChild106: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild114: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  text132: {
    color: Color.whait,
  },
  text134: {
    left: 112,
    width: 215,
    color: Color.praimary,
  },
  property1variant11Child2: {
    top: 228,
  },
  property1variant11Child3: {
    top: 326,
  },
  property1variant11: {
    top: 712,
    height: 464,
    left: 390,
  },
  groupChild115: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild124: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  text142: {
    color: Color.whait,
  },
  property1variant12: {
    top: 712,
    height: 464,
    left: 766,
  },
  groupChild125: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild135: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  text150: {
    left: 178,
    width: 149,
    color: Color.praimary,
  },
  text152: {
    left: 106,
    width: 221,
    color: Color.whait,
  },
  property1variant13: {
    top: 714,
    left: 1142,
  },
  groupChild136: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild146: {
    top: 388,
    left: 0,
    position: "absolute",
  },
  text160: {
    left: 200,
    width: 127,
  },
  text161: {
    width: 217,
    left: 110,
    color: Color.praimary,
  },
  text162: {
    top: 404,
    color: Color.whait,
  },
  property1variant14: {
    top: 1294,
    left: 20,
  },
  serviceType: {
    top: 1049,
    left: 1401,
    width: 1517,
    height: 1780,
  },
  groupChild147: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text172: {
    top: 120,
    color: Color.praimary,
  },
  groupChild152: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text175: {
    left: 233,
    width: 94,
    top: 120,
    color: Color.praimary,
  },
  groupChild158: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text179: {
    color: Color.whait,
  },
  groupChild164: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text183: {
    color: Color.praimary,
  },
  typeOfProblem: {
    left: 3550,
    height: 1625,
  },
  groupChild170: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  text196: {
    top: "0.36%",
    height: "5.83%",
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupChild176: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild183: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  text202: {
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.whait,
  },
  groupChild190: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild197: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  projectName: {
    left: 4055,
    height: 2077,
  },
  text217: {
    left: "47.81%",
    width: "52.19%",
    top: "0%",
    height: "19.51%",
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    color: Color.praimary,
    fontWeight: "300",
  },
  property1variant75: {
    top: 997,
    left: 20,
  },
  property1variant85: {
    top: 1099,
    left: 20,
  },
  groupChild204: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text220: {
    color: Color.praimary,
  },
  rectangleParent24: {
    top: 0,
    left: 0,
  },
  property1variant2Inner5: {
    left: 0,
    top: 27,
  },
  text222: {
    top: "0.56%",
  },
  property1variant28: {
    height: 179,
    top: 142,
    left: 20,
  },
  groupChild208: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text224: {
    color: Color.whait,
  },
  property1variant3Inner5: {
    top: 26,
    left: 0,
  },
  text225: {
    top: "0%",
  },
  property1variant38: {
    height: 178,
    top: 438,
    left: 20,
  },
  groupChild213: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild217: {
    top: 103,
    left: 0,
    position: "absolute",
  },
  text227: {
    top: 72,
    color: Color.praimary,
  },
  property1variant4Inner5: {
    top: 28,
    left: 0,
  },
  text228: {
    height: "8.89%",
    top: "1.11%",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  property1variant48: {
    height: 180,
    top: 740,
    left: 20,
  },
  typeOfCategory: {
    left: 3045,
    height: 1211,
  },
  text229: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon16: {
    width: "18.02%",
    right: "-0.9%",
    left: "82.88%",
  },
  property1default9: {
    top: 21,
    width: 111,
    left: 17,
  },
  property1variant39: {
    top: 109,
  },
  property1variant56: {
    top: 197,
  },
  property1variant76: {
    top: 285,
  },
  text233: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant29: {
    top: 65,
  },
  property1variant49: {
    top: 153,
  },
  property1variant64: {
    top: 241,
  },
  property1variant86: {
    top: 329,
  },
  filter: {
    top: 1567,
    height: 374,
    left: 24,
  },
  property1variant77: {
    top: 2267,
    left: 20,
  },
  property1variant87: {
    top: 2369,
    left: 20,
  },
  property1variant95: {
    top: 2461,
    left: 20,
  },
  property1variant103: {
    top: 2563,
    left: 20,
  },
  property1variant111: {
    top: 2665,
    left: 20,
  },
  groupChild218: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text247: {
    left: 207,
    width: 120,
    color: Color.praimary,
  },
  rectangleParent27: {
    top: 0,
    left: 0,
  },
  property1variant2Inner6: {
    left: 0,
    top: 27,
  },
  text248: {
    height: "4.98%",
    width: 179,
    right: 0,
  },
  property1variant210: {
    top: 142,
  },
  groupChild225: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  text254: {
    height: "4.95%",
    left: "47.81%",
    width: "52.19%",
  },
  property1variant310: {
    top: 498,
  },
  groupChild233: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  property1variant410: {
    top: 840,
  },
  groupChild241: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  property1variant57: {
    top: 1186,
  },
  groupChild249: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  property1variant65: {
    top: 1531,
  },
  groupChild256: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 343,
    borderColor: Color.gray,
    top: 0,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChild262: {
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  text275: {
    left: 207,
    width: 120,
    color: Color.whait,
  },
  property1variant121: {
    top: 1876,
  },
  filterProjectName: {
    top: 584,
    left: 4551,
    height: 3069,
  },
  frameIcon24: {
    overflow: "hidden",
  },
  text279: {
    lineHeight: 16,
    color: Color.colorLightsteelblue_100,
    marginTop: 6,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  menu4: {
    marginLeft: 16,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  menu31: {
    width: 74,
  },
  menu32: {
    width: 57,
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    justifyContent: "center",
    width: 375,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
  },
  iphoneIndicator: {
    bottom: 0,
    height: 30,
  },
  bottomNav: {
    bottom: 1081,
  },
  bottomNav1: {
    bottom: 963,
  },
  desihnSystemArabic: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 3507,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DesihnSystemArabic;
