const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import VerificationCode from "./screens/VerificationCode";
import CloseTicket from "./screens/CloseTicket";
import Reports14 from "./screens/Reports14";
import Filter from "./screens/Filter";
import FilterCompleted from "./screens/FilterCompleted";
import FilterIncomplete from "./screens/FilterIncomplete";
import FilterOutOfScope from "./screens/FilterOutOfScope";
import NoNotifications from "./screens/NoNotifications";
import Notifications from "./screens/Notifications";
// import Home from "./components/Home";
import Home1 from "./screens/Home1";
//import HomeSupervisor from './screens/HomeSupervisor';
import Home2 from "./screens/Home2";
import FrontOffice from './screens/FrontOffice';
import Approved from './screens/Approved';
import WorkInProgress from './screens/WorkInProgress';
import Completed from './screens/Completed';
import Closed from './screens/Closed';
import OnHold from './screens/OnHold';
import InTransit from './screens/InTransit';
import OutOfScope from './screens/OutOfScope';

// import MOREInformaion from "./components/MOREInformaion";
import MOREInformaion1 from "./components/MOREInformaion1";
import Httpslottiefilescomanimat from "./screens/Httpslottiefilescomanimat";
import MOREInformaion2 from "./screens/MOREInformaion2";
import MOREInformaion3 from "./components/MOREInformaion3";
import Frame from "./screens/Frame";
import DesihnSystemInEnglish from "./screens/DesihnSystemInEnglish";
import CallUs from "./screens/CallUs";
import CallUs1 from "./screens/CallUs1";
import Reports10 from "./screens/Reports10";
import Reports9 from "./screens/Reports9";
import Reports8 from "./screens/Reports8";
import Reports7 from "./screens/Reports7";
import FilterReports from "./screens/FilterReports";
import FilterReports1 from "./screens/FilterReports1";
import Reports13 from "./screens/Reports13";
import Reports12 from "./screens/Reports12";
import Reports11 from "./screens/Reports11";
import Reports6 from "./screens/Reports6";
import Reports from "./screens/Reports";
import MOREInformaion4 from "./screens/MOREInformaion4";
import ChangePassword from "./screens/ChangePassword";
import ChangePassword1 from "./screens/ChangePassword1";
import Profile from "./screens/Profile";
import Profile1 from "./screens/Profile1";
import VerificationCode1 from "./components/VerificationCode1";
import VerificationCode2 from "./components/VerificationCode2";
import ServicesProvided6 from "./screens/ServicesProvided6";
import VerificationCode3 from "./components/VerificationCode3";
import ServicesProvided7 from "./screens/ServicesProvided7";
import ServicesProvided5 from "./screens/ServicesProvided5";
import ServicesProvided4 from "./screens/ServicesProvided4";
import VerificationCode4 from "./screens/VerificationCode4";
import SideMenu from "./screens/SideMenu";
import SideMenu1 from "./screens/SideMenu1";
import SideMenu2 from "./screens/SideMenu2";
import VerificationCode5 from "./screens/VerificationCode5";
import VerificationCode6 from "./screens/VerificationCode6";
import ForgotPassword from "./screens/ForgotPassword";
import Home3 from "./screens/Home3";
import Home4 from "./screens/Home4";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";
import Home7 from "./components/Home7";
import Home8 from "./screens/Home8";
import Home9 from "./screens/Home9";
import Requests from "./components/Requests";
import Requests1 from "./components/Requests1";
import Requests2 from "./components/Requests2";
import Requests3 from "./components/Requests3";
import Requests4 from "./screens/Requests4";
import Requests5 from "./screens/Requests5";
import MOREInformaion5 from "./screens/MOREInformaion5";
import MOREInformaion6 from "./screens/MOREInformaion6";
import Httpslottiefilescomanimat1 from "./screens/Httpslottiefilescomanimat1";
import MOREInformaion7 from "./components/MOREInformaion7";
import MOREInformaion8 from "./screens/MOREInformaion8";
import MOREInformaion9 from "./screens/MOREInformaion9";
import MOREInformaion10 from "./screens/MOREInformaion10";
import MOREInformaion11 from "./screens/MOREInformaion11";
import MOREInformaion12 from "./screens/MOREInformaion12";
import SIGNUP from "./screens/SIGNUP";
import Login1 from "./screens/Login1";
import Login2 from "./screens/Login2";
import Splash8 from "./screens/Splash8";
import Splash7 from "./screens/Splash7";
import Splash6 from "./screens/Splash6";
import Splash5 from "./screens/Splash5";
import VerificationCode7 from "./screens/VerificationCode7";
import VerificationCode8 from "./screens/VerificationCode8";
import FinalDesignIn from "./screens/FinalDesignIn";
import FinalDesignEnglish from "./screens/FinalDesignEnglish";
import Rectangle from "./screens/Rectangle";
import Rectangle1 from "./screens/Rectangle1";
import CallUs2 from "./screens/CallUs2";
import CallUs3 from "./screens/CallUs3";
import ChangeTheLanguage from "./screens/ChangeTheLanguage";
import ChangePassword2 from "./screens/ChangePassword2";
import ChangePassword3 from "./screens/ChangePassword3";
import POPUPNEWACCONET from "./screens/POPUPNEWACCONET";
import POPUPERROL from "./screens/POPUPERROL";
import POPUPLOGIN from "./screens/POPUPLOGIN";
import LogOutFromProfile from "./screens/LogOutFromProfile";
import Reports5 from "./screens/Reports5";
import Reports2 from "./screens/Reports2";
import Reports3 from "./screens/Reports3";
import Reports4 from "./screens/Reports4";
import DateReports from "./screens/DateReports";
import FilterReports2 from "./screens/FilterReports2";
import Reports1 from "./screens/Reports1";
import Reports15 from "./screens/Reports15";
import Profile2 from "./screens/Profile2";
import VerificationCode9 from "./screens/VerificationCode9";
import SideMenu3 from "./screens/SideMenu3";
import SideMenu4 from "./screens/SideMenu4";
import SideMenu5 from "./screens/SideMenu5";
import VerificationCode10 from "./screens/VerificationCode10";
import VerificationCode11 from "./screens/VerificationCode11";
import ForgotPassword1 from "./screens/ForgotPassword1";
import MOREInformaion13 from "./screens/MOREInformaion13";
import Filter1 from "./screens/Filter1";
import Requests6 from "./screens/Requests6";
import Requests7 from "./screens/Requests7";
import MOREInformaion14 from "./screens/MOREInformaion14";
import MOREInformaion15 from "./screens/MOREInformaion15";
import MOREInformaion16 from "./screens/MOREInformaion16";
import MOREInformaion17 from "./screens/MOREInformaion17";
import MOREInformaion18 from "./screens/MOREInformaion18";
import SIGNUP1 from "./screens/SIGNUP1";
import POPUPNEWPASSWERD from "./screens/POPUPNEWPASSWERD";
import Login3 from "./screens/Login3";
import Splash1 from "./screens/Splash1";
import Splash2 from "./screens/Splash2";
import Splash3 from "./screens/Splash3";
import Splash4 from "./screens/Splash4";
import DesihnSystemArabic from "./screens/DesihnSystemArabic";
import ViewTicket from './screens/ViewTicket';
import ViewTicket2 from './screens/ViewTicket2';
import CreateWorkOrder from './screens/CreateWorkOrder';
import Activities from './screens/Activities';
import ToolsNMaterial from './screens/ToolsNMaterial';
import AllToolsNMaterialsRequest from './screens/AllToolsNMaterialsRequest';
import AllToolsNMaterialsFinalData from './screens/AllToolsNMaterialsFinalData';
import ClosedTicket from './screens/ClosedTicket';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash5"
              component={Splash5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode"
              component={VerificationCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CloseTicket"
              component={CloseTicket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTicket"
              component={ViewTicket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTicket2"
              component={ViewTicket2}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="CreateWorkOrder"
              component={CreateWorkOrder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Activities"
              component={Activities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToolsNMaterial"
              component={ToolsNMaterial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllToolsNMaterialsRequest"
              component={AllToolsNMaterialsRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllToolsNMaterialsFinalData"
              component={AllToolsNMaterialsFinalData}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClosedTicket"
              component={ClosedTicket}
              options={{ headerShown: false }}
            />
            
            
            
            
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterCompleted"
              component={FilterCompleted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterIncomplete"
              component={FilterIncomplete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterOutOfScope"
              component={FilterOutOfScope}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoNotifications"
              component={NoNotifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false,unmountOnBlur: true  }}
            />
            {/* <Stack.Screen
              name="HomeSupervisor"
              component={HomeSupervisor}
              options={{ headerShown: false,unmountOnBlur: true  }}
            /> */}
            
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="MOREInformaion"
              component={MOREInformaion}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="MOREInformaion1"
              component={MOREInformaion1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrontOffice"
              component={FrontOffice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Approved"
              component={Approved}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkInProgress"
              component={WorkInProgress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Completed"
              component={Completed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Closed"
              component={Closed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnHold"
              component={OnHold}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              name="InTransit"
              component={InTransit}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              name="OutOfScope"
              component={OutOfScope}
              options={{ headerShown: false }}
            />           
                      
            
            <Stack.Screen
              name="Httpslottiefilescomanimat"
              component={Httpslottiefilescomanimat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion2"
              component={MOREInformaion2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion3"
              component={MOREInformaion3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DesihnSystemInEnglish"
              component={DesihnSystemInEnglish}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallUs"
              component={CallUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallUs1"
              component={CallUs1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports10"
              component={Reports10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports9"
              component={Reports9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports8"
              component={Reports8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports7"
              component={Reports7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterReports"
              component={FilterReports}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterReports1"
              component={FilterReports1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports13"
              component={Reports13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports12"
              component={Reports12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports11"
              component={Reports11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports6"
              component={Reports6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports"
              component={Reports}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion4"
              component={MOREInformaion4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword1"
              component={ChangePassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode1"
              component={VerificationCode1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode2"
              component={VerificationCode2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicesProvided6"
              component={ServicesProvided6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode3"
              component={VerificationCode3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicesProvided7"
              component={ServicesProvided7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicesProvided5"
              component={ServicesProvided5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicesProvided4"
              component={ServicesProvided4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode4"
              component={VerificationCode4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu"
              component={SideMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu1"
              component={SideMenu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu2"
              component={SideMenu2}
              options={{ headerShown: false }}
            />
             {/* <Stack.Screen
              name="LeftMenu"
              component={LeftMenu}
              options={{ headerShown: false }}
            /> */}

            <Stack.Screen
              name="VerificationCode5"
              component={VerificationCode5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode6"
              component={VerificationCode6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home4"
              component={Home4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home5"
              component={Home5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home6"
              component={Home6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home7"
              component={Home7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home8"
              component={Home8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home9"
              component={Home9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests"
              component={Requests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests1"
              component={Requests1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests2"
              component={Requests2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests3"
              component={Requests3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests4"
              component={Requests4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests5"
              component={Requests5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion5"
              component={MOREInformaion5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion6"
              component={MOREInformaion6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Httpslottiefilescomanimat1"
              component={Httpslottiefilescomanimat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion7"
              component={MOREInformaion7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion8"
              component={MOREInformaion8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion9"
              component={MOREInformaion9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion10"
              component={MOREInformaion10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion11"
              component={MOREInformaion11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion12"
              component={MOREInformaion12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIGNUP"
              component={SIGNUP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash8"
              component={Splash8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash7"
              component={Splash7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash6"
              component={Splash6}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="VerificationCode7"
              component={VerificationCode7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode8"
              component={VerificationCode8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalDesignIn"
              component={FinalDesignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalDesignEnglish"
              component={FinalDesignEnglish}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle1"
              component={Rectangle1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallUs2"
              component={CallUs2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CallUs3"
              component={CallUs3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeTheLanguage"
              component={ChangeTheLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword2"
              component={ChangePassword2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword3"
              component={ChangePassword3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="POPUPNEWACCONET"
              component={POPUPNEWACCONET}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="POPUPERROL"
              component={POPUPERROL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="POPUPLOGIN"
              component={POPUPLOGIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogOutFromProfile"
              component={LogOutFromProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports5"
              component={Reports5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports2"
              component={Reports2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports3"
              component={Reports3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports4"
              component={Reports4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DateReports"
              component={DateReports}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilterReports2"
              component={FilterReports2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports1"
              component={Reports1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reports15"
              component={Reports15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode9"
              component={VerificationCode9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu3"
              component={SideMenu3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu4"
              component={SideMenu4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideMenu5"
              component={SideMenu5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode10"
              component={VerificationCode10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationCode11"
              component={VerificationCode11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion13"
              component={MOREInformaion13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filter1"
              component={Filter1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests6"
              component={Requests6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requests7"
              component={Requests7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion14"
              component={MOREInformaion14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion15"
              component={MOREInformaion15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion16"
              component={MOREInformaion16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion17"
              component={MOREInformaion17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MOREInformaion18"
              component={MOREInformaion18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIGNUP1"
              component={SIGNUP1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="POPUPNEWPASSWERD"
              component={POPUPNEWPASSWERD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login3"
              component={Login3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash2"
              component={Splash2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash3"
              component={Splash3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash4"
              component={Splash4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DesihnSystemArabic"
              component={DesihnSystemArabic}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
