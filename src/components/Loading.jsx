import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
/* utils */
import { WindowSize } from "../utils/WindowSize";

export default function Loading(props) {
    const { loading } = props;
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WindowSize().width,
        height: WindowSize().height,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        paddingTop: (WindowSize().height - 150) / 2,
        zIndex: 10,
    },
});
