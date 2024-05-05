import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

type Home5Type = {
  onClose?: () => void;
};

const Home5 = ({ onClose }: Home5Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.home, styles.iconLayout1]}>
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <Text style={[styles.recentRequests, styles.seeAllPosition]}>
        Recent requests
      </Text>
      <Text style={[styles.seeAll, styles.allLayout]}>See all</Text>
      <View style={styles.frameParent}>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("SideMenu2")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/frame10.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Profile1")}
        >
          <View style={[styles.welcomeParent, styles.menuListFlexBox]}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.assemAlMohammadiWrapper}>
              <Text style={[styles.assemAlMohammadi, styles.textTypo3]}>
                Assem Al-Mohammadi
              </Text>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-167.png")}
          />
        </Pressable>
      </View>
      <View style={styles.homeChild} />
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
        <Text style={[styles.completed, styles.text5Layout]}>Completed</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>35</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}
          >
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildLayout1]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>35%</Text>
        </View>
        <Text style={[styles.incomplete, styles.text5Layout]}>Incomplete</Text>
        <Text style={[styles.text2, styles.textPosition]}>65</Text>
        <View style={[styles.encapsulatedGroup1, styles.textPosition]}>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupBg]} />
            <View style={[styles.groupChild1, styles.groupChildLayout1]} />
          </View>
        </View>
        <Text style={[styles.text3, styles.textPosition]}>65%</Text>
        <Text style={[styles.allServicesProvidedContainer, styles.allLayout]}>
          <Text
            style={styles.allServicesProvided}
          >{`All services provided since the beginning of the contract `}</Text>
          <Text style={styles.text4}>(100)</Text>
        </Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={styles.groupViewLayout}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text5, styles.textTypo1]}>21584</Text>
          <Text style={[styles.orderNumber, styles.textTypo1]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text6Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.textTypo1]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text6, styles.text6Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text6Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text7, styles.text7Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild3, styles.groupChildPosition1]} />
            <View style={[styles.groupChild4, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChild6Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressTypo]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumPosition]}>
            <Text style={[styles.deleteTicket, styles.text7Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text5, styles.textTypo1]}>23655</Text>
          <Text style={[styles.orderNumber, styles.textTypo1]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
            Maintenance type :
          </Text>
          <Text style={[styles.preventive, styles.text6Typo]}>Routine</Text>
          <Text style={[styles.projectName, styles.textTypo1]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text6, styles.text6Typo]}>01/11/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text6Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text7, styles.text7Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild9, styles.groupChildPosition1]} />
            <View style={[styles.groupChild10, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChild6Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress1, styles.completed2Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumPosition]}>
            <Text style={[styles.deleteTicket, styles.text7Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text5, styles.textTypo1]}>25416</Text>
          <Text style={[styles.orderNumber, styles.textTypo1]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text6Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.textTypo1]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text6, styles.text6Typo]}>10/31/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text6Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text7, styles.text7Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild9, styles.groupChildPosition1]} />
            <View style={[styles.groupChild10, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChild6Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
          <View style={[styles.mediumButton1, styles.mediumPosition]}>
            <Text style={[styles.deleteTicket, styles.text7Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text5, styles.textTypo1]}>26890</Text>
          <Text style={[styles.orderNumber, styles.textTypo1]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text6Typo]}
          >{`Routine `}</Text>
          <Text style={[styles.projectName, styles.textTypo1]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.textTypo1]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text6, styles.text6Typo]}>10/15/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text6Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text7, styles.text7Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild9, styles.groupChildPosition1]} />
            <View style={[styles.groupChild10, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChild6Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress1, styles.completed2Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("MOREInformaion6")}
          >
            <Text style={[styles.deleteTicket, styles.text7Typo]}>
              Delete Ticket
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.groupChild28Layout]}>
        <View style={[styles.groupChild28, styles.groupChild28Layout]} />
        <View style={[styles.frameContainer, styles.framePosition]}>
          <View style={styles.frameView}>
            <View style={styles.rectangleParent5}>
              <View style={[styles.frameItem, styles.frameChildLayout]} />
              <Text style={[styles.electricalWork, styles.workTypo]}>
                Electrical work
              </Text>
            </View>
            <View style={styles.rectangleParent6}>
              <View style={[styles.frameInner, styles.frameChildLayout]} />
              <Text style={[styles.janitorialWork, styles.workTypo]}>
                Janitorial work
              </Text>
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={styles.rectangleParent7}>
              <View style={[styles.frameChild1, styles.frameChildLayout]} />
              <Text style={[styles.janitorialWork, styles.workTypo]}>
                Plumbing work
              </Text>
            </View>
            <View style={styles.rectangleParent8}>
              <View style={[styles.frameChild2, styles.frameChildLayout]} />
              <Text style={[styles.airConditioningWork, styles.workTypo]}>
                Air conditioning work
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleParent9, styles.parentSpaceBlock]}>
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
            <Text style={[styles.janitorialWork, styles.workTypo]}>Other</Text>
          </View>
        </View>
        <View style={[styles.vectorParent, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
          <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.lineLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-1.png")}
            />
            <View style={[styles.groupChild29, styles.groupChildBg]} />
            <Text style={[styles.text17, styles.text17Layout]}>20</Text>
          </View>
          <View style={[styles.polygonGroup, styles.polygonGroupPosition]}>
            <Image
              style={[styles.polygonIcon, styles.lineLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-11.png")}
            />
            <View style={[styles.groupChild29, styles.groupChildBg]} />
            <Text style={[styles.text18, styles.textTypo]}>6</Text>
          </View>
          <View
            style={[styles.polygonContainer, styles.polygonParentShadowBox]}
          >
            <Image
              style={[styles.polygonIcon, styles.lineLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-12.png")}
            />
            <View style={[styles.groupChild29, styles.groupChildBg]} />
            <Text style={[styles.text18, styles.textTypo]}>8</Text>
          </View>
          <View style={[styles.polygonParent1, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.lineLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-13.png")}
            />
            <View style={[styles.groupChild29, styles.groupChildBg]} />
            <Text style={[styles.text18, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.polygonParent2, styles.polygonParent2Position]}>
            <Image
              style={[styles.polygonIcon, styles.lineLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-14.png")}
            />
            <View style={[styles.groupChild29, styles.groupChildBg]} />
            <Text style={[styles.text18, styles.textTypo]}>16</Text>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.framePosition]}>
          <View style={styles.rectangleParent7}>
            <Text style={[styles.unfinishedServices, styles.text5Layout]}>
              Unfinished services
            </Text>
            <Text style={[styles.text22, styles.textTypo1]}>( 53 )</Text>
          </View>
          <Text style={[styles.jeddahYachtClub2, styles.textTypo1]}>
            Jeddah Yacht Club
          </Text>
        </View>
        <Image
          style={[styles.frameIcon8, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.groupChildBg]}>
          <View style={styles.menuLayout}>
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={require("../assets/frame12.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={require("../assets/frame13.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>Requests</Text>
          </Pressable>
          <Pressable
            style={[styles.menu3, styles.menuLayout]}
            onPress={() => navigation.navigate("MOREInformaion11")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container, styles.parentFlexBox]}>
                <Image
                  style={styles.frameIcon9}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={require("../assets/liuser.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>My Account</Text>
          </Pressable>
          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={require("../assets/frame14.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>Reports</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.homeItem, styles.faceIdPosition]} />
      <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
        <View style={[styles.line, styles.lineLayout]} />
      </View>
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
            style={[styles.recordingIndicatorIcon, styles.text17Layout]}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={[styles.leftSideIcon, styles.groupChild6Position]}
          resizeMode="cover"
          source={require("../assets/left-side2.png")}
        />
      </View>
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View
          style={[
            styles.yourTicketHasBeenSuccessfuParent,
            styles.polygonGroupPosition,
          ]}
        >
          <Text style={[styles.yourTicketHas, styles.yourTypo]}>
            Your Ticket has been successfully Closed
          </Text>
          <Text style={[styles.yourTicketHas1, styles.yourTypo]}>
            Your Ticket has been Closed and you can submit a new ticket at any
            time
          </Text>
        </View>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[
            styles.httpslottiefilescomanimatIcon,
            styles.polygonParent2Position,
          ]}
          resizeMode="cover"
          source={require("../assets/httpslottiefilescomanimationsdelete8rw2zud6fg.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    width: 86,
    position: "absolute",
  },
  seeAllPosition: {
    top: 509,
    fontFamily: FontFamily.dGBaysan,
  },
  allLayout: {
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textTypo3: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChildLayout2: {
    height: 135,
    width: 343,
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text5Layout: {
    height: 16,
    display: "flex",
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  encapsulatedGroupLayout: {
    width: 190,
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChildLayout1: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  textLayout: {
    width: 32,
    fontWeight: "700",
  },
  textPosition: {
    top: 92,
    height: 8,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorParentLayout: {
    width: 89,
    position: "absolute",
  },
  text6Typo: {
    top: 48,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  mediumPosition: {
    top: 142,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text7Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  groupChildPosition1: {
    width: 91,
    borderTopWidth: 1,
    left: 127,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    left: 29,
    width: 91,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 10,
    top: 0,
  },
  groupChild6Position: {
    left: 21,
    position: "absolute",
  },
  inProgressTypo: {
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  progressLayout: {
    width: 52,
    right: 99,
  },
  groupViewLayout: {
    height: 190,
    width: 343,
  },
  completed2Typo: {
    color: Color.gray,
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild28Layout: {
    height: 173,
    width: 343,
    position: "absolute",
  },
  framePosition: {
    left: 8,
    position: "absolute",
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
  },
  workTypo: {
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  parentSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  polygonParentShadowBox: {
    height: 14,
    elevation: 2.55,
    shadowRadius: 2.55,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  lineLayout: {
    height: 5,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.whait,
    position: "absolute",
  },
  text17Layout: {
    height: 6,
    position: "absolute",
  },
  polygonGroupPosition: {
    right: 14,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 6,
    fontSize: FontSize.size_6xs_1,
    right: 7,
    top: 3,
    fontWeight: "600",
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  polygonParent2Position: {
    top: 32,
    position: "absolute",
  },
  bottomNavPosition: {
    bottom: 0,
    position: "absolute",
    width: 375,
  },
  home1Typo: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menuLayout: {
    width: 57,
    alignItems: "center",
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  yourTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  icon: {
    marginLeft: -43.5,
    top: 40,
    height: 31,
    left: "50%",
  },
  recentRequests: {
    right: 232,
    width: 127,
    height: 24,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 25,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  seeAll: {
    width: 46,
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    right: 16,
    fontFamily: FontFamily.dGBaysan,
    top: 509,
  },
  icon1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  frame: {
    width: 28,
    height: 28,
  },
  welcome: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  assemAlMohammadi: {
    color: Color.ternary,
    fontWeight: "300",
  },
  assemAlMohammadiWrapper: {
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeParent: {
    justifyContent: "center",
  },
  frameChild: {
    width: 45,
    height: 45,
    marginLeft: 8,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameParent: {
    top: 79,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  homeChild: {
    marginLeft: -166.5,
    top: 1440,
    width: 333,
    height: 63,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
    right: 0,
    backgroundColor: Color.whait,
    position: "absolute",
    borderRadius: Border.br_3xs,
    top: 0,
    height: 135,
    width: 343,
  },
  completed: {
    top: 56,
    width: 60,
    right: 273,
    height: 16,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    position: "absolute",
  },
  text: {
    height: 8,
    width: 20,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupItem: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupInner: {
    left: 126,
    width: 64,
    backgroundColor: Color.praimary,
    height: 8,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  encapsulatedGroup: {
    marginLeft: 6,
    height: 8,
  },
  text1: {
    lineHeight: 9,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    marginLeft: 6,
    height: 8,
  },
  parent: {
    top: 60,
    right: 9,
    alignItems: "center",
    position: "absolute",
  },
  incomplete: {
    top: 88,
    width: 60,
    right: 273,
    height: 16,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    position: "absolute",
  },
  text2: {
    right: 243,
    width: 20,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupChild1: {
    left: 54,
    width: 136,
    backgroundColor: Color.praimary,
    height: 8,
    position: "absolute",
  },
  encapsulatedGroup1: {
    left: 106,
    width: 190,
    overflow: "hidden",
  },
  text3: {
    width: 26,
    lineHeight: 9,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    right: 9,
    fontWeight: "700",
  },
  allServicesProvided: {
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text4: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  allServicesProvidedContainer: {
    marginLeft: -161.5,
    width: 326,
    top: 16,
    textAlign: "left",
    left: "50%",
  },
  groupIcon: {
    height: "6.67%",
    width: "4.66%",
    top: "87.41%",
    right: "47.52%",
    bottom: "5.93%",
    left: "47.81%",
    position: "absolute",
  },
  rectangleParent: {
    top: 350,
    right: 16,
    position: "absolute",
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
    right: 0,
    top: 0,
    width: 343,
    position: "absolute",
  },
  text5: {
    right: 52,
    width: 31,
    top: 16,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "300",
    color: Color.praimary,
    lineHeight: 25,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    top: 16,
    height: 16,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    top: 48,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  preventive: {
    width: 48,
    fontWeight: "300",
    right: 16,
    color: Color.praimary,
    position: "absolute",
  },
  projectName: {
    right: 261,
    width: 66,
    top: 16,
    height: 16,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    top: 16,
    height: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "300",
    color: Color.praimary,
    width: 86,
    position: "absolute",
  },
  text6: {
    right: 197,
    width: 51,
    fontWeight: "300",
    color: Color.praimary,
    position: "absolute",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text7: {
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon: {
    marginLeft: 6,
  },
  mediumButton: {
    left: 16,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    backgroundColor: Color.praimary,
  },
  groupChild3: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild4: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 216,
    position: "absolute",
  },
  groupChild5: {
    left: 118,
    position: "absolute",
  },
  groupChild6: {
    height: 10,
    width: 10,
    top: 0,
  },
  incomplete1: {
    right: 195,
    width: 53,
  },
  inProgress: {
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  completed1: {
    width: 53,
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  deleteTicket: {
    color: Color.colorRed_100,
    width: 85,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  mediumButton1: {
    left: 187,
    borderColor: Color.colorRed_100,
    borderWidth: 2,
    width: 140,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    borderStyle: "solid",
  },
  groupChild9: {
    borderColor: Color.gray,
  },
  groupChild10: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: 52,
    right: 99,
  },
  completed2: {
    width: 53,
    right: 0,
  },
  rectangleParent1: {
    marginTop: 24,
  },
  groupParent: {
    top: 557,
    height: 255,
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  groupChild28: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 5,
    shadowRadius: 5,
    right: 0,
  },
  frameItem: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 74,
  },
  rectangleParent5: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.colorGold,
  },
  janitorialWork: {
    width: 66,
  },
  rectangleParent6: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.binary,
  },
  rectangleParent7: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.ternary,
  },
  airConditioningWork: {
    width: 95,
  },
  rectangleParent8: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild3: {
    backgroundColor: Color.colorChocolate,
  },
  rectangleParent9: {
    alignItems: "center",
  },
  frameContainer: {
    top: 73,
  },
  vectorIcon: {
    top: 8,
    width: 76,
    height: 76,
    right: 8,
    position: "absolute",
  },
  polygonIcon: {
    top: 9,
    width: 5,
    right: 8,
  },
  groupChild29: {
    borderRadius: 1,
    height: 11,
    width: 20,
    right: 0,
    top: 0,
  },
  text17: {
    width: 8,
    lineHeight: 6,
    fontSize: FontSize.size_6xs_1,
    right: 7,
    top: 3,
    fontWeight: "600",
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  polygonParent: {
    top: 22,
    right: 69,
    position: "absolute",
  },
  text18: {
    width: 7,
    height: 5,
    position: "absolute",
  },
  polygonGroup: {
    top: 63,
    height: 14,
    elevation: 2.55,
    shadowRadius: 2.55,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  polygonContainer: {
    top: 66,
    right: 49,
    position: "absolute",
  },
  polygonParent1: {
    right: 23,
    top: 0,
    position: "absolute",
  },
  polygonParent2: {
    height: 14,
    elevation: 2.55,
    shadowRadius: 2.55,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    right: 0,
  },
  vectorParent: {
    top: 67,
    height: 84,
    right: 8,
  },
  unfinishedServices: {
    width: 150,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 25,
    fontSize: FontSize.size_base,
  },
  text22: {
    color: Color.color,
    width: 32,
    fontWeight: "700",
    marginLeft: 8,
    textTransform: "capitalize",
  },
  jeddahYachtClub2: {
    width: 118,
    color: Color.black,
    marginTop: 4,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  frameParent2: {
    top: 16,
  },
  frameIcon8: {
    left: 319,
    top: 16,
    position: "absolute",
  },
  rectangleParent4: {
    top: 153,
    right: 16,
  },
  frameIcon9: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  requests: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu5: {
    width: 58,
    marginLeft: 16,
    alignItems: "center",
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    backgroundColor: Color.praimary,
  },
  menu31: {
    height: 52,
    width: 74,
    alignItems: "center",
  },
  menu3: {
    marginLeft: 16,
  },
  menu2: {
    flex: 1,
    marginLeft: 16,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    right: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  homeItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    marginLeft: -187.5,
    height: 812,
    width: 375,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  iphoneIndicator: {
    backgroundColor: Color.colorDimgray_100,
    height: 30,
    right: 0,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
    top: 0,
    position: "absolute",
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
    top: 12,
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  yourTicketHas: {
    fontSize: FontSize.size_2xl,
    width: 314,
    height: 53,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    justifyContent: "center",
    fontWeight: "700",
    textTransform: "capitalize",
  },
  yourTicketHas1: {
    width: 315,
    height: 56,
    marginTop: 8,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_base,
  },
  yourTicketHasBeenSuccessfuParent: {
    top: 186,
    height: 117,
    alignItems: "center",
  },
  vectorIcon1: {
    height: "5.97%",
    width: "5.83%",
    top: "5.97%",
    right: "5.83%",
    bottom: "88.06%",
    left: "88.34%",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    right: 107,
    width: 130,
    height: 130,
  },
  faceId: {
    marginTop: -168,
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 335,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: "50%",
    backgroundColor: Color.whait,
    width: 343,
    marginLeft: -171.5,
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: 375,
  },
});

export default Home5;