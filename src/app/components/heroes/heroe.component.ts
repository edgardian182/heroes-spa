import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public heroe: any = {};
  public logoUrl: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private _location: Location )
  {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
    });
    this.logoUrl = this.heroe.casa === 'Marvel' ? 'assets/img/logo-marvel.png' : 'assets/img/logo-dc.png';
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
