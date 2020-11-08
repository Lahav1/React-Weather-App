import * as actions from './actions';

const initialState = {
    favorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actions.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.concat(action.city)
            };
        case actions.REMOVE_FROM_FAVORITES:
            return {
                
            };
    }
    return state;
};

export default reducer;