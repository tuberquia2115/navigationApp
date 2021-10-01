import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavoriteIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };

    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };

    case 'changeFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    default:
      return state;
  }
};
