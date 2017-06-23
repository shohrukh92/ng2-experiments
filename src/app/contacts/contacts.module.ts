import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import contactsRoutes from './contacts.routes';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    contactsRoutes
  ],
  declarations: [
    ContactsComponent,
    ContactComponent
  ]
})
export default class ContactsModule {}
