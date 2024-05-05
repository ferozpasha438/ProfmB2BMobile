import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";

import CONSTANTS from "../Config/Constants.js";

class Alert extends Component {
  state = { modalVisible: false, message: "" };

  show(message) {
    this.setState({ message: message, modalVisible: true });
  }

  hide() {
    this.setState({ modalVisible: false });
  }

  showErrorResponse(resourceCode) {
    var message = resourceCode;//app.getResourceString(resourceCode);
    this.setState({ message: message, modalVisible: true });
  }

  didTapOkButton() {
    this.setState({ modalVisible: false });
    if (this.props.submitButtonAction) {
      this.props.submitButtonAction();
    }
  }

  render() {
    var buttonWidth = CONSTANTS.POPUP_WIDTH - 40;
    var okButtonColor = CONSTANTS.THEME_COLOR;
    var okButtonLbl = "OK";//app.getResourceString("btnOK");
    // if (okButtonLbl === "btnOK") {
    //   okButtonLbl = "OK";
    // }

    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => this.setState({ modalVisible: false })}
        >
          <View style={styles.basicContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.headerView}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.headerTitle}>{CONSTANTS.APP_NAME}</Text>
                </View>
              </View>

              <Text numberOfLines={0} style={styles.description}>
                {this.state.message}
              </Text>

              <View style={styles.mainBox}>
                <View
                  style={{
                    flex: 1,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={CONSTANTS.ACTIVE_OPACITY}
                    onPress={() => {
                      this.didTapOkButton();
                    }}
                  >
                    <View
                      style={{
                        height: 40,
                        width: buttonWidth,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: okButtonColor,
                        borderRadius: 4
                      }}
                    >
                      <Text
                        style={[
                          styles.normalButtonText,
                          { width: buttonWidth - 5 }
                        ]}
                      >
                        {okButtonLbl}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default Alert;

var styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000085"
  },

  modalContainer: {
    width: CONSTANTS.POPUP_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "column"
  },

  headerView: {
    height: CONSTANTS.POPUP_HEADER_HEIGHT,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: CONSTANTS.THEME_COLOR,
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  headerTitle: {
    fontSize: CONSTANTS.POPUP_HEADER_TITLE_FONT_SIZE,
    color: "white",
    fontFamily: CONSTANTS.POPUP_HEADER_TITLE_FONT,
    letterSpacing: 1,
    marginTop: 4
  },

  description: {
    fontSize: CONSTANTS.POPUP_DESC_TEXT_FONT_SIZE,
    minHeight: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: "#4A4A4A",
    fontFamily: CONSTANTS.FONT_REGULAR,
    letterSpacing: 1,
    textAlign: "center"
  },

  mainBox: {
    height: 75,
    width: CONSTANTS.POPUP_WIDTH,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center"
  },

  normalButtonText: {
    fontFamily: CONSTANTS.BUTTON_TEXT_FONT,
    fontSize: CONSTANTS.BUTTON_TEXT_FONT_SIZE,
    color: "white",
    letterSpacing: 1,
    textAlign: "center",
    width: CONSTANTS.POPUP_WIDTH - 40,
    backgroundColor: "transparent"
  }
});
