import { URL_API } from '../../constants/database';

export const SEARCH_EMP = 'SEARCH_EMP';

export const searchEmp = (payload, userId) => {
  return async dispatch => {
    try {
      dispatch({
        type: SEARCH_EMP,
        status: 'loading',
      });

      const response = await fetch(`${URL_API}/EDE`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      console.log(result)

      dispatch({
        type: SEARCH_EMP,
        status: 'success',
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: SEARCH_EMP,
        status: 'error',
      });
    }
  }
}
