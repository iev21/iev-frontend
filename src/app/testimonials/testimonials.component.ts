// testimonials.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  
  constructor() { }

  // Define the scrollTestimonials method
  scrollTestimonials(direction: string): void {
    const testimonialsContainer = document.querySelector('.testimonials') as HTMLElement;
    const testimonials = document.querySelectorAll('.testimonials__div') as NodeListOf
    
    NodeListOf<Element>;
    
    const testimonialsWidth = testimonials[0].clientWidth;
    const scrollAmount = direction === 'left' ? -testimonialsWidth : testimonialsWidth;

    testimonialsContainer.scrollLeft += scrollAmount;
  }
}


