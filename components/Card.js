import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
// import NumericLabel from "react-native-numeric-label";
import formatNumber from "../assets/helpers/FormatNumber";
const Card = (props) => {
    return (
        <View
            style={tailwind(
                `${props.color} w-full p-6 mb-4 rounded-lg items-center flex flex-row justify-between`
            )}
        >
            <Text
                style={tailwind(
                    "text-gray-800 text-xl text-gray-50 font-medium"
                )}
            >
                {props.label}
            </Text>
            <Text
                style={tailwind(
                    `font-bold text-2xl text-${props.textColor}-100`
                )}
            >
                {formatNumber(props.data)}
            </Text>
        </View>
    );
};

export default Card;
