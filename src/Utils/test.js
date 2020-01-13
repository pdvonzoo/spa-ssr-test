import { handleActions, createAction } from 'redux-actions';


export default function makeReducer(name) {
    const REQUEST = `${name}/request`;
    const SUCCESS = `${name}/success`;
    const FAILURE = `${name}/failure`;

    const request = search => ({ type: REQUEST, search })
    const success = search => ({ type: SUCCESS, search })
    const failure = search => ({ type: FAILURE, search })

    const initialState = {
        [name]: [],
        isLoadging: false,
    }
    const reducer = handleActions(
        {
            [REQUEST]: (state, action) => {
                return {
                    ...state,
                    isLoadging: true
                }
            },
            [SUCCESS]: (state, action) => {
                return {
                    ...state,
                    isLoadging: false,
                    [name]: action.payload
                }
            },
            [FAILURE]: (state, action) => {
                return {
                    ...state,
                    isLoadging: false
                }
            }
        }
        , initialState
    )
    return { request, success, failure, reducer };
}
