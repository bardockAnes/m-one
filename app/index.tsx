import React from 'react';
import { StyleSheet } from 'react-native';
import { MySafe } from '@/components/ThemedView';
import { Playground } from '@/components/playground';
import Screen from '@/components/screen';

const Workd: React.FC = () => {

  return (
    <MySafe lightColor='rgb(240,240,240)' darkColor='rgb(7,7,7)'  style={styles.container}>
      <Screen />
      <Playground />
    </MySafe>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Workd;
