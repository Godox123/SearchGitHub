import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchRepositoriesService {
  constructor(private http: HttpClient) {}
  private url: string = environment.gitHubSearchRepositoriesUrl;

  public SearchRepositiry(value: string): Observable<Object> {
    try {
      return this.http.get(`${this.url}/${value}`);
    } catch (err) {
      console.log(err);
    }
  }
}
