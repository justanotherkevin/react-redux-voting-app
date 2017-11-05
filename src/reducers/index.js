const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0,
}

export default ( state = initialState, action ) => {
    switch (action.type ) {
        case 'VORT_ANGULAR':
            return Object.assign( {}, state, { angular: state.angular + 1 } )
        case 'VORT_REACT':
            return {
                ...state,
                react: state.react + 1
            }
        case 'VORT_VUEJS':
            return {
                ...state,
                vuejs: state.vuejs + 1
            }
        default:
            return state
    }
}

// Object.assign concat filter map reduce... all return new object, follwoing immutable
