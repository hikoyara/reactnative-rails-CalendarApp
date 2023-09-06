import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
/* contexts */
import { UserContext } from "../contexts/UserContext";
/* lib */
import { deleteCalendarEvent } from "../lib/api/calendarEvent";
/* navigation */
import { useNavigation } from "@react-navigation/native";
/* icon */
import { FontAwesome5 } from "@expo/vector-icons";

export default function EventDeleteButton(props) {
    const { eventId, clearEvents } = props;
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    function handlePress() {
        Alert.alert("予定を削除します", "よろしいですか？", [
            {
                text: "はい",
                style: "destructive",
                onPress: async () => {
                    if (await deleteCalendarEvent(user, eventId)) {
                        navigation.goBack();
                        await clearEvents();
                    } else {
                        Alert.alert("イベントを削除できませんでした。", "お手数ですがもう一度お試しください。");
                    }
                },
            },
            {
                text: "いいえ",
                onPress: () => {},
            },
        ]);
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
            <FontAwesome5 name="trash" size={28} color="red" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconWrapper: {
        padding: 10,
    },
});
