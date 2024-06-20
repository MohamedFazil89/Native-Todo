import * as React from "react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated from 'react-native-reanimated';



function NavBar(props) {
  return (
    <Animated.View style={style.container} sharedTransitionTag="tag">
      <Text style={style.Navs}>{props.name}</Text>
      <Pressable onPress={() => props.onPresses()}>
      <Icon style={style.icon} name="user"  />

      </Pressable>
    </Animated.View>


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
    marginTop: 6,
    marginLeft: 80,
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