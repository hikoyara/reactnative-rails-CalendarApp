import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function AppBar(props) {
    const { children } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: 60,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingBottom: 15,
        paddingLeft: 30,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 3, height: 3 },
        marginBottom: 40,
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    },
});
