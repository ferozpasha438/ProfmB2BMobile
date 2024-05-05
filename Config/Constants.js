"use strict";

var ReactNative = require("react-native");
var { StyleSheet, Platform, Dimensions } = ReactNative;
import DeviceInfo from "react-native-device-info";

// PRODUCTION CONFIG
const BASE_SERVER = "https://13.69.11.184/FomMob/api/";
const JWT_Key="tKE+pMd2rQAHBbOjXWTZqacLJRLqlrnTzZdmKRJEXLjtiGOnFY3w+vuUxPSgLdMFbbVXxPrFWNUd/yQyG5PsEg==";

// STAGING CONFIG
//const BASE_SERVER =  'http://107.180.70.83/eCoponWebServices/test/Service.svc/json/'

// const BASE_SERVERS = ['http://107.180.70.83/eCoponWebServices/test/Service.svc/json/',
//                       'http://107.180.70.83/eCoponWebServices/v1.3/Service.svc/JSON/'];

const WindowWidth = Dimensions.get("window").width;
const popupWidthMax = WindowWidth - 40;

const isPhone = DeviceInfo.isTablet() ? false : true;

const constants = {
  APP_NAME: "ProFm",
  BASE_SERVER: BASE_SERVER,
  APP_VERSION: 106,
  APP_VERSION_STRING: "Ver 1.0.1",
  APP_COPYRIGHT_STRING: "Copyright © 2024 ProFm",

  FONT_REGULAR: Platform.OS === "android" ? "Roboto" : "Roboto-Regular",
  FONT_MEDIUM: Platform.OS === "android" ? "Roboto_medium" : "Roboto-Medium",

  POPUP_WIDTH: Math.min(400, popupWidthMax),
  NORMAL_BUTTON_WIDTH: Math.min(375, popupWidthMax),
  IS_DEVICE_PHONE: isPhone,

  WINDOW_WIDTH: WindowWidth,
  WINDOW_HEIGHT: Dimensions.get("window").height,

  ACTIVE_OPACITY: 0.8,
  THEME_COLOR: "#146390",
  POPUP_HEADER_HEIGHT: 50,
  POPUP_HEADER_TITLE_FONT_SIZE: isPhone ? 16 : 20,
  POPUP_DESC_TEXT_FONT_SIZE: isPhone ? 16 : 20,
  POPUP_HEADER_TITLE_FONT:
    Platform.OS === "android" ? "Roboto_medium" : "Roboto-Medium",
  BUTTON_TEXT_FONT_SIZE: isPhone ? 16 : 20,
  BUTTON_TEXT_FONT:
    Platform.OS === "android" ? "Roboto_medium" : "Roboto-Medium",

  LOGGED_USER: "LOGGED_USER",
  LOGGED_USER_LANG: "LOGGED_USER_LANG"
};

export default constants;
