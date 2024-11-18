/*1. Contact List Management System
Scenario: Imagine you’re creating a simple contact management system for a local community center.
 The staff needs an easy way to keep track of people who visit the center. They want to:

Add new visitors' names and phone numbers.
View a list of all visitors.
Update contact details if there’s an error or change in information.
Delete old contacts when they’re no longer needed.
Features to implement:

Create: Add a visitor with name and phone number.
Read: Display all contacts with the option to search by name.
Update: Edit contact information (e.g., updating a phone number).
Delete: Remove a visitor from the contact list.*/
class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class ContactList {
  constructor() {
    this.contacts = [];
  }

  addContact(name, phone) {
    const newContact = new Contact(name, phone);
    this.contacts.push(newContact);
    console.log(`Added contact: ${name}, Phone number: ${phone}`);
  }

  viewContacts() {
    if (this.contacts.length === 0) {
      console.log("No contacts available");
      return;
    }
    console.log("List of contacts:");
    this.contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}`);
    });
  }

  updateContact(name, newPhone) {
    const contact = this.contacts.find(contact => contact.name === name);
    if (contact) {
      contact.phone = newPhone;
      console.log(`Updated contact: ${name}, New Phone: ${newPhone}`);
    } else {
      console.log(`Contact not found: ${name}`);
    }
  }

  deleteContact(name) {
    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Deleted contact: ${name}`);
    } else {
      console.log(`Contact not found for deletion: ${name}`);
    }
  }

  searchContact(name) {
    const contact = this.contacts.find(contact => contact.name === name);
    if (contact) {
      console.log(`Found contact: ${contact.name}, Phone: ${contact.phone}`);
    } else {
      console.log(`Contact not found: ${name}`);
    }
  }
}

const contactList = new ContactList();
contactList.addContact("Ali", '563738392282');
contactList.addContact("hamza", '64893020020');
contactList.addContact("urooj", 'u6653453392282');
contactList.viewContacts();
contactList.updateContact("Ali", "111-222-3333");
contactList.viewContacts();
contactList.searchContact("urooj");
contactList.deleteContact("Ali");
contactList.viewContacts();
