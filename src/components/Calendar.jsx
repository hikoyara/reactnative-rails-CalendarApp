import React, { useState } from "react";
import { Text } from "react-native";
import { Calendar } from "react-native-big-calendar";
/* components */
import AppBar from "./AppBar";

export default function App(props) {
    const { events, navigation } = props;

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

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
            <AppBar>{currentMonth}月</AppBar>
            <Calendar
                events={eventsArray}
                height={100}
                mode="month"
                onChangeDate={(e) => setCurrentMonth(e[0].getMonth() + 1)}
                onPressCell={(day) => {}}
                onPressEvent={(event) => {
                    console.log(event);
                }}
            />
        </>
    );
}
