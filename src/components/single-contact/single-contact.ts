import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../interfaces/Contact.interface';

@Component({
  imports: [],
  selector: 'app-single-contact',
  styleUrl: './single-contact.css',
  templateUrl: './single-contact.html',
})
export class SingleContact {
   @Input() contact!:Contact;
   @Output() deleteContact = new EventEmitter<string>();
   @Output() editContact = new EventEmitter<string>();
}
