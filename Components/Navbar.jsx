import * as React from "react-native";
import { View, Text, StyleSheet } from "react-native";


function NavBar(props) {
  return (
    <View style={style.container}>
      <Text style={style.Navs}>{props.name}</Text>
    </View>


  );
}
const style = StyleSheet.create({
  container:{
    width: '100%',
    borderColor: 'white'

  },
  Navs: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'


  }

});



export default NavBar;