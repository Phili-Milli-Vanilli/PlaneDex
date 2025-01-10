import { useWindowDimensions } from "react-native";

export const isMobile = (): boolean => {
    const { width } = useWindowDimensions();
    return width < 768; // Breakpoint für Mobile
};
