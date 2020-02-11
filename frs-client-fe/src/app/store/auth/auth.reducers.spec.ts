import {
  logInSuccess,
  logInFailure,
  signUpFailure,
  signUpSuccess
} from './action';
import {initialState, AuthReducer} from './reducers';


describe('AuthReducer', () => {

  describe('LOGIN_SUCCESS action', () => {
    it('should set isAuthenticated to true, and loading false', () => {
      const action = logInSuccess();
      const state = AuthReducer(initialState, action);

      expect(state.errorMessage).toBe(null);
      expect(state.isLoading).toBe(false);
    });
  });

  describe('LOGIN_FAILURE action', () => {
    it('should set errorMessage to value, and loading false', () => {
      const action = logInFailure();
      const state = AuthReducer(initialState, action);

      expect(state.errorMessage).toBe('Incorrect email and/or password.');
      expect(state.isLoading).toBe(false);
    });
  });

  describe('SIGNUP_SUCCESS action', () => {
    it('should set successMessage to value, and loading false', () => {
      const action = signUpSuccess();
      const state = AuthReducer(initialState, action);

      expect(state.successMessage).toBe('You have created new account, please login into your account');
      expect(state.errorMessage).toBe(null);
      expect(state.isLoading).toBe(false);
    });
  });


  describe('SIGNUP_FAILURE action', () => {
    it('should set errorMessage to value, and loading false', () => {
      const action = signUpFailure();
      const state = AuthReducer(initialState, action);

      expect(state.errorMessage).toBe('That email is already in use.');
      expect(state.successMessage).toBe(null);
      expect(state.isLoading).toBe(false);
    });
  });
});
