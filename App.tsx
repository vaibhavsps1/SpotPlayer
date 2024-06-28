import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import SignUp from './src/views/auth/SignUp';

interface Props {}

const App: FC<Props> = props => {
  return (
    // <View style={styles.container}>
    // </View>
    <SignUp />
  );
};

export default App;

const styles = StyleSheet.create({container: {}});
