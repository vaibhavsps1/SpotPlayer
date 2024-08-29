import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {useFormikContext} from 'formik';
import AppButton from 'ui/AppButton';

interface Props {
  title: string;
}

const SubmitBtn: FC<Props> = props => {
  const {handleSubmit} = useFormikContext();
  return <AppButton onPress={handleSubmit} title={props.title} />;
};

export default SubmitBtn;

const styles = StyleSheet.create({container: {}});
