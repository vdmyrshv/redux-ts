import { ActionType } from "../action-types";
import { Action } from "../actions";
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  // the switch/case statement acts as a type guard
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain that 'action' is SearchRepositoriesSuccessAction because of type guarding
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
