import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent {

}
