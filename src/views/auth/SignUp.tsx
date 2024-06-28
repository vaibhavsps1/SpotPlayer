import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
// const colors = require('@utils/colors')
import colors from '../../utils/colors';

interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="this is fun"
        placeholderTextColor={'red'}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="this is fun"
        placeholderTextColor={'red'}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="this is fun"
        placeholderTextColor={'red'}
      />
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    
  },
  input: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    height: 45,
    borderRadius: 25,
    color: colors.PRIMARY,
    padding: 15,
  },
  label: {},
});
