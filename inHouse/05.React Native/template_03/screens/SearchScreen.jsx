import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import Colors from "../constant/color";
import addressData from "../API/realEstate/addressData.json";

export default function SearchScreen({ setSearchTextValue }) {
  const [filteredAddressData, setFilteredAddressData] = useState();
  const getTextInputValue = (value) => {
    let addressArr = [];
    if (value !== "") {
      addressData.forEach((v) => {
        if (value == v.시군구명) {
          addressArr.push(v);
          setFilteredAddressData(addressArr);
        }
      });
    } else {
      setFilteredAddressData(value);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerSearchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={getTextInputValue}
        />
        {filteredAddressData ? (
          <View style={styles.findResultContainer}>
            {filteredAddressData.map((e) =>
              e.읍면동명 == undefined ? (
                <Text style={styles.findResultText}>
                  {e.시도명} {e.시군구명}
                </Text>
              ) : undefined
            )}
          </View>
        ) : undefined}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.subtitleText}>
          어디 <Text style={styles.subtitleInnerText}>아파트 매매가</Text>
        </Text>
        <Text style={styles.subtitleText}>순위를 알고 싶으신가요?</Text>
        <Text style={styles.subtitleText}>
          <Text style={styles.subtitleInnerText}>궁금한 구</Text>를 검색해
          보세요!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    zIndex: 1,
  },
  innerSearchContainer: {
    alignItems: "center",
    marginVertical: 15,
    zIndex: 3,
  },
  innerContainer: {
    alignItems: "center",
    marginVertical: 15,
    zIndex: 2,
  },
  subtitleText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Light",
  },
  subtitleInnerText: {
    color: Colors.primaryColor,
    fontSize: 25,
  },
  searchInput: {
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    borderRadius: 15,
  },
  findResultContainer: {
    position: "absolute",
    width: "80%",
    top: 40,
    right: 40,
    backgroundColor: "white",
    elevation: 3,
  },
  findResultText: {
    padding: 7,
    margin: 3,
    fontFamily: "Regular",
    fontSize: 15,
  },
});
