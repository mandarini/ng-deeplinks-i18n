import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css',
})
export class TwoComponent {}
