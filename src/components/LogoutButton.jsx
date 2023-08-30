import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
/* lib */
import { storage } from "../lib/storage";

export default function LogoutButton(props) {
    const { style } = props;

    return (
        <TouchableOpacity
            style={[styles.wrapper, style]}
            onPress={() => {
                storage.remove({ key: "userData" });
            }}
        >
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "red",
        padding: 4,
        borderRadius: 4,
        position: "absolute",
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
