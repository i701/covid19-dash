import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from "react-native";
import tailwind from "tailwind-rn";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/maldives")
            .then((response) => response.json())
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
                    <Header />
                    <View style={tailwind("flex flex p-4 w-full")}>
                        <Card
                            label={"Confirmed ✅"}
                            color={"bg-gray-500"}
                            textColor={"indigo"}
                            data={data.cases}
                        />
                        <Card
                            label={"Deaths ☠"}
                            color={"bg-gray-600"}
                            textColor={"red"}
                            data={data.deaths}
                        />
                        <Card
                            label={"Recovered 😄"}
                            color={"bg-gray-700"}
                            textColor={"green"}
                            data={data.recovered}
                        />
                        <Card
                            label={"Cases Today 📅"}
                            color={"bg-gray-800"}
                            textColor={"green"}
                            data={data.todayCases}
                        />
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
    image: {
        height: 30,
    },
});
