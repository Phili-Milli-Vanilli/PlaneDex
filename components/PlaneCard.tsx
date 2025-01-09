import { Text, View, StyleSheet } from "react-native";

type Props = {
    model: string;
    registration: string;
    airline: string;
};

export default function PlaneCard({ model, registration, airline }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{model || "Unknown Model"}</Text>
            <Text style={styles.text}>{registration || "No Registration"}</Text>
            <Text style={styles.text}>{airline || "No Airline"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // Android shadow
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 14,
        color: "#555",
    },
});
