import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [TopMenuComponent, ArticlePreviewComponent],
  template: `<app-top-menu></app-top-menu
    ><app-article-preview
      [backgroundImagePath]="'copertine/sample-first-article.jpg'"
      [imageSizeType]="'full'"
      [categoryChip]="{ background: '#FFFFFF', label: 'MIGRANTI' }"
      articleTitle="
        Roccella Jonica, la Lampedusa che l'Italia ignora
      "
      writerPicturePath="propics/sample-first-article.jpg"
      authorFullName="Alessandro Puglia"
      publishDate="29 Giugno 2022"
    >
    </app-article-preview>`,
})
export class AppComponent {}
