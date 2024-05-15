import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  course:any=null;
  safeDescription:SafeHtml | undefined;
  constructor(private router: Router, public courseService: CourseService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.course=this.courseService.currentCourse;
    // Call the sanitize method when component initializes
    this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.course.readmore);
  }
  backCourses(){
    this.router.navigateByUrl('/ievlearning');
  }

  enroll(){
    this.router.navigateByUrl('/contactus');
  }

}
