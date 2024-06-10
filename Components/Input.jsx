import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can choose any icon set
function Input(props) {
    const [input, setInput] = useState("");

    function handelChange(e) {
        const newValue = e.nativeEvent.text;
        setInput(newValue)
    }


    function handelClick() {
        props.onAdd(input)
        setInput("");
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Enter the task"
                placeholderTextColor="#888" // Light grey placeholder text color
                value={input}
                onChange={handelChange}
            />
            <TouchableOpacity style={styles.button} onPress={handelClick}>
                <Text style={{color: 'white'}}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    button: {
        padding: 10,
        backgroundColor: '#4CAF50', // A shade of green for the button
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        color: 'white',
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        marginRight: 10,
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#2e2e2e', // Dark background for the input to match the theme
    }
});

export default Input;
