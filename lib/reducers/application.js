import * as ActionTypes from '../actions/application'

const initialState = {
    token: []
}

export default function userData(state = initialState, action) {

    switch (action.type) {

        case ActionTypes.START:
            return state;
        case ActionTypes.SUCCESS:
            return {
                token:action.payload
            }
        case ActionTypes.FAILURE:
            return state
        default:
            return state
    }
}
