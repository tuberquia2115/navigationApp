import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {colors} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();
LogBox.ignoreLogs(['Sending']);

const getIconName = (route: any) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Chat':
      iconName = 'chat';
      break;

    case 'Contacts':
      iconName = 'contacts';
      break;

    case 'Albums':
      iconName = 'collections';
      break;
  }

  return iconName;
};

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      initialRouteName="ChatScreen"
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarItemStyle: {
          borderBottomColor: colors.primary,
        },
        tabBarPressColor: colors.secondary,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowIcon: true,
        tabBarIcon: ({color,}) => (
          <Icon name={getIconName(route)} color={color} size={20} />
        ),
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
