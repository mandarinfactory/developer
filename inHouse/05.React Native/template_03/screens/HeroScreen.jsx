import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Colors from "../constant/color";

export default function HeroScreen({
  recentLocation,
  filteredDistrict,
  apartmentData,
  setIsAptPressed,
  setPressedAptData,
  searchTextValue,
  setSearchTextValue
}) {
  const onPress = () => {
    setIsAptPressed(true);
  };

  return (
    <>
      {apartmentData !== undefined &&
      apartmentData.sort(function (x, y) {
        return parseInt(y.거래금액) - parseInt(x.거래금액);
      }) ? (
        <View style={styles.outerConatiner}>
          <Ionicons name="navigate-circle" color={Colors.graycolor} size={30} style={styles.locationIcon} onPress={() => {
            setSearchTextValue(undefined)
          }}/>
          <View style={styles.titleTextContainer}>
            <Text style={styles.subtitleText}>
              현재{" "}
              <Text style={styles.titleText}>
                {searchTextValue ? searchTextValue.시도명 : recentLocation[0].city} {searchTextValue ? searchTextValue.시군구명 : filteredDistrict}{" "}
              </Text>
              아파트 순위
            </Text>
          </View>
          {apartmentData?.map((aptData, index) => (
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [styles.innerContainer, styles.pressed]
                  : styles.innerContainer
              }
              key={index}
              onPress={() => {
                onPress();
                setPressedAptData(aptData);
              }}
              android_ripple={{ color: Colors.primaryColor }}
            >
              <Text style={styles.innerText}>{aptData.아파트}아파트</Text>
              <Text style={styles.innerText}>
                {aptData.거래금액
                  .toString()
                  .trim()
                  .replace(/,/g, "0000")
                  .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
                원
              </Text>
              <Text style={styles.innerText}>
                {aptData.년.toString().replace("20", "")}.
                {aptData.월 < 10 ? `0${aptData.월}` : aptData.월}.
                {aptData.일 < 10 ? `0${aptData.일}` : aptData.일}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  outerConatiner: {
    alignItems: "center",
    marginVertical: 20,
  },
  locationIcon: {
    position: "absolute",
    top: -35,
    right: 45,
  },
  pressedIcon: {
    color: Colors.primaryColor,
  },
  pressed: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  innerContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    paddingVertical: 15,
    paddingHorizontal: 3,
  },
  titleTextContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  titleText: {
    marginBottom: 5,
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.primaryColor,
  },
  subtitleText: {
    fontFamily: "ExtraLight",
    fontSize: 24,
    color: "white",
  },
  innerText: {
    fontFamily: "ExtraLight",
    fontSize: 13,
    color: "white",
  },
});
