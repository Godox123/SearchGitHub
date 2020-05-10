import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateRepositories } from 'src/app/core/state/reducers/reducers';
import { LoadRepositoriesListAction } from 'src/app/core/state/actions/search.action';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  constructor(private store$: Store<StateRepositories>) {}
  public value: string;

  public sendRequest(): void {
    this.store$.dispatch(new LoadRepositoriesListAction(this.value));
  }
}
