import { FILTER_DETAILS, SELECT_DETAIL } from '../actions/detail.actions';

import { DETAILS } from '../../data/servicesDetails';

const initialState = {
  list: DETAILS,
  filteredDetails: [],
  selectedID: null,
};

const DetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_DETAIL:
      return {
        ...state,
        selectedID: action.detailID,
      };
    case FILTER_DETAILS:
      return {
        ...state,
        filteredDetails: state.list.filter(item => item.category === action.categoryID)
      }
    default:
      return state;
  }
}

export default DetailsReducer;