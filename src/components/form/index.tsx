import React, {ReactNode} from 'react';
import {Formik, FormikHelpers} from 'formik';

interface Props<T> {
  signUpSchema: any;
  initialValues: any;
  onSubmit(values: T, formikHelpers: FormikHelpers<T>): void;
  children: ReactNode;
}

const Form = <T extends object>(props: Props<T>) => {
  return (
    <Formik
      onSubmit={props.onSubmit}
      // onSubmit={(values, helper) => {
      //   helper.
      // helper. function can provide multiple options on Submit ops
      //   console.log('values -->', values);
      // }}
      initialValues={props.initialValues}
      validationSchema={props.signUpSchema}>
      {props.children}
    </Formik>
  );
};

export default Form;
