import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  ResponseGitHub,
  gitHub
} from '../../../modules/home/home/models/github.interface';
import { StateRepositories } from '../reducers/reducers';
import { SearchRepositoriesService } from 'src/app/modules/home/home/services/search-repositories.service';
import {
  SearchStateActions,
  LoadRepositoriesListSuccessAction,
  LoadRepositoriesListFailedAction,
  LoadRepositoriesListAction,
  SortFromLargerToASmallerDateSuccessAction,
  SortFromLargerToASmallerDateFailedAction,
  SortFromSmallerToALargerDateSuccessAction,
  SortFromSmallerToALargerDateFailedAction
} from '../actions/search.action';
import { LoadedRepositoriesStateEvents } from 'src/app/core/state/selectors/search.selectors';

@Injectable()
export class LoadRepositoriesEffect {
  constructor(
    private actions$: Actions,
    private store$: Store<StateRepositories>,
    private searchRepositoriesService: SearchRepositoriesService
  ) {}

  @Effect()
  public loadRepositories: Observable<Action> = this.actions$.pipe(
    ofType(SearchStateActions.LoadRepositoriesListAction),
    switchMap((data: LoadRepositoriesListAction) => {
      return this.searchRepositoriesService.SearchRepositiry(data.payload).pipe(
        map((result: ResponseGitHub) => {
          return new LoadRepositoriesListSuccessAction(result.items);
        })
      );
    }),
    catchError(
      (error: Error, caught: Observable<Action>): Observable<Action> => {
        this.store$.dispatch(new LoadRepositoriesListFailedAction(error));
        return caught;
      }
    )
  );

  @Effect()
  public sortListRepositories: Observable<Action> = this.actions$.pipe(
    ofType(SearchStateActions.SortFromSmallerToALargerDateAction),
    withLatestFrom(this.store$.pipe(select(LoadedRepositoriesStateEvents))),
    map(([data, allRepositories]: [never, gitHub[]]) => {
      const result: gitHub[] = [];
      allRepositories.forEach((element: gitHub) => {
        result.push(element);
      });
      result.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
      return new SortFromLargerToASmallerDateSuccessAction(result);
    }),
    catchError(
      (error: Error, caught: Observable<Action>): Observable<Action> => {
        this.store$.dispatch(
          new SortFromLargerToASmallerDateFailedAction(error)
        );
        return caught;
      }
    )
  );

  @Effect()
  public sortListRepositoriesFromTheMinimumDate: Observable<
    Action
  > = this.actions$.pipe(
    ofType(SearchStateActions.SortFromLargerToASmallerDateAction),
    withLatestFrom(this.store$.pipe(select(LoadedRepositoriesStateEvents))),
    map(([data, allRepositories]: [never, gitHub[]]) => {
      const result: gitHub[] = [];
      allRepositories.forEach((element: gitHub) => {
        result.push(element);
      });
      result.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
      return new SortFromSmallerToALargerDateSuccessAction(result);
    }),
    catchError(
      (error: Error, caught: Observable<Action>): Observable<Action> => {
        this.store$.dispatch(
          new SortFromSmallerToALargerDateFailedAction(error)
        );
        return caught;
      }
    )
  );
}
