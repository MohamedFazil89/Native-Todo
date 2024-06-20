import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './Home';
import User from './Components/UserComponents/User'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export function drawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="nav" component={User} />
            <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator>

    );
}

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}