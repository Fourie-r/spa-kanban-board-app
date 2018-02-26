import * as authReducer from './auth-reducer';


export interface State {
    auth: authReducer.State;
}

export const reducers = {
    auth: authReducer.reducer
};
