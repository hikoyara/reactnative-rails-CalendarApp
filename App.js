import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
/* contexts */
import { UserContext } from "./src/contexts/UserContext";

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
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </UserContext.Provider>
    );
}
