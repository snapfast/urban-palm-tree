import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
// import material web button 3
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  title = 'Consultations';

  constructor(private router: Router) { }

  // This function to navigate to another component
  navigateToAppointment() {
    this.router.navigate(['/paygate']);
  }

}

