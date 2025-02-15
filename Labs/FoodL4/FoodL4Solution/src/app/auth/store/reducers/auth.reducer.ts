import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { fakeToken } from './fake-token';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  token: string | null;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  user: {},
  token: fakeToken,
  isLoggedIn: false,
};

export function AuthReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.RegisterSuccess: {
      // add your code

      return {
        ...state,
        isLoggedIn: true,
        user: action.payload as firebase.default.User,
      };
    }
    case AuthActionTypes.RegisterErr: {
      // add your code
      return { ...state, isLoggedIn: false, user: null, token: null };
    }
    case AuthActionTypes.LoginErr: {
      // add your code
      return { ...state, isLoggedIn: false, user: null, token: null };
    }
    case AuthActionTypes.LoginSuccess: {
      // add your code
      return { ...state, isLoggedIn: true, user: action.payload };
    }
    case AuthActionTypes.LogoutComplete: {
      // add your code
      return { ...state, isLoggedIn: false, user: null, token: null };
    }
    case AuthActionTypes.SetToken: {
      // add your code
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
}
