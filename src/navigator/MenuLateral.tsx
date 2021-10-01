import React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

import {DrawerContent} from '../components/DrawerContent';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
