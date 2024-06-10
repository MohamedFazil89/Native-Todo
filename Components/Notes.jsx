import React, { View , Text, StyleSheet, TouchableOpacity, Animated } from "react-native";

function Notes(props){
    return(
        <Animated.View style={styles.container}>
            <Text style={styles.note}>{props.Note}</Text>
            <TouchableOpacity   onPress={() => props.Delete(props.id)}>
                <Text style={styles.del}>Del</Text>
            </TouchableOpacity>
        </Animated.View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#333', // Dark background to match the app theme
        borderRadius: 10,
        flexDirection:'row'
    },
    note: {
        fontSize: 18,
        color: 'white',
        padding: 10,
        backgroundColor: '#4CAF50', // Green background for the notes
        borderRadius: 5,
        justifyContent: 'flex-start',
        textAlign:'left',
        display: 'grid',
        flex:1,
    },

    del:{
        fontSize: 18,
        color: 'white',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        textAlign:'right'

    }
});
export default Notes;