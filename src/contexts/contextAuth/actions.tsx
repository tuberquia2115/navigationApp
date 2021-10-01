import {useState} from 'react';
import { AuthState} from './AuthContext';
export const useStateContainer = (initialState: AuthState) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  const signIn = () => {};

  return {
    data: {
      authState,
    },
    mutations: {
      signIn,
    },
  };
};
