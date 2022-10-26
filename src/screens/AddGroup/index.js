import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddGroup = props => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onGroupAdd = () => {
        if (!name){
            alert('Please enter a group name.');
            return;
        }
        if (!description){
            alert('Please enter a description.');
            return;
        }
        
        try {
            database.addGroup(name, description);
        } catch (error) {
            console.log('Error adding group ' + error);
        }

        alert(name + ' Added!');
        navigation.navigate('Add Group');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={name}
                onChangeText={value => setName(value)}
                style={styles.fullname}
                clearButtonMode={'while-editing'}
                placeholder={'Enter A Group Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={description}
                onChangeText={value => setDescription(value)}
                style={styles.phone}
                clearButtonMode={'while-editing'}
                placeholder={'Enter A Description'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onGroupAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddGroup;