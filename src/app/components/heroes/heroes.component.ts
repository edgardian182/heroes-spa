import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService, private router: Router ) {
    this.heroes = this.heroesService.getHeroes();
  }

  ngOnInit() {
  }

  showHeroe( idx: number) {
    this.router.navigate(['/heroes', idx]);
  }

}
