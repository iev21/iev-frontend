// careers.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  jobOpenings: any[] = [
    { title: 'Software Engineer', description: 'We are seeking a talented software engineer...', location: 'New York, NY' },
    { title: 'UI/UX Designer', description: 'We are looking for a creative UI/UX designer...', location: 'San Francisco, CA' },
    { title: 'Marketing Specialist', description: 'Join our marketing team to help promote our products...', location: 'Remote' }
  ];

  showApplicationModal: boolean = false;
  selectedJob: any;
  applicantName: string = '';
  applicantEmail: string = '';
  applicantResume: any;

  constructor() { }

  ngOnInit(): void {
  }

  apply(job: any): void {
    this.selectedJob = job;
    this.showApplicationModal = true;
  }

  closeModal(): void {
    this.showApplicationModal = false;
    // Reset form fields
    this.applicantName = '';
    this.applicantEmail = '';
    this.applicantResume = null;
  }

  submitApplication(): void {
    // Logic to submit application goes here
    console.log('Application submitted:', {
      job: this.selectedJob,
      name: this.applicantName,
      email: this.applicantEmail,
      resume: this.applicantResume
    });
    // Close modal after submission
    this.closeModal();
  }

}
