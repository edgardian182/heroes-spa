import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styles: []
})
export class HeroesSearchComponent implements OnInit {

  public heroes: Heroe[] = [];
  public expression: string;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.expression = params['expression'];
      this.heroes = this.heroesService.searchHeroe(this.expression);
    });
  }

  ngOnInit() {
  }

  showHereo( idx: number) {
    this.router.navigate(['/heroes', idx]);
  }

}
