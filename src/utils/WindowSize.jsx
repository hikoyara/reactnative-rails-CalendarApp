import React from "react";
import { Dimensions } from "react-native";

export const WindowSize = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return { width: windowWidth, height: windowHeight };
};
