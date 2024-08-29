import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import SignUp from './src/views/auth/SignUp';
import SignIn from 'views/auth/SignIn';
import LostPassword from 'views/auth/LostPassword';
import Verification from 'views/auth/Verification';

interface Props {}

const App: FC<Props> = props => {
  return (
    // <SignUp />
    // <SignIn />
    // <LostPassword />
    <Verification/>
  );
};

export default App;

const styles = StyleSheet.create({container: {}});
