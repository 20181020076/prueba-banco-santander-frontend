import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        "path":"",
        loadComponent:()=>
            import('./features/characters/pages/characters-page/characters-pages.component')
            .then(m=>m.CharactersPagesComponent),
    },
    {
        "path":":id",
        loadComponent:()=>
            import('./features/characters/pages/characters-details-page/characters-details-page.component')
            .then(m=>m.CharactersDetailsPageComponent),
    },
];
