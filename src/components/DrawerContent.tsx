import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors, styles} from '../theme/appTheme';

export const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/** PARTE DEL AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder-480x480.gif',
          }}
        />
      </View>
      {/** Opciones de menñu */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuItemText}>
            <Icon name="street-view" size={30} color={colors.primary} />{' '}
            Navegación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuItemText}>
            <Icon name="cog" size={30} color={colors.primary} /> Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
