import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  successMessage = false;

  // Inject HttpClient and AppService in the constructor
  constructor(public http: HttpClient, private apiService: AppService) {}

  // Define formData object with initial values
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    description: '',
    emailId: ''
  };

  // Method to submit the form
  submitForm(): void {
    console.log('Form data:', this.formData);
    // Make the HTTP POST request only if the form is valid
    if (this.isFormValid()) {
      // Make the HTTP POST request using the AppService
      // Subscribe to the response
      this.apiService.postData(this.formData).subscribe((response: any) => {
        console.log(response);
        // Set successMessage to true to display success message
        this.successMessage = true;
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.successMessage = false;
        }, 5000);
      });
    } else {
      // Form is invalid, display error message or handle accordingly
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  // Method to check if the form is valid
  private isFormValid(): boolean {
    // Check if all required fields are filled
    return (
      this.formData.firstName.trim() !== '' &&
      this.formData.lastName.trim() !== '' &&
      this.formData.phoneNumber.trim() !== '' &&
      this.formData.description.trim() !== '' &&
      this.formData.emailId.trim() !== ''
    );
  }
}
