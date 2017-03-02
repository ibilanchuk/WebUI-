import * as ActionTypes from '../actions/application'

const initialState = {
    user: []
}

export default function userData(state = initialState, action) {

    switch (action.type) {

        case ActionTypes.GET_STUDENT_START:
            return state;
        case ActionTypes.GET_STUDENT_SUCCESS:
            return {
                user:action.payload
            }
        case ActionTypes.GET_STUDENT_FAILURE:
            return state
        default:
            return state
    }
}
