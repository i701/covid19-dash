import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const Header = ({ flag }) => {
    let [fontsLoaded] = useFonts({
        FiraCode: require("../assets/fonts/FiraCode-Medium.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={tailwind("flex-row flex justify-around items-center")}>
            <Text
                style={[
                    tailwind("font-bold text-3xl text-white"),
                    { fontFamily: "FiraCode" },
                ]}
            >
                Covid-19 Dashboard
            </Text>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={{
                    uri: `${flag}`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 33,
        width: 50,
    },
    header: {
        paddingHorizontal: 10,
    },
});

export default Header;
