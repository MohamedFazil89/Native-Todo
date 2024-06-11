import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';


function Alerts(props) {
    // const [state, setState] = useState(false)

        
    
    function handleState(state){
        props.modelState(state)
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Questions}>Did you complete task?</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() => handleState(true)}>
                    <Text style={[styles.buttonText]}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'red'}]} onPress={() => handleState(false)}>
                    <Text style={[styles.buttonText]}>No</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        

    );
}

const styles = StyleSheet.create({
    container:{
        position: 'static',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,.5)',
        padding: 30,
        backgroundColor:'black',
        width: '80%',
        margin: 40,
        marginTop: 290
    },
    Questions:{
        color: 'white',
        fontSize: 20
    },

    buttonView:{
        flexDirection: 'row',
        margin: 1
        
    },

    button:{
        margin: 10,
        padding: 10,
        borderRadius: 5,
        color:'white'
    },

    buttonText:{
        color: 'white'
    }
})

export default Alerts;