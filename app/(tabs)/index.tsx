import { ScrollView, StyleSheet, View } from "react-native";
import PlaneCard from "@/components/PlaneCard";
import { isMobile } from "@/constants/responsives";

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
    return (
        <ScrollView>
            <View style={styles.container}>
                {planes.map((plane, index) => (
                    <PlaneCard key={index} {...plane} />
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
