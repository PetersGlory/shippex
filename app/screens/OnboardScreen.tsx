import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import tw from "twrnc";
import { PRIMARY_COLOR } from "../config/constants";

const ShippexSplashScreen = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-[${PRIMARY_COLOR}] flex-grow h-full w-full`}>
      <StatusBar barStyle="light-content" />
      <View
        style={tw`flex-1 justify-center items-center py-12 px-5 h-full w-full`}
      >
        <View style={tw`w-full flex flex-col items-center gap-4`}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require("../../assets/img/logo.png")}
              style={tw`w-[200px] h-[36px]`}
              alt="logo"
            />
          </View>
        </View>
        <TouchableOpacity
          style={tw`bg-white px-12 absolute bottom-10 py-3 rounded-2xl w-full items-center justify-center`}
          onPress={() => navigator.navigate('LoginScreen' as never)}
        >
          <Text style={tw`text-[${PRIMARY_COLOR}] text-lg font-bold`}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShippexSplashScreen;
