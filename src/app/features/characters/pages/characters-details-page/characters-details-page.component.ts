import { Component, inject, signal } from '@angular/core';
import { CharacterService } from '../../data-access/character.service';
import { Character } from '../../models/characters.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-characters-details-page',
  standalone: true,
  imports: [],
  templateUrl: './characters-details-page.component.html',
  styleUrl: './characters-details-page.component.css'
})
export class CharactersDetailsPageComponent {
  private readonly characterService = inject(CharacterService);
  private readonly activatedRoute = inject(ActivatedRoute);
  readonly character = signal<Character>({} as Character)

  constructor(){
    this.setCharacter()
  }
  setCharacter(){
    this.activatedRoute.params.subscribe(params=>{
      this.characterService.fetchById(params['id']).subscribe(response=>{
        console.log(response)
        this.character.set(response)
      })
    })
  }
}
