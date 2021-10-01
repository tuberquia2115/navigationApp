import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/contexts/contextAuth/AuthContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
