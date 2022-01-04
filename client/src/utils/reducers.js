import { useReducer } from "react";
import { UPDATE_CURRENTUSER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENTUSER:
      return {
        ...state,
        currentUser: { ...action.user },
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
