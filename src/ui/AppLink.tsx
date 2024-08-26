import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import colors from 'utils/colors';

interface Props {
  title: string;
}

const AppLink: FC<Props> = ({title}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.linkText}>{title}</Text>
    </Pressable>
  );
};

export default AppLink;

const styles = StyleSheet.create({
  container: {},
  linkText: {color: colors.SECONDARY},
});
