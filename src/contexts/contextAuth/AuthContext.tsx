import React, {createContext, useReducer} from 'react';
import {useStateContainer} from './actions';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

// creando el context y pasando los argumentos que va a tener
export const AuthContext = createContext({} as AuthContextProps);

// Componenente Proveedor de state

export const AuthProvider = ({children}: any) => {
  // const {
  //   data: {authState},
  //   mutations: {signIn},
  // } = useStateContainer(authInitialState);

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };

  const changeFavoriteIcon = (icoName: string) => {
    dispatch({
      type: 'changeFavoriteIcon',
      payload: icoName,
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout'
    })
  }


  const changeUserName = (userName: string) => {
    dispatch({
      type: 'changeUserName',
      payload: userName
    })
  }
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeFavoriteIcon,
        changeUserName
      }}>
      {children}
    </AuthContext.Provider>
  );
};
