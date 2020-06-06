
export const productReducer = (state, action) => {
    switch (action.type) {
        case 'STACK_PRODUCTS':
            return { ...state, data: state.data.concat(action.data) }
        case 'FETCHING_PRODUCTS':
            return { ...state, loading: action.loading, error: action.error }

        default:
            return state;
    }
}

export const pageReducer = (state, action) => {
    switch (action.type) {
        case 'ADVANCE_PAGE':
            return { ...state, page: state.page + 1 }
        default:
            return state;
    }
}