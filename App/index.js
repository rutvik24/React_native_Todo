import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './task';

const Home = () => {
    const [value, setValue] = useState('');
    const [task, setTask] = useState([]);

    handleAddTask = () => {
        if (value.length > 0) {
            setTask([...task, { text: value, key: Date.now(), checked: false }])
            setValue('')
        }
    }

    handleDeleteTask = (id) => {
        setTask(task.filter((task) => {
            if (task.key !== id) return true;
        })
        )
    }

    handleChecked = (id) => {
        setTask(task.map((task) => {
            if (task.key === id) task.checked = !task.checked;
            return task;
        }))
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: '15%', fontSize: 20, color: 'black' }} >Today</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={(value) => setValue(value)}
                    placeholeder={'Add Tasks!'}
                    value={value}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <Icon name='plus' size={40} color='blue' style={{ marginLeft: 15 }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} >
                {task.map((task) => (
                    <Task
                        text={task.text}
                        key={task.key}
                        checked={task.checked}
                        setChecked={() => {
                            handleChecked(task.key)
                        }}
                        delete={() => { handleDeleteTask(task.key) }}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    input: {
        height: 40,
        flex: 1,
        fontSize: 20,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
});

export default Home;