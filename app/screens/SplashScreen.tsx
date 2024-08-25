import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const navigator = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    handleNextScreen();
  }, []);

  const handleNextScreen = async () => {
    setTimeout(() => {
      navigator.dispatch(StackActions.replace("OnboardSreen"));
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require("../../assets/img/logo.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          alt="logo"
        />
        {/* <Text style={styles.logo}>My App</Text> */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F50C1",
  },
  logoContainer: {
    // backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2F50C1",
  },
});

export default SplashScreen;
