import React, { useState } from "react";
import { SafeAreaView, LogBox } from "react-native";
/* navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/* screens */
import LoginScreen from "./src/screens/LoginScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import EventCreateScreen from "./src/screens/EventCreateScreen";
import EventUpdateScreen from "./src/screens/EventUpdateScreen";
/* contexts */
import { UserContext } from "./src/contexts/UserContext";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export default function App() {
    const Stack = createNativeStackNavigator();

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Calendar" component={CalendarScreen} />
                        <Stack.Screen name="EventCreate" component={EventCreateScreen} options={Platform.OS === "ios" ? { presentation: "modal" } : { animation: "fade_from_bottom" }} />
                        <Stack.Screen name="EventUpdate" component={EventUpdateScreen} options={Platform.OS === "ios" ? { presentation: "modal" } : { animation: "fade_from_bottom" }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </UserContext.Provider>
    );
}
