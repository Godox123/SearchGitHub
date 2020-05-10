import {
  SearchStateActions,
  SearchActionsUnion
} from '../actions/search.action';
import { gitHub } from '../../../modules/home/home/models/github.interface';

export interface StateRepositories {
  repositoriesList: gitHub[];
  selectedRepository: gitHub;
}

export const RepositoriesNode = 'stateRepositories';

export const initialState: StateRepositories = {
  repositoriesList: undefined,
  selectedRepository: undefined
};

export const stateRepositories = (
  state = initialState,
  action: SearchActionsUnion
): StateRepositories => {
  switch (action.type) {
    case SearchStateActions.LoadRepositoriesListSuccessAction: {
      return {
        ...state,
        repositoriesList: action.payload
      };
    }
    case SearchStateActions.LoadInformationAboutSelectedRepositorySuccessAction: {
      return {
        ...state,
        selectedRepository: action.payload
      };
    }
    case SearchStateActions.SortFromLargerToASmallerDateSuccessAction: {
      return {
        ...state,
        repositoriesList: action.payload
      };
    }
    case SearchStateActions.SortFromSmallerToALargerDateSuccessAction: {
      return {
        ...state,
        repositoriesList: action.payload
      };
    }
    default:
      return state;
  }
};
