import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';
import {Tab1Screen} from '../screens/Tab1Screen';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      activeColor="white"
      barStyle={{
        backgroundColor: colors.secondary,
      }}
      screenOptions={({route}) => ({
        
        tabBarIcon: ({color}) => (
          <Icon style={{color}} name={getIconName(route)} size={20} />
        ),
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab Uno'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab Dos'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'StackNavigator'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const getIconName = (route: any) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Tab1Screen':
      iconName = 'images';
      break;

    case 'Tab2Screen':
      iconName = 'heart';
      break;

    case 'StackNavigator':
      iconName = 'laptop';
      break;
  }

  return iconName;
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Icon style={{color}} name={getIconName(route)} size={30} />
        ),
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab Uno', tabBarIcon: (props) => <Text style={{color: props.color}}>t1</Text>}}
        component={Tab1Screen}
    /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab Uno'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab Dos'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'StackNavigator'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
