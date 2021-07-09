import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public favorites: boolean;

  public frameworks: any[] = [
    { value: '', label: 'Select your news' },
    { value: 'angular', label: 'Angular' },
    { value: 'reactjs', label: 'Reactjs' },
    { value: 'vuejs', label: 'Vuejs' },
  ]

  public myForm = this.fb.group({
    framework: ['']
  })

  constructor(private dataService: HackerNewsService,
              private fb: FormBuilder) { }

  ngOnInit(): void { }

  getFrameworkNews(framework: string, page: number) {
    this.dataService.getData(framework, page).subscribe(res => {
      console.log(res);
    })
  }

  showData() {
    const framework = this.myForm.controls.framework.value;
    if (framework) {
      this.getFrameworkNews(framework, 1);
    }
  }

  showAll() {
    console.log('show All');
    this.favorites = false;
  }
  
  showFavs() {
    console.log('show Favs');
    this.favorites = true;
  }

}
