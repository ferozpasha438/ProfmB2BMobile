import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filter = () => {
  return (
    <View style={styles.filter}>
      <View style={[styles.property1defaultRtlTrue, styles.rtlPosition]}>
        <Text style={[styles.incompleteRequest, styles.requestTypo1]}>
          Incomplete request
        </Text>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={[styles.property1variant3RtlTru, styles.rtlLayout1]}>
        <Text style={[styles.completedRequest, styles.requestTypo1]}>
          Completed Request
        </Text>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={[styles.property1variant5RtlTru, styles.rtlLayout1]}>
        <Text style={[styles.completedRequest, styles.requestTypo1]}>
          Request in progress
        </Text>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={[styles.property1variant7RtlTru, styles.rtlLayout]}>
        <Text style={[styles.allRequests, styles.allPosition]}>
          All Requests
        </Text>
        <Image
          style={[styles.frameIcon3, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={[styles.property1variant2RtlTru, styles.rtlPosition]}>
        <Text style={[styles.incompleteRequest1, styles.requestTypo]}>
          Incomplete request
        </Text>
        <Image
          style={[styles.frameIcon4, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </View>
      <View style={[styles.property1variant4RtlTru, styles.rtlLayout1]}>
        <Text style={[styles.completedRequest1, styles.requestTypo]}>
          Completed Request
        </Text>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </View>
      <View style={[styles.property1variant6RtlTru, styles.rtlLayout1]}>
        <Text style={[styles.requestInProgress1, styles.requestTypo]}>
          Request in progress
        </Text>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </View>
      <View style={[styles.property1variant8RtlTru, styles.rtlLayout]}>
        <Text style={[styles.allRequests1, styles.requestTypo]}>
          All Requests
        </Text>
        <Image
          style={[styles.frameIcon3, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rtlPosition: {
    height: 24,
    left: 21,
    position: "absolute",
  },
  requestTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    top: "16.67%",
    height: "66.67%",
    position: "absolute",
  },
  frameIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    position: "absolute",
    overflow: "hidden",
  },
  rtlLayout1: {
    width: 152,
    height: 24,
    left: 21,
    position: "absolute",
  },
  rtlLayout: {
    width: 111,
    height: 24,
    left: 21,
    position: "absolute",
  },
  allPosition: {
    left: "22.52%",
    width: "79.28%",
  },
  requestTypo: {
    color: Color.praimary,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    top: "16.67%",
    height: "66.67%",
    position: "absolute",
  },
  incompleteRequest: {
    width: "93.1%",
    left: "17.24%",
  },
  frameIcon: {
    width: "13.79%",
    right: "86.9%",
    left: "-0.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1defaultRtlTrue: {
    top: 21,
    width: 145,
  },
  completedRequest: {
    width: "83.55%",
    left: "16.45%",
  },
  frameIcon1: {
    width: "13.16%",
    right: "87.5%",
    left: "-0.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1variant3RtlTru: {
    top: 109,
  },
  property1variant5RtlTru: {
    top: 197,
  },
  allRequests: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    top: "16.67%",
    height: "66.67%",
    position: "absolute",
  },
  frameIcon3: {
    width: "18.02%",
    right: "82.88%",
    left: "-0.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1variant7RtlTru: {
    top: 285,
  },
  incompleteRequest1: {
    width: "93.06%",
    left: "17.36%",
  },
  frameIcon4: {
    width: "13.89%",
    right: "86.81%",
    left: "-0.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
  },
  property1variant2RtlTru: {
    top: 65,
    width: 144,
  },
  completedRequest1: {
    width: "88.82%",
    left: "16.45%",
  },
  property1variant4RtlTru: {
    top: 153,
  },
  requestInProgress1: {
    width: "82.89%",
    left: "16.45%",
  },
  property1variant6RtlTru: {
    top: 241,
  },
  allRequests1: {
    left: "22.52%",
    width: "79.28%",
  },
  property1variant8RtlTru: {
    top: 329,
  },
  filter: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 374,
    overflow: "hidden",
  },
});

export default Filter;
