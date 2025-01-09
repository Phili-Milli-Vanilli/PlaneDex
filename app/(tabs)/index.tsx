import { ScrollView, StyleSheet } from "react-native";
import PlaneCard from "@/components/PlaneCard";

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
    const planeList = planes.map((plane, index) => (
        <PlaneCard key={index} {...plane} />
    ));

    return (
        <ScrollView contentContainerStyle={style.planeCardGrid}>
            {planeList}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    planeCardGrid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
});
