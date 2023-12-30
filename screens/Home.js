import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { colors } from "../constants";

const data1 = [
  { id: 1, title: "Đề nghị" },
  { id: 2, title: "Bán chạy nhất " },
  { id: 3, title: "Giảm giá " },
  { id: 4, title: "Nhập mới" },
];

const data2 = [
  {
    id: 1,
    title: "125.000đ",
    image: require("../assets/anh-ma-no-canh-1596647281.jpg"),
  },
  {
    id: 2,
    title: "200.000đ ",
    image: require("../assets/anh-ma-no-canh-1596647281.jpg"),
  },
  {
    id: 3,
    title: "230.000đ ",
    image: require("../assets/anh-ma-no-canh-1596647281.jpg"),
  },
  {
    id: 4,
    title: "500.000đ",
    image: require("../assets/anh-ma-no-canh-1596647281.jpg"),
  },
];

const Category = ({ item }) => (
  <TouchableOpacity style={styles.buton}>
    <Text style={{ fontWeight: "600" }}>{item.title}</Text>
  </TouchableOpacity>
);

const FormatImage1 = ({ item }) => (
  <TouchableOpacity
    style={{
      height: 165,
      width: 130,
      marginHorizontal: 5,
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Image source={item.image} style={{ height: "80%", width: "100%" }}></Image>
    <Text style={{ fontWeight: "600" }}>{item.title}</Text>
  </TouchableOpacity>
);

const FormatImage2 = ({ item }) => (
  <TouchableOpacity
    style={{
      height: 260,
      width: 195,
      marginHorizontal: 5,
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Image source={item.image} style={{ height: "80%", width: "100%" }}></Image>
    <Text style={{ fontWeight: "600" }}>{item.title}</Text>
  </TouchableOpacity>
);

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "15%",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/mail.png")}
            style={styles.icon}
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
        <TouchableOpacity>
          <Image
            source={require("../assets/heart.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ height: "24%", width: "100%" }}>
        <View
          style={{
            height: "15%",
            width: "95%",
            borderBottomWidth: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "2.5%",
          }}
        >
          <Text style={{ marginHorizontal: 10, fontWeight: "700" }}>
            FLASH SALE
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
            }}
          >
            <Text style={{ fontWeight: "600" }}>Xem tất cả</Text>
            <Image
              source={require("../assets/right-chevron.png")}
              style={{ height: 13, width: 15, marginLeft: 2 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={data2}
          renderItem={FormatImage1}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 15 }}
        ></FlatList>
      </View>
      <View
        style={{
          height: "60%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FlatList
          horizontal
          data={data1}
          keyExtractor={(item) => item.id}
          renderItem={Category}
        ></FlatList>
        <FlatList
          numColumns={2}
          data={data2}
          renderItem={FormatImage2}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 15 }}
        ></FlatList>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
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
export default Home;
