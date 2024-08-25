import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import tw from "twrnc";
import Icon from "@expo/vector-icons/EvilIcons";
import { PRIMARY_COLOR, PRIMARY_WHITE } from "../../config/constants";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigator = useNavigation();
    const [inputs, setInputs] = useState({
        url: "",
        userEmail: "",
        password: ""
    })
    const [disabled, setDisabled] = useState(true);
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={tw`grow`}>
        <View style={tw`flex-1 px-6 pt-8 items-center w-full justify-`}>
          <View style={tw`flex-row items-center w-full`}>
            <TouchableOpacity
              style={tw`flex flex-row items-center justify-center gap-2`}
            >
              <Icon name="chevron-left" size={24} color={PRIMARY_COLOR} />
              <Text style={tw`text-blue-500 text-lg`}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-3xl font-bold mb-4 w-full`}>Login</Text>
          <Text style={tw`text-gray-600 mb-6 w-full`}>
            Please enter your First, Last name and your phone number in order to
            register
          </Text>
          <TextInput
            style={tw`border border-gray-300 w-full rounded-md p-4 mb-4 text-base`}
            placeholder="URL"
            placeholderTextColor="#999"
            value={inputs.url}
            onChangeText={(val)=>{
                setInputs({
                    ...inputs,
                    url:val
                })
                if(inputs.password == "" || inputs.url =="" || inputs.userEmail == ""){
                    setDisabled(true)
                }else{
                    setDisabled(false)
                }
            }}
          />
          <TextInput
            style={tw`border border-gray-300 w-full rounded-md p-4 mb-4 text-base`}
            placeholder="Username / Email"
            value={inputs.userEmail}
            onChangeText={(val)=>{
                setInputs({
                    ...inputs,
                    userEmail:val
                })
                if(inputs.password == "" || inputs.url =="" || inputs.userEmail == ""){
                    setDisabled(true)
                }else{
                    setDisabled(false)
                }
            }}
            placeholderTextColor="#999"
          />
          <TextInput
            style={tw`border border-gray-300 w-full rounded-md p-4 mb-4 text-base`}
            placeholder="Password"
            placeholderTextColor="#999"
            value={inputs.password}
            onChangeText={(val)=>{
                setInputs({
                    ...inputs,
                    password:val
                })
                if(inputs.password == "" || inputs.url =="" || inputs.userEmail == ""){
                    setDisabled(true)
                }else{
                    setDisabled(false)
                }
            }}
            secureTextEntry
          />
          <TouchableOpacity
          disabled={disabled}
          onPress={()=> navigator.navigate("HomeScreen" as never)}
            style={tw`${disabled ? "bg-gray-100" : "bg-["+PRIMARY_COLOR+"]"} py-3 rounded-2xl absolute bottom-10 w-full items-center mt-4`}
          >
            <Text style={tw`${disabled ? "text-gray-500" : "text-["+PRIMARY_WHITE+"]"} text-lg font-semibold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
