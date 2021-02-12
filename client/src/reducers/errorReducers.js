// ERROR reducer that will change state based on the action we receive 
import { GET_ERRORS } from "../actions/types";
const initialState = {};
export default function ER(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}