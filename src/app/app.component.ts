import { Component } from '@angular/core';

interface INavItem {
  url: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navs: INavItem[] = [
    {url: '', content: 'Home'},
    {url: 'contacts', content: 'Contacts'},
    {url: 'contacts/1', content: 'One'}
  ]
}
