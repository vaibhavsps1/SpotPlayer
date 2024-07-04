import AuthInputFields from 'components/AuthInputFields';
import colors from '../../utils/colors';
import {FC, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

interface Props {
}

const SignUp: FC<Props> = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    name: 'Name is missing',
    email: 'Email is missing',
    password: 'Password is blank',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AuthInputFields
          label="Name"
          placeholder="John Doe"
          containerStyle={{marginBottom: 30}}
          onChange={text => {
            setUserInfo({...userInfo, name: text});
          }}
          errorMsg={errorInfo.name}
        />
        <AuthInputFields
          label="Email"
          placeholder="john@email.com"
          keyboardType="email-address"
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
        />
        <AuthInputFields
          label="Password"
          placeholder="********"
          keyboardType="default"
          secureTextEntry={true}
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            console.log(userInfo);
            if (!userInfo.name)
              return setErrorInfo({...errorInfo, name: 'Name is missing'});
            if (!userInfo.email)
              return setErrorInfo({...errorInfo, name: 'Email is missing'});
            if (!userInfo.password)
              return setErrorInfo({...errorInfo, name: 'Password is missing'});
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 25,
    color: colors.CONTRAST,
    padding: 10,
  },
  label: {
    color: colors.CONTRAST,
  },
  formContainer: {
    gap: 20,
    width: '100%',
    paddingHorizontal: 15, // padding in the x direction (left and the right)
  },
});

export default SignUp;
