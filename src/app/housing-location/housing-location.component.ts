import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo">
      <h2 class="listing-heading">heading</h2>
      <p class="listing-location">location</p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

}
