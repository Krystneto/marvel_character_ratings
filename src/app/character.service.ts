import { Injectable } from '@angular/core';

import { characters } from './mock-heroes';

import { Character } from './shared/character.model';

@Injectable()
export class CharacterService {

  constructor() { }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(characters);
  }
}
