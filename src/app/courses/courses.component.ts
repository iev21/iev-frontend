import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public basicCourseList: Array<any> = [
    {
      img: '../../assets/01.png',
      //img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: 'Explore the fundamentals of electric vehicles in our introductory course. Engaging lectures and practical demonstrations await. Join us today!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Technolgies',
      description: 'Explore foundational Battery Technologies with our comprehensive course. Gain insights, skills, and practical knowledge essential for todays energy innovation.',
      readmore: 'Hi',
      //price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Motor Technolgies',
      description: 'Dive into the essentials of Motor Technologies with our introductory course. Discover motor design, operation, and real-world applications. Enroll today!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Charging Technolgies',
      description: 'Unlock the fundamentals of Charging Technologies. Learn about charging infrastructure, standards, and emerging trends. Join our course for comprehensive insights!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Electric Vehicle Powertrain Simulations',
      description: 'Delve into BEV Powertrain Simulations with our expert-led course. Learn modeling, analysis, and optimization techniques for EV powertrains. Enroll for comprehensive insights!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicle Battery Modeling',
      description: 'Gain expertise in EV Battery Modeling with our comprehensive course. Learn simulation techniques, battery behavior, and optimization strategies. Enroll for professional advancement today!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Management Systems',
      description: 'Dive into Battery Management Systems with our comprehensive course. Explore BMS architecture, algorithms, and integration. Enroll now for expert insights!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Battery Electric Vehicle Performance Analysis',
      description: 'Unlock insights into BEV Performance Analysis with our introductory course. Learn essential techniques for optimizing battery electric vehicle performance. Join IEV Technologies now!',
      readmore: 'Hi',
      // price: '$100',
      duration: '1 day'
    },
  ];
  public intermediateCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Battery Eelectric Vehicle Powertrain Simulation Course',
      description: 'Explore advanced BEV Powertrain Simulation techniques in our Intermediate Level course, designed by IEV Technologies for aspiring electric vehicle engineers.',
      readmore: 'Hi',
      // price: '$100',
      duration: '3 days'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Equivalent Circuit based modeling of Li - Ion Batteries',
      description: 'Dive deeper into Li-Ion Battery Modeling with our Intermediate Level Course, mastering Equivalent Circuit-based techniques for advanced electric vehicle engineering. Join IEV Technologies today!',
      readmore: 'Hi',
      // price: '$100',
      duration: '3 days'
    },
  ];
 public advancedCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Advance Course on BEV Powertrain Modeling & Simulations',
      description: 'Explore cutting-edge BEV Powertrain Modeling & Simulations with our Advanced Course, empowering engineers to innovate in electric vehicle technology. Join IEV Technologies for unparalleled expertise!',
      readmore: 'Hi',
      // price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Advanced Course on Li-ion battery modeling',
      description: 'Unlock the complexities of Li-ion Battery Modeling with our Advanced Course, delving into sophisticated techniques for cutting-edge electric vehicle engineering. Enroll at IEV Technologies now!',
      readmore: 'Hi',
      // price: '$100',
      duration: '4 weeks'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
