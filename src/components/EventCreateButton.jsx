import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
/* contexts */
import { UserContext } from "../contexts/UserContext";
/* lib */
import { createCalendarEvent } from "../lib/api/calendarEvent";
/* navigation */
import { useNavigation } from "@react-navigation/native";
/* moment */
import moment from "moment";

export default function EventCreateButton(props) {
    const { title, description, startDate, endDate, clearEvents } = props;
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    async function handlePress() {
        const newEvent = {
            title: title.length > 0 ? title : "（タイトルなし）",
            description,
            start_date: moment(startDate).format("YYYY-MM-DD"),
            end_date: moment(endDate).format("YYYY-MM-DD"),
        };
        if (await createCalendarEvent(user, newEvent)) {
            navigation.goBack();
            await clearEvents();
        } else {
            Alert.alert("イベントを作成できませんでした。", "お手数ですがもう一度お試しください。");
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
                <Text style={styles.text}>イベントを追加</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
    },
    wrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#3182CE",
        borderRadius: 5,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    },
});
