import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
/* lib */
import { storage } from "../lib/storage";
/* icon */
import { Entypo } from "@expo/vector-icons";
/* navigation */
import { useNavigation } from "@react-navigation/native";

export default function LogoutButton(props) {
    const { style } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.wrapper, style]}
            onPress={() => {
                storage.remove({ key: "userData" }).then(() => {
                    Alert.alert("ログアウトしました。");
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                    });
                });
            }}
        >
            <Entypo name="log-out" size={30} color="#fff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "red",
        borderRadius: 50,
        position: "absolute",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 3, height: 3 },
    },
});
