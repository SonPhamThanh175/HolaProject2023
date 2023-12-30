import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  textDecorationLine,
  TextInput,
  Platform,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { colors } from "../constants";

const data = [
  { id: 1, title: "t-shirt" },
  { id: 2, title: "jeans" },
  { id: 3, title: "sneakers " },
  { id: 4, title: "giày loafer" },
  { id: 5, title: "áo sơmi" },
  { id: 6, title: "son mac" },
];
const data1 = [
  { id: 1, title: "áo khoác " },
  { id: 2, title: "váy" },
  { id: 3, title: "đầm" },
  { id: 4, title: "balo" },
];

const data3 = [
  {
    id: 1,
    title: "Mã 251064",
    monye: "13$",
    icon: require("../assets/fashion/6-1.jpg"),
  },
  {
    id: 2,
    title: "Mã 251064",
    monye: "22$",
    icon: require("../assets/fashion/8.j-1pg"),
  },
  {
    id: 3,
    title: "Mã 251064",
    monye: "20$",
    icon: require("../assets/fashion/44-1.jpg"),
  },
  {
    id: 4,
    title: "Mã 251064",
    monye: "30$",
    icon: require("../assets/fashion/45-1.jpg"),
  },
  {
    id: 5,
    title: "Mã 251064",
    monye: "17$",
    icon: require("../assets/fashion/55-1.jpg"),
  },
  {
    id: 6,
    title: "Mã 251064",
    monye: "14$",
    icon: require("../assets/fashion/59.jpg"),
  },
  {
    id: 7,
    title: "Mã 251064",
    monye: "26$",
    icon: require("../assets/fashion/60-1.jpg"),
  },
  {
    id: 8,
    title: "Mã 251064",
    monye: "32$",
    icon: require("../assets/fashion/Vlone-Black-New-Shorts-2.jpg"),
  },
  {
    id: 9,
    title: "Mã 251064",
    monye: "29$",
    icon: require("../assets/fashion/Vlone-Every-Living-Creature-Die-Alone-Orange-Text-Shorts.jpg"),
  },
];

const Category = ({ item }) => (
  <TouchableOpacity style={styles.buton}>
    <Text style={{ fontWeight: "600" }}>{item.title}</Text>
  </TouchableOpacity>
);
const Search = () => {
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
            marginRight: 20,
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
              placeholder="Tìm kiếm"
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
      <View style={{ height: "18%", width: "100%" }}>
        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
          Tìm kiếm gần đây
        </Text>
        <FlatList
          numColumns={4}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={Category}
          contentContainerStyle={{ marginTop: 10 }}
        ></FlatList>
      </View>
      <View style={{ height: "12%", width: "100%" }}>
        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
          Tìm kiếm và phát hiện
        </Text>
        <FlatList
          horizontal
          data={data1}
          keyExtractor={(item) => item.id}
          renderItem={Category}
        ></FlatList>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    marginHorizontal: 8,
  },
  buton: {
    height: 28,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: colors.LIGHTGREY,
    marginTop: 8,
  },
});
export default Search;
