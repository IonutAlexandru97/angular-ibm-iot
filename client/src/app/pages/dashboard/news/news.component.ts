import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  Articles: Array<any>;
  Sources: Array<any>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.initArticles().subscribe(data => this.Articles = data['articles']);
    this.newsService.initSources().subscribe(data => this.Sources = data['sources']);
  }

  searchArticles(source){
    this.newsService.getArticlesByID(source).subscribe(data => this.Articles = data['articles']);
  }

}
