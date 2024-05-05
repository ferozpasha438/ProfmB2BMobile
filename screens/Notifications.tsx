import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.notifications, styles.iconLayout]}>
      <View style={[styles.navBar, styles.tapPosition]}>
        <View style={[styles.webViewbottom, styles.tapPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <Text style={[styles.youHave3Container, styles.theTicketWithFlexBox]}>
        <Text style={styles.youHaveTypo}>
          <Text style={styles.youHave1}>You have</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.notifications1}>3 Notifications</Text>
        <Text style={styles.youHaveTypo}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.youHave1}>today</Text>
        </Text>
      </Text>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow21}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={styles.notifications2}>Notifications</Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigation.navigate("Reports13")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238698.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.theTicketHasBeenClosedParent}>
              <Text style={styles.pastNoticesTypo}>
                The ticket has been closed
              </Text>
              <Text style={[styles.minsAgo, styles.minsTypo]}>14 mins ago</Text>
            </View>
            <Text style={[styles.theTicketWith, styles.youHaveTypo]}>
              The ticket with request number 20358 has been completed you can
              view the report now
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Reports12")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={styles.groupParentPosition}>
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-238699.png")}
            />
            <View style={styles.frameParent}>
              <View style={styles.theTicketHasBeenClosedParent}>
                <Text style={styles.pastNoticesTypo}>
                  The ticket has been closed
                </Text>
                <Text style={[styles.minsAgo1, styles.minsTypo]}>
                  40 mins ago
                </Text>
              </View>
              <Text style={[styles.theTicketWith, styles.youHaveTypo]}>
                The ticket with request number 00236 has been suspended due to
                the expiration of working hours
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
      <View
        style={[styles.notificationsInner, styles.notificationsInnerPosition]}
      >
        <View style={styles.groupContainer}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238699.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.theTicketHasBeenClosedParent}>
              <Text style={styles.pastNoticesTypo}>
                The ticket has been closed
              </Text>
              <Text style={[styles.minsAgo1, styles.minsTypo]}>2 week ago</Text>
            </View>
            <Text style={[styles.theTicketWith, styles.youHaveTypo]}>
              The ticket with request number 00236 has been suspended due to the
              expiration of working hours
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.notificationsChild, styles.notificationsInnerPosition]}
        onPress={() => navigation.navigate("Reports11")}
      >
        <View style={styles.groupContainer}>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-238699.png")}
            />
          </View>
          <View style={styles.frameParent}>
            <View style={styles.theTicketHasBeenClosedParent}>
              <Text style={styles.pastNoticesTypo}>
                The ticket is now in transit
              </Text>
              <Text style={[styles.minsAgo1, styles.minsTypo]}>2 hour ago</Text>
            </View>
            <Text
              style={[styles.theTicketWith, styles.youHaveTypo]}
            >{`Ticket 00369 on hold resuming in 12 days due to material shortage
`}</Text>
          </View>
        </View>
      </Pressable>
      <View
        style={[styles.notificationsInner1, styles.notificationsInnerPosition]}
      >
        <View style={styles.groupContainer}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-238698.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.theTicketHasBeenClosedParent}>
              <Text style={styles.pastNoticesTypo}>
                The ticket is now on hold
              </Text>
              <Text style={[styles.minsAgo1, styles.minsTypo]}>1 week ago</Text>
            </View>
            <Text
              style={[styles.theTicketWith, styles.youHaveTypo]}
            >{`Ticket 00369 on hold resuming in 2 hours due to material shortage
`}</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.pastNotices, styles.pastNoticesTypo]}>
        Past notices
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tapPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  theTicketWithFlexBox: {
    textAlign: "left",
    lineHeight: 16,
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  groupLayout: {
    height: 81,
    left: 0,
    width: 375,
    position: "absolute",
  },
  groupParentPosition: {
    top: 13,
    left: 16,
    position: "absolute",
  },
  minsTypo: {
    textAlign: "right",
    fontSize: FontSize.size_4xs,
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 16,
  },
  youHaveTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  notificationsInnerPosition: {
    left: 16,
    position: "absolute",
  },
  pastNoticesTypo: {
    height: 16,
    width: 194,
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    lineHeight: 16,
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
    top: 0,
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
  },
  youHave1: {
    color: Color.colorLightsteelblue_100,
  },
  text: {
    color: Color.colorBlack,
  },
  notifications1: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  youHave3Container: {
    top: 113,
    fontSize: FontSize.size_3xs,
    left: 16,
    position: "absolute",
  },
  tapChild: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 88,
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
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow21: {
    right: 335,
    height: 24,
    top: 48,
    width: 24,
    position: "absolute",
  },
  notifications2: {
    marginLeft: -74.5,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 150,
    fontWeight: "700",
    height: 24,
    top: 48,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  tap: {
    height: 89,
    top: 0,
  },
  groupChild: {
    backgroundColor: Color.colorAliceblue_200,
    top: 0,
  },
  frameChild: {
    height: 50,
    width: 48,
  },
  minsAgo: {
    width: 46,
    marginLeft: 35,
  },
  theTicketHasBeenClosedParent: {
    flexDirection: "row",
  },
  theTicketWith: {
    fontSize: FontSize.size_xs,
    color: Color.gray,
    width: 265,
    height: 30,
    marginTop: 8,
    textAlign: "left",
    lineHeight: 16,
  },
  frameParent: {
    marginLeft: 20,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleParent: {
    top: 145,
  },
  minsAgo1: {
    width: 56,
    marginLeft: 25,
  },
  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleGroup: {
    top: 234,
  },
  notificationsInner: {
    top: 556,
  },
  groupWrapper: {
    width: 48,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationsChild: {
    top: 336,
  },
  notificationsInner1: {
    top: 467,
  },
  pastNotices: {
    top: 422,
    left: 16,
    position: "absolute",
  },
  notifications: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default Notifications;
