import { Component, OnInit } from '@angular/core';

import { Character } from '../shared/character.model';
import { CharacterService } from '../character.service'; 

const characters = [
  {
    "id": "1",
    "name": "Adam Warlock",
    "gender": "Male",
    "status": "Hero",
    "attributes": {
        "intelligence": "5",
        "strength": "6",
        "speed": "6",
        "durability": "7",
        "energyProjection": "7",
        "fightingAblitiy": "6"
    }
  },
  {
    "id": "2",
    "name": "Archangel",
    "gender": "Male",
    "status": "Hero",
    "attributes": {
        "intelligence": "7",
        "strength": "3",
        "speed": "3",
        "durability": "4",
        "energyProjection": "1",
        "fightingAblitiy": "3"
    }
  }
]

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})




export class CharactersComponent implements OnInit {

  characters: Character[] = characters;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters()
  }
  
  getCharacters(): void {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters )
  }
  
}
