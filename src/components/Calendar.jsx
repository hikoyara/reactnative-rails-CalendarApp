import React, { useState } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-big-calendar";

export default function App(props) {
    const { events } = props;

    const eventsArray = [];
    events.map((event) => {
        eventsArray.push({
            title: event.title,
            start: new Date(event.start_date),
            end: new Date(event.end_date),
        });
    });

    return <Calendar events={eventsArray} height={100} mode="month" />;
}
