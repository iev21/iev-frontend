import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  successMessage=false;
  constructor(public http: HttpClient,private apiService: AppService){
  }
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    description: '',
    emailId:''
  };

  submitForm() {
    console.log('Form data:', this.formData);
    // Make the HTTP POST request
    this.apiService.postData(this.formData).subscribe((response: any) => {
      console.log(response);
      this.successMessage=true;
      setTimeout(()=>{
        this.successMessage=false
      },5000)
    });
  }else {
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

