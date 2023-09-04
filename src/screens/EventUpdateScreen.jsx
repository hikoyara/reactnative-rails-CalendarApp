import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
/* components */
import DatePicker from "../components/DatePicker";
import EventUpdateButton from "../components/EventUpdateButton";
/* icon */
import { AntDesign } from "@expo/vector-icons";
/* lib */
import { WindowSize } from "../utils/WindowSize";

export default function EventUpdateScreen(props) {
    const { navigation, route } = props;
    const { event } = route.params;

    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description.length > 0 ? event.description : "");
    const [startDate, setStartDate] = useState(event.start);
    const [isStartVisible, setIsStartVisible] = useState(false);
    const [endDate, setEndDate] = useState(event.end);
    const [isEndVisible, setIsEndVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.bar}></View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconWrapper}>
                    <AntDesign name="close" size={28} color="#707070" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.box}>
                    <Text style={styles.title}>タイトル</Text>
                    <TextInput style={styles.input} placeholder="タイトル" placeholderTextColor="#707070" returnKeyType="done" value={title} autoCapitalize="none" onChangeText={(text) => setTitle(text)} />
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
                <EventUpdateButton id={event.id} title={title} description={description} startDate={startDate} endDate={endDate} />
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
    iconWrapper: {
        padding: 10,
    },
    head: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        alignItems: "flex-start",
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
