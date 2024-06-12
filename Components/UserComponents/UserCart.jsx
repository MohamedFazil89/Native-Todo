import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Image} from "react-native";
import Img from '../UserComponents/download (1).jpg'
export default function Cart(props){
    return (
        <View style={styles.Cart}>
            <View style={styles.ImageCon}>
                <Image style={styles.Image} source={Img} resizeMode="cover" />

                    </View>
            <View style={styles.detils}>
                <Text style={styles.text}>ID:{props.UserId}</Text>
                <Text style={styles.text}>Username:{props.UserName}</Text>
                <Text style={styles.text}>{props.Rank} Rank</Text>

            </View>
           
            
        </View>

    )
}

const styles = StyleSheet.create({
    Cart:{
        // flex:3,
        // backgroundColor: 'gray',
        padding: 12,        
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOffset:{
            width: 100,
            height: 100
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

    

    },

    ImageCon:{
        backgroundColor: 'lightblue',
        // padding: 5,
        borderRadius: 500,
        borderWidth: 5,
        borderColor: 'lightblue',
        shadowColor: 'blue',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 1,
        // shadowRadius: 5,
        elevation: 5,
    },
    Image:{
        color: 'black',
        fontSize: 20,
        width: 90,
        height: 90,
        padding: 10,
        borderRadius: 500,
        margin: 'auto',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)'

    },
    detils:{
        color: 'white',
        fontSize: 20,
        padding: 10,
        width: 200,
    },
    text:{
        color: 'white',
        fontSize: 15,
        // margin: 'auto',
        marginBottom: 10
    },

})