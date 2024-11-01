import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, ToastAndroid, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};
const MyApp = () => {

  /*let pw='';*/
  /*let user ='';*/
    const [pw, setPw] = useState('');
    const [user, setUser] = useState('');
    const [userType, setuserType] = useState('');


return (
    <View style={styles.Container}>
      <Text></Text>
      <Text></Text>
      <Text>User Type:</Text>
      <RNPickerSelect
        onValueChange={value => setuserType(value)}
        items={[
          { label: 'Admin', value: 'admin' },
          { label: 'Guest', value: 'guest' } ]}/>

       <InputBox label="User Name:" onChangeText={(text) => setUser(text)}/>
       <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

       <TouchableOpacity onPress={()=> {
           const correctPassword = '123456';
           let mymessage='Error! Wrong Password';
        if (pw === correctPassword) {
            mymessage = 'Welcome ' + userType +' '+user;
        }
        ToastAndroid.show(mymessage,ToastAndroid.SHORT);
       }
       }>
       <Text>LOG IN</Text>
       </TouchableOpacity>
    </View>
);
};



const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },

    }
});
export default MyApp;

