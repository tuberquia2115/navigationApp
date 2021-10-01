import React from 'react';
import {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../contexts/contextAuth/AuthContext';

export const AlbumsScreen = () => {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="logout" onPress={logout} />}
    </View>
  );
};
