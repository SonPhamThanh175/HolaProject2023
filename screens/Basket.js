import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { colors } from "../constants";

const Basket = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "15%",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/left-chevron.png")}
            style={[styles.icon, { marginRight: 15 }]}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "83%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: colors.LIGHTGREY,
            }}
          >
            <TextInput
              placeholder="Thời trang nữ"
              style={{ width: "60%", marginLeft: 10 }}
            ></TextInput>
            <TouchableOpacity>
              <Image
                source={require("../assets/camera.png")}
                style={styles.icon}
              ></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: 60,
              backgroundColor: "black",
            }}
          >
            <Image
              source={require("../assets/search-interface-symbol.png")}
              style={{ height: 20, width: 20, tintColor: "white" }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ height: "80%" }}>
        <View
          style={{
            height: "60%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: colors.LIGHTGREY,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/left-chevron.png")}
              style={[styles.icon]}
            ></Image>
          </TouchableOpacity>
          <Image
            style={{ height: "100%", width: "50%" }}
            source={require("../assets/anh-ma-no-canh-1596647281.jpg")}
          ></Image>
          <TouchableOpacity>
            <Image
              source={require("../assets/right-chevron.png")}
              style={[styles.icon]}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{height:'60%', width:'100%',  alignItems:'center' }}>
            <View style={{height:'100%', width:'92%', borderWidth:1}}>
                <Text>sadas</Text>
            </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderColor:colors.BLACK
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: "80%",
            backgroundColor: colors.BLACK,
            borderRadius:25,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/add-to-cart.png")}
            style={{ height: 22, width: 22, tintColor: colors.WHITE }}
          ></Image>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              color: colors.WHITE,
              right: 35,
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 8,
    padding: 10,
  },
  buton: {
    height: 28,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: colors.LIGHTGREY,
  },
});
export default Basket;
