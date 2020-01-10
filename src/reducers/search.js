import * as Types from  '../constants/ActionTypes';

var initialState = '';

var search = (state = initialState, action) => {
	switch(action.type) {
		case Types.SEARCH_PRODUCT:
      return action.keyword;

		default:
			return state;
	}
};

export default search;
