import React, { useState } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-big-calendar";
/* components */
import AppBar from "./AppBar";

export default function App(props) {
    const { events } = props;

    const [currentMonth, setCurrentMonth] = useState();

    console.log(new Date());

    const eventsArray = [];
    events.map((event) => {
        eventsArray.push({
            title: event.title,
            start: new Date(event.start_date),
            end: new Date(event.end_date),
        });
    });

    return (
        <>
            <AppBar>カレンダー</AppBar>
            <Calendar events={eventsArray} height={100} mode="month" onChangeDate={() => console.log("aa")} />
        </>
    );
}
