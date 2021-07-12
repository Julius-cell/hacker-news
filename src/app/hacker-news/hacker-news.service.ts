import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { New } from './model/new';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private base_url = environment.base_url;

  constructor(private http: HttpClient,
    private localStorageSvc: LocalStorageService) {}

  getNewsByPage(framework: string, page: number): Observable<New[]> {
    const query = `search_by_date?query=${framework}&page=${page}`;
    return this.http.get<any>(`${this.base_url}${query}`).pipe(
      map(({hits, ...rest}) => {
        const newsParsed = this.parseNewsData(hits);
        return newsParsed.filter((el: New) => el.story_title && el.story_url && el.author);
      }),
    );
  }

  private parseNewsData(newsList: New[]) {
    const currentFavs = this.localStorageSvc.getFavoritesNews();
    const newData = newsList.map(news => {
      const found = currentFavs.find((fav: New) => fav.objectID === news.objectID);
      return { ...news, isFavorite: found };
    })
    return newData;
  }
}
