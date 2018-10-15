import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private _heroesService: HeroesService, private _route: Router, private _activateRoute: ActivatedRoute) {
    this._activateRoute.params.subscribe(params => {
      if (params.termino) {
        this.heroes = this._heroesService.findHeroes(params.termino);
        console.log(this.heroes);
      }

    });
  }

  ngOnInit() {


    this.heroes = (this.heroes.length > 0) ? this.heroes : this._heroesService.getHeroes();
    // console.log(this.heroes);
  }
  showHero(_id: number) {
    this._route.navigate(['/hero', _id]);
    // console.log(this.heroes[_id]);
  }
}
