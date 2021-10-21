import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Task = props => {
  return (
    <View style={styles.taskContainer}>
      <Icon
        name={(props.checked && 'check-square') || 'square'}
        size={40}
        color="blue"
        style={{marginLeft: 15}}
        onPress={props.setChecked}
      />

      <View>
        <Text
          style={[styles.task, {color: (props.checked && 'black') || 'red'}]}>
          {' '}
          {props.text}{' '}
        </Text>
      </View>

      <Icon
        name="trash-2"
        size={40}
        color="blue"
        style={{marginLeft: 'auto'}}
        onPress={props.delete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    paddingBottom: 20,
    margin: 5,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },

  taskContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
});

export default Task;
