import * as React from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


function NavBar(props) {
  return (
    <View style={style.container}>
      <Text style={style.Navs}>{props.name}</Text>
      <Pressable onPress={() => props.onPresses()}>
      <Icon style={style.icon} name="user" />

      </Pressable>
    </View>


  );
}
const style = StyleSheet.create({
  container:{
    width: '100%',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  Navs: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // marginTop: 6,
    marginLeft: 120,
    margin: 'auto'
  },

  icon:{
    margin: 'auto',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    cursor: 'pointer',
    marginRight: 10

  }

});



export default NavBar;