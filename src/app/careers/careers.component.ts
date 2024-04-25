import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  jobOpenings: any[] = [
    { title: 'Software Engineer', description: 'We are seeking a talented software engineer...' },
    { title: 'UI/UX Designer', description: 'We are looking for a creative UI/UX designer...' },
    { title: 'Marketing Specialist', description: 'Join our marketing team to help promote our products...' }
  ];

  showApplicationModal: boolean = false;
  selectedJob: any;
  applicantName: string = '';
  applicantEmail: string = '';
  applicantPhone: string = '';
  selectedResume: File | null = null;

  openApplicationModal(job: any): void {
    this.selectedJob = job;
    this.showApplicationModal = true;
  }

  closeModal(): void {
    this.showApplicationModal = false;
    // Reset form fields
    this.applicantName = '';
    this.applicantEmail = '';
    this.applicantPhone = '';
    this.selectedResume = null;
  }

  submitApplication(): void {
    // Logic to submit application goes here
    console.log('Application submitted:', {
      job: this.selectedJob,
      name: this.applicantName,
      email: this.applicantEmail
      phone: this.applicantPhone,
      resume: this.selectedResume
    });
    // Close modal after submission
    this.closeModal();
  }
onFileSelected(event: any): void {
    // Handle file selection
    this.selectedResume = event.target.files[0];
  }
}
