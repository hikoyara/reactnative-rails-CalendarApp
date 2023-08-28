import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handlePress() {
        fetch("http://localhost:3001/auth/sign_in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": "access-token", // トークンの値
                client: "client", // クライアントIDの値
                expiry: "expiry", // トークンの有効期限の値
                uid: "uid", // ユーザーのUIDの値
                "token-type": "token-type", // トークンのタイプ（Bearerなど）
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.data) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Calendar" }],
                    });
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ログイン</Text>
            <TextInput style={styles.input} placeholder="email" autoCapitalize="none" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} value={password} />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>ログイン</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 40,
        height: "100%",
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#707070",
        fontSize: 16,
        marginBottom: 20,
        paddingBottom: 5,
    },
    button: {
        backgroundColor: "#000",
        padding: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
