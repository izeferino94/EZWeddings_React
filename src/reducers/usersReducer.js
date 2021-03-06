import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function usersReducer(state = initalState.users, action) {
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users;
        case types.UPDATE_USER_SUCCESS:
            return Object.assign({}, state, action.newCurrentUser);
        default:
            return state;
    }
}
