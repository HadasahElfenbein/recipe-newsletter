import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home';
import { Contacts } from '../components/contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipe-newsletter');
}
