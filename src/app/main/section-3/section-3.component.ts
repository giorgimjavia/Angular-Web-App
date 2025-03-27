import { Component, Input, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-section-3',
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css'
})

export class Section3Component {  
  images = [
    "1-image-slider.png",
    "2-image-slider.png",
    "3-image-slider.png",
    "4-image-slider.png",
    "5-image-slider.png",
    "6-image-slider.png",
  ];

  currentIndex = signal(0);

  nextImage() {
    this.currentIndex.set((this.currentIndex() + 1) % this.images.length);
  }

  prevImage() {
    this.currentIndex.set((this.currentIndex() -1 + this.images.length) % this.images.length)
  }
}


