import * as React from "react-native";
import { View, Text, StyleSheet } from "react-native";


function NavBar(props){
    return (
        <View>
            <Text style={style.Navs}>{props.name}</Text>
        </View>
        
        
    );
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e1e1e', 
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    list: {
      flex: 1,
      marginTop: 20,
      width: '100%',
    },
  });



export default NavBar;