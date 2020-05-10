import { gitHub } from '../../../modules/home/home/models/github.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateRepositories, RepositoriesNode } from '../reducers/reducers';

export const LoadRepositoriesStateFeature = createFeatureSelector<
  StateRepositories
>(RepositoriesNode);

export const LoadSelectedRepositoryStateFeature = createFeatureSelector<
  StateRepositories
>(RepositoriesNode);

export const LoadedRepositoriesStateEvents = createSelector(
  LoadRepositoriesStateFeature,
  (state: StateRepositories): gitHub[] => state.repositoriesList
);

export const LoadSelectedRepositoryStateEvents = createSelector(
  LoadSelectedRepositoryStateFeature,
  (state: StateRepositories): gitHub => state.selectedRepository
);
