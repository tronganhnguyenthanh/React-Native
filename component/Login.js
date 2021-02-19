import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
const UserTextInput = () => {
  const [value, onChangeUsername] = React.useState();
  const [value1, onChangePassword] = React.useState();
  const handleShowAlert = () => {
   alert("Hello");
  }
  return (
    <View style={styles.flex}>
      <ImageBackground source={require('../backgroundImages/bg.jpg')} style={styles.bgImg}>
        <Text>
          <Text style={styles.title}>Login</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeUsername={(username) => onChangeUsername(username)}
          value={value}
        />
        <TextInput
          style={styles.password}
          onChangePassword={(password) => onChangePassword(password)}
          value={value1}
        />
        <Button style={styles.login} title="Login" onPress={handleShowAlert}/>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  flex:{
    flex:1,
    flexDirection:'column',
  },
  title:{
    fontWeight:'bold',
    color:'black',
    fontSize:25,
  },
  input: {
    height:40,
    borderColor:'gray',
    borderWidth:1
  },
  password:{
    width:'98%',
    height:40,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'2%',
  },
  bgImg:{
   width:420,
   height:750
  }
});
export default UserTextInput;
