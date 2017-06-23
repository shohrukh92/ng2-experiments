import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  template: `
    <p>Contact {{ (contact$ | async).name }}</p>
    <img [src]="(contact$ | async).image" alt="">
  `
})
export class ContactComponent {
  public contact$ = new BehaviorSubject({name: 'Loading...', image: ''});

  constructor(private route: ActivatedRoute, private http: Http) {
    const api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
    route.params
      .map((p: any) => p.id)
      .switchMap(id => http.get(api + 'people/' + id)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, {image: api + contact.image}))
      )
      .subscribe(this.contact$)
  }
}
