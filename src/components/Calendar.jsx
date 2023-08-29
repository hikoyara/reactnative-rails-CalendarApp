import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
/* utils */
import { WindowSize } from "../utils/WindowSize";

export default function App() {
    return (
        <Calendar
            style={{
                width: WindowSize().width,
                height: "100%",
            }}
            theme={{
                "stylesheet.calendar.main": {
                    monthView: {
                        flex: 1,
                        height: "100%",
                        justifyContent: "space-around",
                    },
                    week: {
                        flex: 1,
                        marginVertical: 0,
                        flexDirection: "row",
                        justifyContent: "space-around",
                    },
                    dayContainer: {
                        borderColor: "#f5f5f5",
                        borderWidth: 1,
                        flex: 1,
                    },
                },
            }}
            hideArrows={true}
            enableSwipeMonths={true}
            markingType="multi-period"
            markedDates={{
                "2023-08-13": {
                    periods: [
                        { startingDay: false, endingDay: true, color: "#5f9ea0" },
                        { startingDay: false, endingDay: true, color: "#ffa500" },
                        { startingDay: true, endingDay: false, color: "#f0e68c" },
                    ],
                },
                "2023-08-18": {
                    periods: [{ startingDay: true, endingDay: false, color: "#ffa500" }, { color: "transparent" }, { startingDay: false, endingDay: false, color: "#f0e68c" }],
                },
            }}
        />
    );
}

LocaleConfig.locales.jp = {
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";
