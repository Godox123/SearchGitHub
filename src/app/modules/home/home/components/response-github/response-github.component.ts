import { Component, ChangeDetectionStrategy } from '@angular/core';
import { gitHub } from '../../models/github.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { StateRepositories } from 'src/app/core/state/reducers/reducers';
import { LoadedRepositoriesStateEvents } from 'src/app/core/state/selectors/search.selectors';
import {
  LoadInformationAboutSelectedRepositorySuccessAction,
  SortFromLargerToASmallerDateAction,
  SortFromSmallerToALargerDateAction
} from 'src/app/core/state/actions/search.action';

@Component({
  selector: 'app-response-github',
  templateUrl: './response-github.component.html',
  styleUrls: ['./response-github.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponseGithubComponent {
  constructor(private storeRepositories$: Store<StateRepositories>) {}

  public displayedColumns: string[] = ['id', 'name', 'created_at'];

  public repositoriesList$: Observable<Object> = this.storeRepositories$.pipe(
    select(LoadedRepositoriesStateEvents)
  );

  public selectRepository(selectedRepository: gitHub): void {
    this.storeRepositories$.dispatch(
      new LoadInformationAboutSelectedRepositorySuccessAction(
        selectedRepository
      )
    );
    localStorage.setItem('userId', JSON.stringify(selectedRepository.id));
  }
  public sortLarger(): void {
    this.storeRepositories$.dispatch(new SortFromLargerToASmallerDateAction());
  }
  public sortSmaller(): void {
    this.storeRepositories$.dispatch(new SortFromSmallerToALargerDateAction());
  }
}
