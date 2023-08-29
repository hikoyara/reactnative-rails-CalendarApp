import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
/* components */
import CalendarComponent from "../components/Calendar";

export default function CalendarScreen() {
    const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/calendar_events")
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // }, []);

    return (
        <View style={styles.container}>
            <CalendarComponent />
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
