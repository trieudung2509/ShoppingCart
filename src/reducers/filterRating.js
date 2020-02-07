import * as Types from  '../constants/ActionTypes';

var initialState = null;

var filterRating = (state = initialState, action) => {
	switch(action.type) {
    case Types.FILTER_RATING:
        return parseInt(action.filterRating);
    case Types.CLEAR_FILTER:
          return null;
		default:
			return state;
	}
};

export default filterRating;
