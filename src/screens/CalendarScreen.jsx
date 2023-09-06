import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
/* components */
import CalendarComponent from "../components/Calendar";
import MenuButtons from "../components/MenuButtons";
/* lib */
import { getCalendarEvents } from "../lib/api/calendarEvent";
/* contexts */
import { UserContext } from "../contexts/UserContext";

export default function CalendarScreen(props) {
    const { navigation } = props;
    const { user } = useContext(UserContext);

    const [events, setEvents] = useState([]);

    const clearEvents = async () => {
        try {
            const res = await getCalendarEvents(user);
            setEvents(res);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        const f = async () => {
            try {
                await clearEvents();
            } catch (e) {
                console.log(e);
            }
        };
        f();
    }, []);

    return (
        <View style={styles.container}>
            <CalendarComponent events={events} navigation={navigation} />
            <MenuButtons navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
