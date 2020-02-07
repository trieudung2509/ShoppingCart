import * as Types from  '../constants/ActionTypes';

var initialState = '';

var sort = (state = initialState, action) => {
	switch(action.type) {
		case Types.SORT_PRODUCT:
      return action.sort;

		default:
			return state;
	}
};

export default sort;
