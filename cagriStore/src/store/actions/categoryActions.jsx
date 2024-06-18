
import {axiosInstance} from '../../store/api/axiosInstance';  

 
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const response = await axiosInstance.get('/categories');  
      dispatch(fetchCategoriesSuccess(response.data));  
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));  
    }
  };
};

 const fetchCategoriesRequest = () => ({
  type: 'FETCH_CATEGORIES_REQUEST',
});

 const fetchCategoriesSuccess = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories,
});

 const fetchCategoriesFailure = (error) => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  payload: error,
});