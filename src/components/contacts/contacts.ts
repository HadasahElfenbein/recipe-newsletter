import { Component } from '@angular/core';
import { Contact } from '../../interfaces/Contact.interface';
import { SingleContact } from '../single-contact/single-contact';

@Component({
  imports: [SingleContact],
  selector: 'app-contacts',
  styleUrl: './contacts.css',
  templateUrl: './contacts.html',
})
export class Contacts {
contactList: Contact[] = [
    { id: "1", name: 'John Doe', email: 'john@example.com' },
    { id: "2", name: 'Jane Smith', email: 'jane@example.com' },
    { id: "3", name: 'Alice Johnson', email: 'alice@example.com' },
    { id: "4", name: 'Bob Brown', email: 'bob@example.com' },
    { id: "5", name: 'Charlie Davis', email: 'charlie@example.com' },
    { id: "6", name: 'Diana Evans', email: 'diana@example.com' },
    { id: "7", name: 'Ethan Harris', email: 'ethan@example.com' },
    { id: "8", name: 'Fiona Green', email: 'fiona@example.com' },
    { id: "9", name: 'George White', email: 'george@example.com' },
    { id: "10", name: 'Hannah Black', email: 'hannah@example.com' }
];


deleteContact(contactId: string): void {
  console.log(`Deleting contact with ID: ${contactId}`);
}
updateContact(contactId: string): void {
  console.log(`Updating contact with ID: ${contactId}`);
}


}