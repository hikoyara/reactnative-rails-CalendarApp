import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated } from "react-native";
/* utils */
import { WindowSize } from "../utils/WindowSize";
/* icon */
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MenuButtons() {
    const [isOpen, setIsOpen] = useState(false);

    const plusAnimatedValue = useRef(new Animated.Value(0)).current;
    const calendarAnimatedValue = useRef(new Animated.Value(1)).current;
    const backAnimatedValue = useRef(new Animated.Value(2)).current;

    const plusInterPolateRotate = plusAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: ["0deg", "90deg"],
    });
    const plusInterPolateOpacity = plusAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [1, 0],
    });
    const plusAnimatedButtonStyle = {
        transform: [
            {
                rotate: plusInterPolateRotate,
            },
        ],
        opacity: plusInterPolateOpacity,
    };

    const calendarInterPolateRotate = calendarAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: ["-90deg", "0deg"],
    });
    const calendarInterPolateOpacity = calendarAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const calendarAnimatedButtonStyle = {
        transform: [
            {
                rotate: calendarInterPolateRotate,
            },
        ],
        opacity: calendarInterPolateOpacity,
    };

    const backInterPolateOpacity = plusAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const backAnimatedButtonStyle = {
        opacity: backInterPolateOpacity,
    };

    const startAnimation = () => {
        setIsOpen(true);
        Animated.parallel([
            Animated.timing(plusAnimatedValue, {
                toValue: 150,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(calendarAnimatedValue, {
                toValue: 150,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(backAnimatedValue, {
                toValue: 150,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const reverseAnimation = () => {
        Animated.parallel([
            Animated.timing(plusAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(calendarAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(backAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => setIsOpen(false));
    };

    return (
        <>
            {isOpen && (
                <Animated.View style={[backAnimatedButtonStyle, styles.back]}>
                    <TouchableWithoutFeedback onPress={reverseAnimation}>
                        <View style={{ flex: 1 }}></View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            )}

            <TouchableOpacity style={styles.menuBtn} onPress={isOpen ? () => {} : startAnimation}>
                <Animated.View style={[plusAnimatedButtonStyle, styles.iconPlusWrapper]}>
                    <Feather name="plus" size={42} color={"#2983FF"} />
                </Animated.View>
                <Animated.View style={[calendarAnimatedButtonStyle, styles.iconCalendarWrapper]}>
                    <FontAwesome5 name="calendar-plus" size={36} color="#2983FF" />
                </Animated.View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    back: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255,0.8)",
        width: WindowSize().width,
        height: WindowSize().height,
        zIndex: 10,
    },
    menuBtn: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "#fff",
        borderRadius: 70,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 3, height: 3 },
        zIndex: 15,
    },
    iconPlusWrapper: {
        position: "absolute",
        top: (70 - 42) / 2,
        left: (70 - 42) / 2,
    },
    iconCalendarWrapper: {
        position: "absolute",
        top: 17,
        left: 19,
    },
});
