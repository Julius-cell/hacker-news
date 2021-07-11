import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { New } from './model/new';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private base_url = environment.base_url;

  constructor(private http: HttpClient) {}

  getNewsByPage(framework: string, page: number): Observable<New[]> {
    const query = `search_by_date?query=${framework}&page=${page}`;
    return this.http.get<any>(`${this.base_url}${query}`).pipe(
      map(({hits, ...rest}) => {
        return hits.filter((el: New) => el.story_title && el.story_url && el.author);
      }),
    );
  }
}
