import {Alert, Text, TextInput, ToastAndroid, TouchableOpacity} from "react-native";
import React from "react";

<Text>User Name:</Text>
<TextInput style={{borderWidth: 1}} onChangeText={(text) => setUser(text)} />

<Text>Password:</Text>
<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)} />




<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>
    <Text>Submit Answers</Text>
</TouchableOpacity>

<TouchableOpacity
    onPress={() => ToastAndroid.show(user, ToastAndroid.SHORT)}>
    <Text>Log In</Text>
    <Text>{pw}</Text>
</TouchableOpacity>
