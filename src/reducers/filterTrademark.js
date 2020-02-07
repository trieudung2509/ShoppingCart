import * as Types from  '../constants/ActionTypes';

var initialState = [];

var filterTrademark = (state = initialState, action) => {
  var { filterTrademark } = action;
  var index = -1;
	switch(action.type) {
		case Types.FILTER_TRADEMARK:
      if (filterTrademark.isChecked == true) {
          state.push(filterTrademark.trademark);
      } else {
          index = findIndex(state,filterTrademark.trademark);
          if (index != -1) {
              state.splice(index,1);
          }
      }
      return [...state];
    case Types.CLEAR_FILTER:
          state = [];
          return [...state];
		default:
			return [...state];
	}
};

var findIndex = (list,value) => {
    var result = -1;
    if (list.length > 0) {
      for (let i = 0; i< list.length ; i++) {
          if(list[i] == value) {
              result = i;
              break;
          }
      }
    }
    return result;
}
export default filterTrademark;
