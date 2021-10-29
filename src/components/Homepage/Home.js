import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Commercial from "../../components/commercial/Commercial";
import home from "../../../assets/home.png";
import rent from "../../../assets/rent.png";
import menu from "../../../assets/menu.png";
import close from "../../../assets/close.png";
import tailwind from "tailwind-rn";
export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2F3945",

            marginTop: 50,
          }}
        >
          By-cycle chariketna
        </Text>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, Commercial)}
          {TabButton(currentTab, setCurrentTab, "rent", rent)}
          {TabButton(currentTab, setCurrentTab, "Rules")}
          {TabButton(currentTab, setCurrentTab, "Contact us")}
        </View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "#FFFFFF",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "#000000",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#2F3945",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text>

          {/* here whatever i will put in the home page */}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "logout") {
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "#FFD600" : "#2F3945",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#2F3945 " : "#FFFFFF",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#2F3945 " : "#FFFFFF",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
