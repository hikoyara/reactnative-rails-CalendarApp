import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated } from "react-native";
/* components */
import LogoutButton from "./LogoutButton";
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
    const calendarTextAnimatedValue = useRef(new Animated.Value(3)).current;
    const logoutAnimatedValue = useRef(new Animated.Value(4)).current;
    const logoutTextAnimatedValue = useRef(new Animated.Value(5)).current;

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
    const backAnimatedStyle = {
        opacity: backInterPolateOpacity,
    };

    const calendarTextInterPolateOpacity = calendarTextAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const calendarTextInterPolatetranslate = calendarTextAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [5, 0],
    });
    const calendarTextAnimatedStyle = {
        opacity: calendarTextInterPolateOpacity,
        transform: [{ translateY: calendarTextInterPolatetranslate }],
    };

    const logoutInterPolateOpacity = logoutAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const logoutInterPolatetranslate = logoutAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const logoutAnimatedStyle = {
        opacity: logoutInterPolateOpacity,
        transform: [{ scale: logoutInterPolatetranslate }, { translateY: -25 }],
    };

    const logoutTextInterPolateOpacity = logoutTextAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const logoutTextInterPolatetranslate = logoutTextAnimatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [5, 0],
    });
    const logoutTextAnimatedStyle = {
        opacity: logoutTextInterPolateOpacity,
        transform: [{ translateY: logoutTextInterPolatetranslate }],
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
            Animated.timing(calendarTextAnimatedValue, {
                toValue: 150,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(logoutAnimatedValue, {
                toValue: 150,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(logoutTextAnimatedValue, {
                toValue: 150,
                duration: 200,
                delay: 100,
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
            Animated.timing(calendarTextAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(logoutAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(logoutTextAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => setIsOpen(false));
    };

    return (
        <>
            {isOpen && (
                <Animated.View style={[backAnimatedStyle, styles.back]}>
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
                    <FontAwesome5 name="calendar-plus" size={36} color="#fff" />
                </Animated.View>
                <Animated.View style={[backAnimatedStyle, styles.btnBack]}></Animated.View>
            </TouchableOpacity>
            {isOpen && <Animated.Text style={[calendarTextAnimatedStyle, styles.calendarText]}>予定</Animated.Text>}
            {isOpen && (
                <Animated.View style={[logoutAnimatedStyle, styles.logoutButton]}>
                    <LogoutButton />
                </Animated.View>
            )}
            {isOpen && <Animated.Text style={[logoutTextAnimatedStyle, styles.logoutText]}>ログアウト</Animated.Text>}
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
        zIndex: 11,
    },
    iconCalendarWrapper: {
        position: "absolute",
        top: 17,
        left: 19,
        zIndex: 11,
    },
    calendarText: {
        fontSize: 16,
        position: "absolute",
        bottom: 47,
        right: 110,
        zIndex: 11,
    },
    logoutButton: {
        position: "absolute",
        zIndex: 11,
        bottom: 85,
        right: 30,
    },
    logoutText: {
        fontSize: 16,
        position: "absolute",
        bottom: 123,
        right: 90,
        zIndex: 11,
    },
    btnBack: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#2983FF",
        borderRadius: 70,
        zIndex: 10,
    },
});
