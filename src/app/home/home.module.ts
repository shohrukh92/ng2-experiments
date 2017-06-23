import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MailService } from '../mail.service';
import { HomeService } from './home.service';
import { ChildComponent } from './child.component';
import homeRoutes from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    homeRoutes
  ],
  declarations: [
    HomeComponent,
    ChildComponent
  ],
  providers: [
    HomeService,
    {provide: 'mail', useClass: MailService}
  ]
})
export default class HomeModule {}
