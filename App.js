import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-paper";

import tailwind from "tailwind-rn";
import Card from "./components/Card";
import Header from "./components/Header";
import { useFonts } from "expo-font";

export default function App() {
    const [data, setData] = useState("");
    const [flag, setFlag] = useState("");
    const [value, setValue] = useState("maldives");
    const [text, setText] = useState("");
    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/countries/${value}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                const flag = response.countryInfo.flag;
                if (flag) {
                    setFlag(response.countryInfo.flag);
                } else {
                    flag = null;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [value]);

    let [fontsLoaded] = useFonts({
        FiraCode: require("./assets/fonts/FiraCode-Medium.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground
            resizeMode="cover"
            source={require("./assets/img/covid19.png")}
            style={styles.container}
        >
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#374151"
                translucent={true}
            />
            <SafeAreaView>
                <View style={tailwind("pt-10")}>
                    <Header flag={flag} />
                    {/* <Header flag="https://disease.sh/assets/img/flags/mv.png" /> */}
                    <View
                        style={[
                            tailwind("flex-row flex-wrap p-4 justify-start"),
                        ]}
                    >
                        <Card
                            label={"Confirmed"}
                            color={"bg-gray-800"}
                            textColor={"indigo"}
                            data={data.cases}
                        />
                        <Card
                            label={"Deaths"}
                            color={"bg-gray-600"}
                            textColor={"red"}
                            data={data.deaths}
                        />

                        <Card
                            label={"Recovered"}
                            color={"bg-gray-700"}
                            textColor={"green"}
                            data={data.recovered}
                        />
                        <Card
                            label={"Cases Today"}
                            color={"bg-gray-800"}
                            textColor={"purple"}
                            data={data.todayCases}
                        />
                        <Card
                            label={"Active"}
                            color={"bg-gray-800"}
                            textColor={"red"}
                            data={data.active}
                        />
                        <Card
                            label={"Critical"}
                            color={"bg-gray-700"}
                            textColor={"red"}
                            data={data.critical}
                        />
                    </View>
                    <View style={tailwind("pl-5 pr-5")}>
                        <KeyboardAvoidingView>
                            <TextInput
                                style={[
                                    tailwind(
                                        "text-white text-lg justify-start"
                                    ),
                                    styles.input,
                                    { fontFamily: "FiraCode" },
                                ]}
                                value={value}
                                onChangeText={(value) => {
                                    value.toLowerCase();
                                    setValue(value);
                                    console.log(value);
                                }}
                                mode={"outlined"}
                            />
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    dropdown: {
        paddingHorizontal: 20,
    },
});
