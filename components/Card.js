import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
// import NumericLabel from "react-native-numeric-label";

const Card = (props) => {
    var ranges = [
        { divider: 1e18, suffix: "E" },
        { divider: 1e15, suffix: "P" },
        { divider: 1e12, suffix: "T" },
        { divider: 1e9, suffix: "G" },
        { divider: 1e6, suffix: "M" },
        { divider: 1e3, suffix: "k" },
    ];

    function formatNumber(n) {
        for (var i = 0; i < ranges.length; i++) {
            if (n >= ranges[i].divider) {
                return (
                    (n / ranges[i].divider).toFixed(1).toString() +
                    ranges[i].suffix
                );
            }
        }
        return n.toString();
    }

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
