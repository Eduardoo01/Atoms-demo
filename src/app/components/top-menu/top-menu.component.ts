import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      id="main-menu-wrapper"
      class="font-normal sticky top-0 left-0 w-full bg-white"
    >
      <div
        class="flex justify-evenly flex-row border-black border-y lg:border-t-0 font-normal text-sm lg:py-3 "
      >
        <span class="p-2 lg:ml-10 cursor-pointer">Contribuisci</span>
        <div id="divider" class="w-[1px] bg-transparent border lg:hidden"></div>
        <span class="p-2 cursor-pointer">Abbonati</span>
        <div
          id="profile"
          class="hidden items-center gap-2 lg:flex ml-auto mr-10 cursor-pointer"
        >
          <img src="user.svg" alt="" class="w-4" />
          <p>Accedi</p>
        </div>
      </div>
      <div class="flex flex-row border-black border-b ">
        <div
          class="p-5 lg:p-9"
          [ngClass]="{ hidden: isSearching, 'border-r': !isSearching }"
        >
          <img src="/hamburger-red.svg" class="w-5 lg:w-6" alt="" />
        </div>
        <input class="grow border-black border-r " type="text" />
        <div
          class="p-5 lg:p-9 cursor-pointer"
          (click)="isSearching = !isSearching"
        >
          <img
            [src]="isSearching ? 'close.svg' : 'search-red.svg'"
            class="w-5 lg:w-6"
            alt=""
          />
        </div>
      </div>
      <div
        id="categories-nav"
        class="hidden lg:block outline outline-1 py-6 px-10"
      >
        <ul style="font-size: 24px;" class="flex cursor-pointer gap-8">
          @for (item of categoriesIdMap; track $index) {
          <li
            (click)="changeCategory(item.id)"
            [class.active-category]="selectedCategory.id === item.id"
            [id]="item.id"
            class="font-bold cursor-pointer"
          >
            {{ item.text }}
          </li>
          }
        </ul>
      </div>
      <div class="py-6 px-4 bg-gray lg:flex lg:items-center lg:px-10">
        <div class="flex gap-3 mb-3 lg:mb-0">
          <h1 class="text-[28px] font-bold max">{{ selectedCategory.text }}</h1>
          <img src="chevron.svg" class="w-4 lg:hidden" alt="" />
        </div>
        <div class="flex flex-wrap gap-2 mb-3 lg:mb-0 lg:gap-4 lg:ml-auto ">
          @for (item of categoriesIdMap; track $index; let allCategories =
          $first) { @if(!allCategories){

          <button
            (click)="changeCategory(item.id)"
            [id]="item.id"
            class="basic-button"
            [style]="{ 'background-color': item.backgroundColor }"
          >
            {{ item.text }}
          </button>
          } }
        </div>
      </div>
    </nav>
  `,
  styles: `
  ul > li {
    position: relative;
  }

  .active-category::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -26px;
    width: 100%;
    height: 9px;
    background-color: red;
    z-index: -1;
  }
  `,
})

//si potrebbero usare i Signals per migliorare la performance
export class TopMenuComponent {
  //oggetto con le varie categorie e un colore di sfondo per i bottoni
  categoriesIdMap: Array<{
    id: string;
    text: string;
    backgroundColor: string;
  }> = [
    {
      id: 'all',
      text: 'Tutti i temi',
      backgroundColor: 'white',
    },
    {
      id: 'environment',
      text: 'Ambiente',
      backgroundColor: '#E2F1E8',
    },
    {
      id: 'economics',
      text: 'Economia',
      backgroundColor: 'white',
    },
    {
      id: 'world',
      text: 'Mondo',
      backgroundColor: '#F1DADA',
    },
    {
      id: 'nonprofit',
      text: 'Non profit',
      backgroundColor: 'white',
    },
    {
      id: 'politics',
      text: 'Politica',
      backgroundColor: '#F1F1E2',
    },
    {
      id: 'society',
      text: 'Società',
      backgroundColor: 'white',
    },
    {
      id: 'welfare',
      text: 'Welfare',
      backgroundColor: 'white',
    },
  ];
  selectedCategory: {
    id: string;
    text: string;
    backgroundColor: string;
  } = {
    id: 'all',
    text: 'Tutti i temi',
    backgroundColor: 'white',
  };

  isSearching: boolean = false;
  //cambio categoria al click dei vari pulsanti che aggiorna la UI
  changeCategory(id: string) {
    if (!id || id === '') return;
    const chosenCategory = this.categoriesIdMap.find((cat) => cat.id === id);
    if (chosenCategory) this.selectedCategory = chosenCategory;
  }
}
