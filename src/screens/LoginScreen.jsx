import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";
/* components */
import Loading from "../components/Loading";
/* lib */
import { storage } from "../lib/storage";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const { setUser } = useContext(UserContext);

    useEffect(() => {
        setLoading(true);
        try {
            storage
                .load({ key: "userData" })
                .then((data) => {
                    setTimeout(() => {
                        setUser(data);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Calendar" }],
                        });
                        setLoading(false);
                    }, 1000);
                })
                .catch((error) => {
                    setLoading(false);
                });
        } catch (error) {
            setLoading(false);
        }
    }, []);

    async function handlePress() {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3001/auth/sign_in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                const accessToken = response.headers.get("access-token");
                const client = response.headers.get("client");
                const uid = response.headers.get("uid");
                const tokenType = response.headers.get("token-type");

                await storage.save({
                    key: "userData",
                    data: { accessToken, client, uid, tokenType },
                });

                await storage.load({ key: "userData" }).then((data) => setUser(data));

                navigation.reset({
                    index: 0,
                    routes: [{ name: "Calendar" }],
                });

                setLoading(false);
            } else {
                console.log("Login failed:", responseData.errors);
                Alert.alert("ユーザーが見つかりません");
                setLoading(false);
            }
        } catch (error) {
            Alert.alert("サーバーに接続できません", "時間を置いてお試しください。");
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ログイン</Text>
            <TextInput style={styles.input} placeholder="email" autoCapitalize="none" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} value={password} />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>ログイン</Text>
            </TouchableOpacity>
            <Loading loading={loading} />
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
