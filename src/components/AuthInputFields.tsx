import {
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import AppInput from 'ui/AppInput';
import colors from 'utils/colors';

interface Props {
  label?: string;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  containerStyle?: StyleProp<ViewStyle>;
  errorMsg?: string;
  onChange?: (text: string) => void;
}

const AuthInputFields: FC<Props> = props => {
  const {
    label,
    placeholder,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
    errorMsg,
    onChange,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{}}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>
      <AppInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
      />
    </View>
  );
};

export default AuthInputFields;

const styles = StyleSheet.create({
  container: {},
  label: {padding: 1, color: colors.CONTRAST},
  errorMsg: {},
});
