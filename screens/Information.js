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
import FormInformation from "../components/FormInformation";

const Information = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ height: "100%", width: "95%" }}>
        <View
          style={{
            height: "35%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/anh-ma-no-canh-1596647281.jpg")}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          ></Image>
          <Text style={{ marginVertical: 5, fontSize: 18, fontWeight: "600" }}>
            Nguyễn Việt Tiến
          </Text>
          <Text style={{ color: colors.GRAY }}>tien1549464@huce.edu.vn</Text>
        </View>
        <FormInformation
          title={"Tên đầy đủ"}
          lable={"Nguyễn Việt Tiến"}
        ></FormInformation>
        <FormInformation
          title={"E-mail"}
          lable={"tien1549464@huce.edu.vn"}
        ></FormInformation>
        <FormInformation
          title={"Ngày sinh"}
          lable={"**/**/****"}
        ></FormInformation>
        <FormInformation title={"Giới tính"} lable={"Nam"}></FormInformation>
        <FormInformation
          title={"Địa chỉ"}
          lable={"Thanh Xuân, Hà Nội, Việt Nam"}
        ></FormInformation>
        <FormInformation
          title={"Số điện thoại"}
          lable={"097*******"}
        ></FormInformation>
        <View
          style={{
            height: "15%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 140,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.LIGHTGREY,
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Information;
