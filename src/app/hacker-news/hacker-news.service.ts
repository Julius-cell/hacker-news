import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  getData(framework: string, page: number): Observable<any> {
    const query = `search_by_date?query=${framework}&page=${page}`;
    return this.http.get<any>(`${this.base_url}${query}`);
  }
}
