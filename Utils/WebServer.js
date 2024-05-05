"use strict";

import axios from "axios";
import CONSTANTS from "../Config/Constants";
//import jwt from 'jsonwebtoken';

const BASE_URL = CONSTANTS.BASE_SERVER;
const SecretKey = CONSTANTS.JWT_Key;
axios.defaults.validateStatus = status => {
  return status >= 200 && status <= 500;
};

axios.defaults.timeout = 60000;

// axios.defaults.headers.common["token"] = utils.serverAccessToken
//   ? utils.serverAccessToken
//   : "";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["accept"] = "application/json";
/*
  Use axios interceptors to configure headers, show response error messages etc.
*/
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    if (error.response !== undefined) {
      alert("Error : " + error);
    }
    return Promise.reject(error);
  }
);

export function configureAPI() {
  axios.defaults.headers.post["crossDomain"] = true;
  axios.defaults.headers.common["Authorization"] =
    "ACCESS_TOKEN=" + global.app.auth_token;
}

export function getCall(url, params = null) {
  return axios.get(BASE_URL + url, { params: params });
}

export function putCall(url, body) {
  return axios.put(BASE_URL + url, body);
}

export function patchCall(url, body) {
  return axios.patch(BASE_URL + url, body);
}

export function postCall(url, body) {
  return axios.post(BASE_URL + url, body);
}

export function deleteCall(url, params = null) {
  return axios.delete(BASE_URL + url, { params: params });
}

module.exports = {
  getLanguages(responseHandler) {
    this.sendRequestToWebServer(
      "GetLanguagesKiosk/",
      null,
      "GET",
      responseHandler
    );
  },

  getResources(langId, responseHandler) {
    var method = "GetResourcesKiosk/5001/" + langId;
    this.sendRequestToWebServer(method, null, "GET", responseHandler);
  },

  loginUser(parameter, responseHandler) {
    this.sendRequestToWebServerForLogin(
      "FomMobLogin/",
      parameter,
      "POST",
      responseHandler
    );
  },
  getDataWithOutToken(url,parameter, responseHandler) {
    this.sendRequestToWebServerForLogin(
      url,
      parameter,
      "GET",
      responseHandler
    );
  },
  postDataWithOutToken(url,parameter, responseHandler) {
    this.sendRequestToWebServerForLogin(
      url,
      parameter,
      "POST",
      responseHandler
    );
  },
  getDataWithToken(url,tokenData,parameter, responseHandler){
    this.sendRequestToWebServerWithToken(
      url,
      tokenData,
      parameter,
      "GET",
      responseHandler
    );
  },
  postDataWithToken(url,tokenData,parameter, responseHandler){
    this.sendRequestToWebServerWithToken(
      url,
      tokenData,
      parameter,
      "POST",
      responseHandler
    );
  },



















  getMenu(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "GetMenuDetails/",
      parameter,
      "POST",
      responseHandler
    );
  },

  getCompetionList(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "GetCompetitionList/",
      parameter,
      "POST",
      responseHandler
    );
  },

  validateMember(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "VerifyMembership/",
      parameter,
      "POST",
      responseHandler
    );
  },

  validateGuest(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "VerifyGuest/",
      parameter,
      "POST",
      responseHandler
    );
  },

  verifyOTP(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "VerifyOTP/",
      parameter,
      "POST",
      responseHandler
    );
  },

  resendOTP(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "ResendOTP/",
      parameter,
      "POST",
      responseHandler
    );
  },

  sendCouponCount(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "NumberOfCopons/",
      parameter,
      "POST",
      responseHandler
    );
  },

  validateBarCode(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "VerifyBarcode/",
      parameter,
      "POST",
      responseHandler
    );
  },

  useBarCode(parameter, responseHandler) {
    this.sendRequestToWebServer(
      "UseBarcode/",
      parameter,
      "POST",
      responseHandler
    );
  },

  sendRequestToWebServer(url, parameter, methodType, responseHandler) {
    axios.defaults.headers.common["Authorization"] =
      "ACCESS_TOKEN=" + global.app.auth_token;

    if (methodType === "POST") {
      postCall(url, parameter)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    } else {
      getCall(url)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    }
  },
  sendRequestToWebServerForLogin(url, parameter, methodType, responseHandler) {
    if (methodType === "POST") {
      postCall(url, parameter)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    } else {
      getCall(url)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    }
  },
  sendRequestToWebServerWithToken(url, tokenData, parameter, methodType, responseHandler) {

    // const secretToken = jwt.sign(tokenData, SecretKey);
    axios.defaults.headers.common["Authorization"] = tokenData;

    if (methodType === "POST") {
      postCall(url, parameter)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    } else {
      getCall(url)
        .then(response => {
          if (responseHandler) {
            responseHandler(response.data);
          }
        })
        .catch(error => {
          if (responseHandler) {
            var errorResponse = {
              status: 0,
              response_code: 1,
              message:
                "Failed to get a response from the server. Please try later.",
              internal_error: error
            };
            responseHandler(errorResponse);
          }
        });
    }
  }
};
