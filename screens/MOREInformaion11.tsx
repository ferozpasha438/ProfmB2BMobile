import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { Dropdown } from 'react-native-element-dropdown';
import AfterLoginFooter from '../components/AfterLoginFooter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import RNFS from 'react-native-fs';
import { RadioButton } from 'react-native-paper';

const MOREInformaion11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [pageHieght, setPageHieght] = useState(1150);
  const [photoListHieght, setPhotoListHieght] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isCustFocus, setIsCustFocus] = useState(false);
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;
  const [projectCode, setProjectCode] = useState("");
  const [disciplineType, setDisciplineType] = useState("");
  const [maintenanceType, setMaintenanceType] = useState("Corrective");
  const [jobType, setJobType] = useState("");
  const [txtProblem, setProblem] = useState("");
  const [txtDescription, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isCustomer, setIsCustomer] = useState(true);
  const [customerData, setCustomerData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [jobTypeData, setJobTypeData] = useState([]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [loginUserName, setLoginUserName] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginUserMobile, setLoginUseMobile] = useState("");
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [customerCode, setCustomerCode] = useState("");
  const [isShowPopUp, setShowPopUp] = useState(false);

  const [userName, setUserName] = useState("");
  

  const [serviceType, setServiceType] = useState("InScope");
  const handleRadioChange = (value:any) => {
    setServiceType(value);
    getServiceDataList(projectCode,value);
  };
  const maintenanceTypeChange = (value:any) => {
    setMaintenanceType(value);
  };
  

  const hideMessage = async () => {
    setShowPopUp(false);
  };

  
  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', selectionLimit: 3 },
      (response) => {
        if (response.didCancel) {
          console.log('Image picker cancelled');
        } else if (response.errorMessage) {
          console.error('Image picker error:', response.errorMessage);
        } else {
          const selectedImageUris = response?.assets?.map((asset) => asset.uri) || [];
          setSelectedImages(selectedImageUris);
          if(isCustomer){
            setPageHieght(1250);
          }else{
            setPageHieght(1350);
          }          
          setPhotoListHieght(100);
        }
      }
    );

    //launchCamera({cameraType:'front',mediaType:'photo',presentationStyle:'fullScreen',assetRepresentationMode:'current'},(response)=>{});
  };

  const uploadImages = async () => {
    if (selectedImages.length === 0) {
      console.warn('No images selected for upload');
      return;
    }
    try {
      // selectedImages.forEach((image, index) => {
      //   formData.append(`image${index + 1}`, {
      //     uri: image,
      //     type: 'image/jpeg',
      //     name: `image_${index + 1}.jpg`,
      //   });
      // });

      // const response = await axios.post(
      //   'https://example.com/upload',
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   }
      // );

      //console.log('Images uploaded successfully:', response.data);

    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  
  const clearAllFields = () => {
    if(isCustomer){
      setPageHieght(1150);
    }else{
      setPageHieght(1250);
    } 

    setPhotoListHieght(0);
    setProjectCode("");
    setDisciplineType("");
    setMaintenanceType("Corrective");
    setJobType("");
    setServiceType("InScope");
    setProblem("");
    setDescription("");
    setSelectedImages([]);
    if(loginType!=='client'){
      getSelectedCustomerData('');
      setProjectData([]);
      setLoginUserName('');
    }else{
      setServiceData([]);
    }
    setShowPopUp(true);
  };
  const submitRequest = async () => {
    try {
      Keyboard.dismiss();
      console.log('inserted')
     if(customerCode!='' && txtProblem!='' && disciplineType!='' && loginUserName!='' && maintenanceType!='' && jobType!=''){
      if (selectedImages.length === 0) {
        var param1 = {
                  customerCode: customerCode,
                  siteCode: projectCode,
                  joSubject: txtProblem,
                  joDescription: txtDescription,
                  joDeptCode: disciplineType,
                  joBookedBy: loginUserName,
                  jobMaintenanceType: maintenanceType,
                  jobType: jobType
              };
        WebServer.postDataWithToken('FomMobJobTicketHead/raiseJobTicket',token,param1, requestSubmitCallback);
      } else if (selectedImages.length === 1) {
        const base64Image1Data = await RNFS.readFile(selectedImages[0], 'base64');
        var param2 = {
          customerCode: customerCode,
          siteCode: projectCode,
          joSubject: txtProblem,
          joDescription: txtDescription,
          joDeptCode: disciplineType,
          joBookedBy: loginUserName,
          jobMaintenanceType: maintenanceType,
          jobType: jobType,
          base64Image1:base64Image1Data
        };
        console.log('params  : ');
        console.log('params  : '+base64Image1Data);
        WebServer.postDataWithToken('FomMobJobTicketHead/raiseJobTicket',token,param2, requestSubmitCallback);
      } else if (selectedImages.length === 2) {
        const base64Image1Data = await RNFS.readFile(selectedImages[0], 'base64');
        const base64Image2Data = await RNFS.readFile(selectedImages[1], 'base64');
          var param3 = {
            customerCode: customerCode,
            siteCode: projectCode,
            joSubject: txtProblem,
            joDescription: txtDescription,
            joDeptCode: disciplineType,
            joBookedBy: loginUserName,
            jobMaintenanceType: maintenanceType,
            jobType: jobType,
            base64Image1:base64Image1Data,
            base64Image2:base64Image2Data
          };
          WebServer.postDataWithToken('FomMobJobTicketHead/raiseJobTicket',token,param3, requestSubmitCallback);
      } else if (selectedImages.length === 3) {
        const base64Image1Data = await RNFS.readFile(selectedImages[0], 'base64');
        const base64Image2Data = await RNFS.readFile(selectedImages[1], 'base64');
        const base64Image3Data = await RNFS.readFile(selectedImages[2], 'base64');
          var param4 = {
            customerCode: customerCode,
            siteCode: projectCode,
            joSubject: txtProblem,
            joDescription: txtDescription,
            joDeptCode: disciplineType,
            joBookedBy: loginUserName,
            jobMaintenanceType: maintenanceType,
            jobType: jobType,
            base64Image1:base64Image1Data,
            base64Image2:base64Image2Data,
            base64Image3:base64Image3Data
          };
          WebServer.postDataWithToken('FomMobJobTicketHead/raiseJobTicket',token,param4, requestSubmitCallback);
      }
     }else{
        Alert.alert("Please enter all required fields.");
     }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const requestSubmitCallback = response => {
    if (response && response.message === undefined) {
      Alert.alert("error");
    }else{
        if(response.type===0 && response.message ==='Successful.'){
           clearAllFields();
        }else{
           Alert.alert(response.message);
        }
    }
  };
  

  const getCustomerList = async (jwttoken:string) => {
    WebServer.getDataWithToken('FomMobCustomer/getSelectCustomersList',jwttoken,'', customerListCallback);
  };
  const customerListCallback = customerResponse => {
    var count = customerResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:customerResponse[i].textTwo,value:customerResponse[i].text});
    }
    setCustomerData(data);
  }
  const getSelectedCustomerData = async (custCode:string) => {
    WebServer.getDataWithToken('FomMobCustomer/getCustomerByCode/'+custCode,token,'', selectedCustomerDataCallback);
  };
  const selectedCustomerDataCallback = selectedCustomerResponse => {
    setLoginUserEmail(selectedCustomerResponse.custEmail1);
    setLoginUseMobile(selectedCustomerResponse.custMobile1);
    setMobileNumber(selectedCustomerResponse.custMobile1);
    setCustomerCode(selectedCustomerResponse.custCode);
  }
  const getProjectDataList = async (custCode:string,jwttoken:string) => {
     WebServer.getDataWithToken('FomMobsite/getSelectSitesListByCustomerCode/'+custCode,jwttoken,'', projectDataCallback);
  };
  const projectDataCallback = projectResponse => {
    var count = projectResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:projectResponse[i].textTwo,value:projectResponse[i].text});
    }
    setProjectData(data);
  }
  const getServiceDataList = async (projectCode:string,type:string) => {
    if(type==='OutOfScope'){
      WebServer.getDataWithToken('FomMobCutomerSiteContract/getSelectNonContractDepartmentsByCustomerSiteCodes/'+customerCode+'/'+projectCode,token,'', serviceDataCallback);
    }else{
      WebServer.getDataWithToken('FomMobCutomerSiteContract/getSelectContractDepartmentsByCustomerSiteCodes/'+customerCode+'/'+projectCode,token,'', serviceDataCallback);
    }
  };
  const serviceDataCallback = serviceResponse => {
    setServiceData([]);
    setDisciplineType('');
    var count = serviceResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:serviceResponse[i].textTwo,value:serviceResponse[i].text});
    }
    setServiceData(data);
    console.log('serviceData : '+JSON.stringify(serviceData));
  }
  const getJobTypeDataList = async (jwttoken:string) => {
    WebServer.getDataWithToken('FomMobMetaData/getSelectJobTypes',jwttoken,'', jobTypeCallback);
  };
  const jobTypeCallback = jobTypeResponse => {
    var count = jobTypeResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:jobTypeResponse[i].textTwo,value:jobTypeResponse[i].text});
    }
    setJobTypeData(data);
  }

  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setLoginType(userInfo.loginType);
          setLoginRole(userInfo.role);
          setLoginToken(userInfo.token);
          if(userInfo.loginType!=='client'){
            setLoginUserName(userInfo.userName);
            getCustomerList(userInfo.token);
            setIsCustomer(false);
            setPageHieght(1250);
          }else{
            setLoginUserName(userInfo.userName);
            setLoginUserEmail(userInfo.email);
            setLoginUseMobile(userInfo.mobile);
            setMobileNumber(userInfo.mobile);
            setCustomerCode(userInfo.customerCode);
            getProjectDataList(userInfo.customerCode,userInfo.token);
            setIsCustomer(true);
          }
          getJobTypeDataList(userInfo.token);           
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  useEffect(() => {
    checkLoginDetails()
  }, []);
 
  return (
    <View style={styles.moreInformaion}>
      {/* <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow21}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21Position]}>
          Service Request
        </Text>
      </View> */}






  <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHieght  }}
            alwaysBounceVertical={false}>
      
      
      <View style={styles.frameParent}>
       
       {isCustomer?<View style={styles.nameOfTheApplicantParent}>
          <Text style={[styles.nameOfThe, styles.requestFlexBox]}>
            Name of the applicant
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View
              style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={loginUserName} 
                  autoCapitalize={'none'}  style={styles.text1Clr}
                      placeholderTextColor="#000" editable = {false}/>
            </View>
          </View>
        </View>: <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{` Name of the applicant `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isCustFocus]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={customerData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isCustFocus ? 'Select Name of the applicant' : '...'}
              searchPlaceholder="Search..."
              value={userName}
              onFocus={() => setIsCustFocus(true)}
              onBlur={() => setIsCustFocus(false)}
              onChange={item => {
                setUserName(item.value);
                getProjectDataList(item.value,token);
                getSelectedCustomerData(item.value);
                setIsCustFocus(false);
              }}
            />
        </View>}
        

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Mobile number
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={mobileNumber} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>

      <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Project Name `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={projectData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Project Name' : '...'}
              searchPlaceholder="Search..."
              value={projectCode}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setProjectCode(item.value);
                getServiceDataList(item.value,serviceType);
                setIsFocus(false);
              }}
            />
        </View>


        {!isCustomer?<View style={styles.filterProjectName1}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Service Type  `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          
          <RadioButton.Group onValueChange={handleRadioChange} value={serviceType}>
                      <View style={styles.filter1}>
                          <Text style={[styles.allRequests, styles.requestTypo]}>
                              In Scope
                          </Text>
                          {Platform.OS=='ios'?<RadioButton.IOS value="InScope" color="#356a7e" underlayColor="#356a7e"
                                  status={serviceType === 'InScope' ? 'checked' : 'unchecked'}/>:
                                  <RadioButton.Android value="InScope" color="#356a7e" uncheckedColor="#356a7e"
                                  status={serviceType === 'InScope' ? 'checked' : 'unchecked'}/>}
                      </View>
                      <View style={styles.filter2}>
                          <Text style={[styles.completedRequest, styles.requestTypo]}>
                             Out Of Scope
                          </Text>
                          {Platform.OS=='ios'?<RadioButton.IOS value="OutOfScope" color="#356a7e" underlayColor="#356a7e"
                                  status={serviceType === 'OutOfScope' ? 'checked' : 'unchecked'}/>:
                                  <RadioButton.Android value="OutOfScope" color="#356a7e" uncheckedColor="#356a7e"
                                  status={serviceType === 'OutOfScope' ? 'checked' : 'unchecked'}/>}
                      </View>
                  </RadioButton.Group>
            
        </View>:null}

        {!isCustomer? <View style={styles.filterProjectName1}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Maintenance Type  `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          
          <RadioButton.Group onValueChange={maintenanceTypeChange} value={maintenanceType}>
                      <View style={styles.filter1}>
                          <Text style={[styles.allRequests, styles.requestTypo]}>
                               Corrective
                          </Text>
                          {Platform.OS=='ios'?<RadioButton.IOS value="Corrective" color="#356a7e" underlayColor="#356a7e"
                                  status={serviceType === 'Corrective' ? 'checked' : 'unchecked'}/>:
                                  <RadioButton.Android value="Corrective" color="#356a7e" uncheckedColor="#356a7e"
                                  status={serviceType === 'Corrective' ? 'checked' : 'unchecked'}/>}
                      </View>
                      <View style={styles.filter2}>
                          <Text style={[styles.completedRequest, styles.requestTypo]}>
                               Preventive
                          </Text>
                          {Platform.OS=='ios'?<RadioButton.IOS value="Preventive" color="#356a7e" underlayColor="#356a7e"
                                  status={serviceType === 'Preventive' ? 'checked' : 'unchecked'}/>:
                                  <RadioButton.Android value="Preventive" color="#356a7e" uncheckedColor="#356a7e"
                                  status={serviceType === 'Preventive' ? 'checked' : 'unchecked'}/>}
                      </View>
                  </RadioButton.Group>
            
        </View>:null}
        
        <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Discipline Type `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus2]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={serviceData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus2 ? 'Select Discipline Type' : '...'}
              searchPlaceholder="Search..."
              value={disciplineType}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              onChange={item => {
                setDisciplineType(item.value);
                setIsFocus2(false);
              }}
            />
        </View>

        
        
        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequestContainer, styles.requestFlexBox]}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Subject / Problem or Request `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <TextInput
                  multiline
                  numberOfLines={4}
                  textAlignVertical='top'
                  maxLength={300}
                  onChangeText={text => setProblem(text)}
                  value={txtProblem}
                  style={styles.pleaseTypo}
                />
            </View>
          </View>
        </View>

        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequestContainer, styles.requestFlexBox]}
          >
            <Text style={styles.serviceTypeTxtContainer}>
              <Text
                style={styles.serviceType2}
              >{`Description of the problem `}</Text>
              {/* <Text style={styles.text2}>*</Text> */}
            </Text>
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.childGroupShadowBox]} />
              
              <TextInput
                  multiline
                  numberOfLines={4}
                  textAlignVertical='top'
                  maxLength={300}
                  onChangeText={text => setDescription(text)}
                  value={txtDescription}
                  style={styles.pleaseTypo}
                />

              {/* <Text style={[styles.pleaseWriteA, styles.pleaseTypo]}>
                Please write a detailed description of the problem, such as:
                description, scope of the problem, and some indicators of the
                problem.....
              </Text> */}
            </View>
          </View>
        </View>

        <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>{`Job Type `}</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus3]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={jobTypeData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus3 ? 'Select Job Type' : '...'}
              searchPlaceholder="Search..."
              value={jobType}
              onFocus={() => setIsFocus3(true)}
              onBlur={() => setIsFocus3(false)}
              onChange={item => {
                setJobType(item.value);
                setIsFocus3(false);
              }}
            />
        </View>



        <View style={styles.addPhotosParent}>
          <Text style={[styles.addPhotos, styles.requestFlexBox]}>
            Add Photos
          </Text>
          <Pressable
             onPress={pickImage}>
              <Image
                style={[styles.frameInner, styles.rectangleSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/group-2386551.png")}
              />
        </Pressable>
        <FlatList style={{height:photoListHieght,width:"100%"}}
            data={selectedImages}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={{ width: 100, height: 100, marginRight:10 }} />
            )}
            horizontal />
         
        </View>
        
        {/* <View style={styles.moreInformaionChild} /> */}
        <Pressable
          style={styles.button}
          onPress={submitRequest}>
          <Text style={[styles.text, styles.textTypo]}>Request the service</Text>
        </Pressable>

      </View>


      

      </ScrollView>

      <AfterLoginFooter currentRoute='ServiceRequest'/>

      {isShowPopUp?
      <View style={{backgroundColor: Color.colorGray_400,
           width: "100%",
           height: windowHeight,
           zIndex:2,
           position: "absolute",}} />:null}
      {isShowPopUp?<View style={[styles.loginWithFaceId, styles.homeItemPosition]} >
        <View style={[styles.faceId, styles.groupChildShadowBox1,{width:windowWidth-20,left:10}]}>
          <View style={[styles.attendanceSuccessful, styles.homeItemPosition]}>
            <Image
              style={{width:150,height:150,left:"30%",top:"25%"}}
              resizeMode="cover"
              source={require("../assets/36479ec6-798e-4205-9430-693c34fdb06b.gif")}
            />
            <View style={styles.successfulLoginParent}>
              <Text style={[styles.successfulLogin, styles.youCanNowTypo]}>
                Your request has been sent successfully
              </Text>
              <Text style={[styles.youCanNow, styles.youCanNowTypo]}>
                Your request has been recieved and is being reviewed now and you will be answered as soon as possible
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={hideMessage }
          >
            <Image
              style={[styles.icon2, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </Pressable>
        </View>
        


      </View>
      : null
    }
      
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 55,
    borderColor: Color.colorLightsteelblue_100,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop:25,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'#030303'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  text: {
    color: Color.whait,
    width: "100%",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
  },
  button: {
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    width: "100%",
    top:"5%"
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    width: "100%",
  },
  requestFlexBox: {
    display: "flex",
    alignItems: "center",
    fontWeight:'700'
  },
  rectangleSpaceBlock: {
    width: "100%",
  },
  wrapperPosition: {
    top: 5,
    position: "absolute",
    left:0
  },
  text1Clr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontSize:15
  },
  projectNameTypo: {
    left: "0%",
    width: "100%",
    height: "50%",
    top: "0%",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
    height: 143,
    width: "100%",
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  pleaseTypo: {
    fontSize: 15,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    padding:"2%"
  },
  tapLayout: {
    width: "100%",
    position: "absolute",
    zIndex:1
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Position: {
    top: 14,
    fontSize: 18,
    height: 25,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  moreInformaionChild: {
    right: 16,
    overflow: "hidden",
    height: 56,
    width: "100%",
    position: "absolute",
  },
  
  
  nameOfThe: {
    width: "100%",
    height: 20,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    height: 56,
    width: "100%",
  },
  assemAlMohammadi: {
    width: "100%",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    height: 16,
  },
  assemAlMohammadiWrapper: {
    left: 0,
  },
  rectangleParent: {
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
  },
  nameOfTheApplicantParent: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom:"3%"
  },
  mobileNumber: {
    width: "100%",
    height: 20,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
  },
  text1: {
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    textAlign: "left",
  },
  wrapper: {
  },
  rectangleGroup: {
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  mobileNumberParent: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom:"3%"
  },
  projectName: {
    color: Color.black,
  },
  filterProjectNameChild: {
    top: 26,
    borderColor: Color.gray,
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    height: 56,
    width: "100%",
    position: "absolute",
  },
  filterProjectNameItem: {
    top: 47,
    left: 16,
    width: "100%",
    height: 14,
    position: "absolute",
  },
  filterProjectName: {
    height: 82,
    width: "100%",
    marginBottom:"3%"
  },
  filterProjectName1: {
    height: 60,
    width: "100%",
    marginBottom:"3%"
  },
  serviceType2: {
    color: Color.black,
    fontWeight:'700'
  },
  text2: {
    color: Color.colorRed_100,
  },
  serviceTypeTxtContainer: {
    width: "100%",
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  otherServices: {
    color: Color.black,
    width: "100%",
    height: 16,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    fontWeight:'700'
  },
  instanceChild: {
    borderRadius: 26,
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  instanceItem: {
    height: "76.33%",
    width: "34.59%",
    top: "11.67%",
    right: "60.12%",
    bottom: "12%",
    left: "5.29%",
    position: "absolute",
  },
  yes: {
    height: "46.67%",
    width: "33.23%",
    top: "26.67%",
    left: "55.89%",
    fontSize: FontSize.size_smi_4,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  rectangleContainer: {
    width: "100%",
    height: 30,
    top:20
  },
  otherServicesParent: {
    marginBottom:"3%",
    alignItems: "center",
    flexDirection: "row",
    height:40
  },
  problemOrRequestContainer: {
    width: "100%",
    height: 16,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  groupView: {
    width: "100%",
  },
  encapsulatedGroup: {
    marginTop: 16,
    overflow: "hidden",
  },
  problemOrRequestParent: {
    marginBottom:"3%",
    justifyContent: "center",
  },
  groupItem: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  pleaseWriteA: {
    lineHeight: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  addPhotos: {
    width: "100%",
    height: 25,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  frameInner: {
    height: 110,
  },
  addPhotosParent: {
    marginBottom:"3%"
  },
  frameParent: {
    top: 20,
    height: 700,
    width:"94%",
    left:"3%",
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    lineHeight: 16,
    textAlign: "right",
    marginTop: 6,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  menu5: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    justifyContent: "flex-end",
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.praimary,
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    right: 0,
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
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
    bottom: 0,
    width: "100%",
    right: 0,
    height: 30,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    height: 11,
    width: 24,
    right: 0,
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
  icon: {
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    left: "5%",
    width: 25,
    top:"30%",
    height: 25,
    zIndex:2
  },
  serviceRequest: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  tapPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    flex: 1,
  },
  loginWithFaceId: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeItemPosition: {
    top: "30%",
    position: "absolute",
    zIndex:2
  },
  faceId: {
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 400,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  attendanceSuccessful: {
    height: 100,
    justifyContent: "center",
    width:"100%",
  },
  successfulLoginParent: {
    marginTop: 16,
    alignItems: "center",
  },
  successfulLogin: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    height: 70,
  },
  youCanNowTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  youCanNow: {
    width: 292,
    height: 100,
    marginTop: 8,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_base,
  },
  vector: {
    left: "88.34%",
    top: "5.99%",
    right: "5.83%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  icon2: {
    height: 15,
    width: 15,
  },
  iconLayout3: {
    maxHeight: 15,
    maxWidth: 15,
    overflow: "hidden",
  },


  filter1: {
    width: "35%",
    textAlign:'left',
    display: "flex",
    alignItems: "flex-start",
    position: "absolute",
    height:40
  },
  allRequests: {
    width: "70%",
    top:25,
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    textAlign:'right',
    fontWeight: "600",
    color: Color.praimary,
  },
  requestTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    marginTop:"4%",
  },
  filter2: {
    width: "35%",
    textAlign:'left',
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    height:40,
    left:"10%"
  },
  completedRequest: {
    width: "70%",
    top:25,
    left:"55%",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    textAlign:'right',
    fontWeight: "600",
    color: Color.praimary,
  },

});

export default MOREInformaion11;
