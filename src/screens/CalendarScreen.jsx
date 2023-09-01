import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
/* components */
import CalendarComponent from "../components/Calendar";
import LogoutButton from "../components/LogoutButton";
import MenuButtons from "../components/MenuButtons";
/* contexts */
import { UserContext } from "../contexts/UserContext";

export default function CalendarScreen(props) {
    const { navigation } = props;
    const { user } = useContext(UserContext);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/calendar_events", {
            headers: {
                "access-token": user.accessToken,
                client: user.client,
                uid: user.uid,
            },
        })
            .then((response) => response.json())
            .then((data) => setEvents(data));
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
