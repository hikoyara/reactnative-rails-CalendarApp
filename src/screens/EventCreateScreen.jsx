import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
/* icon */
import { AntDesign } from "@expo/vector-icons";
/* lib */
import { WindowSize } from "../utils/WindowSize";

export default function EventCreateScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.bar}></View>
                <AntDesign name="close" size={22} color="#707070" />
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <Text style={styles.title}>タイトル</Text>
                    <TextInput style={styles.input} placeholder="タイトル" placeholderTextColor="#707070" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>ディスクリプション</Text>
                    <TextInput style={styles.input} placeholder="ディスクリプション" placeholderTextColor="#707070" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>予定開始日付</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>予定終了日付</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        position: "absolute",
        top: 10,
        left: WindowSize().width / 2 - 40,
        width: 80,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#BABABA",
    },
    head: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    body: {
        paddingHorizontal: 20,
    },
    box: {
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});
