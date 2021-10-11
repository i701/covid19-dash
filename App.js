import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import tailwind from "tailwind-rn";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
    const [data, setData] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("maldives");
    const [items, setItems] = useState([
        { label: "Maldives", value: "maldives" },
        { label: "USA", value: "usa" },
        { label: "India", value: "india" },
    ]);

    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/countries/${value}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [value]);

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
                    <Header flag={data.countryInfo.flag} />
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
                            data={data.active}
                        />
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.dropdown}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeValue={(value) => {
                        console.log(value);
                        console.log(data.countryInfo.flag);
                    }}
                    style={{
                        backgroundColor: "#6b7280",
                        color: "white",
                    }}
                    textStyle={{
                        fontSize: 15,
                    }}
                />
            </View>
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
        paddingTop: 10,
    },
});
