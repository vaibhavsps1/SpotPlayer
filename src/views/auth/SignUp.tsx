import AuthInputField from '../../components/form/AuthInputFields';
import colors from 'utils/colors';
import React, {FC, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';
import Form from 'components/form';
import SubmitBtn from 'components/form/SubmitBtn';
import PasswordVisibilityIcon from 'ui/PasswordVisibilityIcon';
import AppLink from 'ui/AppLink';
import CircleUI from 'ui/CircleUI';

interface Props {}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signupSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .min(3, 'Invalid Name!')
    .required('Name is required'),
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

const SignUp: FC<Props> = props => {
  const [secureEntry, setSecureEntry] = useState(true);

  const togglePassVisible = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CircleUI size={200} position="top-left" />
      <CircleUI size={100} position="top-right" />
      <CircleUI size={100} position="bottom-left" />
      <CircleUI size={200} position="bottom-right" />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} />
        <Text
          style={{fontSize: 20, color: colors.SECONDARY, fontWeight: 'bold'}}>
          Welcome!
        </Text>
        <Text style={{fontSize: 18, color: 'white'}}>
          Let's get started by creating your account.
        </Text>
      </View>
      <Form
        onSubmit={values => {
          console.log(values);
        }}
        initialValues={initialValues}
        validationSchema={signupSchema}>
        <View style={styles.formContainer}>
          <AuthInputField
            name="name"
            placeholder="John Doe"
            label="Name"
            containerStyle={styles.marginBottom}
          />
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
            onRightIconPress={togglePassVisible}
          />
          <SubmitBtn title="Sign up" />
          <View style={styles.linkContainer}>
            <AppLink title="Forgot Password" />
            <AppLink title="Sign In" />
          </View>
        </View>
      </Form>
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
  formContainer: {
    width: '100%',
    paddingHorizontal: 15, // padding in the x direction (left and the right)
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
  logoContainer: {
    width: '90%',
    paddingBottom: 15,
    marginBottom: 20,
    gap: 10,
  },
});

export default SignUp;
