import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) {
    this.heroes = this.heroesService.getHeroes();
  }

  ngOnInit() {
  }

}
