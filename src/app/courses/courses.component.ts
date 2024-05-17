import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public basicCourseList: Array<any> = [
    {
      img: '../../assets/Introduction_to_electric_vehicles.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles',
      description: 'Explore the fundamentals of electric vehicles in our introductory course. Engaging lectures and practical demonstrations await. Join us today!',
      //readmore: '<ul> <li>explore the fundamentals of electric </li><li> engaging lectures and practical demonstrations</li>Explore the fundamentals of electric vehicles in our introductory course. Engaging lectures and practical demonstrations await. Join us today!</ul>',
      //readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      //pdfPath:'../../assets/eMobil digital course.pdf',
      readmore:'
        <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Introduction to Electric Vehicles</title>
</head>
<body>

<h1>Introduction to Electric Vehicles</h1>

<h2>Course Overview:</h2>
<p>This introductory course provides a comprehensive understanding of electric vehicles (EVs) and their impact on the automotive industry. Participants will delve into various aspects of EV technology, from basic principles to advanced concepts.</p>

<h2>Course Topics:</h2>
<ol>
  <li>
    <h3>Fundamentals of Electric Vehicles:</h3>
    <ul>
      <li>History and evolution of electric vehicles</li>
      <li>Basic components of an electric vehicle</li>
      <li>Types of electric vehicles: BEVs, PHEVs, and HEVs</li>
    </ul>
  </li>
  <li>
    <h3>Electric Vehicle Technologies:</h3>
    <ul>
      <li>Battery technology and energy storage systems</li>
      <li>Electric motors and drivetrains</li>
      <li>Charging infrastructure and standards</li>
    </ul>
  </li>
  <li>
    <h3>Environmental Impact and Sustainability:</h3>
    <ul>
      <li>Benefits of electric vehicles for the environment</li>
      <li>Reduction of greenhouse gas emissions</li>
      <li>Role of electric vehicles in combating climate change</li>
    </ul>
  </li>
  <li>
    <h3>Market Trends and Future Outlook:</h3>
    <ul>
      <li>Current state of the electric vehicle market</li>
      <li>Emerging trends in electric vehicle adoption</li>
      <li>Potential challenges and opportunities for the future</li>
    </ul>
  </li>
</ol>

<h2>Course Format:</h2>
<ul>
  <li><strong>Duration:</strong> 1 day</li>
  <li><strong>Delivery Method:</strong> Interactive lectures, case studies, and hands-on demonstrations</li>
  <li><strong>Target Audience:</strong> Engineers, researchers, policymakers, and enthusiasts interested in electric vehicle technology</li>
</ul>

<h2>Why Enroll in This Course?</h2>
<ul>
  <li>Gain a solid foundation in electric vehicle technology</li>
  <li>Stay updated with the latest trends and advancements in the EV industry</li>
  <li>Network with professionals and experts in the field</li>
  <li>Prepare for future career opportunities in electric mobility</li>
</ul>

<h2>Course Materials:</h2>
<p>Participants will receive:</p>
<ul>
  <li>Course slides and materials</li>
  <li>Additional resources and references</li>
  <li>Certificate of completion</li>
</ul>

</body>
</html>',
      // price: '$100',
      duration: '1 day'
    },
    {
      img:'../../assets/Introduction_to_battery_technologies.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Technolgies',
      description: 'Explore foundational Battery Technologies with our comprehensive course. Gain insights, skills, and practical knowledge essential for todays energy innovation.',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      //price: '$100',
      duration: '1 day'
    },
    {
      img:'../../assets/Introduction_to_motor_technologies.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Motor Technolgies',
      description: 'Dive into the essentials of Motor Technologies with our introductory course. Discover motor design, operation, and real-world applications. Enroll today!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: '../../assets/Introduction_to_electric_vehicles_01.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Charging Technolgies',
      description: 'Unlock the fundamentals of Charging Technologies. Learn about charging infrastructure, standards, and emerging trends. Join our course for comprehensive insights!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: '../../assets/Introduction_to_bev_powertrain_simulations.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Electric Vehicle Powertrain Simulations',
      description: 'Delve into BEV Powertrain Simulations with our expert-led course. Learn modeling, analysis, and optimization techniques for EV powertrains. Enroll for comprehensive insights!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: '../../assets/Battery Modeling.png',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicle Battery Modeling',
      description: 'Gain expertise in EV Battery Modeling with our comprehensive course. Learn simulation techniques, battery behavior, and optimization strategies. Enroll for professional advancement today!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: '../../assets/BMS Algorithms.png',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Battery Management Systems',
      description: 'Dive into Battery Management Systems with our comprehensive course. Explore BMS architecture, algorithms, and integration. Enroll now for expert insights!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
    {
      img: '../../assets/vehicle_performance_analysis_01.jpeg',
      //img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Battery Electric Vehicle Performance Analysis',
      description: 'Unlock insights into BEV Performance Analysis with our introductory course. Learn essential techniques for optimizing battery electric vehicle performance. Join IEV Technologies now!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '1 day'
    },
  ];
  public intermediateCourseList: Array<any> = [
    {
      img: '../../assets/Intermediate Powertrain Simulations.png',
      //img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Battery Eelectric Vehicle Powertrain Simulation Course',
      description: 'Explore advanced BEV Powertrain Simulation techniques in our Intermediate Level course, designed by IEV Technologies for aspiring electric vehicle engineers.',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '3 days'
    },
    {
      img: '../../assets/ECM Battery Modeling.png',
      //img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Equivalent Circuit based modeling of Li - Ion Batteries',
      description: 'Dive deeper into Li-Ion Battery Modeling with our Intermediate Level Course, mastering Equivalent Circuit-based techniques for advanced electric vehicle engineering. Join IEV Technologies today!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '3 days'
    },
  ];
 public advancedCourseList: Array<any> = [
    {
      img: '../../assets/Advanced Powertrain Simulations_01.png',
      //img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Advance Course on BEV Powertrain Modeling & Simulations',
      description: 'Explore cutting-edge BEV Powertrain Modeling & Simulations with our Advanced Course, empowering engineers to innovate in electric vehicle technology. Join IEV Technologies for unparalleled expertise!',
      readmore: 'We will send you a course brochure with your registered information after you submit your information to our Contact Us page.',
      // price: '$100',
      duration: '4 weeks'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
