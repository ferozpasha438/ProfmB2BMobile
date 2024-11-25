import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Dimensions, ScrollView, TextInput, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import AfterLoginFooter from "../components/AfterLoginFooter";

const Reports = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;

  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.reports}>
    
      {/* <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow211}
          onPress={() => navigation.navigate("Home1")}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.mainReports, styles.arrow211Position]}>
          Main Reports
        </Text>
      </View> */}
   
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ height:windowHeight +(13*100) }}
            alwaysBounceVertical={false}>
          
       <View style={[styles.rectangleParent, styles.menuListFlexBox]}>
        {/* <View style={[styles.frameChild, styles.childGroupBorder]} /> */}
        <View style={styles.frameParent}>
            <View style={styles.fiRrZoomOutParent}>
              <Image
                style={[styles.fiRrZoomOutIcon, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/firrzoomout.png")}
              />
              <TextInput value={searchText} onChangeText={(text) => setSearchText(text)}
                  autoCapitalize={'none'} 
                  style={[styles.frameChild, styles.childGroupBorder,(Platform.OS=='ios'? styles.searchForTheIOS:styles.searchForThe)]} 
                  placeholder="Search for the application number, project name, supervisor name..."
                      placeholderTextColor="#000"/>
            </View>
        </View>
      </View>

      <Text style={[styles.allReports, styles.reportsTypo]}>All Reports</Text>
      <View
        style={[styles.thereAre5ReportsAvailableParent, styles.parentPosition]}>
        <Text style={[styles.thereAre5Container, styles.containerTypo1]}>
          <Text style={styles.thereAre5Container1}>
            <Text style={styles.thereAre}>{`There are `}</Text>
            <Text style={styles.text}>5</Text>
            <Text style={styles.thereAre}> reports available for review</Text>
          </Text>
        </Text>
        <Pressable
          style={[styles.frame2, styles.frameLayout]}
          onPress={() => navigation.navigate("Home1")}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame24.png")}
          />
        </Pressable>
        {/* <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("FilterReports1")}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/frame24.png")}
          />
        </Pressable> */}
      </View>
      {/* <View style={styles.reportsChild} /> */}
      <View style={[styles.groupParent, styles.parentPosition1]}>
        
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>




        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>



        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>




        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>



        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>



        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>



        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>



        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("Reports")}>
          <View style={[styles.groupChild, styles.groupChildShadowBox,{width: windowWidth-20}]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-238632.png")}
          />
          <View style={styles.supervisorNameKhaledAlAhParent}>
            <Text
              style={[styles.supervisorNameContainer, styles.containerTypo1]}
            >
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}>{`Supervisor name :     `}</Text>
                <Text style={[styles.khaledAlAhmadi, styles.homeTypo1]}>
                  Khaled Al-Ahmadi
                </Text>
              </Text>
            </Text>
            <Text style={[styles.projectNameContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Project name         :      `}</Text>
                <Text style={styles.jeddahYachtClub}>Jeddah Yacht Club</Text>
              </Text>
            </Text>
            <Text style={[styles.requestNumberContainer, styles.containerTypo]}>
              <Text style={styles.thereAre5Container1}>
                <Text
                  style={styles.supervisorName}
                >{`Request number  :     `}</Text>
                <Text style={styles.jeddahYachtClub}>52815</Text>
              </Text>
            </Text>
          </View>
          
          <Pressable
            style={{ top: 36,
              left: windowWidth-60,
              width: 30,
              height: 18,}}
            onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-12.png")}
            />
          </Pressable>

        </Pressable>


        
      </View>
          

      </ScrollView>

      <AfterLoginFooter currentRoute='Reports'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  menuListFlexBox: {
  },
  childGroupBorder: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  frameLayout: {
    height: 16,
    width: 16,
  },
  reportsTypo: {
    fontSize: 18,
    color: Color.praimary,
    fontWeight: "700",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
  },
  parentPosition: {
    left: "2%",
    position: "absolute",
    width:'96%'
  },
  containerTypo1: {
    fontSize: 11,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    height: 30,
    alignItems: "center",
  },
  parentPosition1: {
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  homeTypo1: {
    fontWeight: "300",
    color: Color.colorLightsteelblue_100,
  },
  containerTypo: {
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    height: 30,
    alignItems: "center",
  },
  groupLayout: {
    width: "100%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow211Position: {
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
  bottomNavPosition: {
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  homeTypo: {
    marginTop: 6,
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    height: 48,
    zIndex: 0,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  fiRrZoomOutIcon: {
    left:"2%",
    zIndex:1,
    position:'absolute'
  },
  searchForThe: {
    fontSize: 11,
    width: "100%",
    height: 50,
    display: "flex",
    lineHeight: 30,
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
    paddingLeft:30
  },
  searchForTheIOS: {
    fontSize: 11,
    width: "100%",
    height: 50,
    display: "flex",
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    alignItems: "center",
    paddingLeft:30
  },
  frameParent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width:'100%',
    position:'absolute'
  },
  rectangleParent: {
    top: 40,
    position: "absolute",
    width:"96%",
    left:'2%'
  },
  tapPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
  },
  allReports: {
    top: 85,
    left: "2%",
    width: "96%",
    color: Color.praimary,
    fontWeight: "700",
    height: 24,
    textAlign: "left",
    position: "absolute",
  },
  thereAre: {
    color: Color.colorLightsteelblue_100,
  },
  text: {
    color: Color.praimary,
  },
  thereAre5Container1: {
    width: "100%",
  },
  thereAre5Container: {
    width: "90%",
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  icon: {
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    marginLeft: 138,
  },
  frame2: {
    width:"10%",
    right:0
  },
  thereAre5ReportsAvailableParent: {
    top: 110,
    flexDirection: "row",
  },
  reportsChild: {
    top: 790,
    right: 16,
    width: "100%",
    height: 82,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    height: 100,
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowRadius: 20,
    position: "absolute",
    left:10
  },
  supervisorName: {
    color: Color.praimary,
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  khaledAlAhmadi: {
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
  },
  supervisorNameContainer: {
    width: 250,
  },
  jeddahYachtClub: {
    color: Color.colorLightsteelblue_100,
    fontFamily: FontFamily.dGBaysan,
  },
  projectNameContainer: {
    width: 250,
  },
  requestNumberContainer: {
    width: 250,
  },
  supervisorNameKhaledAlAhParent: {
    left: 100,
    top: 5,
    width:"80%",
    position: "absolute",
  },
  groupItem: {
    top: 14,
    left: 20,
    width: 64,
    height: 73,
    position: "absolute",
  },
  arrow21: {
    top: 36,
    right: 10,
    width: 30,
    height: 18,
  },
  rectangleGroup: {
    height: 100,
    width: "100%",
    marginBottom:"15%"
  },
  groupInner: {
    top: 0,
    height: 89,
    width: "100%",
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowRadius: 20,
    position: "absolute",
  },
  supervisorNameContainer2: {
    width: 250,
  },
  rectangleContainer: {
    marginTop: 16,
    height: 89,
    width: "100%",
  },
  rectangleView: {
    top: 0,
    height: 89,
    width: "100%",
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowRadius: 20,
    position: "absolute",
  },
  groupChild2: {
    top: 0,
    height: 90,
    width: "100%",
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowRadius: 20,
    position: "absolute",
  },
  groupChild4: {
    top: 0,
    height: 89,
    width: "100%",
    borderWidth: 0.5,
    borderColor: Color.gray,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowRadius: 20,
    position: "absolute",
  },
  groupParent: {
    top: 150,
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
  groupChild6: {
    top: 1,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 88,
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    right: 0,
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
    left: 21,
    width: 54,
    height: 21,
    top: 12,
    position: "absolute",
  },
  arrow211: {
    left: "5%",
    width: 25,
    top:"30%",
    height: 25,
    zIndex:2
  },
  mainReports: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  groupView: {
    top: 0,
    height: 89,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
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
    backgroundColor: Color.praimary,
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    justifyContent: "flex-end",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  reports1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    right: 0,
    flexDirection: "row",
    backgroundColor: Color.whait,
    justifyContent: "center",
    alignItems: "flex-end",
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
    height: 30,
    right: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    overflow: "hidden",
  },
  reports: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    flex: 1,
  },
});

export default Reports;


