import React from "react";
import { Text, View, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import formatNumber from "../assets/helpers/FormatNumber";
import {
    useFonts,
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";

const Card = (props) => {
    let [fontsLoaded] = useFonts({
        FiraCode_300Light,
        FiraCode_400Regular,
        FiraCode_500Medium,
        FiraCode_600SemiBold,
        FiraCode_700Bold,
    });
    return (
        <View style={[tailwind(`${props.color}`), styles.card]}>
            <Text
                style={[
                    tailwind("text-gray-800 text-xl text-gray-50 font-medium"),
                    { fontFamily: "FiraCode_500Medium" },
                ]}
            >
                {props.label}
            </Text>
            <Text
                style={[
                    tailwind(`font-bold text-2xl text-${props.textColor}-100`),
                    { fontFamily: "FiraCode_500Medium" },
                ]}
            >
                {formatNumber(props.data)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "44%",
        textAlign: "center",
    },
});

export default Card;
