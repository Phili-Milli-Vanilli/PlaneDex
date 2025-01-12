import { Button, ScrollView, StyleSheet, View } from "react-native";
import Card from "@/components/Card";
import { PlaneModel } from "prisma/prisma-client";
import { useEffect, useState } from "react";

export default function HomeScreen() {
    const [planeModels, setPlaneModels] = useState<PlaneModel[]>([]);

    useEffect(() => {
        const fetchPlaneModels = async () => {
            const response = await fetch(
                "http://localhost:3000/api/planeModel/get"
            );
            if (response.status === 200) {
                const data = await response.json();
                setPlaneModels(data.value);
            } else {
                console.error("Fehler beim Laden der Daten");
            }
        };

        fetchPlaneModels();
    }, []);

    return (
        <ScrollView>
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
