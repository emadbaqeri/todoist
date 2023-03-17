import React from 'react';
import { Plus } from 'iconoir-react-native';

import { Colors } from '@constants';
import { Layout, Header, Button } from '@components';

import styles from './home.screen.styles';

const HomeScreen = () => (
  <Layout>
    <Header />
    <Button style={styles.actionButton}>
      <Plus color={Colors.grey} height={38} width={38} />
    </Button>
  </Layout>
);

export default HomeScreen;
