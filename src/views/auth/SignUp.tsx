import AuthInputField from '../../components/form/AuthInputFields';
import colors from 'utils/colors';
import {FC, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {Formik, useFormikContext} from 'formik';
import * as yup from 'yup';
import Form from 'components/form';

interface Props {}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const signUpSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .min(3, 'Invalid Name!')
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .min(3, 'invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(3, 'Incorrect Password')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
      'password is so simple!',
    )
    .required('Password is required'),
});

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Form
        onSubmit={values => {
          console.log('values -->', values);
        }}
        initialValues={initialValues}
        validationSchema={signUpSchema}>
        {({handleSubmit, handleChange, values, errors}) => {
          return (
            <View style={styles.formContainer}>
              <AuthInputField
                placeholder="John Doe"
                label="Name"
                containerStyle={styles.marginBottom}
                onChange={handleChange('name')}
                values={values.name}
                errorMsg={errors.name}
              />
              <AuthInputField
                placeholder="john@email.com"
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                containerStyle={styles.marginBottom}
                onChange={handleChange('email')}
                values={values.email}
                errorMsg={errors.email}
              />
              <AuthInputField
                placeholder="********"
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                containerStyle={styles.marginBottom}
                onChange={handleChange('password')}
                values={values}
                errorMsg={errors.password}
              />
              <Button onPress={() => handleSubmit()} title="Sign up" />
            </View>
          );
        }}
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
});

export default SignUp;
