import { Component, inject, signal } from '@angular/core';
import { CharacterService } from '../../data-access/character.service';
import { Character } from '../../models/characters.models';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-characters-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters-pages.component.html',
  styleUrl: './characters-pages.component.css'
})
export class CharactersPagesComponent {

  private readonly characterService = inject(CharacterService);

  readonly characters = signal<Character[]>([]);

  readonly page = signal(1);
  readonly searchName = signal("");
  readonly status = signal("");

  constructor(){
    this.setCharacters();
  }

  setCharacters(){
    this.characterService.fetch(this.page(),this.searchName(),this.status())
    .subscribe(response=>{
      if(response.results  && response.results.length>0 ){
        this.characters.set(response.results);
        console.log(response)
      }else{
        console.log("pase por aca")
        this.characters.set([])
      }
    }
    )
  }

  setSearchName(value: string){
    this.searchName.set(value)
    this.setCharacters();
    console.log(this.searchName())
  }

}
