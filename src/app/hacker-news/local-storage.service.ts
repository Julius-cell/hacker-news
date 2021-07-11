import { Injectable } from '@angular/core';
import { New } from './model/new';

const myFavorites = 'myFavorites';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    this.setLocalStorage();
  }

  addOrRemoveFavorite(news: New) {
    const { objectID } = news;
    const currentsFavs = this.getFavoritesNews();
    const found = currentsFavs.find((fav: any) => fav.objectID === objectID);
    found ? this.removeFromFavorite(objectID) : this.addToFavorite(news);
  }

  private removeFromFavorite(id: string) {
    const currentsFavs = this.getFavoritesNews();
    const news = currentsFavs.filter((el: any) => el.objectID !== id)
    localStorage.setItem(myFavorites, JSON.stringify([...news]));
    try {
    } catch (error) {
      console.log('Error removing favorites from localStorage', error);
    }
  }

  private addToFavorite(news: New) {
    try {
      const currentsFavs = this.getFavoritesNews();
      localStorage.setItem(myFavorites, JSON.stringify([...currentsFavs, news]));
    } catch (error) {
      console.log('Error saving favorites from localStorage', error);
    }
  }

  getFavoritesNews() {
    try {
      const newsFavs = JSON.parse(localStorage.getItem(myFavorites)!);
      return newsFavs; 
    } catch (error) {
      console.log('Error getting favorites from localStorage', error);
    }
  }

  private setLocalStorage() {
    const currents = JSON.parse(localStorage.getItem(myFavorites)!);
    if (!currents) {
      localStorage.setItem(myFavorites, JSON.stringify([]));
    }
    this.getFavoritesNews();
  }
}
