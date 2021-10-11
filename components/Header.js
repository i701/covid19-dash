import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import {
    useFonts,
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

const Header = ({ flag }) => {
    let [fontsLoaded] = useFonts({
        FiraCode_300Light,
        FiraCode_400Regular,
        FiraCode_500Medium,
        FiraCode_600SemiBold,
        FiraCode_700Bold,
    });
    return (
        <View style={tailwind("flex-row flex justify-around items-center")}>
            <Text
                style={[
                    tailwind("font-bold text-3xl text-white"),
                    { fontFamily: "FiraCode_500Medium" },
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
