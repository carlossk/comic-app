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
  singleHero: any = {};
  constructor(private _heroesService: HeroesService, private _route: Router, private _activateRoute: ActivatedRoute) {
    this._activateRoute.params.subscribe(params => {
      if (params.termino) {
        this.heroes = this._heroesService.findHeroes(params.termino);
        console.log(this.heroes);
      }

    });
  }

  ngOnInit() {
    this._heroesService.getHeroesFirestore().subscribe(response => {

      console.log(response);
      this.heroes = [];
      response.forEach((docum: any) => {
        this.singleHero = docum.payload.doc.data();
        this.singleHero.id = docum.payload.doc.id;
        console.log(docum.payload.doc.id);
        this.heroes.push(this.singleHero);
      });
      console.log(this.heroes);
    });


    // this.heroes = (this.heroes.length > 0) ? this.heroes : this._heroesService.getHeroes();
    // console.log(this.heroes);
  }
  showHero(_id: number) {
    const hero = this._heroesService.getHero(_id);
    this._heroesService.createHero(hero).then(response => {
        console.log(hero);
    }, error => console.log(error));
    // this._route.navigate(['/hero', _id]);
    // console.log(this.heroes[_id]);
  }
}
