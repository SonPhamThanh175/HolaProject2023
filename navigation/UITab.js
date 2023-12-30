// yarn add react-navigation
// yarn add react-native-safe-area-context
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
import * as React from "react";
import { Search, Home, Information } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fontSizes, colors } from "../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";


const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTinColor: "black",
  // tabBarIntiveTinColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.WHITE,
  // tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{ backgroundColor: colors.LIGHTGREY, flex: 1 }} />
  ),
  tabBarIcon: ({ focused, color, size }) => {
    let screenName = route.name;
    // let iconName = "facebook ";
    // if (screenName == "ProductGridView") {
    //     iconName = "align-center"
    // } else if (screenName == "FoodList"){
    //     iconName = "accusoft"
    // }else if (screenName == "Settings"){
    //     iconName = "cogs"
    // }
    return (
      <Icon
        name={
          screenName == "ProductGridView"
            ? "align-center"
            : screenName == "FoodList"
            ? "accusoft"
            : screenName == "Basket"
            ? "shopping-cart"
            : screenName == "Settings"
            ? "cogs"
            : route.name == "Profile"
            ? "user"
            : ""
        }
        size={23}
        color={focused ? "white" : colors.inactive}
        style={{
          justifyContent: "center",
        }}
      />
    );
  },
});
const Tab = createBottomTabNavigator();
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={"black"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={Search}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search1" size={size} color={"black"} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={"Basket"}
        component={Basket}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" color={"white"} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name={"Settings"}
        component={Settings}
        options={{
          tabBarLabel: " ",
          tabBarLabelStyle: {
            fontSize: fontSizes.h5,
          },
        }}
      /> */}
      <Tab.Screen
        name={"Information"}
        component={Information}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" color={"black"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default UITab;
