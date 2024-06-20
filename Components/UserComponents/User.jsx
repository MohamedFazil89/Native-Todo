import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Cart from "./UserCart";
import Animated from "react-native-reanimated";


function User(){
    return (
        <Animated.View style={styles.Container} sharedTransitionTag="tag">
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>
          

            
            

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        // margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        // padding: 20
    }
})

export default User;