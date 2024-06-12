import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Cart from "./UserCart";


function User(){
    return (
        <View style={styles.Container}>
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>
            <Cart UserId={'1234'} UserName={'Fazil'} Rank={'1234th'}/>

            
            

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        // margin: 'auto'
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 20
    }
})

export default User;