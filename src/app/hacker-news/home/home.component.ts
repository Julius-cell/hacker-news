import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HackerNewsService } from '../hacker-news.service';
import { LocalStorageService } from '../local-storage.service';
import { New } from '../model/new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public favorites: boolean;
  public showButton: boolean;
  public newsList: New[] = [];
  public pageNum: number = 0;

  public frameworks: any[] = [
    { value: '', label: 'Select your news' },
    { value: 'angular', label: 'Angular' },
    { value: 'reactjs', label: 'Reactjs' },
    { value: 'vuejs', label: 'Vuejs' },
  ]

  public myForm = this.fb.group({
    framework: ['']
  })

  constructor(private localStorageSvc: LocalStorageService,
    private dataService: HackerNewsService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  ngOnInit(): void { }

  toggleFavorite(news: any) {
    news.isFavorite = !news.isFavorite;
  }

  getIcon(isFavorite: boolean): string {
    return isFavorite ? 'heart-solid.png' : 'heart-outline.png';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > 500;
  }

  onScrollTop() {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() {
    if (!this.favorites) {
      this.pageNum++;
      const framework = this.myForm.controls.framework.value;
      this.dataService.getNewsByPage(framework, this.pageNum).subscribe(res => {
        const currentNews = this.newsList;
        this.newsList = currentNews.concat(res);
      });
    }
  }

  showData() {
    this.pageNum = 0;
    const framework = this.myForm.controls.framework.value;
    if (framework) {
      this.dataService.getNewsByPage(framework, this.pageNum).subscribe(res => {
        this.newsList = res;
      })
    }
  }

  showAll() {
    this.pageNum = 0;
    this.newsList = [];
    this.myForm.reset();
    this.favorites = false;
  }

  showFavs() {
    this.favorites = true;
    this.newsList = this.localStorageSvc.getFavoritesNews();
  }

  redirectToNews(url: string) {
    window.open(url, "_blank");
  }

  addOrRemoveFavorite(newSelected: New) {
    this.localStorageSvc.addOrRemoveFavorite(newSelected);
    if (this.favorites) this.showFavs();
  }

}
