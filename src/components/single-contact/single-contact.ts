import { Component, Input } from '@angular/core';
import { Contact } from '../../interfaces/Contact.interface';

@Component({
  imports: [],
  selector: 'app-single-contact',
  styleUrl: './single-contact.css',
  templateUrl: './single-contact.html',
})
export class SingleContact {
   @Input() contact!: Contact;
}
