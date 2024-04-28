import { Component } from '@angular/core';
import { softwareEngineerDescription } from './careers.description';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  jobOpenings: any[] = [
    { 
      title: 'Software Engineer', 
      description: softwareEngineerDescription 
    },
    { 
      title: 'UI/UX Designer', 
      description: 'We are looking for a creative UI/UX designer...' 
    },
    { 
      title: 'Marketing Specialist', 
      description: 'Join our marketing team to help promote our products...' 
    }
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
      email: this.applicantEmail,
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

  toggleDescription(job: any): void {
    job.showFullDescription = !job.showFullDescription;
  }
}
