import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {FC} from 'react';
import colors from 'utils/colors';

interface Props extends TextInputProps {}

const AppInput: FC<Props> = props => {
  const {placeholder} = props;
  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
      style={[styles.input, props.style]}
      onChangeText={text => {
        console.log(text);
      }}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 25,
    color: colors.CONTRAST,
    padding: 10,
  },
});
