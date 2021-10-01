import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';
import {RouterParamsUser} from '../interfaces/stackScreenProps';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: RouterParamsUser;
};
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        component={Pagina1Screen}
        options={{title: 'Pagina Uno'}}
      />
      <Stack.Screen
        name="Pagina2Screen"
        component={Pagina2Screen}
        options={{title: 'Pagina Dos'}}
      />
      <Stack.Screen
        name="Pagina3Screen"
        component={Pagina3Screen}
        options={{title: 'Pagina Tres'}}
      />
      <Stack.Screen
        name="PersonaScreen"
        component={PersonaScreen}
        options={{title: 'Persona'}}
      />
    </Stack.Navigator>
  );
};
