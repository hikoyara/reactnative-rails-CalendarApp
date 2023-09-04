import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
/* components */
import DatePicker from "../components/DatePicker";
import EventCreateButton from "../components/EventCreateButton";
/* icon */
import { AntDesign } from "@expo/vector-icons";
/* lib */
import { WindowSize } from "../utils/WindowSize";

export default function EventCreateScreen(props) {
    const { navigation } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [isStartVisible, setIsStartVisible] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [isEndVisible, setIsEndVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.bar}></View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={28} color="#707070" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <Text style={styles.title}>タイトル</Text>
                    <TextInput autoFocus={true} style={styles.input} placeholder="タイトル" placeholderTextColor="#707070" returnKeyType="done" value={title} autoCapitalize="none" onChangeText={(text) => setTitle(text)} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>ディスクリプション</Text>
                    <TextInput style={styles.input} placeholder="ディスクリプション" placeholderTextColor="#707070" returnKeyType="done" value={description} autoCapitalize="none" onChangeText={(text) => setDescription(text)} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>予定開始日付</Text>
                    <DatePicker date={startDate} setDate={setStartDate} isVisible={isStartVisible} setIsVisible={setIsStartVisible} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>予定終了日付</Text>
                    <DatePicker date={endDate} setDate={setEndDate} isVisible={isEndVisible} setIsVisible={setIsEndVisible} />
                </View>
                <EventCreateButton title={title} description={description} startDate={startDate} endDate={endDate} />
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
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
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
