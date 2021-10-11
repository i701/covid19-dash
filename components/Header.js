import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

const Header = () => {
    return (
        <View style={tailwind("flex-row flex justify-around items-center")}>
            <Text
                style={[
                    tailwind("font-bold text-3xl text-white"),
                    styles.header,
                ]}
            >
                Covid-19 Dashboard
            </Text>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/img/mv.png")}
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
