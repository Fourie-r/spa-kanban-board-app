import * as LoginActions from './app/login-actions';
import { IUserModel } from './app/_models/IUserModel';


export interface State {
    users: IUserModel[];

}

const initialState: State = {
    users: []
};


export function reducer( state = initialState, action: LoginActions.ALL): State {

    switch (action.type) {
        case LoginActions.LOGIN: {
            return {
                ...state,
                users: state.users.concat(Object.assign({}, action.payload))
            };
        }

        case LoginActions.LOGINSUCCESS: {
            return {
                ...state,
                users: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

