import axios from "axios";
import api from "../../../services/api";
import * as types from "../../constants/ActionTypes";

export function onChangeSearchQuery(searchQuery) {
  return {   
      type: types.CHANGE_SEARCH_QUERY,
      payload : searchQuery
  }
}

export function getNews(searchQuery, page){
	return (dispatch, getState) =>{
		axios
			.get(api.GET_URL() + 'everything?q='+ searchQuery +'&apiKey=' + api.GET_API_KEY() )
			.then((response) => {
				dispatch({
					type:types.GET_NEWS,
					payload:response.data,
				});
				console.warn("Ini get news", response.data)
			})
			.catch((error) =>{
				console.warn(error);
			})
   		return;
	}
}