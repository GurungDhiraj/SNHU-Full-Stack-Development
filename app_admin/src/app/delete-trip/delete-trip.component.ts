import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {  ReactiveFormsModule } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './delete-trip.component.html',
  styleUrl: './delete-trip.component.css'
})


export class DeleteTripComponent implements OnInit{

  trip!: Trip;
  submitted = false;
  message : string = '';

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}
  
  ngOnInit() : void{
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent::ngOnInit');
    console.log('tripcode:' + tripCode);

    this.tripDataService.getTrip(tripCode)
    .subscribe({
      next: (value: any) => {
        this.trip = value[0];

        if(!value)
        {
          this.message = 'No Trip Retrieved!';
        }
        else{
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }

        console.log(this.message);
        },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }


  public onSubmit()
  {
    this.submitted = true;

    this.tripDataService.deleteTrip(this.trip.code)
      .subscribe({
    
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
/*
public onSubmit() {
  if (!this.trip) {
    console.log("No trip loaded!");
    return;
  }

  console.log("Deleting trip _id:", this.trip._id);

  this.tripDataService.deleteTrip(this.trip._id)
    .subscribe({
      next: (res) => {
        console.log("Delete response:", res);
        alert("Trip deleted successfully!");
        this.router.navigate(['list-trips']);
      },
      error: (err) => {
        console.error("Delete error:", err);
        alert("Failed to delete trip. Check console for details.");
      }
    });
}
*/
}
