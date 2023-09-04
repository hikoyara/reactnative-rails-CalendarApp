import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
/* icon */
import { Entypo } from "@expo/vector-icons";
/* moment */
import moment from "moment";

export default function DatePicker(props) {
    const { date, setDate, isVisible, setIsVisible } = props;

    const showDatePicker = () => {
        setIsVisible(true);
    };
    const hideDatePicker = () => {
        setIsVisible(false);
    };
    const handleConfirm = (value) => {
        setDate(value);
        hideDatePicker();
    };

    return (
        <>
            <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                <Text style={styles.text}>{moment(date).format("YYYY/M/D")}</Text>
                <Entypo name="calendar" size={22} color="#000" />
            </TouchableOpacity>
            <DateTimePicker date={date} isVisible={isVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} display="spinner" headerTextIOS="日付を選択" cancelTextIOS="キャンセル" confirmTextIOS="決定" locale="ja-JA" />
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
