import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public basicCourseList: Array<any> = [
    {
      //img: '../../assets/01.png',
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: 'Dive into the world of Electric Vehicles (EVs) with our comprehensive introductory course.',
        'Explore the fundamentals of EV technology, including design principles, battery systems, and charging infrastructure.',
        'Whether you are an enthusiast or industry professional, this course provides a solid foundation for understanding the future of transportation.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Technolgies',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      //price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Motor Technolgies',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Charging Technolgies',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to BEV Powertrain Simulations',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to EV Battery Modeling',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Management Systems',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '1 day'
    },
  ];
  public intermediateCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'BEV Powertrain Simulation Course',
      description: '',
      // price: '$100',
      duration: '3 days'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Equivalent Circuit based modeling of Li - Ion Batteries',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '3 days'
    },
  ];
 public advancedCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      // price: '$100',
      duration: '4 weeks'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
