import AuthInputField from '../../components/form/AuthInputFields';
import colors from 'utils/colors';
import React, {FC, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import Form from 'components/form';
import SubmitBtn from 'components/form/SubmitBtn';
import PasswordVisibilityIcon from 'ui/PasswordVisibilityIcon';
import AppLink from 'ui/AppLink';
import AuthFormContainer from 'components/AuthFormContainer';

interface Props {}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .min(3, 'Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(3, 'Too short')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
      'password is so simple!',
    )
    .required('Password is required'),
});

const SignIn: FC<Props> = props => {
  const [secureEntry, setSecureEntry] = useState(true);

  const togglePasswordView = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <Form
      onSubmit={values => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={signupSchema}>
      <AuthFormContainer heading="Welcome Back!">
        <View style={styles.formContainer}>
          <AuthInputField
            name="email"
            placeholder="john@email.com"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="password"
            placeholder="********"
            label="Password"
            autoCapitalize="none"
            secureTextEntry={secureEntry}
            containerStyle={styles.marginBottom}
            rightIcon={<PasswordVisibilityIcon privateIcon={secureEntry} />}
            onRightIconPress={togglePasswordView}
          />
          <SubmitBtn title="Sign In" />

          <View style={styles.linkContainer}>
            <AppLink title="I Lost My Password" />
            <AppLink title="Create New" />
          </View>
        </View>
      </AuthFormContainer>
    </Form>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  marginBottom: {
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default SignIn;
