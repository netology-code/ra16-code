import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  item: { name: '', price: '', },
  loading: false,
  error: null,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_SERVICE_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case ADD_SERVICE_SUCCESS:
      return {...initialState};
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      const { item } = state;
      return {
        ...state,
        item: {
          ...item,
          [name]: value,
        }
      };
    default:
      return state;
  }
}
