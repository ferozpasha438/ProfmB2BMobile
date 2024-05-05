import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const NoNotifications = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.noNotifications, styles.iconLayout]}>
      <View style={[styles.navBar, styles.tapPosition1]}>
        <View style={[styles.webViewbottom, styles.tapPosition]}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View>
      <View style={styles.noNotificationParent}>
        <Image
          style={styles.noNotificationIcon}
          resizeMode="cover"
          source={require("../assets/no-notification.png")}
        />
        <View style={styles.thereAreNoNotificationsParent}>
          <Text style={[styles.thereAreNo, styles.thereAreNoLayout]}>
            There are no notifications
          </Text>
          <Text style={[styles.comeBackLater, styles.comeBackLaterTypo]}>
            Come back later for Reminders moments and weight notifications
          </Text>
        </View>
      </View>
      <View style={[styles.arrow21Parent, styles.arrow21ParentFlexBox]}>
        <Image
          style={styles.arrow21}
          resizeMode="cover"
          source={require("../assets/arrow-2-11.png")}
        />
        <Text style={[styles.notifications, styles.thereAreNoLayout]}>
          Notifications
        </Text>
      </View>
      <View style={[styles.tap, styles.tapPosition]}>
        <View style={[styles.tapChild, styles.tapPosition1]} />
        <View style={[styles.iphoneXOrNewer, styles.tapPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.tapPosition]}
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
            source={require("../assets/left-side.png")}
          />
        </View>
        <Pressable
          style={[styles.arrow211, styles.arrow211Position]}
          onPress={() => navigation.navigate("Home9")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.notifications1, styles.arrow211Position]}>
          Notifications
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tapPosition1: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  tapPosition: {
    top: 0,
    position: "absolute",
  },
  thereAreNoLayout: {
    height: 16,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_base,
  },
  comeBackLaterTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  arrow21ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow211Position: {
    height: 24,
    top: 48,
    position: "absolute",
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
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  noNotificationIcon: {
    width: 100,
    height: 117,
    opacity: 0.6,
  },
  thereAreNo: {
    textTransform: "capitalize",
    color: Color.black,
    width: 237,
    fontFamily: FontFamily.dGBaysan,
    height: 16,
    fontWeight: "700",
  },
  comeBackLater: {
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    color: Color.color,
    width: 260,
    height: 51,
    marginTop: 16,
    textAlign: "center",
    lineHeight: 16,
  },
  thereAreNoNotificationsParent: {
    marginTop: 24,
    alignItems: "center",
  },
  noNotificationParent: {
    marginTop: -112,
    marginLeft: -129.5,
    top: "50%",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  arrow21: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  notifications: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.whait,
    width: 104,
    marginLeft: 100,
  },
  arrow21Parent: {
    top: 47,
    left: 16,
    flexDirection: "row",
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
    position: "absolute",
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
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrow211: {
    right: 335,
    width: 24,
  },
  notifications1: {
    marginLeft: -74.5,
    lineHeight: 30,
    color: Color.praimary,
    display: "flex",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    height: 24,
    top: 48,
    left: "50%",
  },
  tap: {
    height: 89,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  noNotifications: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default NoNotifications;
