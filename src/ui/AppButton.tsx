import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {FC} from 'react';
import colors from 'utils/colors';

interface Props {
  title: string;
  onPress?(): void;
}

const AppButton: FC<Props> = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  title: {color: colors.CONTRAST, fontSize: 18},
});
