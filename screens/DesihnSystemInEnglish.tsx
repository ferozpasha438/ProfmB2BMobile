import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const DesihnSystemInEnglish = () => {
  return (
    <View style={styles.desihnSystemInEnglish}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.parentFlexBox]}>
          <View style={[styles.rectangleView, styles.frameChildLayout]} />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-51.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.parentFlexBox]}>
          <View style={[styles.frameChild8, styles.frameChildLayout]} />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-32.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-42.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-52.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.parentFlexBox]}>
          <View style={[styles.frameChild14, styles.frameChildLayout]} />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-23.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-33.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-43.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/ellipse-53.png")}
          />
        </View>
      </View>
      <View style={styles.parent}>
        <Text style={styles.text}>السلام عليكم ورحمة الله و بركاته</Text>
        <Text style={[styles.text1, styles.textSpaceBlock]}>
          السلام عليكم ورحمة الله و بركاته
        </Text>
        <Text style={styles.text2}>السلام عليكم ورحمة الله و بركاته</Text>
        <Text style={[styles.text3, styles.textTypo13]}>
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
      <View style={[styles.desihnSystemInEnglishChild, styles.desihnLayout]} />
      <View style={[styles.desihnSystemInEnglishItem, styles.desihnLayout]} />
      <View
        style={[styles.desihnSystemInEnglishInner, styles.desihnPosition]}
      />
      <View
        style={[styles.desihnSystemInEnglishChild1, styles.desihnPosition]}
      />
      <View style={[styles.button, styles.buttonBorder]}>
        <View style={[styles.property1button, styles.property1buttonLayout]}>
          <Text style={[styles.text9, styles.textTypo12]}>تسجيل الدخول</Text>
        </View>
        <View style={[styles.property1button2, styles.property1buttonBorder]}>
          <Text style={[styles.text10, styles.textTypo12]}>تسجيل الدخول</Text>
        </View>
      </View>
      <View style={[styles.typeOfBusiness, styles.buttonBorder]}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الأعمال
          </Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-157.png")}
          />
        </View>
        <View style={[styles.property1variant7, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-158.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الأعمال
          </Text>
        </View>
        <View style={[styles.property1variant8, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-159.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الأعمال
          </Text>
        </View>
        <View style={[styles.property1variant9, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1510.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الأعمال
          </Text>
        </View>
        <View
          style={[styles.property1variant10, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1511.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الأعمال
          </Text>
        </View>
        <View
          style={[styles.property1variant2, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text16, styles.textTypo11]}>{`تنظيف `}</Text>
              <Text style={[styles.text17, styles.textTypo11]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo11]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo10]}>
                جميع المرافق
              </Text>
            </View>
          </View>
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
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
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ChildPosition,
            ]}
          />
          <Text style={[styles.text20, styles.textTypo9]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant3, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant3Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View style={[styles.groupChild3, styles.groupChildShadowBox1]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text17, styles.textTypo11]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo11]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo10]}>
                جميع المرافق
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout4]} />
              <Text style={[styles.text24, styles.textTypo11]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
          />
          <Text style={[styles.text25, styles.textTypo8]}>نوع الأعمال</Text>
        </View>
        <View style={[styles.property1variant4, styles.groupChildLayout7]}>
          <View
            style={[styles.property1variant4Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View style={[styles.groupChild9, styles.groupChildShadowBox1]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text26, styles.textTypo11]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo11]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo10]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo11]}>{`تنظيف `}</Text>
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
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant4Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text30, styles.textTypo13]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant5, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild16, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout4]} />
              <Text style={[styles.text17, styles.textTypo11]}>صيانة</Text>
              <Text style={[styles.text32, styles.textTypo11]}>زراعة</Text>
              <Text style={[styles.text19, styles.textTypo10]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo11]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant5ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[styles.property1variant5Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text35, styles.textTypo8]}>نوع الأعمال</Text>
        </View>
        <View
          style={[styles.property1variant6, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild23, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-92.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild29, styles.groupChildLayout3]} />
              <Text style={[styles.text17, styles.textTypo11]}>صيانة</Text>
              <Text style={[styles.text18, styles.textTypo11]}>زراعة</Text>
              <Text style={[styles.text38, styles.textTypo10]}>
                جميع المرافق
              </Text>
              <Text style={[styles.text16, styles.textTypo11]}>{`تنظيف `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant5Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text35, styles.textTypo8]}>نوع الأعمال</Text>
        </View>
      </View>
      <View style={[styles.mediumButton, styles.filterBorder]}>
        <View
          style={[styles.property1button1, styles.property1buttonSpaceBlock]}
        >
          <Text style={[styles.text41, styles.textTypo7]}>تفاصيل الطلب</Text>
          <Image
            style={[styles.frameIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={[styles.property1button21, styles.jeddahLayout]}>
          <Text style={[styles.text42, styles.textTypo7]}>تعديل الطلب</Text>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
        </View>
      </View>
      <View style={[styles.serviceClass, styles.dateBorder]}>
        <View style={[styles.property1defaultRtltrue, styles.rtltrueLayout]}>
          <Text style={[styles.plannedService, styles.plannedPosition]}>
            Planned service
          </Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant3Rtltrue, styles.rtlPosition2]}>
          <Text style={[styles.plannedService, styles.plannedPosition]}>
            Service Request
          </Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant2Rtltrue, styles.rtltrueLayout]}>
          <Text style={[styles.plannedService1, styles.plannedPosition]}>
            Planned service
          </Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant4Rtltrue, styles.rtlPosition2]}>
          <Text style={[styles.serviceRequest1, styles.plannedPosition]}>
            Service Request
          </Text>
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.dateClass, styles.dateLayout]}>
        <View
          style={[styles.property1default1, styles.property1variantLayout6]}
        >
          <Text style={[styles.text43, styles.textPosition1]}>شهري</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant31, styles.property1variantLayout6]}
        >
          <Text style={[styles.text43, styles.textPosition1]}>سنوي</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant21, styles.property1variantLayout6]}
        >
          <Text style={[styles.text45, styles.textPosition1]}>شهري</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View
          style={[styles.property1variant41, styles.property1variantLayout6]}
        >
          <Text style={[styles.text45, styles.textPosition1]}>سنوي</Text>
          <Image
            style={[styles.frameIcon6, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.typeOfProblem, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الصيانة
          </Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1512.png")}
          />
        </View>
        <View
          style={[styles.property1variant71, styles.property1variant71Position]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1513.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الصيانة
          </Text>
        </View>
        <View
          style={[styles.property1variant81, styles.property1variant81Position]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1514.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الصيانة
          </Text>
        </View>
        <View
          style={[styles.property1variant91, styles.property1variant91Position]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1515.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع الصيانة
          </Text>
        </View>
        <View
          style={[styles.property1variant22, styles.property1variantLayout5]}
        >
          <View
            style={[styles.property1variant2Inner1, styles.groupChildLayout7]}
          >
            <View style={[styles.rectangleParent5, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild30, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <Text style={[styles.text51, styles.textTypo6]}>
                صيانة روتينية
              </Text>
              <Text style={[styles.text52, styles.textTypo6]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text53, styles.textTypo5]}>
                صيانة وقائية
              </Text>
            </View>
          </View>
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
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
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <Text style={[styles.text54, styles.text54Position]}>
            نوع الصيانة
          </Text>
        </View>
        <View
          style={[styles.property1variant32, styles.property1variantLayout5]}
        >
          <View
            style={[styles.property1variant3Inner1, styles.groupChildLayout7]}
          >
            <View style={[styles.rectangleParent6, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild35, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <Text style={[styles.text55, styles.textTypo13]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text53, styles.textTypo5]}>
                صيانة وقائية
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout4]} />
              <Text style={[styles.text57, styles.textTypo6]}>
                صيانة روتينية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
          />
          <Text style={[styles.text58, styles.text58Layout]}>نوع الصيانة</Text>
        </View>
        <View
          style={[styles.property1variant42, styles.property1variantLayout4]}
        >
          <View
            style={[styles.property1variant4Inner1, styles.groupChildLayout7]}
          >
            <View style={[styles.rectangleParent5, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild41, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text59, styles.textTypo4]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text53, styles.textTypo5]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text51, styles.textTypo6]}>
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
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[styles.property1variant4Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text62, styles.text62Position]}>
            نوع الصيانة
          </Text>
        </View>
        <View
          style={[styles.property1variant51, styles.property1variantLayout4]}
        >
          <View
            style={[styles.property1variant5Inner1, styles.groupChildLayout7]}
          >
            <View style={[styles.rectangleParent6, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild47, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-94.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild52, styles.groupChildLayout3]} />
              <Text style={[styles.text63, styles.textTypo4]}>
                صيانة إصلاحية
              </Text>
              <Text style={[styles.text64, styles.textTypo5]}>
                صيانة وقائية
              </Text>
              <Text style={[styles.text51, styles.textTypo6]}>
                صيانة روتينية
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[styles.property1variant5Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text66, styles.text66Layout]}>نوع الصيانة</Text>
        </View>
      </View>
      <View style={[styles.projectName, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <Text style={[styles.text11, styles.businessLayout]}>
            اسم المشروع
          </Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1516.png")}
          />
        </View>
        <View style={[styles.property1variant7, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1517.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            اسم المشروع
          </Text>
        </View>
        <View style={[styles.property1variant8, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1518.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            اسم المشروع
          </Text>
        </View>
        <View style={[styles.property1variant9, styles.property1defaultLayout]}>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1519.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            اسم المشروع
          </Text>
        </View>
        <View
          style={[styles.property1variant10, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1520.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            اسم المشروع
          </Text>
        </View>
        <View
          style={[styles.property1variant2, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild53, styles.groupChildShadowBox1]}
              />
              <Image
                style={[styles.groupChild54, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text72, styles.textTypo3]}>
                نادي جدة لليخوت
              </Text>
              <Text style={[styles.text73, styles.textTypo3]}>ممشى جدة</Text>
              <Text style={[styles.text74, styles.textPosition]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                مهرجان البحر الأحمر
              </Text>
            </View>
          </View>
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
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
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child3,
              styles.property1variant2ChildPosition,
            ]}
          />
          <Text style={[styles.text76, styles.textTypo9]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant3, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant3Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild59, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <Text style={[styles.text77, styles.textPosition]}>ممشى جدة</Text>
              <Text style={[styles.text74, styles.textPosition]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                مهرجان البحر الأحمر
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout4]} />
              <Text
                style={[styles.text80, styles.textPosition]}
              >{`نادي جدة لليخوت `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
          />
          <Text style={[styles.text25, styles.textTypo8]}>اسم المشروع</Text>
        </View>
        <View style={[styles.property1variant4, styles.groupChildLayout7]}>
          <View
            style={[styles.property1variant4Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild66, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text style={[styles.text82, styles.textPosition]}>ممشى جدة</Text>
              <Text style={[styles.text74, styles.textPosition]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text85, styles.textPosition]}
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
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant4Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text30, styles.textTypo13]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant5, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild73, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout4]} />
              <Text style={[styles.text77, styles.textPosition]}>ممشى جدة</Text>
              <Text style={[styles.text88, styles.textPosition]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text85, styles.textPosition]}
              >{`نادي جدة لليخوت  `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5Child,
              styles.property1variant5ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Item,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[styles.property1variant5Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text35, styles.textTypo8]}>اسم المشروع</Text>
        </View>
        <View
          style={[styles.property1variant6, styles.property1variantLayout7]}
        >
          <View
            style={[styles.property1variant2Inner, styles.groupChildLayout6]}
          >
            <View style={[styles.groupView, styles.groupChildLayout6]}>
              <View
                style={[styles.groupChild80, styles.groupChildShadowBox1]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-95.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild29, styles.groupChildLayout3]} />
              <Text style={[styles.text77, styles.textPosition]}>ممشى جدة</Text>
              <Text style={[styles.text74, styles.textPosition]}>
                جدة سوبر دوم
              </Text>
              <Text style={[styles.text94, styles.textPosition]}>
                مهرجان البحر الأحمر
              </Text>
              <Text
                style={[styles.text85, styles.textPosition]}
              >{`نادي جدة لليخوت   `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6Item,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[styles.property1variant5Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text35, styles.textTypo8]}>اسم المشروع</Text>
        </View>
      </View>
      <View style={[styles.typeOfCategory, styles.typeBorder]}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <Text style={[styles.text11, styles.businessLayout]}>الفئة</Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1521.png")}
          />
        </View>
        <View
          style={[styles.property1variant73, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1522.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع المشكلة
          </Text>
        </View>
        <View
          style={[styles.property1variant83, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1523.png")}
          />
          <Text style={[styles.text11, styles.businessLayout]}>
            نوع المشكلة
          </Text>
        </View>
        <View style={[styles.property1variant24, styles.groupChildLayout7]}>
          <View
            style={[styles.property1variant2Inner3, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent14, styles.groupChildLayout2]}>
              <View style={[styles.groupChild87, styles.groupChildLayout2]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-96.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <Text style={[styles.text100, styles.textTypo2]}>
                خدمة مخطط لها
              </Text>
              <Text style={[styles.text101, styles.textTypo1]}>طلب خدمة</Text>
            </View>
          </View>
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
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
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <Text style={[styles.text102, styles.textTypo]}>الفئة</Text>
        </View>
        <View style={[styles.property1variant34, styles.groupChildLayout7]}>
          <View
            style={[styles.property1variant3Inner3, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent14, styles.groupChildLayout2]}>
              <View style={[styles.groupChild91, styles.groupChildLayout2]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-97.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <Text style={[styles.text101, styles.textTypo1]}>طلب خدمة</Text>
              <View style={[styles.groupChild8, styles.groupChildLayout4]} />
              <Text style={[styles.text104, styles.textTypo2]}>
                خدمة مخطط لها
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3Child,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3Item,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[styles.property1variant2Child, styles.groupChildLayout7]}
          />
          <Text style={[styles.text105, styles.textTypo]}>الفئة</Text>
        </View>
        <View style={[styles.property1variant44, styles.groupChildLayout7]}>
          <View
            style={[styles.property1variant4Inner3, styles.groupChildLayout2]}
          >
            <View style={[styles.rectangleParent14, styles.groupChildLayout2]}>
              <View style={[styles.groupChild96, styles.groupChildLayout2]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-97.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild100, styles.groupChildLayout3]} />
              <Text style={[styles.text106, styles.textTypo1]}>طلب خدمة</Text>
              <Text
                style={[styles.text107, styles.textTypo5]}
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
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[styles.property1variant4Child2, styles.groupChildLayout7]}
          />
          <Text style={[styles.text108, styles.textTypo13]}>الفئة</Text>
        </View>
      </View>
      <View style={[styles.filter, styles.filterBorder]}>
        <View style={[styles.property1defaultRtlTrue, styles.dateLayout]}>
          <Text style={[styles.incompleteRequest, styles.incompleteTypo]}>
            Incomplete request
          </Text>
          <Image
            style={[styles.frameIcon10, styles.frameIconPosition1]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant3RtlTru, styles.rtlLayout2]}>
          <Text style={[styles.completedRequest, styles.completedTypo]}>
            Completed Request
          </Text>
          <Image
            style={[styles.frameIcon11, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant5RtlTru, styles.rtlLayout2]}>
          <Text style={[styles.completedRequest, styles.completedTypo]}>
            Request in progress
          </Text>
          <Image
            style={[styles.frameIcon11, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant7RtlTru, styles.rtlLayout1]}>
          <Text style={[styles.allRequests, styles.allTypo1]}>
            All Requests
          </Text>
          <Image
            style={[styles.frameIcon13, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant2RtlTru, styles.rtlPosition2]}>
          <Text style={[styles.incompleteRequest1, styles.incompleteTypo]}>
            Incomplete request
          </Text>
          <Image
            style={[styles.frameIcon14, styles.frameIconPosition1]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant4RtlTru, styles.rtlLayout2]}>
          <Text style={[styles.completedRequest1, styles.completedTypo]}>
            Completed Request
          </Text>
          <Image
            style={[styles.frameIcon11, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant6RtlTru, styles.rtlLayout2]}>
          <Text style={[styles.requestInProgress1, styles.completedTypo]}>
            Request in progress
          </Text>
          <Image
            style={[styles.frameIcon11, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant8RtlTru, styles.rtlLayout1]}>
          <Text style={[styles.allRequests1, styles.allTypo1]}>
            All Requests
          </Text>
          <Image
            style={[styles.frameIcon13, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <Image
        style={styles.httpslottiefilescomanimatIcon}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescomanimationscorrectvkgorsxfes.png")}
      />
      <View style={[styles.filterProjectName, styles.filterBorder]}>
        <View style={[styles.property1defaultRtlTrue1, styles.rtlPosition1]}>
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project Name
          </Text>
          <View
            style={[
              styles.property1defaultRtlTrueChild,
              styles.groupChildShadowBox1,
            ]}
          />
          <Image
            style={styles.property1defaultRtlTrueItem}
            resizeMode="cover"
            source={require("../assets/frame-9.png")}
          />
        </View>
        <View style={[styles.property1variant7RtlTru1, styles.rtlPosition1]}>
          <View style={styles.rectangleParentPosition}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.encapsulatedGroupParent,
                styles.groupParentFlexBox,
              ]}
            >
              <Image
                style={[styles.encapsulatedGroupIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/encapsulated-group.png")}
              />
              <View style={[styles.groupWrapper, styles.wrapperFlexBox]}>
                <Image
                  style={styles.frameChild21}
                  resizeMode="cover"
                  source={require("../assets/group-238676.png")}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant8RtlTru1, styles.rtlPosition1]}>
          <View
            style={[
              styles.property1variant8RtlTruChild,
              styles.groupChildShadowBox1,
            ]}
          />
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project name
          </Text>
          <View style={[styles.jeddahWalkParent, styles.rtlItemPosition]}>
            <Text style={[styles.jeddahWalk, styles.textTypo3]}>
              Jeddah Walk
            </Text>
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout1]}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
          </View>
        </View>
        <View style={[styles.property1variant9RtlTru, styles.rtlPosition1]}>
          <View
            style={[
              styles.property1variant9RtlTruChild,
              styles.groupChildShadowBox1,
            ]}
          />
          <Image
            style={[
              styles.property1variant9RtlTruItem,
              styles.publicSector2Layout,
            ]}
            resizeMode="cover"
            source={require("../assets/frame-98.png")}
          />
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project name
          </Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
        </View>
        <View style={[styles.property1variant10RtlTr, styles.rtlPosition1]}>
          <View
            style={[
              styles.property1variant10RtlTrChild,
              styles.groupChildShadowBox1,
            ]}
          />
          <Image
            style={[styles.property1variant10RtlTrItem, styles.rtlItemPosition]}
            resizeMode="cover"
            source={require("../assets/frame-99.png")}
          />
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project name
          </Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
        </View>
        <View style={[styles.property1variant11RtlTr, styles.rtlPosition1]}>
          <View
            style={[
              styles.property1variant11RtlTrChild,
              styles.groupChildShadowBox1,
            ]}
          />
          <Image
            style={[styles.property1variant10RtlTrItem, styles.rtlItemPosition]}
            resizeMode="cover"
            source={require("../assets/frame-910.png")}
          />
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant2RtlTru1, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild101, styles.groupChildShadowBox]}
              />
              <View
                style={[
                  styles.encapsulatedGroupGroup,
                  styles.groupParentFlexBox,
                ]}
              >
                <Image
                  style={[
                    styles.encapsulatedGroupIcon1,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <View
                    style={[
                      styles.encapsulatedGroupContainer,
                      styles.groupParentFlexBox,
                    ]}
                  >
                    <Image
                      style={[
                        styles.encapsulatedGroupIcon2,
                        styles.groupIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/encapsulated-group1.png")}
                    />
                    <View style={styles.wrapperFlexBox}>
                      <View
                        style={[styles.groupParent, styles.groupParentFlexBox]}
                      >
                        <Image
                          style={[styles.groupIcon4, styles.groupIconLayout]}
                          resizeMode="cover"
                          source={require("../assets/group4.png")}
                        />
                        <View style={styles.wrapperFlexBox}>
                          <Text style={styles.pleaseTypo1}>
                            Please specify project name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View
                style={[styles.groupChild106, styles.groupChildPosition3]}
              />
              <Text style={[styles.jeddahYachtClub, styles.jeddahLayout]}>
                Jeddah Yacht Club
              </Text>
              <Text style={[styles.jeddahWalk1, styles.jeddahLayout]}>
                Jeddah Walk
              </Text>
              <Text style={[styles.jeddahSuperDome, styles.jeddahTypo]}>
                Jeddah Super Dome
              </Text>
              <Text style={[styles.redSeaFestival, styles.jeddahTypo]}>
                Red Sea Festival
              </Text>
              <Text style={[styles.allProjects, styles.jeddahTypo]}>
                All projects
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild3,
              styles.property1variant2ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.projectName7, styles.projectTypo]}>
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant3RtlTru1, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild107, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon3,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={[styles.groupParent, styles.groupParentFlexBox]}>
                  <Image
                    style={[styles.groupIcon5, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group4.png")}
                  />
                  <View style={styles.wrapperFlexBox}>
                    <Text style={styles.pleaseTypo1}>
                      Please specify project name
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild108, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild109, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View
                style={[styles.groupChild106, styles.groupChildPosition3]}
              />
              <Text
                style={[styles.jeddahPromenade, styles.allTypo]}
              >{` Jeddah Promenade `}</Text>
              <Text
                style={[styles.jeddahSuperDome1, styles.jeddahSuperDome1Typo]}
              >{` Jeddah Super Dome `}</Text>
              <Text
                style={[styles.redSeaFestival1, styles.allTypo]}
              >{` Red Sea Festival `}</Text>
              <Text
                style={[styles.allProjects1, styles.allTypo]}
              >{` All projects `}</Text>
              <View style={[styles.groupChild113, styles.groupChildLayout4]} />
              <Text
                style={[styles.jeddahYachtClub1, styles.allTypo]}
              >{` Jeddah Yacht Club `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.projectName8, styles.projectTypo]}>
            {" "}
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant4RtlTru1, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild114, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon4,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <View style={[styles.groupParent, styles.groupParentFlexBox]}>
                    <Image
                      style={[styles.groupIcon6, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/group4.png")}
                    />
                    <View style={styles.wrapperFlexBox}>
                      <Text style={styles.pleaseTypo1}>
                        Please specify project name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild108, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild109, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View
                style={[styles.groupChild106, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild120, styles.groupChildPosition4]}
              />
              <Text
                style={[styles.jeddahPromenade1, styles.allTypo]}
              >{` Jeddah Promenade `}</Text>
              <Text
                style={[styles.jeddahSuperDome2, styles.textTypo13]}
              >{` Jeddah Super Dome `}</Text>
              <Text
                style={[styles.redSeaFestival1, styles.allTypo]}
              >{` Red Sea Festival `}</Text>
              <Text
                style={[styles.allProjects1, styles.allTypo]}
              >{` All projects `}</Text>
              <Text
                style={[styles.jeddahYachtClub2, styles.allTypo]}
              >{` Jeddah Yacht Club `}</Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4RtlTruChild,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.projectName8, styles.projectTypo]}>
            {" "}
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant5RtlTru1, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild121, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon5,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <View style={[styles.groupParent, styles.groupParentFlexBox]}>
                    <Image
                      style={[styles.groupIcon7, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/group4.png")}
                    />
                    <View style={styles.wrapperFlexBox}>
                      <Text style={styles.pleaseTypo1}>
                        Please specify project name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View
                style={[styles.groupChild106, styles.groupChildPosition3]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View style={[styles.groupChild127, styles.groupChildLayout4]} />
              <Text style={[styles.jeddahPromenade, styles.allTypo]}>
                Jeddah Walk
              </Text>
              <Text style={[styles.allProjects1, styles.allTypo]}>
                All projects
              </Text>
              <Text style={[styles.jeddahSuperDome3, styles.jeddahTypo]}>
                Jeddah Super Dome
              </Text>
              <Text style={[styles.redSeaFestival1, styles.allTypo]}>
                Red Sea Festival
              </Text>
              <Text style={[styles.jeddahYachtClub2, styles.allTypo]}>
                Jeddah Yacht Club
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5RtlTruChild,
              styles.property1variant5ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.projectName8, styles.projectTypo]}>
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant6RtlTru1, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild128, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon6,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <View style={[styles.groupParent, styles.groupParentFlexBox]}>
                    <Image
                      style={[styles.groupIcon8, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/group4.png")}
                    />
                    <View style={styles.wrapperFlexBox}>
                      <Text style={styles.pleaseTypo1}>
                        Please specify project name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View style={[styles.groupChild133, styles.groupChildLayout4]} />
              <Text style={[styles.jeddahPromenade, styles.allTypo]}>
                Jeddah Walk
              </Text>
              <Text style={[styles.jeddahSuperdome, styles.allTypo]}>
                Jeddah Superdome
              </Text>
              <Text style={[styles.allProjects1, styles.allTypo]}>
                All projects
              </Text>
              <Text style={[styles.redSeaFestival4, styles.allTypo]}>
                Red Sea Festival
              </Text>
              <Text style={[styles.jeddahYachtClub2, styles.allTypo]}>
                Jeddah Yacht Club
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.projectName8, styles.projectTypo]}>
            Project name
          </Text>
        </View>
        <View style={[styles.property1variant12RtlTr, styles.rtlLayout]}>
          <View
            style={[
              styles.property1variant2RtlTruInner,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent18, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild134, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon7,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <View style={[styles.groupParent, styles.groupParentFlexBox]}>
                    <Image
                      style={[styles.groupIcon9, styles.groupIconLayout]}
                      resizeMode="cover"
                      source={require("../assets/group4.png")}
                    />
                    <View style={styles.wrapperFlexBox}>
                      <Text style={styles.pleaseTypo1}>
                        Please specify project name
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild105, styles.groupChildPosition5]}
              />
              <View
                style={[styles.groupChild139, styles.groupChildPosition2]}
              />
              <Text style={[styles.jeddahPromenade, styles.allTypo]}>
                Jeddah Walk
              </Text>
              <Text style={[styles.jeddahSuperdome, styles.allTypo]}>
                Jeddah Superdome
              </Text>
              <Text style={[styles.allProjects5, styles.allTypo]}>
                All projects
              </Text>
              <Text style={[styles.redSeaFestival1, styles.allTypo]}>
                Red Sea Festival
              </Text>
              <Text style={[styles.jeddahYachtClub2, styles.allTypo]}>
                Jeddah Yacht Club
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant12RtlTrChild2,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.projectName8, styles.projectTypo]}>
            Project name
          </Text>
        </View>
      </View>
      <View style={[styles.typeOfBusinessInEnglish, styles.filterBorder]}>
        <View
          style={[
            styles.property1defaultRtlTrue2,
            styles.property1defaultLayout,
          ]}
        >
          <Text style={[styles.businessType, styles.businessLayout]}>
            Business Type
          </Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-151.png")}
          />
        </View>
        <View
          style={[
            styles.property1variant7RtlTru2,
            styles.property1variant71Position,
          ]}
        >
          <View style={styles.rectangleParentPosition}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.encapsulatedGroupParent,
                styles.groupParentFlexBox,
              ]}
            >
              <Image
                style={[styles.encapsulatedGroupIcon8, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/encapsulated-group1.png")}
              />
              <View
                style={[styles.privateSectorWrapper, styles.wrapperFlexBox]}
              >
                <Text
                  style={[styles.privateSector, styles.textTypo13]}
                >{`Private sector `}</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.businessType1, styles.businessLayout]}>
            Business type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant8RtlTru2,
            styles.property1variant81Position,
          ]}
        >
          <View style={styles.rectangleParentPosition}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.encapsulatedGroupParent,
                styles.groupParentFlexBox,
              ]}
            >
              <Image
                style={[styles.encapsulatedGroupIcon9, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/encapsulated-group1.png")}
              />
              <View
                style={[styles.privateSectorWrapper, styles.wrapperFlexBox]}
              >
                <Text
                  style={[styles.publicSector, styles.textTypo13]}
                >{`Public sector `}</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.businessType1, styles.businessLayout]}>
            Business type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant9RtlTru1,
            styles.property1variant91Position,
          ]}
        >
          <View style={styles.rectangleParentPosition}>
            <View style={styles.frameChildShadowBox} />
            <View
              style={[
                styles.encapsulatedGroupParent,
                styles.groupParentFlexBox,
              ]}
            >
              <Image
                style={[styles.encapsulatedGroupIcon10, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/encapsulated-group1.png")}
              />
              <View
                style={[styles.privateSectorWrapper, styles.wrapperFlexBox]}
              >
                <Text style={[styles.voluntarySector, styles.textTypo13]}>
                  Voluntary sector
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.businessType1, styles.businessLayout]}>
            Business type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant2RtlTru2,
            styles.property1variantLayout5,
          ]}
        >
          <View
            style={[
              styles.property1variant2RtlTruInner1,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild140, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon11,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <Text style={styles.pleaseTypo}>
                    Please select Business Type
                  </Text>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <Text style={[styles.privateSector1, styles.sectorTypo]}>
                Private Sector
              </Text>
              <Text style={[styles.publicSector1, styles.publicTypo]}>
                Public Sector
              </Text>
              <Text style={[styles.voluntarySector1, styles.publicTypo]}>
                Voluntary Sector
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <Text style={[styles.businessType4, styles.text54Position]}>
            Business Type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant3RtlTru2,
            styles.property1variantLayout5,
          ]}
        >
          <View
            style={[
              styles.property1variant3RtlTruInner1,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent28, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild144, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon12,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <Text style={styles.pleaseTypo}>
                    Please select Business Type
                  </Text>
                </View>
              </View>
              <View style={[styles.groupChild108, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild109, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <Text style={[styles.publicSector2, styles.publicSector2Layout]}>
                Public Sector
              </Text>
              <Text style={[styles.voluntarySector1, styles.publicTypo]}>
                Voluntary Sector
              </Text>
              <View style={[styles.groupChild113, styles.groupChildLayout4]} />
              <Text style={[styles.privateSector2, styles.publicTypo]}>
                Private Sector
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.businessType5, styles.text58Layout]}>
            Business Type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant4RtlTru2,
            styles.property1variantLayout4,
          ]}
        >
          <View
            style={[
              styles.property1variant4RtlTruInner1,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent27, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild149, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon13,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <Text style={styles.pleaseTypo}>
                    Please select Business Type
                  </Text>
                </View>
              </View>
              <View style={[styles.groupChild108, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild109, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild120, styles.groupChildPosition4]}
              />
              <Text style={[styles.publicSector3, styles.publicTypo]}>
                Public Sector
              </Text>
              <Text style={[styles.voluntarySector1, styles.publicTypo]}>
                Voluntary Sector
              </Text>
              <Text style={[styles.privateSector3, styles.publicTypo]}>
                Private Sector
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4RtlTruChild,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant4RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.businessType6, styles.text62Position]}>
            Business Type
          </Text>
        </View>
        <View
          style={[
            styles.property1variant5RtlTru2,
            styles.property1variantLayout4,
          ]}
        >
          <View
            style={[
              styles.property1variant5RtlTruInner1,
              styles.groupChildLayout7,
            ]}
          >
            <View style={[styles.rectangleParent28, styles.groupChildLayout7]}>
              <View
                style={[styles.groupChild154, styles.groupChildShadowBox]}
              />
              <View style={styles.encapsulatedGroupPosition}>
                <Image
                  style={[
                    styles.encapsulatedGroupIcon14,
                    styles.groupIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/encapsulated-group1.png")}
                />
                <View style={styles.wrapperFlexBox}>
                  <Text style={styles.pleaseTypo}>
                    Please select Business Type
                  </Text>
                </View>
              </View>
              <View style={[styles.groupChild102, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild103, styles.groupChildPosition6]}
              />
              <View style={[styles.groupChild104, styles.groupChildLayout5]} />
              <View style={[styles.groupChild158, styles.groupChildLayout3]} />
              <Text style={[styles.publicSector4, styles.sectorTypo]}>
                Public Sector
              </Text>
              <Text style={[styles.voluntarySector4, styles.publicTypo]}>
                Voluntary Sector
              </Text>
              <Text style={[styles.privateSector3, styles.publicTypo]}>
                Private Sector
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.businessType7, styles.text66Layout]}>
            Business Type
          </Text>
        </View>
      </View>
      <View style={styles.desihnSystemInEnglishChild2} />
      <Image
        style={[styles.groupIcon10, styles.groupIconLayout1]}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <View style={[styles.maintenanceType, styles.filterBorder]}>
        <View style={[styles.property1defaultRtlTrue3, styles.rtlPosition]}>
          <Text
            style={[styles.routine, styles.routinePosition]}
          >{`Routine `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant3RtlTru3, styles.rtlPosition]}>
          <Text
            style={[styles.routine, styles.routinePosition]}
          >{`Corrective `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant5RtlTru3, styles.rtlPosition]}>
          <Text
            style={[styles.preventive, styles.preventivePosition]}
          >{`Preventive `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View style={[styles.property1variant2RtlTru3, styles.rtlPosition]}>
          <Text
            style={[styles.routine1, styles.routinePosition]}
          >{`Routine `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant4RtlTru3, styles.rtlPosition]}>
          <Text
            style={[styles.corrective1, styles.routinePosition]}
          >{`Corrective `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
        <View style={[styles.property1variant6RtlTru2, styles.rtlPosition]}>
          <Text
            style={[styles.preventive1, styles.preventivePosition]}
          >{`Preventive `}</Text>
          <Image
            style={[styles.frameIcon18, styles.frameIconPosition2]}
            resizeMode="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.dateClass1, styles.dateLayout]}>
        <View
          style={[styles.property1default5, styles.property1variantLayout3]}
        >
          <Text style={[styles.monthly, styles.monthlyPosition]}>Monthly</Text>
          <Image
            style={styles.frameIconPosition}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant35, styles.property1variantLayout3]}
        >
          <Text style={[styles.annual, styles.annualPosition]}>Annual</Text>
          <Image
            style={styles.frameIconPosition}
            resizeMode="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
        <View
          style={[styles.property1variant25, styles.property1variantLayout3]}
        >
          <Text style={[styles.monthly1, styles.monthlyPosition]}>Monthly</Text>
          <Image
            style={styles.frameIconPosition}
            resizeMode="cover"
            source={require("../assets/frame20.png")}
          />
        </View>
        <View
          style={[styles.property1variant45, styles.property1variantLayout3]}
        >
          <Text style={[styles.annual1, styles.annualPosition]}>Annual</Text>
          <Image
            style={styles.frameIconPosition}
            resizeMode="cover"
            source={require("../assets/frame20.png")}
          />
        </View>
      </View>
      <View style={[styles.serviceType, styles.filterBorder]}>
        <View style={[styles.property1default6, styles.property1defaultLayout]}>
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Service Type
          </Text>
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-15.png")}
          />
        </View>
        <View
          style={[styles.property1variant74, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1524.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant84, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1525.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant93, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1526.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant102, styles.property1variantPosition1]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1527.png")}
          />
          <Text style={[styles.projectName1, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant18, styles.property1defaultLayout]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1528.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant15, styles.property1variantPosition1]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1529.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant16, styles.property1variantPosition1]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1530.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service type
          </Text>
        </View>
        <View
          style={[styles.property1variant17, styles.property1variantPosition1]}
        >
          <Image
            style={[styles.property1defaultChild, styles.groupIconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame-1531.png")}
          />
          <Text style={[styles.serviceType2, styles.businessLayout]}>
            Service type
          </Text>
        </View>
        <View
          style={[styles.property1variant26, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant2Inner4, styles.groupChildLayout1]}
          >
            <View style={[styles.rectangleParent31, styles.groupChildLayout1]}>
              <View style={[styles.groupChild159, styles.groupChildLayout1]} />
              <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
                <Image
                  style={styles.frameChild25}
                  resizeMode="cover"
                  source={require("../assets/frame-8.png")}
                />
                <Image
                  style={styles.groupIconLayout}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
              </View>
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild165, styles.groupChildPosition1]}
              />
              <View style={[styles.groupChild166, styles.groupChildPosition]} />
              <View style={[styles.groupChild167, styles.groupChildLayout5]} />
              <Text
                style={[styles.electricalMaintenance, styles.maintenanceTypo]}
              >
                Electrical maintenance
              </Text>
              <Text
                style={[styles.mechanicalMaintenance, styles.maintenanceTypo]}
              >
                Mechanical maintenance
              </Text>
              <Text
                style={[styles.plumbingMaintenance, styles.maintenancePosition]}
              >
                Plumbing maintenance
              </Text>
              <Text
                style={[styles.facilityMaintenance, styles.maintenancePosition]}
              >
                Facility maintenance
              </Text>
              <Text style={[styles.airConditioningSystems, styles.textTypo13]}>
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigerationEquipmentMainte,
                  styles.refrigerationTypo1,
                ]}
              >
                Refrigeration equipment maintenance
              </Text>
              <Text
                style={[styles.elevatorAndEscalator, styles.elevatorLayout]}
              >
                Elevator and escalator maintenance
              </Text>
              <Text
                style={[styles.securitySystemMaintenance, styles.securityTypo1]}
              >
                Security system maintenance And monitoring
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild2,
              styles.property1variant2ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild3,
              styles.property1variant2ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child22,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child23,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child24,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child25,
              styles.property1variant2ItemLayout,
            ]}
          />
          <Text style={[styles.serviceType10, styles.serviceTypo]}>
            Service type
          </Text>
        </View>
        <View
          style={[styles.property1variant36, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant2Inner4, styles.groupChildLayout1]}
          >
            <View style={[styles.rectangleParent31, styles.groupChildLayout1]}>
              <View style={[styles.groupChild168, styles.groupChildLayout1]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-911.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild165, styles.groupChildPosition1]}
              />
              <View style={[styles.groupChild166, styles.groupChildPosition]} />
              <View style={[styles.groupChild167, styles.groupChildLayout5]} />
              <Text style={[styles.text77, styles.textPosition]}>
                Mechanical maintenance
              </Text>
              <Text style={[styles.text74, styles.textPosition]}>
                Plumbing maintenance
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                Facilities maintenance
              </Text>
              <Text style={[styles.airConditioningSystems1, styles.textTypo13]}>
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigeratingEquipmentMainte,
                  styles.refrigerationTypo1,
                ]}
              >
                Refrigerating equipment maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators, styles.andTypo1]}>
                Elevators and escalators maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance, styles.securityLayout]}
              >
                Security and surveillance system maintenance
              </Text>
              <View style={[styles.groupChild8, styles.groupChildLayout4]} />
              <Text style={[styles.text80, styles.textPosition]}>
                Electrical maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child16,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child23,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2Child24,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child19,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType11, styles.serviceTypo]}>
            Service type
          </Text>
        </View>
        <View
          style={[styles.property1variant46, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant4Inner4, styles.groupChild179Layout]}
          >
            <View
              style={[styles.rectangleParent33, styles.groupChild179Layout]}
            >
              <View
                style={[styles.groupChild179, styles.groupChild179Layout]}
              />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-912.png")}
              />
              <View style={[styles.groupChild4, styles.groupChildLayout5]} />
              <View style={[styles.groupChild5, styles.groupChildPosition6]} />
              <View style={[styles.groupChild183, styles.groupChildLayout5]} />
              <View style={[styles.groupChild184, styles.groupChildLayout5]} />
              <View
                style={[styles.groupChild185, styles.groupChildPosition2]}
              />
              <View style={[styles.groupChild186, styles.groupChildLayout5]} />
              <View style={[styles.groupChild187, styles.groupChildLayout5]} />
              <View style={[styles.groupChild188, styles.groupChildLayout5]} />
              <View style={[styles.groupChild15, styles.groupChildPosition4]} />
              <Text
                style={[styles.mechanicalMaintenance2, styles.textPosition]}
              >
                Mechanical Maintenance
              </Text>
              <Text style={[styles.plumbingMaintenance2, styles.textPosition]}>
                Plumbing Maintenance
              </Text>
              <Text
                style={[styles.facilitiesMaintenance1, styles.textPosition]}
              >
                Facilities Maintenance
              </Text>
              <Text
                style={[
                  styles.airConditioningSystems2,
                  styles.jeddahSuperDome1Typo,
                ]}
              >
                Air Conditioning Systems Maintenance
              </Text>
              <Text
                style={[
                  styles.refrigeratingEquipmentMainte1,
                  styles.textPosition,
                ]}
              >
                Refrigerating Equipment Maintenance
              </Text>
              <Text style={[styles.elevatorAndEscalator1, styles.andLayout]}>
                Elevator and Escalator Maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance1, styles.securityLayout]}
              >
                Security and Surveillance System Maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                Electrical Maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant4RtlTruChild,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruItem,
              styles.property1variant3ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3Child16,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child17,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child18,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4Child19,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant4RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType12, styles.serviceTypo]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant53, styles.property1variantLayout2]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild190, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-911.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild165, styles.groupChildPosition1]}
              />
              <View style={[styles.groupChild166, styles.groupChildPosition]} />
              <View style={[styles.groupChild167, styles.groupChildLayout5]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild22, styles.groupChildLayout4]} />
              <Text style={[styles.text77, styles.textPosition]}>
                Mechanical Maintenance
              </Text>
              <Text
                style={[styles.airConditioningSystems3, styles.textTypo13]}
              >{`Air Conditioning Systems Maintenance `}</Text>
              <Text
                style={[
                  styles.refrigeratingEquipmentMainte,
                  styles.refrigerationTypo1,
                ]}
              >
                Refrigeration equipment maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators, styles.andTypo1]}>
                Elevator and escalator maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance, styles.securityLayout]}
              >
                Security and surveillance system maintenance
              </Text>
              <Text style={[styles.text88, styles.textPosition]}>
                Plumbing maintenance
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                Facility maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                Electrical maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant5RtlTruChild,
              styles.property1variant5ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child13,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild1,
              styles.property1variant2ChildPosition2,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruItem,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.typeOfService, styles.textTypo13]}>
            Type of service
          </Text>
        </View>
        <View
          style={[styles.property1variant62, styles.property1variantLayout1]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild201, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-913.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild206, styles.groupChildLayout5]} />
              <View style={[styles.groupChild207, styles.groupChildLayout5]} />
              <View style={[styles.groupChild208, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View style={[styles.groupChild210, styles.groupChildLayout4]} />
              <Text
                style={[
                  styles.mechanicalMaintenance4,
                  styles.maintenanceLayout,
                ]}
              >
                Mechanical maintenance
              </Text>
              <Text style={[styles.airConditioningSystems4, styles.airTypo]}>
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigerationEquipmentMainte2,
                  styles.refrigerationTypo,
                ]}
              >
                Refrigeration equipment maintenance
              </Text>
              <Text style={[styles.elevatorAndEscalator3, styles.andTypo]}>
                Elevator and escalator maintenance Electrical
              </Text>
              <Text
                style={[styles.securityAndSurveillance3, styles.securityTypo]}
              >
                Security and surveillance system maintenance
              </Text>
              <Text
                style={[styles.plumbingMaintenance4, styles.maintenanceLayout]}
              >
                Plumbing maintenance
              </Text>
              <Text
                style={[
                  styles.facilitiesMaintenance2,
                  styles.maintenanceLayout,
                ]}
              >
                Facilities maintenance
              </Text>
              <Text
                style={[
                  styles.electricalMaintenance4,
                  styles.maintenanceLayout,
                ]}
              >
                Electrical maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child11,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.typeOfService1, styles.servicePosition]}>
            Type of service
          </Text>
        </View>
        <View
          style={[styles.property1variant11, styles.property1variantLayout1]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild211, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-911.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild207, styles.groupChildLayout5]} />
              <View style={[styles.groupChild208, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild219, styles.groupChildPosition3]}
              />
              <Text style={[styles.text77, styles.textPosition]}>
                Mechanical maintenance
              </Text>
              <Text style={[styles.airConditioningSystems5, styles.airTypo]}>
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigerationEquipmentMainte3,
                  styles.refrigerationTypo,
                ]}
              >
                Refrigeration equipment maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators1, styles.andTypo]}>
                Elevators and escalators maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance4, styles.securityTypo]}
              >
                Security and surveillance system maintenance
              </Text>
              <Text style={[styles.text74, styles.textPosition]}>
                Maintenance Plumbing
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                Facilities Maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                Electrical Maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
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
              styles.property1variant6Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType13, styles.servicePosition]}>
            Service Type
          </Text>
        </View>
        <View
          style={[styles.property1variant12, styles.property1variantLayout1]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild220, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-914.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild207, styles.groupChildLayout5]} />
              <View style={[styles.groupChild208, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild229, styles.groupChildPosition1]}
              />
              <Text style={[styles.text77, styles.textPosition]}>
                Mechanical Maintenance
              </Text>
              <Text style={[styles.airConditioningSystems1, styles.textTypo13]}>
                Air Conditioning Systems Maintenance
              </Text>
              <Text
                style={[
                  styles.refrigeratingEquipmentMainte2,
                  styles.refrigerationTypo,
                ]}
              >
                Refrigerating Equipment Maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators1, styles.andTypo]}>
                Elevators and Escalators Maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance4, styles.securityTypo]}
              >
                Security and Surveillance System Maintenance
              </Text>
              <Text style={[styles.text74, styles.textPosition]}>
                Plumbing Maintenance
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                Facilities Maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                Electrical Maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
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
              styles.property1variant3Child16,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant6Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType13, styles.servicePosition]}>
            Type Service
          </Text>
        </View>
        <View
          style={[styles.property1variant13, styles.property1variantLayout1]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild230, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-915.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild207, styles.groupChildLayout5]} />
              <View style={[styles.groupChild208, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild165, styles.groupChildPosition1]}
              />
              <View style={[styles.groupChild240, styles.groupChildPosition]} />
              <Text style={[styles.text77, styles.textPosition]}>
                {" "}
                Mechanical maintenance
              </Text>
              <Text style={[styles.airConditioningSystems7, styles.textTypo13]}>
                {" "}
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigeratingEquipmentMainte,
                  styles.refrigerationTypo1,
                ]}
              >
                {" "}
                Refrigeration equipment maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators3, styles.andTypo]}>
                {" "}
                Elevators and escalators maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance4, styles.securityTypo]}
              >
                {" "}
                Security and surveillance system maintenance
              </Text>
              <Text style={[styles.text74, styles.textPosition]}>
                {" "}
                Plumbing maintenance
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                {" "}
                Facilities maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                {" "}
                Electrical maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child12,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5Child14,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType13, styles.servicePosition]}>
            {" "}
            Service type
          </Text>
        </View>
        <View
          style={[styles.property1variant14, styles.property1variantLayout1]}
        >
          <View
            style={[styles.property1variant5Inner3, styles.groupChildLayout]}
          >
            <View style={[styles.rectangleParent34, styles.groupChildLayout]}>
              <View style={[styles.groupChild241, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/frame-916.png")}
              />
              <View style={[styles.groupInner, styles.groupChildLayout5]} />
              <View style={[styles.lineView, styles.groupChildPosition6]} />
              <View style={[styles.groupChild1, styles.groupChildLayout5]} />
              <View style={[styles.groupChild207, styles.groupChildLayout5]} />
              <View style={[styles.groupChild208, styles.groupChildLayout5]} />
              <View style={[styles.groupChild2, styles.groupChildPosition5]} />
              <View
                style={[styles.groupChild164, styles.groupChildPosition3]}
              />
              <View
                style={[styles.groupChild165, styles.groupChildPosition1]}
              />
              <View style={[styles.groupChild251, styles.groupChildLayout3]} />
              <Text style={[styles.text77, styles.textPosition]}>
                {" "}
                Maintenance Mechanical
              </Text>
              <Text style={[styles.airConditioningSystems3, styles.textTypo13]}>
                {" "}
                Air conditioning systems maintenance
              </Text>
              <Text
                style={[
                  styles.refrigerationEquipmentMainte5,
                  styles.refrigerationTypo1,
                ]}
              >
                {" "}
                Refrigeration equipment maintenance
              </Text>
              <Text style={[styles.elevatorsAndEscalators4, styles.andTypo]}>
                {" "}
                Elevators and escalators maintenance
              </Text>
              <Text
                style={[styles.securityAndSurveillance7, styles.securityLayout]}
              >
                {" "}
                Security and surveillance system maintenance
              </Text>
              <Text style={[styles.text74, styles.textPosition]}>
                {" "}
                Plumbing maintenance
              </Text>
              <Text style={[styles.text75, styles.textPosition]}>
                {" "}
                Facilities maintenance
              </Text>
              <Text style={[styles.text85, styles.textPosition]}>
                {" "}
                Electrical maintenance
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.property1variant3RtlTruChild,
              styles.property1variant3ChildPosition1,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruItem,
              styles.property1variant6ItemPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant6RtlTruChild1,
              styles.property1variant6ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant3RtlTruChild1,
              styles.property1variant3ChildPosition,
            ]}
          />
          <View
            style={[
              styles.property1variant2RtlTruChild4,
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
              styles.property1variant2Child24,
              styles.property1variant2ItemLayout,
            ]}
          />
          <View
            style={[
              styles.property1variant5RtlTruChild3,
              styles.groupChildLayout7,
            ]}
          />
          <Text style={[styles.serviceType13, styles.servicePosition]}>
            {" "}
            Type of service
          </Text>
        </View>
      </View>
      <View style={[styles.property1defaultParent, styles.filterBorder]}>
        <View style={[styles.property1default7, styles.property1variantLayout]}>
          <View
            style={[
              styles.property1defaultChild3,
              styles.property1defaultChildPosition,
            ]}
          />
          <Image
            style={[styles.property1defaultChild4, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-186.png")}
          />
          <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
        </View>
        <View
          style={[styles.property1variant37, styles.property1variantLayout]}
        >
          <View
            style={[
              styles.property1defaultChild3,
              styles.property1defaultChildPosition,
            ]}
          />
          <Image
            style={[styles.property1variant3Child22, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-186.png")}
          />
          <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
        </View>
        <View
          style={[styles.property1variant27, styles.property1variantLayout]}
        >
          <View
            style={[
              styles.property1defaultChild3,
              styles.property1defaultChildPosition,
            ]}
          />
          <Image
            style={[styles.property1variant2Child27, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1861.png")}
          />
          <Text style={[styles.no, styles.noTypo]}>No</Text>
        </View>
        <View
          style={[styles.property1variant47, styles.property1variantLayout]}
        >
          <View
            style={[
              styles.property1defaultChild3,
              styles.property1defaultChildPosition,
            ]}
          />
          <Image
            style={[styles.property1variant3Child22, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1861.png")}
          />
          <Text style={[styles.no, styles.noTypo]}>No</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameChildLayout: {
    width: 51,
    borderRadius: Border.br_xl,
    height: 24,
  },
  textSpaceBlock: {
    marginTop: 15,
    textAlign: "left",
    color: Color.colorBlack,
  },
  textTypo13: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  logoTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "right",
    right: 36,
    fontWeight: "700",
    color: Color.colorBlack,
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
  desihnLayout: {
    height: 103,
    width: 232,
    top: 242,
    position: "absolute",
  },
  desihnPosition: {
    top: 77,
    height: 103,
    width: 232,
    position: "absolute",
  },
  buttonBorder: {
    width: 383,
    top: 969,
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
  textTypo12: {
    width: 291,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dGBaysan,
  },
  property1buttonBorder: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Color.praimary,
  },
  property1defaultLayout: {
    height: 82,
    width: 343,
    position: "absolute",
  },
  businessLayout: {
    height: "19.51%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1variantLayout7: {
    height: 276,
    width: 343,
    left: 20,
    position: "absolute",
  },
  groupChildLayout6: {
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChildShadowBox1: {
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
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderColor: Color.gray,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
  },
  groupChildLayout5: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  groupChildPosition6: {
    top: 104,
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition5: {
    top: 200,
    position: "absolute",
  },
  textTypo11: {
    width: 47,
    left: 280,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo10: {
    width: 87,
    left: 240,
    top: 216,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChildLayout7: {
    width: 343,
    position: "absolute",
  },
  property1variant2ItemLayout: {
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant2ChildPosition2: {
    top: 131,
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant2ChildPosition1: {
    top: 179,
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant2ChildPosition: {
    top: 227,
    height: 46,
    width: 343,
    position: "absolute",
  },
  textTypo9: {
    height: "5.83%",
    top: "0.36%",
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupChildLayout4: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  property1variant3ChildPosition1: {
    top: 133,
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant3ItemPosition: {
    top: 181,
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant3ChildPosition: {
    top: 229,
    height: 46,
    width: 343,
    position: "absolute",
  },
  textTypo8: {
    height: "5.8%",
    display: "flex",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  groupChildPosition4: {
    top: 103,
    position: "absolute",
  },
  property1variant5ChildPosition: {
    top: 230,
    height: 46,
    width: 343,
    position: "absolute",
  },
  groupChildLayout3: {
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  property1variant6ItemPosition: {
    top: 85,
    height: 46,
    width: 343,
    position: "absolute",
  },
  property1variant6ChildPosition: {
    top: 180,
    height: 46,
    width: 343,
    position: "absolute",
  },
  filterBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    position: "absolute",
    overflow: "hidden",
  },
  property1buttonSpaceBlock: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    left: 20,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  textTypo7: {
    lineHeight: 25,
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    marginLeft: 6,
    width: 16,
    height: 16,
  },
  jeddahLayout: {
    width: 140,
    alignItems: "center",
    position: "absolute",
  },
  dateBorder: {
    height: 196,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  rtltrueLayout: {
    width: 105,
    position: "absolute",
  },
  plannedPosition: {
    left: "24.76%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameIconPosition2: {
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rtlPosition2: {
    left: 21,
    height: 24,
  },
  dateLayout: {
    width: 145,
    position: "absolute",
  },
  property1variantLayout6: {
    width: 58,
    left: 67,
    height: 24,
    position: "absolute",
  },
  textPosition1: {
    width: "55.17%",
    top: "16.67%",
    height: "66.67%",
    left: "0%",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_3xs,
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
  property1variant71Position: {
    top: 1327,
    height: 82,
    width: 343,
    position: "absolute",
  },
  property1variant81Position: {
    top: 1429,
    height: 82,
    width: 343,
    position: "absolute",
  },
  property1variant91Position: {
    top: 1521,
    height: 82,
    width: 343,
    position: "absolute",
  },
  property1variantLayout5: {
    height: 227,
    width: 343,
    position: "absolute",
  },
  textTypo6: {
    width: 88,
    left: 239,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo5: {
    width: 108,
    left: 219,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text54Position: {
    top: "0.44%",
    height: "7.09%",
    display: "flex",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text58Layout: {
    height: "7.05%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantLayout4: {
    height: 228,
    width: 343,
    position: "absolute",
  },
  textTypo4: {
    width: 97,
    left: 230,
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text62Position: {
    top: "0.88%",
    height: "7.02%",
    display: "flex",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text66Layout: {
    height: "7.02%",
    top: "0.44%",
    display: "flex",
    width: "52.19%",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupPosition: {
    left: "4.66%",
    right: "4.66%",
    width: "90.67%",
    top: 21,
    position: "absolute",
  },
  textTypo3: {
    width: 120,
    color: Color.praimary,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textPosition: {
    left: 207,
    width: 120,
  },
  groupChildLayout2: {
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
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo1: {
    width: 84,
    left: 243,
    top: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo: {
    height: "8.99%",
    display: "flex",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    position: "absolute",
  },
  incompleteTypo: {
    top: "16.67%",
    height: "66.67%",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameIconPosition1: {
    left: "-0.69%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rtlLayout2: {
    width: 152,
    left: 21,
    height: 24,
    position: "absolute",
  },
  completedTypo: {
    left: "16.45%",
    textTransform: "capitalize",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rtlLayout1: {
    width: 111,
    left: 21,
    height: 24,
    position: "absolute",
  },
  allTypo1: {
    left: "22.52%",
    width: "79.28%",
    textTransform: "capitalize",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rtlPosition1: {
    left: 37,
    height: 82,
    width: 343,
    position: "absolute",
  },
  groupParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  groupIconLayout: {
    height: 8,
    width: 14,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rtlItemPosition: {
    top: 46,
    left: 16,
  },
  publicSector2Layout: {
    width: 99,
    height: 16,
    position: "absolute",
  },
  rtlLayout: {
    height: 323,
    left: 37,
    width: 343,
    position: "absolute",
  },
  groupChildShadowBox: {
    right: -343,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: 0,
    width: 343,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupChildPosition3: {
    top: 248,
    position: "absolute",
  },
  jeddahTypo: {
    right: 187,
    width: 140,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  projectTypo: {
    top: "0.31%",
    textTransform: "capitalize",
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  allTypo: {
    right: 200,
    width: 127,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  jeddahSuperDome1Typo: {
    width: 142,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChildPosition2: {
    top: 247,
    position: "absolute",
  },
  sectorTypo: {
    width: 107,
    right: 220,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  publicTypo: {
    right: 219,
    width: 108,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rtlPosition: {
    left: 15,
    width: 100,
    height: 24,
    position: "absolute",
  },
  routinePosition: {
    left: "26%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  preventivePosition: {
    width: "70%",
    left: "26%",
    top: "16.67%",
    height: "66.67%",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantLayout3: {
    width: 68,
    left: 135,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 24,
    position: "absolute",
  },
  monthlyPosition: {
    left: "61.76%",
    width: "61.76%",
    top: "16.67%",
    height: "66.67%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  annualPosition: {
    width: "47.06%",
    left: "61.76%",
    top: "16.67%",
    height: "66.67%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantPosition1: {
    top: 616,
    height: 82,
    width: 343,
    position: "absolute",
  },
  property1variantLayout2: {
    height: 466,
    width: 343,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 440,
    width: 343,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 296,
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: 344,
    left: 0,
    position: "absolute",
  },
  maintenanceTypo: {
    width: 243,
    right: 16,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  maintenancePosition: {
    left: 84,
    width: 243,
    textAlign: "left",
  },
  refrigerationTypo1: {
    top: 312,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  elevatorLayout: {
    width: 327,
    left: 0,
  },
  securityTypo1: {
    top: 408,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  serviceTypo: {
    height: "3.43%",
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  andTypo1: {
    top: 360,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  securityLayout: {
    width: 175,
    left: 152,
  },
  groupChild179Layout: {
    height: 438,
    width: 343,
    position: "absolute",
  },
  andLayout: {
    width: 217,
    left: 110,
    color: Color.praimary,
  },
  groupChildLayout: {
    height: 437,
    width: 343,
    position: "absolute",
  },
  property1variantLayout1: {
    height: 464,
    width: 343,
    position: "absolute",
  },
  maintenanceLayout: {
    width: 241,
    left: 86,
  },
  airTypo: {
    top: 265,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  refrigerationTypo: {
    top: 313,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  andTypo: {
    top: 361,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  securityTypo: {
    top: 409,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  servicePosition: {
    top: "0.37%",
    height: "5.8%",
    left: "0%",
    display: "flex",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variantLayout: {
    height: 30,
    width: 66,
    position: "absolute",
  },
  property1defaultChildPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  childLayout: {
    bottom: "12%",
    top: "11.67%",
    width: "34.59%",
    height: "76.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  noTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_4,
    top: "26.67%",
    width: "33.23%",
    height: "46.67%",
    color: Color.black,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    height: 24,
    backgroundColor: Color.praimary,
  },
  frameItem: {
    width: 24,
    marginLeft: -10,
    height: 24,
  },
  rectangleView: {
    backgroundColor: Color.binary,
    height: 24,
  },
  rectangleGroup: {
    marginLeft: 30,
  },
  frameChild8: {
    backgroundColor: Color.ternary,
    height: 24,
  },
  frameChild14: {
    backgroundColor: Color.colorBeige,
    height: 24,
  },
  frameParent: {
    marginLeft: 3103.5,
    top: 87,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text1: {
    fontSize: FontSize.size_3xs,
    marginTop: 15,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text2: {
    fontSize: FontSize.size_xs,
    marginTop: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text3: {
    marginTop: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "300",
  },
  text4: {
    fontSize: FontSize.size_base,
    marginTop: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  text5: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
    fontWeight: "300",
  },
  text6: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
  },
  text7: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
    marginTop: 15,
  },
  text8: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginTop: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  parent: {
    top: 255,
    right: 274,
    position: "absolute",
  },
  colours: {
    top: 17,
    textAlign: "right",
    position: "absolute",
  },
  fonts: {
    textAlign: "right",
    fontSize: FontSize.size_6xl,
    right: 36,
    fontWeight: "700",
    color: Color.colorBlack,
    fontFamily: FontFamily.dGBaysan,
  },
  logo: {
    top: 587,
    textAlign: "right",
    position: "absolute",
  },
  compound: {
    top: 862,
    textAlign: "right",
    position: "absolute",
  },
  icon: {
    top: 657,
    height: 104,
    right: 36,
    width: 250,
  },
  icon1: {
    top: 665,
    right: 317,
    height: 88,
  },
  desihnSystemInEnglishChild: {
    backgroundColor: Color.gray,
    right: 876,
  },
  desihnSystemInEnglishItem: {
    backgroundColor: Color.black,
    right: 1138,
  },
  desihnSystemInEnglishInner: {
    backgroundColor: Color.whait,
    right: 1138,
  },
  desihnSystemInEnglishChild1: {
    backgroundColor: Color.color,
    right: 876,
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
    right: 24,
  },
  text11: {
    display: "flex",
    left: "47.81%",
    top: "0%",
    width: "52.19%",
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
  },
  property1defaultChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "31.71%",
    height: "68.29%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
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
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupItem: {
    height: 14,
    width: 311,
    left: 16,
    top: 21,
    position: "absolute",
  },
  groupInner: {
    top: 56,
    position: "absolute",
    borderColor: Color.gray,
    left: 0,
  },
  lineView: {
    borderColor: Color.gray,
    left: 0,
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
    left: 0,
  },
  text16: {
    height: 16,
    top: 72,
    color: Color.praimary,
  },
  text17: {
    top: 120,
    height: 16,
    color: Color.praimary,
  },
  text18: {
    top: 168,
    height: 16,
    color: Color.praimary,
  },
  text19: {
    color: Color.praimary,
  },
  groupView: {
    top: 0,
    left: 0,
  },
  property1variant2Inner: {
    left: 0,
    top: 27,
  },
  property1variant2Child: {
    top: 26,
    left: 0,
    height: 56,
    width: 343,
  },
  property1variant2Item: {
    top: 83,
    height: 46,
    left: 0,
  },
  property1variant2Child1: {
    left: 0,
  },
  property1variant2Child2: {
    left: 0,
  },
  property1variant2Child3: {
    left: 0,
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
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild4: {
    top: 56,
    position: "absolute",
    left: 0,
    borderColor: Color.praimary,
  },
  groupChild5: {
    left: 0,
    borderColor: Color.praimary,
  },
  groupChild8: {
    top: 56,
    position: "absolute",
    left: 0,
  },
  text24: {
    height: 16,
    top: 72,
    color: Color.whait,
  },
  property1variant3Inner: {
    top: 26,
    left: 0,
  },
  property1variant3Child: {
    left: 0,
  },
  property1variant3Item: {
    left: 0,
  },
  property1variant3Child1: {
    left: 0,
  },
  text25: {
    top: "0%",
  },
  property1variant3: {
    top: 438,
  },
  groupChild9: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild15: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
    left: 0,
  },
  text26: {
    top: 120,
    height: 16,
    color: Color.whait,
  },
  property1variant4Inner: {
    top: 28,
    left: 0,
  },
  property1variant4Child: {
    top: 86,
    left: 0,
  },
  property1variant4Child2: {
    top: 28,
    left: 0,
    height: 56,
    width: 343,
  },
  text30: {
    height: "5.78%",
    top: "0.72%",
    display: "flex",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "300",
    position: "absolute",
  },
  property1variant4: {
    height: 277,
    top: 740,
    left: 20,
  },
  groupChild16: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
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
    height: 16,
    color: Color.whait,
  },
  property1variant5Child: {
    left: 0,
  },
  property1variant5Child2: {
    left: 0,
    top: 27,
    height: 56,
    width: 343,
  },
  text35: {
    top: "0.36%",
  },
  property1variant5: {
    top: 1036,
  },
  groupChild23: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild29: {
    top: 200,
    position: "absolute",
    left: 0,
  },
  text38: {
    color: Color.whait,
  },
  property1variant6Item: {
    left: 0,
  },
  property1variant6Child1: {
    left: 0,
  },
  property1variant6: {
    top: 1341,
  },
  typeOfBusiness: {
    right: 442,
    height: 2077,
  },
  text41: {
    color: Color.whait,
  },
  frameIcon1: {
    overflow: "hidden",
  },
  property1button1: {
    alignItems: "center",
    top: 20,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  text42: {
    width: 85,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
  },
  property1button21: {
    top: 75,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    left: 20,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Color.praimary,
  },
  mediumButton: {
    top: 1174,
    width: 180,
    height: 132,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    right: 24,
  },
  plannedService: {
    color: Color.black,
    width: "71.43%",
    left: "24.76%",
    fontWeight: "300",
  },
  frameIcon2: {
    width: "19.05%",
    right: "80.95%",
    left: "0%",
  },
  property1defaultRtltrue: {
    left: 19,
    width: 105,
    height: 24,
    top: 20,
  },
  property1variant3Rtltrue: {
    top: 108,
    width: 105,
    position: "absolute",
  },
  plannedService1: {
    width: "74.29%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant2Rtltrue: {
    top: 64,
    left: 19,
    width: 105,
    height: 24,
  },
  serviceRequest1: {
    width: "71.43%",
    left: "24.76%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant4Rtltrue: {
    width: 105,
    position: "absolute",
    top: 152,
  },
  serviceClass: {
    top: 341,
    right: 6806,
    width: 144,
    position: "absolute",
  },
  text43: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon6: {
    width: "34.48%",
    left: "65.52%",
    right: "0%",
  },
  property1default1: {
    top: 20,
  },
  property1variant31: {
    top: 108,
  },
  text45: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant21: {
    top: 64,
  },
  property1variant41: {
    top: 152,
  },
  dateClass: {
    top: 1594,
    right: 247,
    height: 196,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  property1variant71: {
    left: 20,
  },
  property1variant81: {
    left: 20,
  },
  property1variant91: {
    left: 20,
  },
  groupChild30: {
    height: 200,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    width: 343,
    position: "absolute",
  },
  text51: {
    top: 72,
    color: Color.praimary,
  },
  text52: {
    top: 120,
    color: Color.praimary,
  },
  text53: {
    top: 168,
    color: Color.praimary,
  },
  rectangleParent5: {
    height: 200,
    top: 0,
    left: 0,
  },
  property1variant2Inner1: {
    height: 200,
    left: 0,
    top: 27,
  },
  text54: {
    left: "47.81%",
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
  },
  property1variant22: {
    top: 142,
    left: 20,
  },
  groupChild35: {
    height: 201,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    width: 343,
    position: "absolute",
  },
  text55: {
    left: 233,
    width: 94,
    top: 120,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    position: "absolute",
  },
  text57: {
    top: 72,
    color: Color.whait,
  },
  rectangleParent6: {
    height: 201,
    top: 0,
    left: 0,
  },
  property1variant3Inner1: {
    height: 201,
    top: 26,
    left: 0,
  },
  text58: {
    left: "47.81%",
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
  },
  property1variant32: {
    top: 438,
    left: 20,
  },
  groupChild41: {
    height: 200,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    width: 343,
    position: "absolute",
  },
  text59: {
    color: Color.whait,
  },
  property1variant4Inner1: {
    height: 200,
    top: 28,
    left: 0,
  },
  text62: {
    left: "47.81%",
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
  },
  property1variant42: {
    top: 740,
    left: 20,
  },
  groupChild47: {
    height: 201,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    width: 343,
    position: "absolute",
  },
  groupChild52: {
    top: 152,
    left: 0,
    position: "absolute",
  },
  text63: {
    color: Color.praimary,
  },
  text64: {
    top: 168,
    color: Color.whait,
  },
  property1variant5Inner1: {
    height: 201,
    left: 0,
    top: 27,
  },
  text66: {
    left: "47.81%",
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "300",
  },
  property1variant51: {
    top: 1036,
    left: 20,
  },
  typeOfProblem: {
    right: 3550,
    height: 1625,
  },
  groupChild53: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  groupChild54: {
    height: 14,
    maxWidth: "100%",
    left: "4.66%",
    overflow: "hidden",
  },
  text72: {
    right: 16,
    width: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    top: 72,
  },
  text73: {
    right: 16,
    width: 120,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    top: 120,
  },
  text74: {
    top: 168,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text75: {
    top: 216,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text76: {
    width: 179,
    right: 0,
    top: "0.36%",
  },
  groupChild59: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  text77: {
    top: 120,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text80: {
    height: 16,
    top: 72,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild66: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  text82: {
    top: 120,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text85: {
    height: 16,
    top: 72,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild73: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  text88: {
    top: 168,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild80: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    top: 0,
    height: 249,
    width: 343,
    position: "absolute",
  },
  text94: {
    top: 216,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  projectName: {
    right: 4055,
    height: 2077,
  },
  property1variant73: {
    top: 997,
    left: 20,
  },
  property1variant83: {
    top: 1099,
    left: 20,
  },
  groupChild87: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  text100: {
    color: Color.praimary,
  },
  text101: {
    color: Color.praimary,
  },
  rectangleParent14: {
    top: 0,
    left: 0,
  },
  property1variant2Inner3: {
    left: 0,
    top: 27,
  },
  text102: {
    top: "0.56%",
  },
  property1variant24: {
    height: 179,
    top: 142,
    left: 20,
  },
  groupChild91: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  text104: {
    color: Color.whait,
  },
  property1variant3Inner3: {
    top: 26,
    left: 0,
  },
  text105: {
    top: "0%",
  },
  property1variant34: {
    height: 178,
    top: 438,
    left: 20,
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild100: {
    top: 103,
    position: "absolute",
    left: 0,
  },
  text106: {
    color: Color.whait,
  },
  text107: {
    top: 72,
    color: Color.praimary,
  },
  property1variant4Inner3: {
    top: 28,
    left: 0,
  },
  text108: {
    height: "8.89%",
    top: "1.11%",
    display: "flex",
    left: "47.81%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "300",
    position: "absolute",
  },
  property1variant44: {
    height: 180,
    top: 740,
    left: 20,
  },
  typeOfCategory: {
    right: 3045,
    height: 1211,
  },
  incompleteRequest: {
    width: "82.76%",
    left: "17.24%",
    textTransform: "capitalize",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon10: {
    width: "13.79%",
    right: "86.9%",
  },
  property1defaultRtlTrue: {
    left: 21,
    height: 24,
    top: 21,
  },
  completedRequest: {
    width: "83.55%",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon11: {
    width: "13.16%",
    right: "87.5%",
    left: "-0.66%",
  },
  property1variant3RtlTru: {
    top: 109,
  },
  property1variant5RtlTru: {
    top: 197,
  },
  allRequests: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon13: {
    width: "18.02%",
    right: "82.88%",
    left: "-0.9%",
  },
  property1variant7RtlTru: {
    top: 285,
  },
  incompleteRequest1: {
    width: "83.33%",
    left: "17.36%",
    textTransform: "capitalize",
    color: Color.praimary,
    fontWeight: "600",
  },
  frameIcon14: {
    width: "13.89%",
    right: "86.81%",
  },
  property1variant2RtlTru: {
    top: 65,
    width: 144,
    position: "absolute",
  },
  completedRequest1: {
    width: "88.82%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant4RtlTru: {
    top: 153,
  },
  requestInProgress1: {
    width: "82.89%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant6RtlTru: {
    top: 241,
  },
  allRequests1: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant8RtlTru: {
    top: 329,
  },
  filter: {
    top: 2130,
    right: 6484,
    width: 181,
    height: 374,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
  },
  httpslottiefilescomanimatIcon: {
    width: 500,
    height: 500,
    right: 0,
    top: 0,
    position: "absolute",
  },
  projectName1: {
    textTransform: "capitalize",
    left: "0%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    color: Color.praimary,
    textAlign: "left",
  },
  property1defaultRtlTrueChild: {
    top: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    position: "absolute",
    height: 56,
  },
  property1defaultRtlTrueItem: {
    top: 47,
    height: 14,
    width: 311,
    left: 16,
    position: "absolute",
  },
  property1defaultRtlTrue1: {
    top: 20,
  },
  frameChildShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 343,
    borderStyle: "solid",
    height: 56,
    borderRadius: Border.br_3xs,
  },
  encapsulatedGroupIcon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  frameChild21: {
    height: 16,
    width: 311,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupWrapper: {
    height: 16,
    width: 311,
  },
  encapsulatedGroupParent: {
    zIndex: 1,
    width: 311,
    left: 16,
    top: 20,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: "100%",
    right: "-100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    bottom: "0%",
    top: "31.71%",
    height: "68.29%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    position: "absolute",
    width: "100%",
  },
  property1variant7RtlTru1: {
    top: 2267,
  },
  property1variant8RtlTruChild: {
    top: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    position: "absolute",
    height: 56,
  },
  jeddahWalk: {
    top: 0,
    left: 0,
    textAlign: "left",
  },
  groupIcon1: {
    height: "47.06%",
    width: "4.5%",
    top: "23.53%",
    bottom: "29.41%",
    left: "95.5%",
    right: "0%",
  },
  jeddahWalkParent: {
    height: 17,
    width: 311,
    position: "absolute",
  },
  property1variant8RtlTru1: {
    top: 2369,
  },
  property1variant9RtlTruChild: {
    top: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    position: "absolute",
    height: 56,
  },
  property1variant9RtlTruItem: {
    top: 46,
    left: 16,
  },
  groupIcon2: {
    height: "9.76%",
    width: "4.08%",
    top: "60.98%",
    bottom: "29.27%",
    left: "91.25%",
    right: "4.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1variant9RtlTru: {
    top: 2461,
  },
  property1variant10RtlTrChild: {
    top: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    position: "absolute",
    height: 56,
  },
  property1variant10RtlTrItem: {
    height: 16,
    width: 311,
    position: "absolute",
  },
  property1variant10RtlTr: {
    top: 2563,
  },
  property1variant11RtlTrChild: {
    top: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 343,
    position: "absolute",
    height: 56,
  },
  property1variant11RtlTr: {
    top: 2665,
  },
  groupChild101: {
    height: 296,
  },
  encapsulatedGroupIcon1: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  encapsulatedGroupIcon2: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon4: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  pleaseTypo1: {
    opacity: 0.5,
    color: Color.colorLightsteelblue_100,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  groupParent: {
    height: 14,
    width: 311,
  },
  encapsulatedGroupContainer: {
    width: 311,
  },
  encapsulatedGroupGroup: {
    right: "-86.01%",
    left: "95.34%",
    width: "90.67%",
    justifyContent: "space-between",
    top: 21,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.whait,
    position: "absolute",
  },
  groupChild102: {
    right: 0,
    top: 56,
    position: "absolute",
    borderColor: Color.gray,
  },
  groupChild103: {
    right: 0,
    borderColor: Color.gray,
  },
  groupChild104: {
    right: 0,
    top: 152,
    borderColor: Color.gray,
    position: "absolute",
  },
  groupChild105: {
    right: 0,
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild106: {
    right: 0,
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  jeddahYachtClub: {
    height: 16,
    top: 72,
    left: 16,
    display: "flex",
    color: Color.praimary,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  jeddahWalk1: {
    top: 120,
    height: 16,
    left: 16,
    display: "flex",
    color: Color.praimary,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  jeddahSuperDome: {
    top: 168,
    color: Color.praimary,
  },
  redSeaFestival: {
    top: 216,
    color: Color.praimary,
  },
  allProjects: {
    top: 264,
    color: Color.praimary,
  },
  rectangleParent18: {
    height: 296,
    right: 0,
    top: 0,
  },
  property1variant2RtlTruInner: {
    height: 296,
    right: 0,
    top: 27,
  },
  property1variant2RtlTruChild: {
    right: 0,
    top: 26,
    height: 56,
    width: 343,
  },
  property1variant2RtlTruItem: {
    right: 0,
    top: 83,
    height: 46,
  },
  property1variant2RtlTruChild1: {
    right: 0,
  },
  property1variant2RtlTruChild2: {
    right: 0,
  },
  property1variant2RtlTruChild3: {
    right: 0,
  },
  property1variant2RtlTruChild4: {
    top: 277,
    right: 0,
  },
  projectName7: {
    height: "4.98%",
    width: 179,
    left: 0,
  },
  property1variant2RtlTru1: {
    top: 142,
  },
  groupChild107: {
    height: 296,
  },
  encapsulatedGroupIcon3: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon5: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  encapsulatedGroupPosition: {
    right: -295,
    justifyContent: "space-between",
    width: 311,
    top: 21,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    alignItems: "center",
    backgroundColor: Color.whait,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild108: {
    right: 0,
    top: 56,
    position: "absolute",
    borderColor: Color.praimary,
  },
  groupChild109: {
    right: 0,
    borderColor: Color.praimary,
  },
  jeddahPromenade: {
    width: 127,
    top: 120,
    color: Color.praimary,
  },
  jeddahSuperDome1: {
    right: 185,
    top: 168,
    textAlign: "left",
  },
  redSeaFestival1: {
    width: 127,
    top: 216,
    color: Color.praimary,
  },
  allProjects1: {
    width: 127,
    top: 264,
    color: Color.praimary,
  },
  groupChild113: {
    right: 0,
    top: 56,
    position: "absolute",
  },
  jeddahYachtClub1: {
    width: 127,
    top: 72,
    color: Color.whait,
  },
  property1variant3RtlTruChild: {
    right: 0,
  },
  property1variant3RtlTruItem: {
    right: 0,
  },
  property1variant3RtlTruChild1: {
    right: 0,
  },
  projectName8: {
    height: "4.95%",
    left: "0%",
    width: "52.19%",
  },
  property1variant3RtlTru1: {
    top: 498,
  },
  groupChild114: {
    height: 296,
  },
  encapsulatedGroupIcon4: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon6: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChild120: {
    right: 0,
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  jeddahPromenade1: {
    width: 127,
    top: 120,
    color: Color.whait,
  },
  jeddahSuperDome2: {
    right: 186,
    width: 141,
    top: 168,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  jeddahYachtClub2: {
    width: 127,
    top: 72,
    color: Color.praimary,
  },
  property1variant4RtlTruChild: {
    right: 0,
    top: 86,
  },
  property1variant4RtlTruChild3: {
    right: 0,
    top: 28,
    height: 56,
    width: 343,
  },
  property1variant4RtlTru1: {
    top: 840,
  },
  groupChild121: {
    height: 296,
  },
  encapsulatedGroupIcon5: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon7: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChild127: {
    right: 0,
    top: 152,
    position: "absolute",
  },
  jeddahSuperDome3: {
    top: 168,
    color: Color.whait,
  },
  property1variant5RtlTruChild: {
    right: 0,
  },
  property1variant5RtlTruChild3: {
    right: 0,
    top: 27,
    height: 56,
    width: 343,
  },
  property1variant5RtlTru1: {
    top: 1186,
  },
  groupChild128: {
    height: 296,
  },
  encapsulatedGroupIcon6: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon8: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChild133: {
    right: 0,
    top: 200,
    position: "absolute",
  },
  jeddahSuperdome: {
    width: 127,
    top: 168,
    color: Color.praimary,
  },
  redSeaFestival4: {
    width: 127,
    top: 216,
    color: Color.whait,
  },
  property1variant6RtlTruItem: {
    right: 0,
  },
  property1variant6RtlTruChild1: {
    right: 0,
  },
  property1variant6RtlTru1: {
    top: 1531,
  },
  groupChild134: {
    height: 296,
  },
  encapsulatedGroupIcon7: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupIcon9: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChild139: {
    right: 0,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  allProjects5: {
    width: 127,
    top: 264,
    color: Color.whait,
  },
  property1variant12RtlTrChild2: {
    top: 226,
    right: 0,
  },
  property1variant12RtlTr: {
    top: 1876,
  },
  filterProjectName: {
    top: 547,
    right: 4962,
    width: 400,
    height: 2796,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
  },
  businessType: {
    color: Color.black,
    left: "0%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    textAlign: "left",
  },
  property1defaultRtlTrue2: {
    left: 48,
    top: 20,
  },
  encapsulatedGroupIcon8: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  privateSector: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "600",
  },
  privateSectorWrapper: {
    height: 16,
  },
  businessType1: {
    textTransform: "capitalize",
    color: Color.black,
    left: "0%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    textAlign: "left",
  },
  property1variant7RtlTru2: {
    left: 48,
  },
  encapsulatedGroupIcon9: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  publicSector: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "600",
  },
  property1variant8RtlTru2: {
    left: 48,
  },
  encapsulatedGroupIcon10: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  voluntarySector: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    color: Color.praimary,
    textAlign: "right",
    fontWeight: "600",
  },
  property1variant9RtlTru1: {
    left: 48,
  },
  groupChild140: {
    height: 200,
  },
  encapsulatedGroupIcon11: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  pleaseTypo: {
    color: Color.gray,
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  privateSector1: {
    top: 72,
  },
  publicSector1: {
    top: 120,
    color: Color.praimary,
  },
  voluntarySector1: {
    top: 168,
    color: Color.praimary,
  },
  rectangleParent27: {
    right: 0,
    height: 200,
    top: 0,
  },
  property1variant2RtlTruInner1: {
    right: 0,
    height: 200,
    top: 27,
  },
  businessType4: {
    color: Color.black,
    left: "0%",
    textAlign: "left",
  },
  property1variant2RtlTru2: {
    left: 48,
    top: 142,
  },
  groupChild144: {
    height: 201,
  },
  encapsulatedGroupIcon12: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  publicSector2: {
    right: 228,
    top: 120,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
  },
  privateSector2: {
    top: 72,
    color: Color.whait,
  },
  rectangleParent28: {
    right: 0,
    height: 201,
    top: 0,
  },
  property1variant3RtlTruInner1: {
    right: 0,
    height: 201,
    top: 26,
  },
  businessType5: {
    color: Color.black,
    left: "0%",
    textAlign: "left",
  },
  property1variant3RtlTru2: {
    left: 48,
    top: 438,
  },
  groupChild149: {
    height: 200,
  },
  encapsulatedGroupIcon13: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  publicSector3: {
    top: 120,
    color: Color.whait,
  },
  privateSector3: {
    top: 72,
    color: Color.praimary,
  },
  property1variant4RtlTruInner1: {
    right: 0,
    height: 200,
    top: 28,
  },
  businessType6: {
    color: Color.black,
    left: "0%",
    textAlign: "left",
  },
  property1variant4RtlTru2: {
    left: 48,
    top: 740,
  },
  groupChild154: {
    height: 201,
  },
  encapsulatedGroupIcon14: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  groupChild158: {
    right: 0,
    top: 152,
    position: "absolute",
  },
  publicSector4: {
    top: 120,
  },
  voluntarySector4: {
    top: 168,
    color: Color.whait,
  },
  property1variant5RtlTruInner1: {
    right: 0,
    height: 201,
    top: 27,
  },
  businessType7: {
    color: Color.black,
    left: "0%",
    textAlign: "left",
  },
  property1variant5RtlTru2: {
    left: 48,
    top: 1036,
  },
  typeOfBusinessInEnglish: {
    top: 731,
    right: 7034,
    width: 411,
    height: 1663,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
  },
  desihnSystemInEnglishChild2: {
    top: 1987,
    right: 5812,
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon10: {
    height: "0.22%",
    width: "0.19%",
    top: "17.79%",
    right: "64.16%",
    bottom: "81.99%",
    left: "35.65%",
  },
  routine: {
    width: "75%",
    left: "26%",
    color: Color.black,
    fontWeight: "300",
  },
  frameIcon18: {
    width: "20%",
    right: "80%",
    left: "0%",
  },
  property1defaultRtlTrue3: {
    top: 20,
  },
  property1variant3RtlTru3: {
    top: 108,
  },
  preventive: {
    color: Color.black,
    fontWeight: "300",
  },
  property1variant5RtlTru3: {
    top: 196,
  },
  routine1: {
    width: "78%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant2RtlTru3: {
    top: 64,
  },
  corrective1: {
    width: "75%",
    left: "26%",
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant4RtlTru3: {
    top: 152,
  },
  preventive1: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant6RtlTru2: {
    top: 240,
  },
  maintenanceType: {
    right: 7524,
    width: 135,
    height: 275,
    top: 121,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
  },
  monthly: {
    color: Color.black,
    fontWeight: "300",
  },
  frameIconPosition: {
    left: "70.59%",
    width: "29.41%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  property1default5: {
    top: 20,
  },
  annual: {
    color: Color.black,
    fontWeight: "300",
  },
  property1variant35: {
    top: 108,
  },
  monthly1: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant25: {
    top: 64,
  },
  annual1: {
    color: Color.praimary,
    fontWeight: "600",
  },
  property1variant45: {
    top: 152,
  },
  dateClass1: {
    top: 783,
    right: 6679,
    height: 196,
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  property1default6: {
    right: 20,
    top: 20,
  },
  serviceType2: {
    left: "0%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    color: Color.praimary,
    textAlign: "left",
    fontWeight: "300",
  },
  property1variant74: {
    right: 390,
    top: 20,
  },
  property1variant84: {
    right: 766,
    top: 20,
  },
  property1variant93: {
    right: 1142,
    top: 20,
  },
  property1variant102: {
    right: 20,
  },
  property1variant18: {
    top: 1209,
    right: 20,
  },
  property1variant15: {
    right: 390,
  },
  property1variant16: {
    right: 766,
  },
  property1variant17: {
    right: 1142,
  },
  groupChild159: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  frameChild25: {
    width: 163,
    height: 14,
  },
  frameGroup: {
    left: "4.66%",
    right: "4.66%",
    width: "90.67%",
    top: 21,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  groupChild164: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
    left: 0,
  },
  groupChild165: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild166: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
  },
  groupChild167: {
    top: 392,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  electricalMaintenance: {
    top: 72,
  },
  mechanicalMaintenance: {
    top: 120,
  },
  plumbingMaintenance: {
    top: 168,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  facilityMaintenance: {
    top: 216,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  airConditioningSystems: {
    left: 17,
    width: 310,
    top: 264,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  refrigerationEquipmentMainte: {
    left: 84,
    width: 243,
    textAlign: "left",
  },
  elevatorAndEscalator: {
    top: 360,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    textAlign: "left",
  },
  securitySystemMaintenance: {
    width: 327,
    left: 0,
    textAlign: "left",
  },
  rectangleParent31: {
    top: 0,
    left: 0,
  },
  property1variant2Inner4: {
    top: 26,
    left: 0,
  },
  property1variant2Child22: {
    top: 275,
    right: 0,
  },
  property1variant2Child23: {
    top: 322,
    right: 0,
  },
  property1variant2Child24: {
    top: 369,
    right: 0,
  },
  property1variant2Child25: {
    top: 416,
    right: 0,
  },
  serviceType10: {
    textTransform: "capitalize",
    width: 179,
    left: 0,
    top: "0%",
  },
  property1variant26: {
    right: 20,
    top: 120,
  },
  groupChild168: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  airConditioningSystems1: {
    left: 194,
    width: 133,
    top: 264,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    position: "absolute",
  },
  refrigeratingEquipmentMainte: {
    left: 207,
    width: 120,
    textAlign: "right",
  },
  elevatorsAndEscalators: {
    left: 108,
    width: 219,
    textAlign: "right",
  },
  securityAndSurveillance: {
    top: 408,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    textAlign: "right",
  },
  property1variant3Child16: {
    top: 276,
    right: 0,
  },
  property1variant3Child19: {
    top: 420,
    right: 0,
  },
  serviceType11: {
    left: "0%",
    top: "0%",
    width: "52.19%",
    fontWeight: "300",
  },
  property1variant36: {
    right: 390,
    top: 121,
  },
  groupChild179: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild183: {
    borderColor: Color.gray,
    left: 0,
    top: 151,
    position: "absolute",
  },
  groupChild184: {
    top: 199,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild185: {
    height: 1,
    width: 344,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: Color.gray,
    left: 0,
  },
  groupChild186: {
    top: 295,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild187: {
    top: 343,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild188: {
    top: 391,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  mechanicalMaintenance2: {
    top: 119,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  plumbingMaintenance2: {
    top: 167,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  facilitiesMaintenance1: {
    top: 215,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  airConditioningSystems2: {
    top: 263,
    left: 185,
    textAlign: "right",
  },
  refrigeratingEquipmentMainte1: {
    top: 311,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  elevatorAndEscalator1: {
    top: 359,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  securityAndSurveillance1: {
    top: 407,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  rectangleParent33: {
    top: 0,
    left: 0,
  },
  property1variant4Inner4: {
    top: 28,
    left: 0,
  },
  property1variant4Child17: {
    top: 324,
    right: 0,
  },
  property1variant4Child18: {
    top: 372,
    right: 0,
  },
  property1variant4Child19: {
    top: 419,
    right: 0,
  },
  serviceType12: {
    top: "0.21%",
    left: "0%",
    width: "52.19%",
    fontWeight: "300",
  },
  property1variant46: {
    right: 766,
    top: 121,
  },
  groupChild190: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  airConditioningSystems3: {
    left: 181,
    width: 146,
    top: 264,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent34: {
    top: 0,
    left: 0,
  },
  property1variant5Inner3: {
    left: 0,
    top: 27,
  },
  property1variant5Child12: {
    top: 325,
    right: 0,
  },
  property1variant5Child13: {
    top: 373,
    right: 0,
  },
  property1variant5Child14: {
    top: 418,
    right: 0,
  },
  typeOfService: {
    height: "3.45%",
    left: "0%",
    display: "flex",
    top: "0%",
    width: "52.19%",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "300",
    position: "absolute",
  },
  property1variant53: {
    right: 1142,
    top: 121,
  },
  groupChild201: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild206: {
    top: 297,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild207: {
    top: 345,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild208: {
    top: 393,
    borderColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  groupChild210: {
    top: 200,
    position: "absolute",
    left: 0,
  },
  mechanicalMaintenance4: {
    top: 120,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  airConditioningSystems4: {
    width: 279,
    left: 48,
    color: Color.praimary,
  },
  refrigerationEquipmentMainte2: {
    width: 241,
    left: 86,
    color: Color.praimary,
  },
  elevatorAndEscalator3: {
    width: 327,
    left: 0,
    color: Color.praimary,
  },
  securityAndSurveillance3: {
    width: 327,
    left: 0,
  },
  plumbingMaintenance4: {
    top: 168,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  facilitiesMaintenance2: {
    top: 216,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  electricalMaintenance4: {
    height: 16,
    top: 72,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant6Child11: {
    top: 323,
    right: 0,
  },
  property1variant6Child12: {
    top: 374,
    right: 0,
  },
  typeOfService1: {
    textTransform: "capitalize",
  },
  property1variant62: {
    top: 712,
    height: 464,
    right: 20,
  },
  groupChild211: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild219: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
    left: 0,
  },
  airConditioningSystems5: {
    left: 188,
    width: 139,
    color: Color.whait,
  },
  refrigerationEquipmentMainte3: {
    left: 207,
    width: 120,
    color: Color.praimary,
  },
  elevatorsAndEscalators1: {
    left: 112,
    width: 215,
    color: Color.praimary,
  },
  securityAndSurveillance4: {
    width: 175,
    left: 152,
  },
  property1variant11Child2: {
    top: 228,
    right: 0,
  },
  property1variant11Child3: {
    top: 326,
    right: 0,
  },
  serviceType13: {
    fontWeight: "300",
  },
  property1variant11: {
    top: 712,
    height: 464,
    right: 390,
  },
  groupChild220: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild229: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  refrigeratingEquipmentMainte2: {
    left: 207,
    width: 120,
    color: Color.whait,
  },
  property1variant12: {
    top: 712,
    height: 464,
    right: 766,
  },
  groupChild230: {
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild240: {
    height: 49,
    width: 343,
    backgroundColor: Color.praimary,
  },
  airConditioningSystems7: {
    left: 178,
    width: 149,
    top: 264,
    height: 16,
    display: "flex",
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    position: "absolute",
  },
  elevatorsAndEscalators3: {
    left: 106,
    width: 221,
    color: Color.whait,
  },
  property1variant13: {
    top: 714,
    right: 1142,
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
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    top: 0,
  },
  groupChild251: {
    top: 388,
    left: 0,
    position: "absolute",
  },
  refrigerationEquipmentMainte5: {
    left: 200,
    width: 127,
    textAlign: "right",
  },
  elevatorsAndEscalators4: {
    width: 217,
    left: 110,
    color: Color.praimary,
  },
  securityAndSurveillance7: {
    top: 404,
    height: 16,
    display: "flex",
    color: Color.whait,
    alignItems: "center",
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  property1variant14: {
    top: 1294,
    right: 20,
  },
  serviceType: {
    top: 1702,
    right: 1370,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderRadius: 0.001,
    width: 1517,
    height: 1780,
  },
  property1defaultChild3: {
    height: "100%",
    borderRadius: 26,
    backgroundColor: Color.colorLightgray_100,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  property1defaultChild4: {
    right: "60.12%",
    left: "5.29%",
  },
  yes: {
    left: "55.89%",
  },
  property1default7: {
    left: 20,
    top: 20,
  },
  property1variant3Child22: {
    right: "32.93%",
    left: "32.48%",
  },
  property1variant37: {
    marginLeft: -33.1,
    top: 152,
    left: "50%",
  },
  property1variant2Child27: {
    right: "5.74%",
    left: "59.67%",
  },
  no: {
    left: "10.57%",
  },
  property1variant27: {
    top: 86,
    left: 20,
  },
  property1variant47: {
    top: 218,
    left: 20,
  },
  property1defaultParent: {
    top: 1489,
    left: 1209,
    width: 106,
    height: 268,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
  },
  desihnSystemInEnglish: {
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    height: 3507,
    overflow: "hidden",
    width: "100%",
  },
});

export default DesihnSystemInEnglish;
