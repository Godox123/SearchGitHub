import { Action } from '@ngrx/store';
import { gitHub } from '../../../modules/home/home/models/github.interface';

export enum SearchStateActions {
  SortFromLargerToASmallerDateAction = '[Sort] SortFromLargerToASmallerDateAction',
  SortFromLargerToASmallerDateSuccessAction = '[Sort] SortFromLargerToASmallerDateSuccessAction',
  SortFromLargerToASmallerDateFailedAction = '[Sort] SortFromLargerToASmallerDateFailedAction',
  SortFromSmallerToALargerDateAction = '[Sort] SortFromSmallerToALargerDateAction',
  SortFromSmallerToALargerDateSuccessAction = '[Sort]  SortFromSmallerToALargerDateSuccessAction',
  SortFromSmallerToALargerDateFailedAction = '[Sort] SortFromSmallerToALargerDateFailedAction',
  LoadRepositoriesListFailedAction = '[Search] LoadRepositoriesListFailedAction',
  LoadRepositoriesListSuccessAction = '[Search] LoadRepositoriesListSuccessAction',
  LoadRepositoriesListAction = '[Search]  LoadRepositoriesListAction',
  LoadInformationAboutSelectedRepositorySuccessAction = '[Select] LoadInformationAboutSelectedRepositorySuccessAction',
  LoadInformationAboutSelectedRepositoryFailedAction = '[Select] LoadInformationAboutSelectedRepositoryFailedAction'
}

export class SortFromSmallerToALargerDateAction implements Action {
  public readonly type: SearchStateActions.SortFromSmallerToALargerDateAction =
    SearchStateActions.SortFromSmallerToALargerDateAction;
}

export class SortFromSmallerToALargerDateSuccessAction implements Action {
  public readonly type: SearchStateActions.SortFromSmallerToALargerDateSuccessAction =
    SearchStateActions.SortFromSmallerToALargerDateSuccessAction;
  constructor(public payload: gitHub[]) {}
}

export class SortFromSmallerToALargerDateFailedAction implements Action {
  public readonly type: SearchStateActions.SortFromSmallerToALargerDateFailedAction =
    SearchStateActions.SortFromSmallerToALargerDateFailedAction;
  constructor(public payload: Error) {}
}

export class SortFromLargerToASmallerDateAction implements Action {
  public readonly type: SearchStateActions.SortFromLargerToASmallerDateAction =
    SearchStateActions.SortFromLargerToASmallerDateAction;
}

export class SortFromLargerToASmallerDateSuccessAction implements Action {
  public readonly type: SearchStateActions.SortFromLargerToASmallerDateSuccessAction =
    SearchStateActions.SortFromLargerToASmallerDateSuccessAction;
  constructor(public payload: gitHub[]) {}
}

export class SortFromLargerToASmallerDateFailedAction implements Action {
  public readonly type: SearchStateActions.SortFromLargerToASmallerDateFailedAction =
    SearchStateActions.SortFromLargerToASmallerDateFailedAction;
  constructor(public payload: Error) {}
}

export class LoadInformationAboutSelectedRepositorySuccessAction
  implements Action {
  public readonly type: SearchStateActions.LoadInformationAboutSelectedRepositorySuccessAction =
    SearchStateActions.LoadInformationAboutSelectedRepositorySuccessAction;
  constructor(public payload: gitHub) {}
}

export class LoadInformationAboutSelectedRepositoryFailedAction
  implements Action {
  public readonly type: SearchStateActions.LoadInformationAboutSelectedRepositoryFailedAction =
    SearchStateActions.LoadInformationAboutSelectedRepositoryFailedAction;
  constructor(public payload: Error) {}
}

export class LoadRepositoriesListAction implements Action {
  public readonly type: SearchStateActions.LoadRepositoriesListAction =
    SearchStateActions.LoadRepositoriesListAction;
  constructor(public payload: string) {}
}
export class LoadRepositoriesListSuccessAction implements Action {
  public readonly type: SearchStateActions.LoadRepositoriesListSuccessAction =
    SearchStateActions.LoadRepositoriesListSuccessAction;
  constructor(public payload: gitHub[]) {}
}

export class LoadRepositoriesListFailedAction implements Action {
  public readonly type: SearchStateActions.LoadRepositoriesListFailedAction =
    SearchStateActions.LoadRepositoriesListFailedAction;
  constructor(public payload: Error) {}
}
export type SearchActionsUnion =
  | LoadRepositoriesListAction
  | LoadRepositoriesListFailedAction
  | LoadRepositoriesListSuccessAction
  | LoadInformationAboutSelectedRepositoryFailedAction
  | LoadInformationAboutSelectedRepositorySuccessAction
  | SortFromLargerToASmallerDateAction
  | SortFromLargerToASmallerDateSuccessAction
  | SortFromLargerToASmallerDateFailedAction
  | SortFromSmallerToALargerDateAction
  | SortFromSmallerToALargerDateSuccessAction
  | SortFromSmallerToALargerDateFailedAction;
