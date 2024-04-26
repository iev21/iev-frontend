// testimonials.component.ts (or relevant component file)

import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  // Your existing component code goes here

  // Function to handle scrolling of testimonials
  scrollTestimonials(direction: string): void {
    // Select testimonials container and testimonials elements
    const testimonialsContainer = document.querySelector('.testimonials') as HTMLElement;
    const testimonials = document.querySelectorAll('.testimonials__div') as NodeListOf<Element>;

    // Calculate width of each testimonial
    const testimonialsWidth = testimonials[0].clientWidth;

    // Calculate scroll amount based on direction
    const scrollAmount = direction === 'left' ? -testimonialsWidth : testimonialsWidth;

    // Update scrollLeft property of testimonials container
    testimonialsContainer.scrollLeft += scrollAmount;
  }
}
