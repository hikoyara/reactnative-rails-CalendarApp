import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
/* components */
import CalendarComponent from "../components/Calendar";
import LogoutButton from "../components/LogoutButton";
/* contexts */
import { UserContext } from "../contexts/UserContext";

export default function CalendarScreen() {
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
            .then((data) => console.log(data));
    }, []);

    console.log(user);

    return (
        <View style={styles.container}>
            <CalendarComponent />
            <LogoutButton style={{ top: 0, left: 0 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
