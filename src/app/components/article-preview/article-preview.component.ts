import { Component, Input } from '@angular/core';

type ArticleImageSizeType = 'full' | 'thumb' | 'none';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [],
  template: `<div>
    @if(imageSizeType !== "none" && imageSizeType === "full"){

    <div
      class="outline h-80 bg-cover flex items-end lg:h-[506px]"
      style="background-image: url({{
        backgroundImagePath
      }}); box-shadow: inset 0 0 0 2000px #00000036;"
    >
      <div class="flex flex-col px-4 items-start gap-4 lg:gap-6 lg:px-10">
        <span
          style="background-color: {{
            categoryChip.background
          }}; box-shadow: -2px 2px 0px 0px #000000;
          border: 1px solid #000000"
          class="px-3 py-1 border rounded-[4px] text-[10px] font-bold "
          >{{ categoryChip.label }}</span
        >
        <h2
          class="text-2xl font-bold text-white lg:text-[40px] lg:leading-[54px]"
        >
          {{ articleTitle }}
        </h2>
        <div class="mb-6 flex gap-4 items-center lg:mb-11">
          <img
            src="{{ writerPicturePath }}"
            alt="Writer profile picture"
            class="rounded-full w-8 h-8 object-cover lg:w-12 lg:h-12"
          />
          <div class="flex flex-col text-white">
            <span class="text-sm leading-6">Di {{ authorFullName }}</span>
            <span class="text-[10px] leading-4">{{ publishDate }}</span>
          </div>
        </div>
      </div>
    </div>
    } @else if(imageSizeType === "thumb"){ }
  </div>`,
  styles: ``,
})
export class ArticlePreviewComponent {
  @Input() imageSizeType: ArticleImageSizeType = 'full';
  @Input() backgroundImagePath: string = '';
  @Input() articleTitle: string = '';
  @Input() authorFullName: string = '';
  @Input() publishDate: string = '';
  @Input() categoryChip: { background: string; label: string } = {
    background: '',
    label: '',
  };
  @Input() writerPicturePath: string = '';
}
