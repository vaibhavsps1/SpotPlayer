import AuthInputField from '../../components/form/AuthInputFields';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import Form from 'components/form';
import SubmitBtn from 'components/form/SubmitBtn';
import AppLink from 'ui/AppLink';
import AuthFormContainer from 'components/AuthFormContainer';

interface Props {}

const initialValues = {
  email: '',
};

const emailSchema = yup.object({
  email: yup
    .string()
    .trim()
    .min(3, 'Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required('Email is required'),
});

const LostPassword: FC<Props> = props => {
  return (
    <Form
      onSubmit={values => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={emailSchema}>
      <AuthFormContainer
        heading="Forget Password"
        subHeading="Oops, did you forget your password? Don't worry, we'll help you get back in.">
        <View style={styles.formContainer}>
          <AuthInputField
            name="email"
            placeholder="john@email.com"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <SubmitBtn title="Send Link" />
          <View style={styles.linkContainer}>
            <AppLink title="Sign In" />
            <AppLink title="Sign Up" />
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

export default LostPassword;
