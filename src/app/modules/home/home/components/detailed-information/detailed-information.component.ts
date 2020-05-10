import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { StateRepositories } from 'src/app/core/state/reducers/reducers';
import { LoadSelectedRepositoryStateEvents } from 'src/app/core/state/selectors/search.selectors';
import { gitHub } from '../../models/github.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedInformationComponent implements OnInit {
  constructor(
    private storeRepositories$: Store<StateRepositories>,
    private router: Router
  ) {}

  public selectedRepositoryInformation$: Observable<
    gitHub
  > = this.storeRepositories$.pipe(select(LoadSelectedRepositoryStateEvents));

  public ngOnInit(): void {
    localStorage.clear();
  }
}
