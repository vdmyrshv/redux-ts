import axios from "axios";

// import to use Dispatch type as an argument to returned searchRepositories function
import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    // dispatch can only be a Dispatch type with actions matching one of the actions imported
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          // in the request object with text params of term
          params: {
            text: term,
          },
        }
      );

      console.log(data);

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: `An error has occured: ${error}`,
      });
    }
  };
