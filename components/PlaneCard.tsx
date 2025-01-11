import { useIsMobile } from "@/hooks/useIsMobile";
import {
    Text,
    View,
    StyleSheet,
    Image,
    useWindowDimensions,
} from "react-native";
import DB from "@/components/DB";

type Props = {
    model: string;
    registration: string;
    airline: string;
};

export default function PlaneCard({ model, registration, airline }: Props) {
    const { width } = useWindowDimensions();

    const cardStyle = {
        width: useIsMobile() ? width / 2 - 15 : width / 3 - 20, // 50% Mobil, 33% Web
        height: useIsMobile() ? width / 2 - 15 : width / 3 - 20, // Quadratisch
    };

    return (
        <View style={[styles.card, cardStyle]}>
            <Image
                source={
                    useIsMobile()
                        ? require("@/assets/images/Plane_icon.png")
                        : require("@/assets/images/Plane_icon.svg")
                }
                style={styles.image}
            />
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
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "60%",
        height: "40%",
        resizeMode: "contain",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: "#555",
    },
});
