import { TestBed } from '@angular/core/testing';

import { SearchRepositoriesService } from './search-repositories.service';

describe('SearchRepositoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchRepositoriesService = TestBed.get(SearchRepositoriesService);
    expect(service).toBeTruthy();
  });
});
