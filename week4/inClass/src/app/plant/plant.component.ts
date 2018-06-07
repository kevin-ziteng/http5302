import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  title = 'Plants';

  year = new Date().getFullYear();

  planet: Plant;
  planets: Plant[];


  setPlanet(p: Plant){
    console.log(this.planet);
    this.planet = p;
    console.log(this.planet);
  }

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(ps => this.planets = ps);
  }

}
