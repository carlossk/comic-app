import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero: Hero;
  constructor(private _activateRoute: ActivatedRoute, private _herosService: HeroesService) {
    this._activateRoute.params.subscribe(params => {
      this.hero = this._herosService.getHero(params.id);
      console.log(this.hero);
    });
  }

  ngOnInit() {
  }

}
