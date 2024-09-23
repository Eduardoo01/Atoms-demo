import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [TopMenuComponent, ArticlePreviewComponent],
  template: `<app-top-menu></app-top-menu>
    <div
      class="block lg:grid lg:h-[1351px]"
      style="
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 1px; "
    >
      <app-article-preview
        backgroundImagePath="copertine/sample-first-article.jpg"
        imageSizeType="full"
        [categoryChip]="{ background: '#FFFFFF', label: 'MIGRANTI' }"
        articleTitle="
          Roccella Jonica, la Lampedusa che l'Italia ignora
        "
        writerPicturePath="propics/sample-first-article.jpg"
        authorFullName="Alessandro Puglia"
        publishDate="29 Giugno 2022"
        articleHeightMobile="h-80"
        style="grid-area:  1 / 1 / 2 / 6;"
      >
      </app-article-preview>
      <app-article-preview
        backgroundImagePath="copertine/sample-first-article.jpg"
        imageSizeType="full"
        [categoryChip]="{ background: '#E2F1E8', label: 'ALLARMI' }"
        articleTitle="
          Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura
        "
        writerPicturePath="propics/sample-first-article.jpg"
        authorFullName="Ugo Lombi"
        publishDate="14 Luglio 2022"
        style="grid-area: 2 / 1 / 4 / 4;"
      >
      </app-article-preview>
      <app-article-preview
        backgroundImagePath="copertine/sample-first-article.jpg"
        imageSizeType="full"
        [categoryChip]="{ background: '#E2F0F1', label: 'ESPERIMENTI' }"
        articleTitle="
          Gli startupper? Li trovi al bistrot.
          Così il DumBo incuba relazioni
        "
        writerPicturePath="propics/sample-first-article.jpg"
        authorFullName="Diletta Grella"
        publishDate="14 Luglio 2022"
        style="grid-area: 2 / 4 / 3 / 6;"
      >
      </app-article-preview>
      <app-article-preview
        backgroundImagePath="copertine/sample-first-article.jpg"
        imageSizeType="full"
        [categoryChip]="{ background: '#F1DADA', label: 'UCRAINA' }"
        articleTitle="
          Nelle città italiane tutti in piazza per
          e con Kiev
        "
        writerPicturePath="propics/sample-first-article.jpg"
        authorFullName="Anna Spena"
        publishDate="14 Luglio 2022"
        style="grid-area: 3 / 4 / 4 / 6"
      >
      </app-article-preview>
    </div>`,
})
export class AppComponent {}
