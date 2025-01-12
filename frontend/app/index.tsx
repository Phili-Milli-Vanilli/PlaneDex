import { Button, ScrollView, StyleSheet, View } from "react-native";
import Card from "@/components/Card";
import { PlaneModel } from "prisma/prisma-client";
import { getPlaneModels } from "@/functions/getPlaneModels";
import { useEffect, useState } from "react";

const planes = [
    { model: "Boeing 747", registration: "N12345", airline: "Delta" },
    { model: "", registration: "", airline: "" },
    { model: "Boeing 747", registration: "N12345", airline: "Delta" },
    { model: "", registration: "", airline: "" },
    { model: "Boeing 747", registration: "N12345", airline: "Delta" },
    { model: "", registration: "", airline: "" },
    { model: "Boeing 747", registration: "N12345", airline: "Delta" },
    { model: "", registration: "", airline: "" },
    { model: "Boeing 747", registration: "N12345", airline: "Delta" },
    { model: "", registration: "", airline: "" },
];

export default function HomeScreen() {
    const [planeModels, setPlaneModels] = useState<PlaneModel[]>([]);
    const [isLoding, setIsLoading] = useState(true);

    const fetchData = async () => {
        const data = await getPlaneModels();
        setPlaneModels(data);
        console.log(data);
    };

    return (
        <ScrollView>
            <Button title="Press Me" onPress={() => fetchData()} />
            <View></View>
            <View style={styles.container}>
                {planeModels.map((model: PlaneModel, index: number) => (
                    <Card key={index} {...model} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
