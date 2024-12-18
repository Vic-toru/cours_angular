import { Component } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleElementComponent } from './article-element/article-element.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-control-center',
  imports: [AddArticleComponent, ArticleElementComponent, NgFor],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css'
})
export class BlogControlCenterComponent {
  articles: { titre: string; date:string; contenu: string }[] = [];

  onAddArticle(article: { titre: string; date:string; contenu: string }) {
    this.articles.push(article);
  }
}
