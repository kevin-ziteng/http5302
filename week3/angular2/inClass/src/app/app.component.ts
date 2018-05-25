import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: `<p>This is app.component</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Kevin';
  subtitle : string = 'This is a subtitle';
}
