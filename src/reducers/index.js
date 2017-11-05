const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0,
}

export default ( state = initialState, action ) => {
    switch (action.type ) {
        case 'VORT_ANGULAR':
            console.log('in angular')
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
        case 'VORT_REACT':
            return Object.assign({}, state, {
                react: state.react + 1
            })
        case 'VORT_VUEJS':
            return Object.assign({}, state, {
                vuejs: state.vuejs + 1
            })
        default:
            return state
    }
}
