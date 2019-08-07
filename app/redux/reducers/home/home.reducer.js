import * as types from "../../constants/ActionTypes";

export function home(state = {news:null}, action) {
  switch (action.type) {
    case types.GET_NEWS : {
      return {
        ...state,
        news : action.payload.articles,
      };
    }
    case types.CHANGE_SEARCH_QUERY :{
      return {
        ...state,
        searchQuery : action.payload
      };
    }
    default:
      return state;
    }
}