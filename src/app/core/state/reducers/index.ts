import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import {
  RepositoriesNode,
  StateRepositories,
  stateRepositories
} from './reducers';

export interface AppState {
  [RepositoriesNode]: StateRepositories;
}

export const reducers: ActionReducerMap<AppState> = {
  [RepositoriesNode]: stateRepositories
};

export const metaReducers: Array<MetaReducer<
  AppState
>> = !environment.production ? [] : [];
