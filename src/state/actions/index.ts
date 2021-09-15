import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// make sure to export this type so that the file is seen as a module and not global
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
